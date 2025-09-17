import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

export default function Home() {
  return (
    <>
      <Header titulo='Portal do Paciente' icone='./Icons/home_icon.svg' />
      <main className='px-16 py-7'>
        <section className='border-b-2 flex flex-col pb-10 gap-2'>
          <h2 className='text-5xl text-[#0077C9] font-[InterItalic]'>O cuidado que você merece</h2>
          <h3 className='text-4xl text-[#68bfc2] font-[InterItalic]'>na palma da sua mão</h3>
          <p className='text-xl text-[#0077C9] font-[InterItalic] self-end w-[30%] text-right'>
            “Uma plataforma acessível que permite pacientes aprenderem os meios necessários para cuidarem de sua saúde, digitalmente.”
          </p>
          <p className='text-2xl text-[#504F4F] font-[InterItalic] w-[60%]'>
            Com tutoriais simples e direto-ao-ponto, você poderá entender e realizar operações no website do Hospital das Clínicas, que antes pareciam ser muito
            complicadas.
          </p>
        </section>
        <h2 className='text-5xl text-[#0077C9] font-[InterItalic] py-4'>Guias de Acesso</h2>
        <ul className='flex flex-col gap-4 w-[30%]'>
          <li className='bg-[#8FC3E2] flex justify-between items-center p-4 rounded-2xl'>
            <Link to='registro_paciente' className='text-white font-[Inter] font-medium text-3xl'>
              Portal do Paciente
            </Link>
            <img src='./Icons/portal_paciente_icon.svg' alt='' />
          </li>
          <li className='bg-[#8FC3E2] flex justify-between items-center p-4 rounded-2xl'>
            <Link to='exames' className='text-white font-[Inter] font-medium text-3xl'>
              Resultados dos Exames
            </Link>
            <img src='./Icons/exames_icon.svg' alt='' />
          </li>
          <li className='bg-[#8FC3E2] flex justify-between items-center p-4 rounded-2xl'>
            <Link to='prescricoes' className='text-white font-[Inter] font-medium text-3xl'>
              Lista de Prescrições
            </Link>
            <img src='./Icons/prescricoes_icon.svg' alt='' />
          </li>
          <li className='bg-[#8FC3E2] flex justify-between items-center p-4 rounded-2xl'>
            <Link to='agendamentos' className='text-white font-[Inter] font-medium text-3xl'>
              Lista de Agendamentos
            </Link>
            <img src='./Icons/agendamentos_icon.svg' alt='' />
          </li>
        </ul>
      </main>
    </>
  );
}
