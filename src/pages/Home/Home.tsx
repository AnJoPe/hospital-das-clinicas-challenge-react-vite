import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

export default function Home() {
  return (
    <>
      <Header titulo='Portal do Paciente' icone='./Icons/home_icon.svg' />
      <main className='px-14 py-5'>
        <section className='border-b-2 flex flex-col pb-10'>
          <h2 className='text-5xl text-[#0077C9]'>O cuidado que você merece</h2>
          <h3 className='text-4xl text-[#68bfc2]'>na palma da sua mão</h3>
          <p className='text-xl text-[#0077C9] self-end w-1/3 text-right'>
            “Uma plataforma acessível que permite pacientes aprenderem os meios necessários para cuidarem de sua saúde, digitalmente.”
          </p>
          <p className='text-xl text-[#504F4F] w-2/3'>
            Com tutoriais simples e direto-ao-ponto, você poderá entender e realizar operações no website do Hospital das Clínicas, que antes pareciam ser muito
            complicadas.
          </p>
        </section>
        <h2 className='text-5xl text-[#0077C9] py-4'>Guias de Acesso</h2>
        <ul className='flex flex-col gap-4'>
          <li className='bg-[#8FC3E2] flex justify-between items-center p-4 text-3xl rounded-2xl w-1/3'>
            <Link to='registro_paciente' className='text-white'>
              Portal do Paciente
            </Link>
            <img src='./Icons/portal_paciente_icon.svg' alt='' />
          </li>
          <li className='bg-[#8FC3E2] flex justify-between items-center p-4 text-3xl rounded-2xl w-1/3'>
            <Link to='exames' className='text-white'>
              Resultados dos Exames
            </Link>
            <img src='./Icons/exames_icon.svg' alt='' />
          </li>
          <li className='bg-[#8FC3E2] flex justify-between items-center p-4 text-3xl rounded-2xl w-1/3'>
            <Link to='prescricoes' className='text-white'>
              Lista de Prescrições
            </Link>
            <img src='./Icons/prescricoes_icon.svg' alt='' />
          </li>
          <li className='bg-[#8FC3E2] flex justify-between items-center p-4 text-3xl rounded-2xl w-1/3'>
            <Link to='agendamentos' className='text-white'>
              Lista de Agendamentos
            </Link>
            <img src='./Icons/agendamentos_icon.svg' alt='' />
          </li>
        </ul>
      </main>
    </>
  );
}
