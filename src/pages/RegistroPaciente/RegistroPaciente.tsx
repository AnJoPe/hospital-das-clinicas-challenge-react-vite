import Header from "../../components/Header/Header";

export default function RegistroPaciente() {
  return (
    <>
      <div className='w-[84%] absolute right-0 p-3 pb-10 flex flex-col items-center'>
        <Header titulo='Acessar Portal do Paciente' icone='./Icons/portal_paciente_azul_icon.svg' />
        <div className='w-[90%] mt-4'>
          <article id='etapa-1-registro' className='flex flex-col items-center'>
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
                src='../src/assets/Guias/Registro/etapa_1.png'
                alt='Imagem que mostra a página inicial ao acessar o portal do paciente. Todas as formas de login estão visiveis: com o painel de login, com a etiqueta física de paciente e com o registro do gov.br.'
              />
              <figcaption className='text-xl font-bold mt-2'>
                Escolha a forma de acessar o seu{" "}
                <a target='_blank' href='https://portaldopaciente.hc.fm.usp.br/'>
                  portal do paciente
                </a>
                . Através do <span className='text-[#0077c8]'>painel de login</span> do HC, com a <span className='text-[#0077c8]'>etiqueta física</span> de paciente ou
                com o <span className='text-[#0077c8]'>registro no gov.br</span>.
              </figcaption>
            </figure>

            <div className='flex items-center justify-end w-full mt-4'>
              <a className='text-xl mt-4 py-2 px-4 rounded-2xl text-white font-bold bg-[#0077c8]' href='#etapa-2-registro'>
                Próxima Etapa
              </a>
            </div>
          </article>

          <hr className='border-2 my-10 border-[#8fc3e6] rounded-full' />

          <article id='etapa-2-registro' className='flex flex-col items-center'>
            <div className='flex justify-between items-center w-full'>
              <h3 className='text-4xl font-bold text-[#0077c8]'>Etapa 2.1</h3>
            </div>
            <figure className='flex flex-col items-center mt-4 w-[85%]' id='etapa-imagem-2'>
              <img
                draggable='false'
                className='rounded-3xl border-2 border-[#0077c8] p-3 mb-2 w-full'
                src='../src/assets/Guias/Registro/etapa_2.png'
                alt='Imagem que mostra a página de login pelo próprio portal do paciente do Hospital das Clínicas.'
              />
              <figcaption className='text-xl font-bold mt-2'>
                Acessando pela própria <span className='text-[#0077c8]'>plataforma</span> do Hospital das Clínicas, você irá inserir o seu{" "}
                <span className='text-[#0077c8]'>CPF</span> e sua <span className='text-[#0077c8]'>senha</span>, e clicar em{" "}
                <span className='text-[#0077c8]'>acessar</span>.
              </figcaption>
            </figure>

            <div className='flex items-center justify-between w-full mt-4'>
              <a className='text-xl mt-4 py-2 px-4 rounded-2xl text-white font-bold bg-[#0077c8]' href='#etapa-1-registro'>
                Etapa Anterior
              </a>
              <a className='text-xl mt-4 py-2 px-4 rounded-2xl text-white font-bold bg-[#0077c8]' href='#etapa-3-registro'>
                Próxima Forma
              </a>
            </div>
          </article>

          <hr className='border-2 my-10 border-[#8fc3e6] rounded-full' />

          <article id='etapa-3-registro' className='flex flex-col items-center'>
            <div className='flex justify-between items-center w-full'>
              <h3 className='text-4xl font-bold text-[#0077c8]'>Etapa 2.2</h3>
            </div>
            <figure className='flex flex-col items-center mt-4 w-[85%]' id='etapa-imagem-2'>
              <img
                draggable='false'
                className='rounded-3xl border-2 border-[#0077c8] p-3 mb-2 w-full'
                src='../src/assets/Guias/Registro/etapa_3.png'
                alt='Imagem que mostra a página de login utilizando a etiqueta física de paciente do Hospital das Clínicas.'
              />
              <figcaption className='text-xl font-bold mt-2'>
                Acessando pela <span className='text-[#0077c8]'>etiqueta</span>, você deverá inserir o <span className='text-[#0077c8]'>número da requisição</span>, a{" "}
                <span className='text-[#0077c8]'>“senha da internet”</span> e os <span className='text-[#0077c8]'>caracteres de segurança</span>. Todas essas informações
                estão <span className='text-[#0077c8]'>presentes</span> na sua <span className='text-[#0077c8]'>etiqueta de paciente</span>.
              </figcaption>
            </figure>

            <div className='flex items-center justify-between w-full mt-4'>
              <a className='text-xl mt-4 py-2 px-4 rounded-2xl text-white font-bold bg-[#0077c8]' href='#etapa-2-registro'>
                Forma Anterior
              </a>
              <a className='text-xl mt-4 py-2 px-4 rounded-2xl text-white font-bold bg-[#0077c8]' href='#etapa-4-registro'>
                Próxima Forma
              </a>
            </div>
          </article>

          <hr className='border-2 my-10 border-[#8fc3e6] rounded-full' />

          <article id='etapa-4-registro' className='flex flex-col items-center'>
            <div className='flex justify-between items-center w-full'>
              <h3 className='text-4xl font-bold text-[#0077c8]'>Etapa 2.3</h3>
            </div>
            <figure className='flex flex-col items-center mt-4 w-[85%]' id='etapa-imagem-2'>
              <img
                draggable='false'
                className='rounded-3xl border-2 border-[#0077c8] p-3 mb-2 w-full'
                src='../src/assets/Guias/Registro/etapa_4.png'
                alt='Imagem que mostra a página de login do gov.br.'
              />
              <figcaption className='text-xl font-bold mt-2'>
                Para acessar a <span className='text-[#0077c8]'>plataforma</span> utilizando sua conta do <span className='text-[#0077c8]'>gov.br</span>, você deverá
                inserir o seu <span className='text-[#0077c8]'>CPF</span> e, em seguida, inserir a sua <span className='text-[#0077c8]'>senha</span>.
              </figcaption>
            </figure>

            <div className='flex items-center justify-between w-full mt-4'>
              <a className='text-xl mt-4 py-2 px-4 rounded-2xl text-white font-bold bg-[#0077c8]' href='#etapa-3-registro'>
                Forma Anterior
              </a>
              <a className='text-xl mt-4 py-2 px-4 rounded-2xl text-white font-bold bg-[#0077c8]' href='#etapa-5-registro'>
                Próxima Etapa
              </a>
            </div>
          </article>

          <hr className='border-2 my-10 border-[#8fc3e6] rounded-full' />

          <article id='etapa-5-registro' className='flex flex-col items-center'>
            <div className='flex justify-between items-center w-full'>
              <h3 className='text-4xl font-bold text-[#0077c8]'>Etapa 3</h3>
            </div>
            <figure className='flex flex-col items-center mt-4 w-[85%]' id='etapa-imagem-2'>
              <img
                draggable='false'
                className='rounded-3xl border-2 border-[#0077c8] p-3 mb-2 w-full'
                src='../src/assets/Guias/Registro/etapa_5.png'
                alt='Imagem que mostra a página principal do painel do paciente no site do Portal das Clínicas.'
              />
              <figcaption className='text-xl font-bold mt-2'>
                Parabéns, você acessou o{" "}
                <a target='_blank' href='https://portaldopaciente.hc.fm.usp.br/'>
                  Portal do Paciente!
                </a>
              </figcaption>
            </figure>

            <div className='flex items-center justify-end w-full mt-4'>
              <a className='text-xl mt-4 py-2 px-4 rounded-2xl text-white font-bold bg-[#0077c8]' href='#etapa-1-registro'>
                Finalizar Guia
              </a>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
