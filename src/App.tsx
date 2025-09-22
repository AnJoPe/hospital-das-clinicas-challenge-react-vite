import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <main className='bg-white flex h-screen font-[Inter]'>
        <Sidebar />
        {/* <Navbar /> */}
        <div id='estrutura-pagina-menu-selector'>
          <Outlet />
        </div>
      </main>
    </>
  );
}
