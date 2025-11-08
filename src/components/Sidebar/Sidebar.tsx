import { useSidebar } from "../../context/SidebarContext";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const { open, setOpen } = useSidebar();
  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-[45%] sm:w-[32%] md:w-[23%] lg:w-[19%] xl:w-[16%] transition-all duration-300 ${
          open ? "left-0" : "-left-[60%] sm:-left-[35%] md:-left-[16%] lg:-left-[13.25%] xl:-left-[12%]"
        }`}
        id='navbar-esquerda-selector'>
        <div className='bg-[#8fc3e6] flex flex-col items-center h-screen relative'>
          <img
            src='./Icons/arrow_back_icon.svg'
            onClick={() => setOpen(!open)}
            alt='Seta para a esquerda. Sinaliza a função de fechar o menu de links'
            id='close-menu-selector'
            className={`absolute top-2 right-4 xl:h-12 sm:h-11 transition duration-300 cursor-pointer ${open ? "" : "rotate-[-180deg]"}`}
          />
          <img src='./logo_hc.png' alt='Logo do Hospital das Clínicas' className='w-[70%] xl:w-[75%]' />
          <ul
            className={`flex flex-col w-[70%] gap-4 font-[InterItalic] font-bold text-[#0077C8] text-2xl lg:text-[1.65rem] xl:text-[2rem] ${open ? "" : "mr-32"}`}
            id='lista-links-menu-selector'>
            <li>
              <Link to='/' className='flex justify-between items-center h-[75px] gap-3'>
                Home
                <img src='./Icons/home_icon.svg' className='h-[45%]' />
              </Link>
            </li>
            <li>
              <Link to='faq' className='flex justify-between items-center h-[75px] gap-3'>
                FAQ
                <img src='./Icons/faq_icon.svg' className='h-[45%]' />
              </Link>
            </li>
            <li>
              <Link to='contato' className='flex justify-between items-center h-[75px] gap-3'>
                Contato
                <img src='./Icons/contato.svg' className='h-[45%]' />
              </Link>
            </li>
            <li>
              <Link to='quem_somos' className='flex justify-between items-center h-[75px] gap-3'>
                Quem somos
                <img src='./Icons/quem_somos_icon.svg' className='h-[45%]' />
              </Link>
            </li>
          </ul>

          <Link
            to='/login'
            className={`flex justify-between items-center absolute bottom-5 w-[70%] gap-3 font-[InterItalic] font-bold text-[#0077C8] text-2xl lg:text-[1.65rem] xl:text-[2rem] ${
              open ? "" : "mr-32"
            }`}>
            Login
            <img src='./Icons/login_icon.svg' className='h-[45%]' />
          </Link>
        </div>
      </nav>
    </>
  );
}
