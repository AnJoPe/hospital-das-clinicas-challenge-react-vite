import Header from "../../components/Header/Header";

export default function Exames() {
  return (
    <>
      <div className='w-[84%] absolute right-0 p-3 pb-10 flex flex-col items-center'>
        <Header titulo='Visualizar Resultados de Exames' icone='./Icons/exames_azul_icon.svg' />
        <div className='w-[90%] mt-4'>
          <article id='etapa-1-exames' className='flex flex-col items-center'>
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
                src='../src/assets/Guias/Exames/etapa_1.png'
                alt='Imagem que mostra a página principal do painel do paciente no site do Portal das Clínicas.'
              />
              <figcaption className='text-xl font-bold mt-2'>
                Acesse a aba <span className='text-[#0077c8]'>“Meus Resultados"</span>, no{" "}
                <a target='_blank' href='https://portaldopaciente.hc.fm.usp.br/'>
                  portal do paciente
                </a>{" "}
                do Hospital das Clínicas.
              </figcaption>
            </figure>

            <div className='flex items-center justify-end w-full mt-4'>
              <a className='text-xl mt-4 py-2 px-4 rounded-2xl text-white font-bold bg-[#0077c8]' href='#etapa-2-exames'>
                Próxima Etapa
              </a>
            </div>
          </article>

          <hr className='border-2 my-10 border-[#8fc3e6] rounded-full' />

          <article id='etapa-2-exames' className='flex flex-col items-center'>
            <div className='flex justify-between items-center w-full'>
              <h3 className='text-4xl font-bold text-[#0077c8]'>Etapa 2</h3>
            </div>
            <figure className='etapa-imagem' id='etapa-imagem-2'>
              <img
                draggable='false'
                className='rounded-3xl border-2 border-[#0077c8] p-3 mb-2 w-full'
                src='./src/assets/Guias/Exames/etapa_2.png'
                alt='Imagem que mostra a forma como o resultado de um exame apareceria na tela do usuário.'
              />
              <figcaption className='text-xl font-bold mt-2'>
                Nessa aba, aparecerão os <span className='text-[#0077c8]'>resultados</span> de todos os seus exames, eles poderão ser{" "}
                <span className='text-[#0077c8]'>impressos</span> ou <span className='text-[#0077c8]'>salvos</span> como um arquivo pdf.
              </figcaption>
            </figure>

            <div className='flex items-center justify-between w-full mt-4'>
              <a className='text-xl mt-4 py-2 px-4 rounded-2xl text-white font-bold bg-[#0077c8]' href='#etapa-1-exames'>
                Etapa Anterior
              </a>
              <a className='text-xl mt-4 py-2 px-4 rounded-2xl text-white font-bold bg-[#0077c8]' href='#etapa-3-exames'>
                Próximo Adendo
              </a>
            </div>
          </article>

          <hr className='border-2 my-10 border-[#8fc3e6] rounded-full' />

          <article id='etapa-3-exames' className='flex flex-col items-center'>
            <div className='flex justify-between items-center w-full'>
              <h3 className='text-4xl font-bold text-[#0077c8]'>Adendo</h3>
            </div>
            <figure className='etapa-imagem' id='etapa-imagem-2'>
              <img
                draggable='false'
                className='rounded-3xl border-2 border-[#0077c8] p-3 mb-2 w-full'
                src='./src/assets/Guias/Exames/adendo_1.png'
                alt='Imagem que mostra os ícones e os tipos de resultaods de exames possíveis de aparecer.'
              />
              <figcaption className='text-xl font-bold mt-2'>
                <span className='text-[#0077c8]'>Exames</span> aparecerão com uma dessas duas imagens,
                <span className='text-[#0077c8]'>classNameificando-os</span> como <span className='text-[#0077c8]'>exames de imagem</span> e{" "}
                <span className='text-[#0077c8]'>exames laboratoriais</span>. São apenas <span className='text-[#0077c8]'>indicações visuais</span> e não alteram em nada
                o<span className='text-[#0077c8]'>processo</span>.
              </figcaption>
            </figure>

            <div className='flex items-center justify-end w-full mt-4'>
              <a className='text-xl mt-4 py-2 px-4 rounded-2xl text-white font-bold bg-[#0077c8]' href='#etapa-1-exames'>
                Finalizar Guia
              </a>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
