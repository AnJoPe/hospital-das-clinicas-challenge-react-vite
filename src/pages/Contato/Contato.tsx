import Header from "../../components/Header/Header";

export default function Contato() {
  return (
    <>
      <div className='w-[84%] fixed right-0 p-3'>
        <Header titulo='Contato' icone='./Icons/contato.svg' />
        <div className='pt-10 flex flex-col gap-6 w-full'>
          <section className='flex h-64 w-[90%] self-center'>
            <div className='flex flex-col justify-around w-[60%]'>
              <h3 className='text-[#0077c8] text-2xl font-bold font-[InterItalic]'>Entre em contato com o Hospital das Clínicas</h3>
              <ul className='flex flex-col text-xl gap-3'>
                <li className='flex items-center gap-2'>
                  <span className='font-bold'>Tel.:</span>(11) 2661-1048
                  <img src='./Icons/contato.svg' alt='Ícone de um telefone, sinalizando que o número descrito pode ser contatado via telefone.' className='h-7' />
                </li>
                <li className='flex items-center gap-2'>
                  <span className='font-bold'>Tel.:</span>(11) 2661-1561
                  <img src='./Icons/contato.svg' alt='Ícone de um telefone, sinalizando que o número descrito pode ser contatado via telefone.' className='h-7' />
                </li>
                <li className='flex items-center gap-2'>
                  <span className='font-bold'>E-mail:</span>ouvidoria.geral@hc.fm.usp.br
                  <img src='./Icons/email.svg' alt='Ícone de um email, sinalizando que o email descrito pode ser contatado via email.' className='h-7' />
                </li>
              </ul>
            </div>
            <div className='flex flex-col justify-evenly w-[40%]'>
              <h3 className='text-[#0077c8] text-2xl font-bold font-[InterItalic]'>Endereço</h3>
              <ul className='flex flex-col text-xl gap-2'>
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

          <section className='flex flex-col w-[75%] justify-between self-center'>
            <h2 className='text-[#0077c8] text-4xl font-bold font-[InterItalic] ml-6'>Estamos aqui para ajudar!</h2>
            <h4 className='text-[#0077c8] ml-6 mb-4'>Nos envie um email!</h4>
            <form className='flex flex-col self-center items-center w-[90%] p-4 gap-4 border-2 border-[#0077c8] rounded-2xl'>
              <div className='flex justify-around w-full'>
                <label className='flex flex-col font-bold text-xl text-[#0077c8] w-[45%]'>
                  Insira o seu nome:
                  <input placeholder='Digite aqui...' className='font-normal border-b-2 border-[#0077c8] p-2' type='text' wfd-id='id0' />
                </label>

                <label className='flex flex-col font-bold text-xl text-[#0077c8] w-[45%]'>
                  Insira o seu email:
                  <input placeholder='Digite aqui...' className='font-normal border-b-2 border-[#0077c8] p-2' type='email' wfd-id='id1' />
                </label>
              </div>
              <div className='flex justify-around w-full'>
                <label className='flex flex-col font-bold text-xl text-[#0077c8] w-[45%]'>
                  Assunto:
                  <input placeholder='Digite aqui...' className='font-normal border-b-2 border-[#0077c8] p-2' type='text' wfd-id='id2' />
                </label>

                <label className='flex flex-col font-bold text-xl text-[#0077c8] w-[45%]'>
                  Insira o corpo do email:
                  <textarea placeholder='Digite aqui...' className='font-normal border rounded-xl border-[#0077c8] h-32 mt-2 p-2'></textarea>
                </label>
              </div>
              <button className='flex items-center justify-around self-end rounded-lg p-2 bg-[#0077c8] transition h-10 w-36' type='submit'>
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
