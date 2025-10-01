import Sidebar from "./components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "./context/SidebarContext";

export default function App() {
  return (
    <>
      <SidebarProvider>
        <main className='bg-white flex h-screen font-[Inter]'>
          <Sidebar />
          <Outlet />
        </main>
      </SidebarProvider>
    </>
  );
}
