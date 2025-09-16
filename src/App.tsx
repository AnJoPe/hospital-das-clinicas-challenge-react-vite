import Sidebar from "./components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className='bg-white flex h-screen'>
        <Sidebar />
        <main className='p-3 grow'>
          <Outlet />
        </main>
      </div>
    </>
  );
}
