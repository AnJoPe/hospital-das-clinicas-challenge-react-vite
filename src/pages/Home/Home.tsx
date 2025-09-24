import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <div className='absolute right-0 w-full md:w-[77%] lg:w-[81%] xl:w-[84%]' id='estrutura-pagina-menu-selector'>
        <Header titulo='Portal do Paciente' icone='./Icons/home_icon.svg' />
        <Navbar />
        <div className='flex flex-col m-auto py-7 w-[90%]'>
          <section className='flex flex-col pb-10 gap-2 border-b-2 border-[#8fc3e6] font-[InterItalic]'>
            <h2 className='text-[#0077C9] text-[2.45rem] lg:text-[2.5rem] xl:text-5xl'>O cuidado que você merece</h2>
            <h3 className='text-[#68bfc2] text-[1.9rem] lg:text-[2rem] xl:text-[2.5rem] '>na palma da sua mão</h3>
            <p className='text-[#0077C9] self-end text-end w-[45%] lg:w-[30%] text-[1.2rem] xl:text-xl'>
              “Uma plataforma acessível que permite pacientes aprenderem os meios necessários para cuidarem de sua saúde, digitalmente.”
            </p>
            <p className='text-[#504F4F] text-justify w-[90%] lg:w-[60%] text-[1.2rem] lg:text-xl xl:text-[1.4rem]'>
              Com tutoriais simples e direto-ao-ponto, você poderá entender e realizar operações no website do Hospital das Clínicas, que antes pareciam ser muito
              complicadas.
            </p>
          </section>
          <h2 className='text-[#0077C9] font-[InterItalic] py-5 text-[2.7rem] lg:text-[2.75rem] xl:text-5xl'>Guias de Acesso</h2>
          <ul className='flex flex-col items-start gap-4 text-white font-medium'>
            <li className='bg-[#8FC3E2] rounded-2xl'>
              <Link
                to='registro_paciente'
                className='flex justify-between items-center gap-3 px-4 py-3 min-w-[350px] lg:min-w-[420px] text-[1.65rem] lg:text-[1.75rem] xl:text-[2rem]'>
                Portal do Paciente
                <img src='./Icons/portal_paciente_icon.svg' alt='' className='h-[80%]' />
              </Link>
            </li>
            <li className='bg-[#8FC3E2] rounded-2xl'>
              <Link
                to='exames'
                className='flex justify-between items-center gap-3 px-4 py-3 min-w-[350px] lg:min-w-[420px] text-[1.65rem] lg:text-[1.75rem] xl:text-[2rem]'>
                Resultados dos Exames
                <img src='./Icons/exames_icon.svg' alt='' className='h-[80%]' />
              </Link>
            </li>
            <li className='bg-[#8FC3E2] rounded-2xl'>
              <Link
                to='prescricoes'
                className='flex justify-between items-center gap-3 px-4 py-3 min-w-[350px] lg:min-w-[420px] text-[1.65rem] lg:text-[1.75rem] xl:text-[2rem]'>
                Lista de Prescrições
                <img src='./Icons/prescricoes_icon.svg' alt='' className='h-[80%]' />
              </Link>
            </li>
            <li className='bg-[#8FC3E2] rounded-2xl'>
              <Link
                to='agendamentos'
                className='flex justify-between items-center gap-3 px-4 py-3 min-w-[350px] lg:min-w-[420px] text-[1.65rem] lg:text-[1.75rem] xl:text-[2rem]'>
                Lista de Agendamentos
                <img src='./Icons/agendamentos_icon.svg' alt='' className='h-[80%]' />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
