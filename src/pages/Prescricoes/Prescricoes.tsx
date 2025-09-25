import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

export default function Prescricoes() {
  return (
    <>
      <div className='absolute right-0 w-full md:w-[77%] lg:w-[81%] xl:w-[84%]' id='estrutura-pagina-menu-selector'>
        <Header titulo='Acessar as Minhas Prescrições' icone='./Icons/prescricoes_azul_icon.svg' />
        <Navbar />
        <div className='flex flex-col m-auto w-[90%] my-4'>
          <article id='etapa-1-prescricoes' className='flex flex-col items-center w-full'>
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
                id='etapa-1-prescricao-imagem'
                className='w-full rounded-3xl border-2 border-[#0077c8] mb-2 p-1 sm:p-3'
                src='../src/assets/Guias/Prescricoes/etapa_1.png'
                alt='Imagem que mostra a página principal do painel do paciente no site do Portal das Clínicas.'
              />
              <figcaption className='font-bold mt-2 text-[1.15rem] lg:text-[1rem] xl:text-xl'>
                Acesse a aba <span className='text-[#0077c8]'>“Minhas Receitas”</span> no{" "}
                <a target='_blank' href='https://portaldopaciente.hc.fm.usp.br/' className='text-[#0077c8]'>
                  portal do paciente
                </a>{" "}
                do Hospital das Clínicas.
              </figcaption>
            </figure>

            <div className='flex items-center justify-end w-full mt-4'>
              <a className='text-white font-bold rounded-2xl bg-[#0077c8] mt-4 py-2 px-4 text-[0.95rem] xl:text-[1.35rem]' href='#etapa-2-prescricoes'>
                Próxima Etapa
              </a>
            </div>
          </article>

          <hr className='border-2 my-10 border-[#8fc3e6] rounded-full' />

          <article id='etapa-2-prescricoes' className='flex flex-col items-center w-full'>
            <div className='flex justify-between items-center w-full'>
              <h3 className='font-bold text-[#0077c8] text-2xl sm:text-[1.75rem] md:text-[1.85rem] lg:text-[2rem] xl:text-[2.5rem]'>Etapa 2</h3>
            </div>
            <figure className='flex flex-col items-center mt-4 w-[85%]' id='etapa-imagem-2'>
              <img
                draggable='false'
                className='w-full rounded-3xl border-2 border-[#0077c8] mb-2 p-1 sm:p-3'
                src='./src/assets/Guias/Prescricoes/etapa_2.png'
                alt='Imagem que mostra a forma como uma prescrição apareceria na tela do usuário.'
              />
              <figcaption className='font-bold mt-2 text-[1.15rem] lg:text-[1rem] xl:text-xl'>
                Nessa aba, as <span className='text-[#0077c8]'>prescrições receitadas</span> por médicos aparecerão por{" "}
                <span className='text-[#0077c8]'>ordem decrescente de vencimento</span>. É possível <span className='text-[#0077c8]'>imprimir</span> ou
                <span className='text-[#0077c8]'>salvar</span> em pdf as receitas, clicando em <span className='text-[#0077c8]'>“Visualizar”</span>
              </figcaption>
            </figure>

            <div className='flex items-center justify-end w-full mt-4'>
              <a className='text-white font-bold rounded-2xl bg-[#0077c8] mt-4 py-2 px-4 text-[0.95rem] xl:text-[1.35rem]' href='#etapa-1-prescricoes'>
                Finalizar Guia
              </a>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
