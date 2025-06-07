"use client";

import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/Sheet";
import { Button } from "@/components/ui/Button";
import { Separator } from "@/components/ui/Separator";
import { Menu, ChevronRight, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation"; // ✅ จาก next-intl v4
import { TRANSlATION_KEY } from "@/utils/constants";

export default function Navbar() {
  // Mock session (เชื่อม NextAuth จริงค่อยเปลี่ยน)
  const { data: session } = {
    data: { user: { image: "", name: "Pakpoom Ongsa" } },
  };
  const isLoggedIn = true;

  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations(TRANSlATION_KEY.NAVBAR);
  const router = useRouter();

  const availableLocales = ["th", "en"];

  // ลบ locale ปัจจุบันออกจาก pathname เพื่อป้องกันซ้อน /th/en
  const getPathWithoutLocale = () => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments[0] === locale && availableLocales.includes(segments[0])) {
      segments.shift();
    }
    return "/" + segments.join("/");
  };

  const cleanPath = getPathWithoutLocale();

  const signOut = () => {
    localStorage.removeItem("AccessToken");
    localStorage.removeItem("RefreshToken");
    router.replace("/login");
  };

  return (
    <header className="flex items-center px-4 py-3 border-b md:justify-start md:gap-6">
      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="w-72 p-4" hideClose>
            {/* Header Mobile */}
            <div className="flex justify-between items-center mb-4">
              <SheetClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-5 w-5" />
                </Button>
              </SheetClose>
              <div className="text-sm space-x-2">
                <Link
                  href={cleanPath}
                  locale="th"
                  className={clsx(locale === "th" && "underline font-bold")}
                >
                  TH
                </Link>
                <span>|</span>
                <Link
                  href={cleanPath}
                  locale="en"
                  className={clsx(locale === "en" && "underline font-bold")}
                >
                  EN
                </Link>
              </div>
            </div>

            <MobileLink href="/">{t("dashboard")}</MobileLink>
            <MobileLink href="/dashboard-lock">{t("dashboardLock")}</MobileLink>
          </SheetContent>
        </Sheet>
      </div>
      {/* Logo */}
      <h1 className="leading-[36px] text-text-brown z-10 text-2xl font-bold">
        PiggyPigs
      </h1>
      {/* Desktop Menu */}
      <nav className="hidden md:flex ml-auto gap-4">
        <DesktopLink href="/" label={t("dashboard")} />
        <DesktopLink href="/dashboard-lock" label={t("dashboardLock")} />
      </nav>
      {/* Language Switch (Desktop) */}
      <div className="hidden md:flex  ml-6 items-center gap-2 text-sm">
        <Link
          href={cleanPath}
          locale="th"
          className={clsx(locale === "th" && "underline font-bold")}
        >
          TH
        </Link>
        <span>|</span>
        <Link
          href={cleanPath}
          locale="en"
          className={clsx(locale === "en" && "underline font-bold")}
        >
          EN
        </Link>
      </div>
      {/* <Button variant="outline" onClick={() => signOut()}>
        {t("signOut")}
      </Button> */}
    </header>
  );
}

function MobileLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const locale = useLocale();

  // ตัด locale เช่น "/en/dashboard" → "/dashboard"
  const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";

  const isActive = pathWithoutLocale === href;

  return (
    <Link
      href={href}
      className={clsx(
        "block py-2 px-3 text-base transition-colors",
        isActive
          ? "bg-orange-500 text-white rounded-[10px]"
          : "hover:bg-orange-100 rounded-[10px]"
      )}
    >
      {children}
    </Link>
  );
}

function DesktopLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const locale = useLocale();

  // ตัด locale เช่น "/en/dashboard" → "/dashboard"
  const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";

  const isActive = pathWithoutLocale === href;

  return (
    <Link
      href={href}
      className={clsx(
        "px-3 py-2 rounded-[10px] text-sm font-medium transition-colors",
        isActive
          ? "bg-orange-500 text-white"
          : "hover:bg-orange-100 text-gray-700"
      )}
    >
      {label}
    </Link>
  );
}
