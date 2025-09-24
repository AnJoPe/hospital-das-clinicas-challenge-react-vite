type IntegranteProps = {
  imagem: string;
  nome: string;
  rm: string;
  github: string;
  linkedin: string;
};

export default function Integrante({ imagem, nome, rm, github, linkedin }: IntegranteProps) {
  return (
    <>
      <div className='flex flex-col items-center justify-center p-4 px-10 py-5 rounded-2xl font-bold border-2 border-[#0077c8] shadow-xl w-[300px] h-[430px] sm:h-[460px] md:w-[350px] lg:w-[360px] lg:h-[500px]'>
        <div className='flex items-center justify-center rounded-full aspect-square mb-2 bg-[#0077c8]'>
          <img src={imagem} alt={`Foto do integrante ${nome}`} draggable='false' />
        </div>
        <h2 className='min-h-[50px] text-center text-[1.34rem] lg:text-2xl'>{nome}</h2>
        <p className='text-[1.1rem] lg:text-[1.35rem] lg:mt-2'>RM {rm}</p>
        <p className='text-[1.1rem] lg:text-[1.35rem] lg:mt-2'>1TDSA</p>
        <div className='flex gap-8'>
          <a href={github} target='_blank'>
            <img src='/Icons/github_icon.png' alt='GitHub icon' />
          </a>
          <a href={linkedin} target='_blank'>
            <img src='/Icons/linkedin_icon.png' alt='LinkedIn icon' />
          </a>
        </div>
      </div>
    </>
  );
}
