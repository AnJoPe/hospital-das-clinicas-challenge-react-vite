type HeaderProps = {
  titulo: string;
  icone: string;
};

export default function Header({ titulo, icone }: HeaderProps) {
  return (
    <>
      <header className='flex bg-[#8fc3e6] bg-opacity-65 items-center justify-center p-7 gap-5 rounded-2xl'>
        <h1 className='text-[#0077c8] font-semibold text-3xl'>{titulo}</h1>
        <img src={icone} alt='' className='h-16' />
      </header>
    </>
  );
}
