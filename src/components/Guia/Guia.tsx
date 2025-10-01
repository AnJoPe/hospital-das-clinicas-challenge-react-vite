import { Link } from "react-router-dom";

type GuiaProps = {
  link: string;
  texto: string;
  imagem: string;
  alt: string
};

export default function Guia({ link, texto, imagem, alt }: GuiaProps) {
  return (
    <>
      <li className='bg-[#8FC3E2] rounded-2xl'>
        <Link to={link} className='flex justify-between items-center gap-3 px-4 py-3 min-w-[380px] lg:min-w-[420px] text-[1.65rem] lg:text-[1.75rem] xl:text-[2rem]'>
          {texto}
          <img src={imagem} alt={alt} className='h-[80%]' />
        </Link>
      </li>
    </>
  );
}
