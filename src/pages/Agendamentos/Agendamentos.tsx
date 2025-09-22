import Header from "../../components/Header/Header";

export default function Agendamentos() {
  return (
    <>
      <div className='w-[84%] absolute right-0 p-3 pb-10 flex flex-col items-center'>
        <Header titulo='Acessar os Agendamentos Feitos' icone='./Icons/agendamentos_icon_azul.svg' />
        <div className='w-[90%] mt-4'>
          <article id='etapa-1-agendamento' className='flex flex-col items-center'>
            <div className='flex justify-between items-center w-full'>
              <h3 className='text-4xl font-bold text-[#0077c8]'>Etapa 1</h3>
              <a target='_blank' href='https://portaldopaciente.hc.fm.usp.br/' className='text-2xl text-[#0077c8] underline'>
                Clique aqui para abrir o portal do paciente
              </a>
            </div>
            <figure className='flex flex-col items-center mt-4 w-[85%]' id='etapa-imagem-1'>
              <img
                draggable='false'
                className='rounded-3xl border-2 border-[#0077c8] p-3 mb-2 w-full'
                src='./src/assets/Guias/Agendamentos/etapa_1.png'
                alt='Imagem que mostra a página principal do painel do paciente no site do Portal das Clínicas.'
              />
              <figcaption className='text-xl font-bold mt-2'>
                Acesse a aba <span className='text-[#0077c8]'>“Minha Agenda”</span>, no{" "}
                <a target='_blank' href='https://portaldopaciente.hc.fm.usp.br/'>
                  portal do paciente
                </a>{" "}
                do Hospital das Clínicas.
              </figcaption>
            </figure>

            <div className='flex items-center justify-end w-full mt-4'>
              <a className='text-xl mt-4 py-2 px-4 rounded-2xl text-white font-bold bg-[#0077c8]' href='#etapa-2-agendamento'>
                Próxima Etapa
              </a>
            </div>
          </article>

          <hr className='border-2 my-10 border-[#8fc3e6] rounded-full' />

          <article id='etapa-2-agendamento' className='flex flex-col items-center'>
            <div className='flex justify-between items-center w-full'>
              <h3 className='text-4xl font-bold text-[#0077c8]'>Etapa 2</h3>
            </div>
            <figure className='flex flex-col items-center mt-4 w-[85%]' id='etapa-imagem-2'>
              <img
                draggable='false'
                className='rounded-3xl border-2 border-[#0077c8] p-3 mb-2 w-full'
                src='./src/assets/Guias/Agendamentos/etapa_2.png'
                alt='Imagem que mostra a forma como um agendamento apareceria na tela do usuário.'
              />
              <figcaption className='text-xl font-bold mt-2'>
                Nessa aba, os agendamentos feitos aparecerão listados. Estará informado no agendamento o <span className='text-[#0077c8]'>tipo</span>, a{" "}
                <span className='text-[#0077c8]'>data/hora</span>, o <span className='text-[#0077c8]'>instituto</span>
                onde será realizado e a <span className='text-[#0077c8]'>especialidade</span> do mesmo.
              </figcaption>
            </figure>

            <div className='flex items-center justify-between w-full mt-4'>
              <a className='text-xl mt-4 py-2 px-4 rounded-2xl text-white font-bold bg-[#0077c8]' href='#etapa-1-agendamento'>
                Etapa Anterior
              </a>
              <a className='text-xl mt-4 py-2 px-4 rounded-2xl text-white font-bold bg-[#0077c8]' href='#etapa-3-agendamento'>
                Próximo Adendo
              </a>
            </div>
          </article>

          <hr className='border-2 my-10 border-[#8fc3e6] rounded-full' />

          <article id='etapa-3-agendamento' className='flex flex-col items-center'>
            <div className='flex justify-between items-center w-full'>
              <h3 className='text-4xl font-bold text-[#0077c8]'>Adendo 1</h3>
            </div>
            <figure className='flex flex-col items-center mt-4 w-[85%]' id='etapa-imagem-3'>
              <img
                draggable='false'
                className='rounded-3xl border-2 border-[#0077c8] p-3 mb-2 w-full'
                src='./src/assets/Guias/Agendamentos/adendo_1.png'
                alt='Imagem que mostra o documento da filipeta, com informações sobre o agendamento, por exemplo: tipo de agendamento.'
              />
              <figcaption className='text-xl font-bold mt-2'>
                Ao clicar em <span className='text-[#0077c8]'>“Filipeta”</span>, uma aba de
                <span className='text-[#0077c8]'>visualização do agendamento</span> será aberta, com algumas informações que podem vir a ser importantes dependendo do{" "}
                <span className='text-[#0077c8]'>tipo de agendamento</span>. <span className='text-[#0077c8]'>Leia bem o documento!</span> Aqui você pode{" "}
                <span className='text-[#0077c8]'>imprimi-lo</span> ou <span className='text-[#0077c8]'>salvá-lo</span> como
                <span className='text-[#0077c8]'>pdf</span>.
              </figcaption>
            </figure>

            <div className='flex items-center justify-between w-full mt-4'>
              <a className='text-xl mt-4 py-2 px-4 rounded-2xl text-white font-bold bg-[#0077c8]' href='#etapa-2-agendamento'>
                Etapa Anterior
              </a>
              <a className='text-xl mt-4 py-2 px-4 rounded-2xl text-white font-bold bg-[#0077c8]' href='#etapa-4-agendamento'>
                Próximo Adendo
              </a>
            </div>
          </article>

          <hr className='border-2 my-10 border-[#8fc3e6] rounded-full' />

          <article id='etapa-4-agendamento' className='flex flex-col items-center'>
            <div className='flex justify-between items-center w-full'>
              <h3 className='text-4xl font-bold text-[#0077c8]'>Adendo 2</h3>
            </div>
            <figure className='flex flex-col items-center mt-4 w-[85%]' id='etapa-imagem-3'>
              <img
                draggable='false'
                className='rounded-3xl border-2 border-[#0077c8] p-3 mb-2 w-full'
                src='./src/assets/Guias/Agendamentos/adendo_2.png'
                alt='Imagem que mostra os ícones e os tipos de agendamentos possíveis de aparecer.'
              />
              <figcaption className='text-xl font-bold mt-2'>
                Agendamentos aparecerão com um desses <span className='text-[#0077c8]'>quatro ícones</span>, indicando o{" "}
                <span className='text-[#0077c8]'>tipo do agendamento</span>. São apenas indicações para que o paciente tenha ciência de como deve se{" "}
                <span className='text-[#0077c8]'>preparar</span> para o evento.
              </figcaption>
            </figure>

            <div className='flex items-center justify-end w-full mt-4'>
              <a className='text-xl mt-4 py-2 px-4 rounded-2xl text-white font-bold bg-[#0077c8]' href='#etapa-1-agendamento'>
                Finalizar Guia
              </a>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
