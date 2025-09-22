import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

export default function Home() {
  return (
    <>
      <div className='w-[84%] fixed right-0 p-3' id='estrutura-pagina-menu-selector'>
        <Header titulo='Portal do Paciente' icone='./Icons/home_icon.svg' />
        <div className='px-16 py-7'>
          <section className='border-b-2 flex flex-col pb-10 gap-2 font-[InterItalic]'>
            <h2 className='text-5xl text-[#0077C9]'>O cuidado que você merece</h2>
            <h3 className='text-[2.5rem] text-[#68bfc2]'>na palma da sua mão</h3>
            <p className='text-xl text-[#0077C9] self-end w-[30%] text-right'>
              “Uma plataforma acessível que permite pacientes aprenderem os meios necessários para cuidarem de sua saúde, digitalmente.”
            </p>
            <p className='text-[1.4rem] text-[#504F4F] w-[60%]'>
              Com tutoriais simples e direto-ao-ponto, você poderá entender e realizar operações no website do Hospital das Clínicas, que antes pareciam ser muito
              complicadas.
            </p>
          </section>
          <h2 className='text-5xl text-[#0077C9] font-[InterItalic] py-4'>Guias de Acesso</h2>
          <ul className='flex flex-col gap-4 w-[30%] text-white'>
            <li className='bg-[#8FC3E2] rounded-2xl'>
              <Link to='registro_paciente' className='flex justify-between items-center font-medium text-3xl p-4'>
                Portal do Paciente
                <img src='./Icons/portal_paciente_icon.svg' alt='' />
              </Link>
            </li>
            <li className='bg-[#8FC3E2] rounded-2xl'>
              <Link to='exames' className='flex justify-between items-center font-medium text-3xl p-4'>
                Resultados dos Exames
                <img src='./Icons/exames_icon.svg' alt='' />
              </Link>
            </li>
            <li className='bg-[#8FC3E2] rounded-2xl'>
              <Link to='prescricoes' className='flex justify-between items-center font-medium text-3xl p-4'>
                Lista de Prescrições
                <img src='./Icons/prescricoes_icon.svg' alt='' />
              </Link>
            </li>
            <li className='bg-[#8FC3E2] rounded-2xl'>
              <Link to='agendamentos' className='flex justify-between items-center font-medium text-3xl p-4'>
                Lista de Agendamentos
                <img src='./Icons/agendamentos_icon.svg' alt='' />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
