"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Briefcase,
  ClipboardList,
  Users,
  UserRound,
  Truck,
  Calculator,
  FileText,
  CalendarDays,
  Mail,
  Banknote,
  Settings,
  Video,
  MapPin,
} from "lucide-react";

type Tile = {
  key: string;
  label: string;
  icon: React.ReactNode;
  href: string;
  span?: "wide";
  size?: "tall";
  badge?: string;
};

function TileButton({
  label,
  icon,
  onClick,
  span,
  size,
  badge,
}: {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  span?: "wide";
  size?: "tall";
  badge?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "group relative overflow-hidden rounded-2xl",
        "border border-white/10 bg-white/5 backdrop-blur-xl",
        "shadow-[0_10px_30px_rgba(0,0,0,0.25)]",
        "transition-transform duration-200 active:scale-[0.98]",
        "min-h-[108px] w-full",
        span === "wide" ? "col-span-2" : "",
        size === "tall" ? "min-h-[160px]" : "",
      ].join(" ")}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
      <div className="relative h-full p-4 flex flex-col items-center justify-center gap-3">
        <div className="rounded-2xl bg-white/10 p-3 border border-white/10">
          {icon}
        </div>
        <div className="text-sm font-medium tracking-wide text-white/90 text-center">
          {label}
        </div>

        {badge ? (
          <div className="absolute top-3 right-3 text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10 text-white/80">
            {badge}
          </div>
        ) : null}
      </div>
    </button>
  );
}

export default function DashboardHome() {
  const router = useRouter();
  const go = (href: string) => router.push(href);

  const tiles: Tile[] = [
    {
      key: "inventory",
      label: "Inventory",
      icon: <ClipboardList className="h-6 w-6 text-white/90" />,
      href: "/inventory",
    },
    {
      key: "jobs",
      label: "Jobs",
      icon: <Briefcase className="h-6 w-6 text-white/90" />,
      href: "/jobs",
    },
    {
      key: "clients",
      label: "Clients",
      icon: <UserRound className="h-6 w-6 text-white/90" />,
      href: "/clients",
    },
    {
      key: "employees",
      label: "Employees Database",
      icon: <Users className="h-6 w-6 text-white/90" />,
      href: "/employees",
    },
    {
      key: "suppliers",
      label: "Suppliers",
      icon: <Truck className="h-6 w-6 text-white/90" />,
      href: "/suppliers",
    },
    {
      key: "ops",
      label: "Video / GPS / Quotes",
      icon: (
        <div className="flex gap-2">
          <Video className="h-6 w-6 text-white/90" />
          <MapPin className="h-6 w-6 text-white/90" />
          <FileText className="h-6 w-6 text-white/90" />
        </div>
      ),
      href: "/ops",
      span: "wide",
      size: "tall",
    },
    {
      key: "email",
      label: "Email",
      icon: <Mail className="h-6 w-6 text-white/90" />,
      href: "/email",
    },
    {
      key: "schedule",
      label: "Upcoming Scheduling",
      icon: <CalendarDays className="h-6 w-6 text-white/90" />,
      href: "/schedule",
    },
    {
      key: "finance",
      label: "Finance Data",
      icon: <Banknote className="h-6 w-6 text-white/90" />,
      href: "/finance",
    },
    {
      key: "calc",
      label: "Service Calculator",
      icon: <Calculator className="h-6 w-6 text-white/90" />,
      href: "/calculator",
      span: "wide",
    },
    {
      key: "pdf",
      label: "Service Quote PDF",
      icon: <FileText className="h-6 w-6 text-white/90" />,
      href: "/quotes/pdf",
      span: "wide",
    },
    {
      key: "settings",
      label: "Settings",
      icon: <Settings className="h-6 w-6 text-white/90" />,
      href: "/settings",
    },
  ];

  return (
    <div className="min-h-screen text-white">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-md mx-auto p-5">
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3">
            <div className="text-xs text-white/70">Company</div>
            <div className="text-sm font-semibold">By: FanzofTheOne</div>
          </div>
          <button
            onClick={() => go("/email")}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3 active:scale-[0.98] transition"
            aria-label="Email"
          >
            <Mail className="h-5 w-5 text-white/90" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {tiles.map((t) => (
            <TileButton
              key={t.key}
              label={t.label}
              icon={t.icon}
              badge={t.badge}
              span={t.span}
              size={t.size}
              onClick={() => go(t.href)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
