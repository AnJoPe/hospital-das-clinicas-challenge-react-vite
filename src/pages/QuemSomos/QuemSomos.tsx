import Header from "../../components/Header/Header";
import Integrante from "../../components/Integrante/Integrante";

export default function QuemSomos() {
  return (
    <>
      <div className='w-[84%] fixed right-0 p-3'>
        <Header titulo='Quem Somos' icone='./Icons/quem_somos_icon.svg' />
        <div className='flex justify-center gap-10 pt-12'>
          <Integrante
            imagem='../src/Assets/Integrantes/andre_rosa.png'
            nome='André Rosa Colombo'
            rm='563112'
            github='https://github.com/AndreColombo'
            linkedin='https://www.linkedin.com/in/andrerosacolombo'
          />
          <Integrante
            imagem='../src/Assets/Integrantes/jose_diogo.png'
            nome='José Diogo da Silva Neves'
            rm='562341'
            github='https://github.com/ZeDio'
            linkedin='https://www.linkedin.com/in/jos%C3%A9-diogo-d-33634b280'
          />
          <Integrante
            imagem='../src/Assets/Integrantes/pedro_miranda.png'
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
