"use client";

import React, { useEffect, useState, useCallback } from "react";

interface ErrorState {
  message: string;
}

/**
 * Props สำหรับ useData
 * @template TData - รูปแบบของข้อมูลที่ต้องการ
 * @template TParams - รูปแบบของพารามิเตอร์ที่ใช้เรียก method
 */
interface UseDataProps<TData, TParams> {
  method: (params: TParams) => Promise<TData>; // ฟังก์ชัน async ที่ fetch ข้อมูล
  params: TParams; // พารามิเตอร์ที่ส่งให้ method
}

/**
 * Return type สำหรับ useData
 * @template TData - รูปแบบของข้อมูลที่ได้จาก method
 */
interface UseDataReturn<TData> {
  data: TData | undefined; // ข้อมูลที่ได้จาก API
  loading: boolean; // สถานะโหลดข้อมูล
  error: ErrorState | null; // error หากเกิดข้อผิดพลาด
  refetch: () => Promise<void>; // ฟังก์ชันสำหรับ refetch
}

/**
 * useData - React hook สำหรับดึงข้อมูลแบบ generic โดยใช้ method และ params ที่กำหนด
 * ทำการ fetch ข้อมูลครั้งเดียวเมื่อ component mount และสามารถ refetch ได้ด้วยฟังก์ชัน
 */
export function useData<TData, TParams>({
  method,
  params,
}: UseDataProps<TData, TParams>): UseDataReturn<TData> {
  const [data, setData] = useState<TData>(); // state สำหรับเก็บข้อมูลที่ได้
  const [loading, setLoading] = useState(true); // state สำหรับสถานะ loading
  const [error, setError] = useState<ErrorState | null>(null); // state สำหรับ error

  /**
   * ใช้ useCallback เพื่อสร้าง fetcher ใหม่เมื่อ method หรือ params เปลี่ยน
   * ใช้ JSON.stringify(params) เพื่อ compare ค่าพารามิเตอร์แบบ deep (ระวัง performance กรณี param ใหญ่)
   */
  const fetcher = useCallback(
    () => method(params),
    [JSON.stringify(params), method]
  );

  /**
   * ฟังก์ชันหลักในการดึงข้อมูล โดยจัดการ loading และ error state ให้ด้วย
   */
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const result = await fetcher(); // เรียกฟังก์ชันที่ถูกสร้างไว้
      setData(result); // เก็บผลลัพธ์ลง state
      setError(null); // ล้าง error ถ้ามีของเก่า
    } catch (err: any) {
      setError({
        message: err?.message ?? "Unknown error", // จัดรูปแบบ error
      });
    } finally {
      setLoading(false); // จบการโหลด
    }
  }, [fetcher]);

  /**
   * เรียก fetchData ครั้งเดียวเมื่อ component mount
   */
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // คืนค่าผลลัพธ์ทั้งหมดที่จำเป็นสำหรับ component ที่ใช้ hook นี้
  return { data, loading, error, refetch: fetchData };
}

interface MousePosition {
  x: number;
  y: number;
}

export const useMousePosition = (): MousePosition => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePosition;
};

interface WindowSize {
  width: number;
  height: number | undefined;
}

export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 1366,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

interface ContainerSize {
  width: number;
  height: number | undefined;
}

export const useContainerSize = (
  containerRef: React.RefObject<HTMLElement | null>
): ContainerSize => {
  const [containerSize, setContainerSize] = useState<ContainerSize>({
    width: 1366,
    height: undefined,
  });

  useEffect(() => {
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        if (entries[0]) {
          const { width, height } = entries[0].contentRect;
          setContainerSize({ width, height });
        }
      });

      resizeObserver.observe(containerRef.current);

      return () => resizeObserver.disconnect();
    }
  }, [containerRef]);

  return containerSize;
};
