import { useState } from "react";

type PerguntaProps = {
  pergunta: string;
  resposta: string;
};

export default function Pergunta({ pergunta, resposta }: PerguntaProps) {
  const [aberta, setAberta] = useState(false);
  return (
    <>
      <div className={`bg-[#8fc3e6] rounded-2xl flex flex-col px-3 shadow-md self-center w-[90%] md:w-[85%] transition-all duration-300 ${aberta ? "pb-3" : ""}`}>
        <div className='flex gap-8 p-4 items-center' onClick={() => setAberta((prev) => !prev)}>
          <img
            src={aberta ? "./Icons/fechar_aba.svg" : "./Icons/abrir_aba.svg"}
            alt='Ícone de mais. Sinaliza a opção de abrir a pergunta frequente para disponibilizar a sua resposta.'
            className='h-6'
          />
          <h2 className='font-semibold text-[#0077c8] text-xl sm:text-[1.35rem] md:text-2xl lg:text-[1.75rem] xl:text-[2rem] select-none'>{pergunta}</h2>
        </div>
        <div className={`overflow-hidden transition duration-300 ${aberta ? "max-h-96" : "max-h-0"}`}>
          <p className='text-white text-justify font-semibold sm:font-normal sm:text-[1.15rem] md:text-xl'>{resposta}</p>
        </div>
      </div>
    </>
  );
}
