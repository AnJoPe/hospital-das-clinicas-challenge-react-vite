import { useSidebar } from "../../context/SidebarContext";

export default function Navbar() {
  const { setOpen } = useSidebar();
  return (
    <>
      <nav id='telefone-navbar-sel' className='flex md:hidden w-full h-fit px-8 py-3 bg-[#0077c8]'>
        <div onClick={() => setOpen(true)} className='flex items-center gap-3 text-white font-bold text-xl'>
          <img src='./Icons/menu_hamburger_icon.svg' />
          Menu
        </div>
      </nav>
    </>
  );
}
