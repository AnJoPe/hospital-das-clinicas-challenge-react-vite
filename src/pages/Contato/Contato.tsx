import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

export default function Contato() {
  return (
    <>
      <div className='absolute right-0 w-full md:w-[77%] lg:w-[81%] xl:w-[84%]' id='estrutura-pagina-menu-selector'>
        <Header titulo='Contato' icone='./Icons/contato.svg' />
        <Navbar />
        <div className='flex flex-col gap-6 w-full py-7 items-center '>
          <section className='flex flex-col sm:flex-row justify-center w-[90%] lg:h-[28vh]'>
            <div className='flex flex-col justify-around items-start w-full h-full lg:w-[60%]'>
              <h3 className='text-[#0077c8] font-bold font-[InterItalic] mb-3 w-[70%] lg:w-[75%] text-2xl'>Entre em contato com o Hospital das Clínicas</h3>
              <ul className='flex flex-col gap-3 text-[1.15rem] sm:text-[1rem] lg:text-[1.2rem] xl:text-xl'>
                <li className='flex items-center gap-2'>
                  <span className='font-bold'>Tel.:</span>(11) 2661-1048
                  <img src='./Icons/contato.svg' alt='Ícone de um telefone, sinalizando que o número descrito pode ser contatado via telefone.' className='h-5 lg:h-7' />
                </li>
                <li className='flex items-center gap-2'>
                  <span className='font-bold'>Tel.:</span>(11) 2661-1561
                  <img src='./Icons/contato.svg' alt='Ícone de um telefone, sinalizando que o número descrito pode ser contatado via telefone.' className='h-5 lg:h-7' />
                </li>
                <li className='flex items-center gap-2'>
                  <span className='font-bold'>E-mail:</span>ouvidoria.geral@hc.fm.usp.br
                  <img src='./Icons/email.svg' alt='Ícone de um email, sinalizando que o email descrito pode ser contatado via email.' className='h-5 lg:h-7' />
                </li>
              </ul>
            </div>
            <div className='flex flex-col justify-evenly items-start w-full h-full lg:w-[40%]'>
              <h3 className='text-[#0077c8] font-bold font-[InterItalic] mb-3 text-2xl'>Endereço</h3>
              <ul className='flex flex-col gap-2 text-[1.15rem] sm:text-[1rem] lg:text-[1.2rem] xl:text-xl'>
                <li className='flex items-center gap-2'>Av. Dr. Enéas de Carvalho Aguiar, 255</li>
                <li className='flex items-center gap-2'>
                  <span className='font-bold'>Bairro:</span> Cerqueira César
                </li>
                <li className='flex items-center gap-2'>
                  <span className='font-bold'>CEP:</span> 05403-000
                </li>
                <li className='flex items-center gap-2'>São Paulo - Brasil</li>
              </ul>
            </div>
          </section>
          <section className='flex flex-col justify-between w-full md:w-[85%] lg:w-[75%]'>
            <h2 className='text-[#0077c8] font-bold font-[InterItalic] ml-6 text-2xl lg:text-4xl'>Estamos aqui para ajudar!</h2>
            <h4 className='text-[#0077c8] ml-6 mb-4 text-[1rem]'>Nos envie um email!</h4>
            <form className='flex flex-col self-center items-center w-[90%] p-4 gap-4 border-2 border-[#0077c8] rounded-[20px]'>
              <div className='flex flex-col sm:flex-row justify-around w-full gap-4'>
                <label className='flex flex-col font-bold text-[#0077c8] w-full sm:w-[45%] md:text-[1.2rem] lg:text-xl'>
                  Insira o seu nome:
                  <input placeholder='Digite aqui...' className='font-normal border-b-2 border-[#0077c8] p-2 text-[0.95rem] md:text-[1rem]' type='text' wfd-id='id0' />
                </label>
                <label className='flex flex-col font-bold text-[#0077c8] w-full sm:w-[45%] md:text-[1.2rem] lg:text-xl'>
                  Insira o seu email:
                  <input placeholder='Digite aqui...' className='font-normal border-b-2 border-[#0077c8] p-2 text-[0.95rem] md:text-[1rem]' type='email' wfd-id='id1' />
                </label>
              </div>
              <div className='flex flex-col sm:flex-row justify-around w-full gap-4'>
                <label className='flex flex-col font-bold text-[#0077c8] w-full sm:w-[45%] md:text-[1.2rem] lg:text-xl'>
                  Assunto:
                  <input placeholder='Digite aqui...' className='font-normal border-b-2 border-[#0077c8] p-2 text-[0.95rem] md:text-[1rem]' type='text' wfd-id='id2' />
                </label>
                <label className='flex flex-col font-bold text-[#0077c8] w-full sm:w-[45%] md:text-[1.2rem] lg:text-xl'>
                  Insira o corpo do email:
                  <textarea
                    placeholder='Digite aqui...'
                    className='font-normal border border-[#0077c8] rounded-xl mt-2 p-2 h-[110px] lg:h-[120px] text-[0.95rem] md:text-[1rem]'></textarea>
                </label>
              </div>
              <button className='flex items-center justify-around self-end rounded-lg p-2 bg-[#0077c8] transition h-10 w-36 shadow' type='submit'>
                <div className='flex items-center justify-around gap-2'>
                  <span className='text-white font-bold text-xl'>Enviar</span>
                  <img
                    src='./Icons/email_branco_icon.svg'
                    alt='Ícone de um email, dentro do botão. Sinaliza que ao clicá-lo, o email redigido acima será enviado por email.'
                  />
                  <img src='./Icons/seta_direita_icon.svg' alt='Ícone de uma seta para a direita, dentro do botão. Sinaliza que ao clicá-lo, o email será enviado.' />
                </div>
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}
