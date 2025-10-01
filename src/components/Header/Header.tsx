type HeaderProps = {
  titulo: string;
  icone: string;
  alt: string;
};

export default function Header({ titulo, icone, alt }: HeaderProps) {
  return (
    <>
      <header className='flex justify-center items-center select-none h-[13dvh] md:p-3'>
        <div className='flex justify-center items-center bg-[#8fc3e6] bg-opacity-65 gap-4 w-full h-full md:rounded-2xl md:px-5 md:py-3'>
          <h1 className='text-[#0077c8] font-semibold text-center text-[1.5rem] sm:text-[2.2rem] md:text-[1.9rem]'>{titulo}</h1>
          <img src={icone} alt={alt} className='h-[40%] md:h-[60%] xl:h-[80%]' />
        </div>
      </header>
    </>
  );
}
