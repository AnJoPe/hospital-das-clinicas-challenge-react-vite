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
      <div className='flex flex-col items-center px-10 py-5 rounded-xl border-2 border-[#0077c8] shadow-xl gap-1 max-w-96'>
        <div className='bg-[#0077c8] rounded-full aspect-square mb-2'>
          <img src={imagem} alt={`Foto do integrante ${nome}`} draggable='false' />
        </div>
        <h2 className='font-bold text-2xl text-center grow'>{nome}</h2>
        <p className='font-bold text-xl'>RM {rm}</p>
        <p className='font-bold text-xl'>1TDSA</p>
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
