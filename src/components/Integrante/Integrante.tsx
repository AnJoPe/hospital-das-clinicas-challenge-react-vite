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
      <div className='flex flex-col items-center p-10 rounded-lg border-2 border-[#0077c8] shadow-xl gap-2 max-w-96'>
        <div className='bg-[#0077c8] rounded-full aspect-square'>
          <img src={imagem} alt='Foto do integrante' className='rounded-full aspect-square' />
        </div>
        <h2 className='font-bold text-2xl text-center'>{nome}</h2>
        <p className='font-bold text-xl'>RM {rm}</p>
        <p className='font-bold text-xl'>1TDSA</p>
        <div className='flex gap-5'>
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
