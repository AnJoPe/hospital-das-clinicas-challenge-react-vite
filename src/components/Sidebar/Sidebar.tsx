import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <nav className='fixed left-0 top-0 w-[16%]' id='navbar-esquerda-selector'>
        <div className='bg-[#8fc3e6] flex flex-col items-center z-2 h-screen transition duration-300 relative'>
          <img
            src='./Icons/arrow_back_icon.svg'
            // onClick={navbar_toggle()}
            alt='Seta para a esquerda. Sinaliza a função de fechar o menu de links'
            id='close-menu-selector'
            className='absolute transition duration-300 top-2 right-4 h-12'
          />
          <img src='./logo_hc.png' alt='Logo do Hospital das Clínicas' className='w-[75%]' />
          <ul className='flex flex-col gap-3 text-3xl text-[#0077C9] font-[InterItalic] font-bold w-[70%]' id='lista-links-menu-selector'>
            <li>
              <Link to='/' className='flex justify-between items-center h-20 gap-3'>
                Home
                <img src='./Icons/home_icon.svg' alt='' className='h-9' />
              </Link>
            </li>
            <li>
              <Link to='faq' className='flex justify-between items-center h-20 gap-3'>
                FAQ
                <img src='./Icons/faq_icon.svg' alt='' className='h-9' />
              </Link>
            </li>
            <li>
              <Link to='contato' className='flex justify-between items-center h-20 gap-3'>
                Contato
                <img src='./Icons/contato.svg' alt='' className='h-9' />
              </Link>
            </li>
            <li>
              <Link to='quem_somos' className='flex justify-between items-center h-20 gap-3'>
                Quem somos
                <img src='./Icons/quem_somos_icon.svg' alt='' className='h-9' />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
