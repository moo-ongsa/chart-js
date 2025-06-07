import axios, { AxiosResponse } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export interface ErrorResponse {
  message: string;
}

export interface ApiParams {
  [key: string]: string | string[] | number | boolean;
}

export interface ApiResponse<T = any> {
  data: T;
}

const handleResponse = <T>(response: AxiosResponse<T>): T => {
  return response.data; // axios automatically parses JSON response
};

export const apiGet = async <T>(
  endpoint: string,
  params?: ApiParams
): Promise<T> => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`, {
      params,
      withCredentials: true,
    });
    return handleResponse<T>(response);
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Something went wrong");
  }
};

export const apiPost = async <T>(
  endpoint: string,
  data?: unknown
): Promise<T> => {
  try {
    const response = await axios.post(`${BASE_URL}${endpoint}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return handleResponse<T>(response);
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Something went wrong");
  }
};

export const apiPut = async <T>(
  endpoint: string,
  data?: unknown
): Promise<T> => {
  try {
    const response = await axios.put(`${BASE_URL}${endpoint}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return handleResponse<T>(response);
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Something went wrong");
  }
};

export const apiDelete = async <T>(endpoint: string): Promise<T> => {
  try {
    const response = await axios.delete(`${BASE_URL}${endpoint}`, {
      withCredentials: true,
    });
    return handleResponse<T>(response);
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Something went wrong");
  }
};
