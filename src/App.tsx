import Sidebar from "./components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <main className='bg-white flex h-screen font-[Inter]'>
        <Sidebar />
        <div id='estrutura-pagina-menu-selector'>
          <Outlet />
        </div>
      </main>
    </>
  );
}
