import { Outlet } from "react-router-dom"
import { useState } from "react"
import { Sidebar } from "./Sidebar"
import { Topbar } from "./Topbar"
import { BottomBar } from "./BottomBar"

export function AdminLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  return (
    <div className="h-screen bg-surface-container-lowest text-on-surface overflow-hidden">
      <Sidebar isCollapsed={isSidebarCollapsed} />
      <div className={`${isSidebarCollapsed ? "ml-20" : "ml-64"} h-screen flex flex-col transition-all duration-300`}>
        <Topbar
          isSidebarCollapsed={isSidebarCollapsed}
          onToggleSidebar={() => setIsSidebarCollapsed((prev) => !prev)}
        />
        <main className="flex-1 overflow-hidden bg-[#0E0E0E] pt-3">
          <Outlet />
        </main>
        <BottomBar />
      </div>
    </div>
  )
}
