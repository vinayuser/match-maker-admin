import { Outlet } from "react-router-dom"
import { Sidebar } from "./Sidebar"
import { Topbar } from "./Topbar"
import { BottomBar } from "./BottomBar"

export function AdminLayout() {
  return (
    <div className="h-screen bg-surface-container-lowest text-on-surface overflow-hidden">
      <Sidebar />
      <div className="ml-64 h-screen flex flex-col">
        <Topbar />
        <main className="flex-1 overflow-hidden bg-[#0E0E0E] pt-3">
          <Outlet />
        </main>
        <BottomBar />
      </div>
    </div>
  )
}
