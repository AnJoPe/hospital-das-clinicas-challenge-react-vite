export default function Navbar() {
  return (
    <>
      <nav id='telefone-navbar-sel' className='flex w-full h-fit px-8 py-3 bg-[#0077c8]'>
        <div
          //onClick={navbar_toggle()}
          className='flex items-center gap-3 text-white font-bold text-xl'>
          <img src='./Icons/menu_hamburger_icon.svg' alt='' />
          Menu
        </div>
      </nav>
    </>
  );
}
