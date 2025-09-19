import { useState } from "react";

type PerguntaProps = {
  pergunta: string;
  resposta: string;
};

export default function Pergunta({ pergunta, resposta }: PerguntaProps) {
  const [aberta, setAberta] = useState(false);
  return (
    <>
      <div className={`bg-[#8fc3e6] rounded-2xl flex flex-col px-3 shadow-md max-w-7xl self-center w-full transition-all duration-300 ${aberta ? "pb-3" : ""}`}>
        <div className='flex gap-8 p-3 items-center' onClick={() => setAberta((prev) => !prev)}>
          <img src={aberta ? "./Icons/fechar_aba.svg" : "./Icons/abrir_aba.svg"} alt='' className='h-6' />
          <h2 className='text-3xl font-semibold text-[#0077c8]'>{pergunta}</h2>
        </div>
        <div className={`overflow-hidden transition duration-300 ${aberta ? "max-h-96" : "max-h-0"}`}>
          <p className='text-xl text-white mb-3'>{resposta}</p>
        </div>
      </div>
    </>
  );
}
