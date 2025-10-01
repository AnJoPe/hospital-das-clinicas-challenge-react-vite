import { useSidebar } from "../../context/SidebarContext";
import { useState } from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

export default function Contato() {
  const { open } = useSidebar();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [corpo, setCorpo] = useState("");
  const [erros, setErros] = useState({ nome: false, email: false, assunto: false, corpo: false });
  const [enviando, setEnviando] = useState(false);

  function validarEmail(email: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function resetForm(input: string) {
    setErros((prev) => ({ ...prev, [input]: false }));
  }

  function enviarForm(e: React.FormEvent) {
    e.preventDefault();

    const errosTemp = {
      nome: nome.trim().length < 3,
      email: !validarEmail(email),
      assunto: assunto.trim().length < 3,
      corpo: corpo.trim().length < 3,
    };
    setErros(errosTemp);

    if (Object.values(errosTemp).some((error) => error)) return;

    setEnviando(true);

    const emails = "pedrohm2709@gmail.com,andrerosacolombo18@gmail.com,jose.diogo100407@gmail.com";
    const assuntoTexto = `Email de ${nome}: ${assunto}`;
    const enviar_email = `mailto:${emails}?subject=${encodeURIComponent(assuntoTexto)}&body=${encodeURIComponent(corpo)}`;
    window.open(enviar_email);

    setTimeout(() => {
      setNome("");
      setEmail("");
      setAssunto("");
      setCorpo("");
      setErros({ nome: false, email: false, assunto: false, corpo: false });
    }, 1000);
  }

  const getFormClass = (campoErro: boolean) =>
    `flex flex-col self-center items-center w-[90%] p-4 gap-4 border-2 rounded-[20px] ${campoErro ? "border-[#FF0000]" : "border-[#0077C8]"}`;

  const getLabelClass = (campoErro: boolean) =>
    `flex flex-col font-bold w-full sm:w-[45%] md:text-[1.2rem] ${campoErro ? "text-[#FF0000]" : "text-[#0077C8] lg:text-xl"}`;

  const getInputClass = (campoErro: boolean, isTextArea = false) =>
    `${isTextArea ? "border rounded-xl mt-2 p-2 h-[110px] lg:h-[120px]" : "border-b-2"} font-normal text-black p-2 text-[0.95rem] md:text-[1rem] outline-none ${
      campoErro ? "border-[#FF0000]" : "border-[#0077C8] lg:text-xl"
    }`;

  const buttonClass = `relative flex items-center justify-around self-end rounded-lg p-2 bg-[#0077C8] transition-all duration-300 h-10 shadow ${
    enviando ? "w-[90px]" : "w-[150px]"
  }`;
  const buttonWrapperClass = `absolute flex items-center justify-around gap-2 transition-all duration-300 ${enviando ? "-left-[85%]" : ""}`;
  const buttonTextClass = `text-white font-bold text-xl transition-all duration-300 ${enviando ? "w-[90px]" : ""}`;

  return (
    <>
      <div
        className={`absolute right-0 z-0 w-full overflow-hidden transition-all duration-300 ${
          open ? "md:w-[77%] lg:w-[81%] xl:w-[84%]" : "md:w-[93%] lg:w-[94.5%] xl:w-[96%]"
        }`}>
        <Header titulo='Contato' icone='./Icons/contato.svg' alt='Ícone de Telefone simbolizando a página de contato' />
        <Navbar />
        <div className='flex flex-col gap-6 w-full py-7 items-center '>
          <section className='flex flex-col sm:flex-row justify-center w-[90%] lg:h-[28vh]'>
            <div className='flex flex-col justify-around items-start w-full h-full lg:w-[60%]'>
              <h3 className='text-[#0077C8] font-bold font-[InterItalic] mb-3 w-[70%] lg:w-[75%] text-2xl'>Entre em contato com o Hospital das Clínicas</h3>
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
              <h3 className='text-[#0077C8] font-bold font-[InterItalic] mb-3 text-2xl'>Endereço</h3>
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
            <h2 className='text-[#0077C8] font-bold font-[InterItalic] ml-6 text-2xl lg:text-4xl'>Estamos aqui para ajudar!</h2>
            <h4 className='text-[#0077C8] ml-6 mb-4 text-[1rem]'>Nos envie um email!</h4>
            <form className={getFormClass(erros.nome || erros.email || erros.assunto || erros.corpo)} onSubmit={enviarForm}>
              <div className='flex flex-col sm:flex-row justify-around w-full gap-4'>
                <label htmlFor='nomeInput' className={getLabelClass(erros.nome)}>
                  Insira o seu nome:
                  <input
                    placeholder={erros.nome ? "Nome inválido, mínimo de 3 caracteres!" : "Digite aqui..."}
                    type='text'
                    onFocus={() => resetForm("nome")}
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className={getInputClass(erros.nome)}
                  />
                </label>
                <label htmlFor='emailInput' className={getLabelClass(erros.email)}>
                  Insira o seu email:
                  <input
                    placeholder={erros.email ? "Email inválido!" : "Digite aqui..."}
                    type='email'
                    onFocus={() => resetForm("email")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={getInputClass(erros.email)}
                  />
                </label>
              </div>
              <div className='flex flex-col sm:flex-row justify-around w-full gap-4'>
                <label htmlFor='assuntoInput' className={getLabelClass(erros.assunto)}>
                  Assunto:
                  <input
                    placeholder={erros.assunto ? "Assunto inválido, mínimo de 3 caracteres!" : "Digite aqui..."}
                    type='text'
                    onFocus={() => resetForm("assunto")}
                    value={assunto}
                    onChange={(e) => setAssunto(e.target.value)}
                    className={getInputClass(erros.assunto)}
                  />
                </label>
                <label htmlFor='corpoInput' className={getLabelClass(erros.corpo)}>
                  Insira o corpo do email:
                  <textarea
                    placeholder={erros.corpo ? "Corpo inválido, mínimo de 3 caracteres!" : "Digite aqui..."}
                    onFocus={() => resetForm("corpo")}
                    value={corpo}
                    onChange={(e) => setCorpo(e.target.value)}
                    className={getInputClass(erros.corpo, true)}
                  />
                </label>
              </div>
              <button type='submit' className={buttonClass}>
                <div className={buttonWrapperClass}>
                  <span className={buttonTextClass}>Enviar</span>
                  <img src='./Icons/email_branco_icon.svg' alt='Ícone de email' />
                  <img src='./Icons/seta_direita_icon.svg' alt='Ícone de seta para a direita' />
                </div>
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}
