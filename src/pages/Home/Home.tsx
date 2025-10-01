import { useSidebar } from "../../context/SidebarContext";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Guia from "../../components/Guia/Guia";

export default function Home() {
  const { open } = useSidebar();
  return (
    <>
      <div
        className={`absolute right-0 z-0 w-full overflow-hidden transition-all duration-300 ${
          open ? "md:w-[77%] lg:w-[81%] xl:w-[84%]" : "md:w-[93%] lg:w-[94.5%] xl:w-[96%]"
        }`}>
        <Header titulo='Portal do Paciente' icone='./Icons/home_icon.svg' alt='Ícone de Casa simbolizando a home page' />
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
            <Guia
              link='registro_paciente'
              texto='Portal do Paciente'
              imagem='./Icons/portal_paciente_icon.svg'
              alt='Ícone da opção Portal do Paciente. Uma figura de uma pessoa, colorida em branco, com um pequeno símbolo de mais, ou adição, do lado.'
            />
            <Guia
              link='exames'
              texto='Resultados dos Exames'
              imagem='./Icons/exames_icon.svg'
              alt='Ícone da opção Resultados dos Exames. Uma figura de um pequeno documento, colorido em branco, com um pequeno símbolo da letra A, com um positivo ao lado.'
            />
            <Guia
              link='prescricoes'
              texto='Lista de Prescrições'
              imagem='./Icons/prescricoes_icon.svg'
              alt='Ícone da opção Lista de Prescrições. Uma figura de um frasco, simbolizando um remédio, colorido em branco.'
            />
            <Guia
              link='agendamentos'
              texto='Lista de Agendamentos'
              imagem='./Icons/agendamentos_icon.svg'
              alt='Ícone da opção Lista de Agendamentos. Uma figura de um pequeno calendário, colorido em branco.'
            />
          </ul>
        </div>
      </div>
    </>
  );
}
