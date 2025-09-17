import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className='bg-[#8fc3e6] max-w-72 flex flex-col items-center'>
        <img src='./logo_hc.png' alt='Logo do Hospital das Clínicas' className='w-[75%] mb-4' />
        <ul className='flex flex-col gap-14'>
          <li className='flex text-[#0077C9] font-[InterItalic] text-3xl font-bold justify-between'>
            <Link to='/'>Home</Link>
            <img src='./Icons/home_icon.svg' alt='' className='h-9' />
          </li>
          <li className='flex text-[#0077C9] font-[InterItalic] text-3xl font-bold justify-between'>
            <Link to='faq'>FAQ</Link>
            <img src='./Icons/faq_icon.svg' alt='' className='h-9' />
          </li>
          <li className='flex text-[#0077C9] font-[InterItalic] text-3xl font-bold justify-between'>
            <Link to='contato'>Contato</Link>
            <img src='./Icons/contato.svg' alt='' className='h-9' />
          </li>
          <li className='flex text-[#0077C9] font-[InterItalic] text-3xl font-bold justify-between'>
            <Link to='quem_somos'>Quem somos</Link>
            <img src='./Icons/quem_somos_icon.svg' alt='' className='h-9' />
          </li>
        </ul>
      </div>
    </>
  );
}
