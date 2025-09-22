import Header from "../../components/Header/Header";

export default function Prescricoes() {
  return (
    <>
      <div className='w-[84%] absolute right-0 p-3 pb-10 flex flex-col items-center'>
        <Header titulo='Acessar as Minhas Prescrições' icone='./Icons/prescricoes_azul_icon.svg' />
        <div className='w-[90%] mt-4'>
          <article id='etapa-1-prescricoes' className='flex flex-col items-center'>
            <div className='flex justify-between items-center w-full'>
              <h3 className='text-4xl font-bold text-[#0077c8]'>Etapa 1</h3>
              <a target='_blank' href='https://portaldopaciente.hc.fm.usp.br/' className='text-2xl text-[#0077c8] underline'>
                Clique aqui para abrir o portal do paciente
              </a>
            </div>
            <figure className='flex flex-col items-center mt-4 w-[85%]' id='etapa-imagem-1'>
              <img
                draggable='false'
                id='etapa-1-prescricao-imagem'
                className='rounded-3xl border-2 border-[#0077c8] p-3 mb-2 w-full'
                src='../src/assets/Guias/Prescricoes/etapa_1.png'
                alt='Imagem que mostra a página principal do painel do paciente no site do Portal das Clínicas.'
              />
              <figcaption className='text-xl font-bold mt-2'>
                Acesse a aba <span className='text-[#0077c8]'>“Minhas Receitas”</span> no{" "}
                <a target='_blank' href='https://portaldopaciente.hc.fm.usp.br/'>
                  portal do paciente
                </a>{" "}
                do Hospital das Clínicas.
              </figcaption>
            </figure>

            <div className='flex items-center justify-end w-full mt-4'>
              <a className='text-xl mt-4 py-2 px-4 rounded-2xl text-white font-bold bg-[#0077c8]' href='#etapa-2-prescricoes'>
                Próxima Etapa
              </a>
            </div>
          </article>

          <hr className='border-2 my-10 border-[#8fc3e6] rounded-full' />

          <article id='etapa-2-prescricoes' className='flex flex-col items-center'>
            <div className='flex justify-between items-center w-full'>
              <h3 className='text-4xl font-bold text-[#0077c8]'>Etapa 2</h3>
            </div>
            <figure className='flex flex-col items-center mt-4 w-[85%]' id='etapa-imagem-2'>
              <img
                draggable='false'
                className='rounded-3xl border-2 border-[#0077c8] p-3 mb-2 w-full'
                src='./src/assets/Guias/Prescricoes/etapa_2.png'
                alt='Imagem que mostra a forma como uma prescrição apareceria na tela do usuário.'
              />
              <figcaption className='text-xl font-bold mt-2'>
                Nessa aba, as <span className='text-[#0077c8]'>prescrições receitadas</span> por médicos aparecerão por{" "}
                <span className='text-[#0077c8]'>ordem decrescente de vencimento</span>. É possível <span className='text-[#0077c8]'>imprimir</span> ou
                <span className='text-[#0077c8]'>salvar</span> em pdf as receitas, clicando em <span className='text-[#0077c8]'>“Visualizar”</span>
              </figcaption>
            </figure>

            <div className='flex items-center justify-end w-full mt-4'>
              <a className='text-xl mt-4 py-2 px-4 rounded-2xl text-white font-bold bg-[#0077c8]' href='#etapa-1-prescricoes'>
                Finalizar Guia
              </a>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
