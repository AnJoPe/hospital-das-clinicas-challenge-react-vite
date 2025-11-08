import { useEffect } from "react";
import { useSidebar } from "../../context/SidebarContext";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import ImagemEtapa from "../../components/ImagemEtapa/ImagemEtapa";
import BotaoEtapa from "../../components/BotaoEtapa/BotaoEtapa";

export default function Agendamentos() {
  const { open } = useSidebar();

  useEffect(() => {
    function checkWindowSize() {
      const etapa1Imagem = document.getElementById("etapa-1-imagem") as HTMLImageElement;
      if (window.innerWidth < 768) {
        etapa1Imagem.src = "/Guias/Agendamentos/Telefone/etapa_1.png";
      } else {
        etapa1Imagem.src = "/Guias/Agendamentos/etapa_1.png";
      }
    }
    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);
  
  return (
    <>
      <div
        className={`absolute right-0 z-0 w-full overflow-hidden transition-all duration-300 ${
          open ? "md:w-[77%] lg:w-[81%] xl:w-[84%]" : "md:w-[93%] lg:w-[94.5%] xl:w-[96%]"
        }`}>
        <Header
          titulo='Acessar os Agendamentos Feitos'
          icone='./Icons/agendamentos_icon_azul.svg'
          alt='Ícone de Calendário Simbolizando a página de guia de agendamentos'
        />
        <Navbar />
        <div className='flex flex-col m-auto w-[90%] my-4'>
          <article id='etapa-1-agendamento' className='flex flex-col items-center w-full'>
            <div className='flex justify-between items-center w-full'>
              <h3 className='font-bold text-[#0077c8] text-2xl sm:text-[1.75rem] md:text-[1.85rem] lg:text-[2rem] xl:text-[2.5rem]'>Etapa 1</h3>
              <a
                target='_blank'
                href='https://portaldopaciente.hc.fm.usp.br/'
                className='text-[#0077c8] underline w-[45%] sm:w-fit sm:text-[1.2rem] md:text-[1.15rem] lg:text-xl xl:text-2xl'>
                Clique aqui para abrir o portal do paciente
              </a>
            </div>
            <figure className='flex flex-col items-center mt-4 w-[85%]'>
              <ImagemEtapa
                src='/Guias/Agendamentos/etapa_1.png'
                alt='Imagem que mostra a página principal do painel do paciente no site do Portal das Clínicas.'
                id='etapa-1-imagem'
              />
              <figcaption className='font-bold mt-2 text-[1.15rem] lg:text-[1rem] xl:text-xl'>
                Acesse a aba <span className='text-[#0077c8]'>“Minha Agenda”</span>, no{" "}
                <a target='_blank' href='https://portaldopaciente.hc.fm.usp.br/' className='text-[#0077c8]'>
                  portal do paciente
                </a>{" "}
                do Hospital das Clínicas.
              </figcaption>
            </figure>

            <div className='flex items-center justify-end w-full mt-4'>
              <BotaoEtapa etapa='#etapa-2-agendamento' texto='Próxima Etapa' />
            </div>
          </article>

          <hr className='border-2 my-10 border-[#8fc3e6] rounded-full' />

          <article id='etapa-2-agendamento' className='flex flex-col items-center w-full'>
            <div className='flex justify-between items-center w-full'>
              <h3 className='font-bold text-[#0077c8] text-2xl sm:text-[1.75rem] md:text-[1.85rem] lg:text-[2rem] xl:text-[2.5rem]'>Etapa 2</h3>
            </div>
            <figure className='flex flex-col items-center mt-4 w-[85%]'>
              <ImagemEtapa src='/Guias/Agendamentos/etapa_2.png' alt='Imagem que mostra a forma como um agendamento apareceria na tela do usuário.' id='' />
              <figcaption className='font-bold mt-2 text-[1.15rem] lg:text-[1rem] xl:text-xl'>
                Nessa aba, os agendamentos feitos aparecerão listados. Estará informado no agendamento o <span className='text-[#0077c8]'>tipo</span>, a{" "}
                <span className='text-[#0077c8]'>data/hora</span>, o <span className='text-[#0077c8]'>instituto</span> onde será realizado e a{" "}
                <span className='text-[#0077c8]'>especialidade</span> do mesmo.
              </figcaption>
            </figure>

            <div className='flex items-center justify-between w-full mt-4'>
              <BotaoEtapa etapa='#etapa-1-agendamento' texto='Etapa Anterior' />
              <BotaoEtapa etapa='#etapa-3-agendamento' texto='Próximo Adendo' />
            </div>
          </article>

          <hr className='border-2 my-10 border-[#8fc3e6] rounded-full' />

          <article id='etapa-3-agendamento' className='flex flex-col items-center w-full'>
            <div className='flex justify-between items-center w-full'>
              <h3 className='font-bold text-[#0077c8] text-2xl sm:text-[1.75rem] md:text-[1.85rem] lg:text-[2rem] xl:text-[2.5rem]'>Adendo 1</h3>
            </div>
            <figure className='flex flex-col items-center mt-4 w-[85%]'>
              <ImagemEtapa
                src='/Guias/Agendamentos/adendo_1.png'
                alt='Imagem que mostra o documento da filipeta, com informações sobre o agendamento, por exemplo: tipo de agendamento.'
                id=''
              />
              <figcaption className='font-bold mt-2 text-[1.15rem] lg:text-[1rem] xl:text-xl'>
                Ao clicar em <span className='text-[#0077c8]'>“Filipeta”</span>, uma aba de <span className='text-[#0077c8]'>visualização do agendamento</span> será
                aberta, com algumas informações que podem vir a ser importantes dependendo do <span className='text-[#0077c8]'>tipo de agendamento</span>.{" "}
                <span className='text-[#0077c8]'>Leia bem o documento!</span> Aqui você pode <span className='text-[#0077c8]'>imprimi-lo</span> ou{" "}
                <span className='text-[#0077c8]'>salvá-lo</span> como <span className='text-[#0077c8]'>pdf</span>.
              </figcaption>
            </figure>

            <div className='flex items-center justify-between w-full mt-4'>
              <BotaoEtapa etapa='#etapa-2-agendamento' texto='Etapa Anterior' />
              <BotaoEtapa etapa='#etapa-4-agendamento' texto='Próximo Adendo' />
            </div>
          </article>

          <hr className='border-2 my-10 border-[#8fc3e6] rounded-full' />

          <article id='etapa-4-agendamento' className='flex flex-col items-center w-full'>
            <div className='flex justify-between items-center w-full'>
              <h3 className='font-bold text-[#0077c8] text-2xl sm:text-[1.75rem] md:text-[1.85rem] lg:text-[2rem] xl:text-[2.5rem]'>Adendo 2</h3>
            </div>
            <figure className='flex flex-col items-center mt-4 w-[85%]'>
              <ImagemEtapa src='/Guias/Agendamentos/adendo_2.png' alt='Imagem que mostra os ícones e os tipos de agendamentos possíveis de aparecer.' id='' />
              <figcaption className='font-bold mt-2 text-[1.15rem] lg:text-[1rem] xl:text-xl'>
                Agendamentos aparecerão com um desses <span className='text-[#0077c8]'>quatro ícones</span>, indicando o{" "}
                <span className='text-[#0077c8]'>tipo do agendamento</span>. São apenas indicações para que o paciente tenha ciência de como deve se{" "}
                <span className='text-[#0077c8]'>preparar</span> para o evento.
              </figcaption>
            </figure>

            <div className='flex items-center justify-end w-full mt-4'>
              <BotaoEtapa etapa='#etapa-1-agendamento' texto='Finalizar Guia' />
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
