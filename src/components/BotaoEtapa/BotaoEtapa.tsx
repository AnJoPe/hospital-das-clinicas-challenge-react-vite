type EtapaProps = {
  etapa: string;
  texto: string;
};

export default function BotaoEtapa({ etapa, texto }: EtapaProps) {
  return (
    <>
      <a className='text-white font-bold rounded-2xl bg-[#0077c8] mt-4 py-2 px-4 text-[0.95rem] xl:text-[1.35rem]' href={etapa}>
        {texto}
      </a>
    </>
  );
}
