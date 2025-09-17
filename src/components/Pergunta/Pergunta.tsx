type PerguntaProps = {
  pergunta: string;
  resposta: string;
};

export default function Pergunta({ pergunta, resposta }: PerguntaProps) {
  return (
    <>
      <div className='bg-[#8fc3e6] rounded-2xl flex flex-col px-3 shadow-md max-w-7xl self-center w-full'>
        <div className='flex gap-8 p-3'>
          <img src='./Icons/abrir_aba.svg' alt='' />
          <h2 className='text-3xl font-semibold font-[Inter] text-[#0077c8]'>{pergunta}</h2>
        </div>
        <p className='text-xl text-white font-[Inter] mb-3 hidden'>{resposta}</p>
      </div>
    </>
  );
}
