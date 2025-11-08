import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSidebar } from "../../context/SidebarContext";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

type Paciente = {
  id: number;
  nomePaciente: string;
  idade: number;
  altura: number;
  peso: number;
  rg: string;
  cpf: string;
  telefone: string;
  sexo: string;
  endereco: {
    logradouro: string;
    numero: string;
    bairro: string;
    cidade: string;
    cep: string;
  };
};

type Convenio = {
  id: number;
  operadora: string;
  numeroCarteirinha: string;
  dataInicio: string;
  dataValidade: string;
};

export default function Perfil() {
  const { open } = useSidebar();
  const navigate = useNavigate();
  const { email } = useParams<{ email: string }>();
  const [paciente, setPaciente] = useState<Paciente | null>(null);
  const [convenio, setConvenio] = useState<Convenio | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_URL = "https://api-sistema-hc.onrender.com/";

  useEffect(() => {
    const buscarDados = async () => {
      if (!email) {
        setError("Email não fornecido!");
        setLoading(false);
        return;
      }

      try {
        const responseContas = await fetch(API_URL + "conta_paciente");
        if (!responseContas.ok) throw new Error("Erro ao buscar contas");

        const contas = await responseContas.json();
        const contaEncontrada = contas.find((conta: any) => conta.email === email);

        if (!contaEncontrada) {
          setError("Conta não encontrada!");
          setLoading(false);
          return;
        }

        const responsePaciente = await fetch(API_URL + `paciente/${contaEncontrada.paciente.id}`);
        if (responsePaciente.ok) {
          const dadosPaciente = await responsePaciente.json();
          setPaciente(dadosPaciente);
        }

        const responseConvenio = await fetch(API_URL + "convenio_medico");
        if (responseConvenio.ok) {
          const convenios = await responseConvenio.json();
          const convenioEncontrado = convenios.find((conv: any) => conv.idPaciente === contaEncontrada.paciente.id);
          if (convenioEncontrado) {
            setConvenio(convenioEncontrado);
          }
        }

        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Erro ao carregar dados do perfil");
        setLoading(false);
      }
    };

    buscarDados();
  }, [email]);

  if (loading) {
    return (
      <div
        className={`absolute right-0 z-0 w-full overflow-hidden transition-all duration-300 flex flex-col ${
          open ? "md:w-[77%] lg:w-[81%] xl:w-[84%]" : "md:w-[93%] lg:w-[94.5%] xl:w-[96%]"
        }`}>
        <Header titulo='Perfil' icone='./Icons/perfil_icon.svg' alt='Ícone de Pessoa simbolizando a página de perfil' />
        <Navbar />
        <div className='flex items-center justify-center m-auto py-20'>
          <p className='text-2xl text-[#0077C8] font-bold'>Carregando...</p>
        </div>
      </div>
    );
  }

  if (error || !paciente) {
    return (
      <div
        className={`absolute right-0 z-0 w-full overflow-hidden transition-all duration-300 flex flex-col ${
          open ? "md:w-[77%] lg:w-[81%] xl:w-[84%]" : "md:w-[93%] lg:w-[94.5%] xl:w-[96%]"
        }`}>
        <Header titulo='Perfil' icone='./Icons/perfil_icon.svg' alt='Ícone de Pessoa simbolizando a página de perfil' />
        <Navbar />
        <div className='flex flex-col items-center justify-center m-auto py-20 gap-4'>
          <p className='text-2xl text-[#FF0000] font-bold'>{error}</p>
          <Link to='/login' className='text-[#0077C8] font-bold text-lg'>
            Voltar ao Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        className={`absolute right-0 z-0 w-full overflow-hidden transition-all duration-300 flex flex-col ${
          open ? "md:w-[77%] lg:w-[81%] xl:w-[84%]" : "md:w-[93%] lg:w-[94.5%] xl:w-[96%]"
        }`}>
        <Header titulo='Perfil' icone='./Icons/perfil_icon.svg' alt='Ícone de Pessoa simbolizando a página de perfil' />
        <Navbar />

        <div className='flex flex-col m-auto w-[90%] md:w-[75%] lg:w-[60%] xl:w-[45%] py-4 my-4 gap-6'>
          {/* INFORMAÇÕES PESSOAIS */}
          <div>
            <h3 className='text-3xl text-[#0077C8] font-bold font-[InterItalic] mb-5'>Informações Pessoais:</h3>
            <ul className='flex flex-col gap-3 text-[1.15rem] sm:text-base lg:text-[1.2rem] xl:text-xl'>
              <li className='flex items-center gap-2'>
                <span className='font-bold'>Nome:</span> {paciente.nomePaciente}
              </li>
              <li className='flex items-center gap-2'>
                <span className='font-bold'>Idade:</span> {paciente.idade} anos
              </li>
              <li className='flex items-center gap-2'>
                <span className='font-bold'>Sexo:</span> {paciente.sexo.charAt(0).toUpperCase() + paciente.sexo.slice(1)}
              </li>
              <li className='flex items-center gap-2'>
                <span className='font-bold'>RG:</span> {paciente.rg}
              </li>
              <li className='flex items-center gap-2'>
                <span className='font-bold'>CPF:</span> {paciente.cpf}
              </li>
              <li className='flex items-center gap-2'>
                <span className='font-bold'>Telefone:</span> {paciente.telefone}
              </li>
              <li className='flex items-center gap-2'>
                <span className='font-bold'>Altura:</span> {paciente.altura} cm
              </li>
              <li className='flex items-center gap-2'>
                <span className='font-bold'>Peso:</span> {paciente.peso} kg
              </li>
            </ul>
          </div>

          <hr className='border-2 my-3 border-[#8fc3e6] rounded-full' />

          {/* ENDEREÇO */}
          <div>
            <h3 className='text-3xl text-[#0077C8] font-bold font-[InterItalic] mb-5'>Endereço:</h3>
            <ul className='flex flex-col gap-3 text-[1.15rem] sm:text-base lg:text-[1.2rem] xl:text-xl'>
              <li className='flex items-center gap-2'>
                <span className='font-bold'>Logradouro:</span> {paciente.endereco.logradouro}
              </li>
              <li className='flex items-center gap-2'>
                <span className='font-bold'>Número:</span> {paciente.endereco.numero}
              </li>
              <li className='flex items-center gap-2'>
                <span className='font-bold'>Bairro:</span> {paciente.endereco.bairro}
              </li>
              <li className='flex items-center gap-2'>
                <span className='font-bold'>Cidade:</span> {paciente.endereco.cidade}
              </li>
              <li className='flex items-center gap-2'>
                <span className='font-bold'>CEP:</span> {paciente.endereco.cep}
              </li>
            </ul>
          </div>

          <hr className='border-2 my-3 border-[#8fc3e6] rounded-full' />

          {/* CONVÊNIO MÉDICO */}
          {convenio ? (
            <div>
              <h3 className='text-3xl text-[#0077C8] font-bold font-[InterItalic] mb-5'>Convênio Médico:</h3>
              <ul className='flex flex-col gap-3 text-[1.15rem] sm:text-base lg:text-[1.2rem] xl:text-xl'>
                <li className='flex items-center gap-2'>
                  <span className='font-bold'>Operadora:</span> {convenio.operadora}
                </li>
                <li className='flex items-center gap-2'>
                  <span className='font-bold'>Número da Carteirinha:</span> {convenio.numeroCarteirinha}
                </li>
                <li className='flex items-center gap-2'>
                  <span className='font-bold'>Data de Início:</span> {new Date(convenio.dataInicio).toLocaleDateString("pt-BR")}
                </li>
                <li className='flex items-center gap-2'>
                  <span className='font-bold'>Data de Validade:</span> {new Date(convenio.dataValidade).toLocaleDateString("pt-BR")}
                </li>
              </ul>
            </div>
          ) : (
            <div className='text-lg text-gray-500 italic'>Nenhum convênio médico cadastrado.</div>
          )}

          <div className='flex gap-4 justify-end pt-4'>
            <button
              onClick={() => navigate("/login")}
              className='rounded-lg p-2 px-6 h-10 text-white text-lg font-bold bg-[#FF0000] transition-all duration-300 shadow hover:bg-red-700'>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
