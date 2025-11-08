import { useSidebar } from "../../context/SidebarContext";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Integrante from "../../components/Integrante/Integrante";

export default function QuemSomos() {
  const { open } = useSidebar();
  return (
    <>
      <div
        className={`absolute right-0 z-0 w-full overflow-hidden transition-all duration-300 ${
          open ? "md:w-[77%] lg:w-[81%] xl:w-[84%]" : "md:w-[93%] lg:w-[94.5%] xl:w-[96%]"
        }`}>
        <Header titulo='Quem Somos' icone='./Icons/quem_somos_icon.svg' alt='Ícone com três pessoas, simbolizando os três autores do website.' />
        <Navbar />
        <div className='flex flex-col items-center gap-6 py-8 lg:flex-row lg:flex-wrap lg:justify-center xl:gap-10'>
          <Integrante
            imagem='/Integrantes/andre_rosa.png'
            nome='André Rosa Colombo'
            rm='563112'
            github='https://github.com/AndreColombo'
            linkedin='https://www.linkedin.com/in/andrerosacolombo'
          />
          <Integrante
            imagem='/Integrantes/jose_diogo.png'
            nome='José Diogo da Silva Neves'
            rm='562341'
            github='https://github.com/ZeDio'
            linkedin='https://www.linkedin.com/in/jos%C3%A9-diogo-d-33634b280'
          />
          <Integrante
            imagem='/Integrantes/pedro_miranda.png'
            nome='Pedro Henrique M. de Vasconcelos'
            rm='562682'
            github='https://github.com/pmiranda27'
            linkedin='https://www.linkedin.com/in/pedro-henrique-miranda-de-vasconcelos/'
          />
        </div>
      </div>
    </>
  );
}
