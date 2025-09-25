import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

export default function Exames() {
  return (
    <>
      <div className='absolute right-0 w-full md:w-[77%] lg:w-[81%] xl:w-[84%]' id='estrutura-pagina-menu-selector'>
        <Header titulo='Visualizar Resultados de Exames' icone='./Icons/exames_azul_icon.svg' />
        <Navbar />
        <div className='flex flex-col m-auto w-[90%] my-4'>
          <article id='etapa-1-exames' className='flex flex-col items-center w-full'>
            <div className='flex justify-between items-center w-full'>
              <h3 className='font-bold text-[#0077c8] text-2xl sm:text-[1.75rem] md:text-[1.85rem] lg:text-[2rem] xl:text-[2.5rem]'>Etapa 1</h3>
              <a
                target='_blank'
                href='https://portaldopaciente.hc.fm.usp.br/'
                className='text-[#0077c8] underline w-[45%] sm:w-fit sm:text-[1.2rem] md:text-[1.15rem] lg:text-xl xl:text-2xl'>
                Clique aqui para abrir o portal do paciente
              </a>
            </div>
            <figure className='flex flex-col items-center mt-4 w-[85%]' id='etapa-imagem-1'>
              <img
                draggable='false'
                className='w-full rounded-3xl border-2 border-[#0077c8] mb-2 p-1 sm:p-3'
                src='../src/assets/Guias/Exames/etapa_1.png'
                alt='Imagem que mostra a página principal do painel do paciente no site do Portal das Clínicas.'
              />
              <figcaption className='font-bold mt-2 text-[1.15rem] lg:text-[1rem] xl:text-xl'>
                Acesse a aba <span className='text-[#0077c8]'>“Meus Resultados"</span>, no{" "}
                <a target='_blank' href='https://portaldopaciente.hc.fm.usp.br/' className='text-[#0077c8]'>
                  portal do paciente
                </a>{" "}
                do Hospital das Clínicas.
              </figcaption>
            </figure>

            <div className='flex items-center justify-end w-full mt-4'>
              <a className='text-white font-bold rounded-2xl bg-[#0077c8] mt-4 py-2 px-4 text-[0.95rem] xl:text-[1.35rem]' href='#etapa-2-exames'>
                Próxima Etapa
              </a>
            </div>
          </article>

          <hr className='border-2 my-10 border-[#8fc3e6] rounded-full' />

          <article id='etapa-2-exames' className='flex flex-col items-center w-full'>
            <div className='flex justify-between items-center w-full'>
              <h3 className='font-bold text-[#0077c8] text-2xl sm:text-[1.75rem] md:text-[1.85rem] lg:text-[2rem] xl:text-[2.5rem]'>Etapa 2</h3>
            </div>
            <figure className='flex flex-col items-center mt-4 w-[85%]' id='etapa-imagem-2'>
              <img
                draggable='false'
                className='w-full rounded-3xl border-2 border-[#0077c8] mb-2 p-1 sm:p-3'
                src='./src/assets/Guias/Exames/etapa_2.png'
                alt='Imagem que mostra a forma como o resultado de um exame apareceria na tela do usuário.'
              />
              <figcaption className='font-bold mt-2 text-[1.15rem] lg:text-[1rem] xl:text-xl'>
                Nessa aba, aparecerão os <span className='text-[#0077c8]'>resultados</span> de todos os seus exames, eles poderão ser{" "}
                <span className='text-[#0077c8]'>impressos</span> ou <span className='text-[#0077c8]'>salvos</span> como um arquivo pdf.
              </figcaption>
            </figure>

            <div className='flex items-center justify-between w-full mt-4'>
              <a className='text-white font-bold rounded-2xl bg-[#0077c8] mt-4 py-2 px-4 text-[0.95rem] xl:text-[1.35rem]' href='#etapa-1-exames'>
                Etapa Anterior
              </a>
              <a className='text-white font-bold rounded-2xl bg-[#0077c8] mt-4 py-2 px-4 text-[0.95rem] xl:text-[1.35rem]' href='#etapa-3-exames'>
                Próximo Adendo
              </a>
            </div>
          </article>

          <hr className='border-2 my-10 border-[#8fc3e6] rounded-full' />

          <article id='etapa-3-exames' className='flex flex-col items-center w-full'>
            <div className='flex justify-between items-center w-full'>
              <h3 className='font-bold text-[#0077c8] text-2xl sm:text-[1.75rem] md:text-[1.85rem] lg:text-[2rem] xl:text-[2.5rem]'>Adendo</h3>
            </div>
            <figure className='flex flex-col items-center mt-4 w-[85%]' id='etapa-imagem-2'>
              <img
                draggable='false'
                className='w-full rounded-3xl border-2 border-[#0077c8] mb-2 p-1 sm:p-3'
                src='./src/assets/Guias/Exames/adendo_1.png'
                alt='Imagem que mostra os ícones e os tipos de resultaods de exames possíveis de aparecer.'
              />
              <figcaption className='font-bold mt-2 text-[1.15rem] lg:text-[1rem] xl:text-xl'>
                <span className='text-[#0077c8]'>Exames</span> aparecerão com uma dessas duas imagens,
                <span className='text-[#0077c8]'>classNameificando-os</span> como <span className='text-[#0077c8]'>exames de imagem</span> e{" "}
                <span className='text-[#0077c8]'>exames laboratoriais</span>. São apenas <span className='text-[#0077c8]'>indicações visuais</span> e não alteram em nada
                o<span className='text-[#0077c8]'>processo</span>.
              </figcaption>
            </figure>

            <div className='flex items-center justify-end w-full mt-4'>
              <a className='text-white font-bold rounded-2xl bg-[#0077c8] mt-4 py-2 px-4 text-[0.95rem] xl:text-[1.35rem]' href='#etapa-1-exames'>
                Finalizar Guia
              </a>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
