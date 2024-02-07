"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarLinkGroup from "./SidebarLinkGroup";
import {
  ArrowLeft,
  BadgeDollarSign,
  FlaskConical,
  LayoutDashboard,
  Pill,
  Settings,
  Stethoscope,
  User,
  Workflow,
} from "lucide-react";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true",
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href="/" className="text-3xl font-semibold text-white">
          Satish Wagle
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <ArrowLeft />
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              MENUS
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Administration --> */}
              <li>
                <Link
                  href="/"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    (pathname === "/" || pathname.includes("administration")) &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <User className="h-5 w-5" />
                  Administration
                </Link>
              </li>
              {/* <!-- Menu Item Administration --> */}

              {/* <!-- Menu Item Clinical --> */}
              <li>
                <Link
                  href="/clinical"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("clinical") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <Stethoscope className="h-5 w-5" />
                  Clinical
                </Link>
              </li>
              {/* <!-- Menu Item Clinical --> */}

              {/* <!-- Menu Item Diagnostics --> */}
              <li>
                <Link
                  href="/diagnostics"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("diagnostics") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <FlaskConical className="h-5 w-5" />
                  Diagnostics
                </Link>
              </li>
              {/* <!-- Menu Item Diagnostics --> */}

              {/* <!-- Menu Item Medications --> */}
              <li>
                <Link
                  href="/medications"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("medications") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <Pill className="h-5 w-5" />
                  Medications
                </Link>
              </li>
              {/* <!-- Menu Item Medications --> */}

              {/* <!-- Menu Item Workflow --> */}
              <li>
                <Link
                  href="/workflow"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("workflow") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <Workflow className="h-5 w-5" />
                  Workflow
                </Link>
              </li>
              {/* <!-- Menu Item Workflow --> */}

              {/* <!-- Menu Item Financial --> */}
              <li>
                <Link
                  href="/financial"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("financial") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <BadgeDollarSign className="h-5 w-5" />
                  Financial
                </Link>
              </li>
              {/* <!-- Menu Item Financial --> */}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
