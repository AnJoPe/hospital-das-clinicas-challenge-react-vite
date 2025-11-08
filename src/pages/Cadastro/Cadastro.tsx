import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSidebar } from "../../context/SidebarContext";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

type Paciente = {
  nomePaciente: string;
  idade: string;
  altura: string;
  peso: string;
  rg: string;
  cpf: string;
  telefone: string;
  endereco: Endereco;
  sexo: string;
};
type Endereco = {
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  cep: string;
};
type Convenio = {
  operadora: string;
  numeroCarteirinha: string;
  dataInicio: string;
  dataValidade: string;
};

export default function Cadastro() {
  const { open } = useSidebar();
  const navigate = useNavigate();
  const { register, watch, setValue } = useForm<Endereco>();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [paciente, setPaciente] = useState<Paciente>({
    nomePaciente: "",
    idade: "",
    altura: "",
    peso: "",
    rg: "",
    cpf: "",
    telefone: "",
    endereco: {} as Endereco,
    sexo: "",
  });
  const [convenio, setConvenio] = useState<Convenio>({
    operadora: "",
    numeroCarteirinha: "",
    dataInicio: "",
    dataValidade: "",
  });
  const [erros, setErros] = useState({
    nomePaciente: false,
    idade: false,
    altura: false,
    peso: false,
    rg: false,
    cpf: false,
    telefone: false,
    email: false,
    senha: false,
    sexo: false,
    cep: false,
    cidade: false,
    bairro: false,
    logradouro: false,
    numero: false,
  });

  const cep = watch("cep");
  const API_URL = "https://api-sistema-hc.onrender.com/";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
      return;
    }
    if (id === "senha") {
      setSenha(value);
      return;
    }
    if (id === "operadora" || id === "numeroCarteirinha" || id === "dataInicio" || id === "dataValidade") {
      setConvenio({
        ...convenio,
        [id]: value,
      });
      return;
    }
    setPaciente({
      ...paciente,
      [id]: id == "idade" || id == "altura" || id == "peso" ? Number(value) : value,
    });
  };

  const handlePost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    if (!email || !senha) {
      alert("Email e senha são obrigatórios!");
      return;
    }

    setLoading(true);

    const endereco = {
      logradouro: watch("logradouro"),
      numero: watch("numero"),
      bairro: watch("bairro"),
      cidade: watch("cidade"),
      cep: watch("cep"),
    };

    const pacienteCompleto = {
      nomePaciente: paciente.nomePaciente,
      idade: paciente.idade,
      altura: paciente.altura,
      peso: paciente.peso,
      rg: paciente.rg,
      cpf: paciente.cpf,
      telefone: paciente.telefone.replace(/[\s\-()]/g, ""),
      endereco: endereco,
      sexo: paciente.sexo,
    };

    try {
      const response = await fetch(API_URL + "paciente", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(pacienteCompleto),
      });

      if (response.ok) {
        const pacienteCriado = await response.json();

        let idConvenio = null;

        if (convenio.operadora && convenio.numeroCarteirinha) {
          const convenioData = {
            operadora: convenio.operadora,
            numeroCarteirinha: convenio.numeroCarteirinha,
            dataInicio: convenio.dataInicio || null,
            dataValidade: convenio.dataValidade || null,
            idPaciente: pacienteCriado,
          };

          const convenioResponse = await fetch(API_URL + "convenio_medico", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(convenioData),
          });

          if (convenioResponse.ok) {
            const convenioCriado = await convenioResponse.json();
            idConvenio = convenioCriado;
          } else {
            const erroConvenio = await convenioResponse.text();
            console.error("Aviso: Erro ao cadastrar convênio: " + erroConvenio);
          }
        }

        const contaPacienteData = {
          email: email,
          senha: senha,
          paciente: {
            id: pacienteCriado,
          },
          ...(idConvenio && { convenioMedico: { id: idConvenio } }),
        };

        const contaResponse = await fetch(API_URL + "conta_paciente", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(contaPacienteData),
        });

        if (contaResponse.ok) {
          alert(`Paciente ${paciente.nomePaciente} cadastrado com sucesso!`);
          navigate("/login");
        } else {
          const erroContaResponse = await contaResponse.text();
          alert("Erro ao cadastrar conta: " + erroContaResponse);
          setLoading(false);
        }
      } else {
        const erro = await response.text();
        alert("Erro ao cadastrar paciente: " + erro);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      alert("Erro de conexão com o servidor!");
      setLoading(false);
    }
  };

  const buscarEndereco = useCallback(
    async (cep: string) => {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const dados = await response.json();

        setValue("cidade", dados.localidade);
        setValue("bairro", dados.bairro);
        setValue("logradouro", dados.logradouro);
      } catch (error) {
        console.error("Erro ao buscar o endereço: ", error);
      }
    },
    [setValue]
  );

  useEffect(() => {
    if ((cep && cep.length === 8) || (cep && cep.length === 9)) {
      buscarEndereco(cep);
    }
  }, [cep, buscarEndereco]);

  function resetForm(input: string) {
    setErros((prev) => ({ ...prev, [input]: false }));
  }

  const getLabelClass = (campoErro: boolean) => `flex flex-col font-semibold text-[1.2rem] lg:text-xl ${campoErro ? "text-[#FF0000]" : "text-[#0077C8]"}`;

  const getInputClass = (campoErro: boolean) =>
    `p-2 text-black font-normal text-[1.2rem] lg:text-xl outline-none border-b-2 ${campoErro ? "border-[#FF0000]" : "border-[#0077C8]"}`;

  return (
    <>
      <div
        className={`absolute right-0 z-0 w-full overflow-hidden transition-all duration-300 flex flex-col ${
          open ? "md:w-[77%] lg:w-[81%] xl:w-[84%]" : "md:w-[93%] lg:w-[94.5%] xl:w-[96%]"
        }`}>
        <Header titulo='Cadastro' icone='./Icons/cadastro_icon.svg' alt='Ícone de Pessoa simbolizando a página de cadastro' />
        <Navbar />
        <form onSubmit={handlePost} className='flex flex-col m-auto w-[90%] md:w-[75%] lg:w-[60%] xl:w-[45%] py-4 my-4 gap-5 text-[#0077C8] font-bold text-2xl'>
          {/* INFOS PESSOAIS */}
          <h3 className='text-[#0077C8] font-bold font-[InterItalic] text-2xl'>Informações Pessoais:</h3>
          <label htmlFor='nomePaciente' className={getLabelClass(erros.nomePaciente)}>
            Nome:
            <input
              id='nomePaciente'
              name='nomePaciente'
              type='text'
              maxLength={250}
              placeholder={erros.nomePaciente ? "Nome inválido!" : ""}
              value={paciente.nomePaciente}
              onFocus={() => resetForm("nomePaciente")}
              onChange={handleChange}
              className={getInputClass(erros.nomePaciente)}
              required
            />
          </label>
          <div className='flex flex-col sm:flex-row gap-7 md:gap-10'>
            <label htmlFor='rg' className={getLabelClass(erros.rg) + " sm:w-1/2"}>
              RG:
              <input
                id='rg'
                name='rg'
                type='text'
                inputMode='numeric'
                pattern='\d{2}\.?\d{3}\.?\d{3}-?\d{1}'
                minLength={9}
                maxLength={12}
                placeholder={erros.rg ? "RG inválido!" : "00.000.000-0"}
                value={paciente.rg}
                onFocus={() => resetForm("rg")}
                onChange={handleChange}
                className={getInputClass(erros.rg)}
                required
              />
            </label>
            <label htmlFor='cpf' className={getLabelClass(erros.cpf) + " sm:w-1/2"}>
              CPF:
              <input
                id='cpf'
                name='cpf'
                type='text'
                inputMode='numeric'
                pattern='\d{3}\.?\d{3}\.?\d{3}-?\d{2}'
                minLength={11}
                maxLength={14}
                placeholder={erros.cpf ? "CPF inválido!" : "000.000.000-00"}
                value={paciente.cpf}
                onFocus={() => resetForm("cpf")}
                onChange={handleChange}
                className={getInputClass(erros.cpf)}
                required
              />
            </label>
          </div>
          <div className='flex flex-col sm:flex-row gap-7 md:gap-10'>
            <label htmlFor='idade' className={getLabelClass(erros.idade) + " sm:w-1/2"}>
              Idade:
              <input
                id='idade'
                name='idade'
                type='number'
                min={0}
                max={115}
                maxLength={3}
                placeholder={erros.idade ? "Idade inválida!" : ""}
                value={paciente.idade}
                onFocus={() => resetForm("idade")}
                onChange={handleChange}
                className={getInputClass(erros.idade)}
                required
              />
            </label>
            <label htmlFor='sexo' className={getLabelClass(erros.sexo) + " sm:w-1/2"}>
              Sexo:
              <select
                id='sexo'
                name='sexo'
                value={paciente.sexo}
                onFocus={() => resetForm("sexo")}
                onChange={handleChange}
                className={getInputClass(erros.sexo)}
                required>
                <option value=''>Selecionar</option>
                <option value='masculino'>Masculino</option>
                <option value='feminino'>Feminino</option>
                <option value='outro'>Outro</option>
              </select>
            </label>
          </div>
          <div className='flex flex-col sm:flex-row gap-7 md:gap-10'>
            <label htmlFor='telefone' className={getLabelClass(erros.telefone) + " sm:w-1/2"}>
              Telefone:
              <input
                id='telefone'
                name='telefone'
                type='tel'
                inputMode='tel'
                pattern='[0-9\s\-]*'
                minLength={11}
                maxLength={13}
                placeholder={erros.telefone ? "Telefone inválido!" : "00 00000-0000"}
                value={paciente.telefone}
                onFocus={() => resetForm("telefone")}
                onChange={handleChange}
                className={getInputClass(erros.telefone)}
                required
              />
            </label>
            <label htmlFor='altura' className={getLabelClass(erros.altura) + " sm:w-1/4"}>
              Altura (cm):
              <input
                id='altura'
                name='altura'
                type='number'
                step='any'
                min={83}
                max={250}
                maxLength={3}
                placeholder={erros.altura ? "Altura inválida!" : ""}
                value={paciente.altura}
                onFocus={() => resetForm("altura")}
                onChange={handleChange}
                className={getInputClass(erros.altura)}
                required
              />
            </label>
            <label htmlFor='peso' className={getLabelClass(erros.peso) + " sm:w-1/4"}>
              Peso (kg):
              <input
                id='peso'
                name='peso'
                type='number'
                step='any'
                min={1}
                max={635}
                maxLength={3}
                placeholder={erros.peso ? "Peso inválido!" : ""}
                value={paciente.peso}
                onFocus={() => resetForm("peso")}
                onChange={handleChange}
                className={getInputClass(erros.peso)}
                required
              />
            </label>
          </div>

          {/* CONVÊNIO MÉDICO */}
          <h3 className='text-[#0077C8] font-bold font-[InterItalic] mt-5 text-2xl'>Convênio Médico:</h3>
          <label htmlFor='operadora' className={getLabelClass(false)}>
            Operadora:
            <input
              id='operadora'
              name='operadora'
              type='text'
              maxLength={250}
              placeholder='Nome da operadora'
              value={convenio.operadora}
              onChange={handleChange}
              className={getInputClass(false)}
            />
          </label>
          <div className='flex flex-col sm:flex-row gap-7 md:gap-10'>
            <label htmlFor='numeroCarteirinha' className={getLabelClass(false) + " sm:w-1/2"}>
              Número da Carteirinha:
              <input
                id='numeroCarteirinha'
                name='numeroCarteirinha'
                type='text'
                maxLength={40}
                placeholder='Número da carteirinha'
                value={convenio.numeroCarteirinha}
                onChange={handleChange}
                className={getInputClass(false)}
              />
            </label>
            <label htmlFor='dataInicio' className={getLabelClass(false) + " sm:w-1/4"}>
              Data Início:
              <input id='dataInicio' name='dataInicio' type='date' value={convenio.dataInicio} onChange={handleChange} className={getInputClass(false)} />
            </label>
            <label htmlFor='dataValidade' className={getLabelClass(false) + " sm:w-1/4"}>
              Data Validade:
              <input id='dataValidade' name='dataValidade' type='date' value={convenio.dataValidade} onChange={handleChange} className={getInputClass(false)} />
            </label>
          </div>

          {/* ENDEREÇO */}
          <h3 className='text-[#0077C8] font-bold font-[InterItalic] mt-5 text-2xl'>Endereço:</h3>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col sm:flex-row gap-7 md:gap-10'>
              <label htmlFor='cep' className={getLabelClass(erros.cep) + " sm:w-1/3"}>
                CEP:
                <input
                  id='cep'
                  type='text'
                  minLength={8}
                  maxLength={9}
                  pattern='[0-9]{5}-?[0-9]{3}'
                  placeholder={erros.cep ? "CEP inválido!" : "00000-000"}
                  {...register("cep")}
                  onFocus={() => resetForm("cep")}
                  onChange={handleChange}
                  className={getInputClass(erros.cep)}
                  required
                />
              </label>
              <label htmlFor='cidade' className={getLabelClass(erros.cidade) + " sm:w-2/3"}>
                Cidade:
                <input
                  id='cidade'
                  type='text'
                  {...register("cidade")}
                  className='p-2 text-gray-500 font-normal text-[1.2rem] lg:text-xl outline-none border-b-2 border-[#0077C8] cursor-not-allowed'
                  readOnly
                />
              </label>
            </div>
            <label htmlFor='bairro' className={getLabelClass(erros.bairro)}>
              Bairro:
              <input
                id='bairro'
                type='text'
                {...register("bairro")}
                className='p-2 text-gray-500 font-normal text-[1.2rem] lg:text-xl outline-none border-b-2 border-[#0077C8] cursor-not-allowed'
                readOnly
              />
            </label>
            <div className='flex flex-col sm:flex-row gap-7 md:gap-10'>
              <label htmlFor='logradouro' className={getLabelClass(erros.logradouro) + " sm:w-2/3"}>
                Logradouro:
                <input
                  id='logradouro'
                  type='text'
                  {...register("logradouro")}
                  className='p-2 text-gray-500 font-normal text-[1.2rem] lg:text-xl outline-none border-b-2 border-[#0077C8] cursor-not-allowed'
                  readOnly
                />
              </label>
              <label htmlFor='numero' className={getLabelClass(erros.numero) + " sm:w-1/3"}>
                Número:
                <input
                  id='numero'
                  type='number'
                  min={1}
                  max={99999}
                  placeholder={erros.numero ? "Número inválido!" : ""}
                  {...register("numero")}
                  onFocus={() => resetForm("numero")}
                  className={getInputClass(erros.numero)}
                  required
                />
              </label>
            </div>
          </div>

          {/* EMAIL E SENHA */}
          <h3 className='text-[#0077C8] font-bold font-[InterItalic] mt-5 text-2xl'>Conta de Acesso:</h3>
          <label htmlFor='email' className={getLabelClass(erros.email)}>
            Email:
            <input
              id='email'
              name='email'
              type='email'
              placeholder='seuemail@dominio.com'
              value={email}
              onFocus={() => resetForm("email")}
              onChange={handleChange}
              className={getInputClass(erros.email)}
              autoComplete='username'
              required
            />
          </label>
          <label htmlFor='senha' className={getLabelClass(erros.senha)}>
            Senha:
            <input
              id='senha'
              name='senha'
              type='password'
              value={senha}
              onFocus={() => resetForm("senha")}
              onChange={handleChange}
              className={getInputClass(erros.senha)}
              autoComplete='current-password'
              required
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className={`flex items-center justify-around self-end rounded-lg p-2 h-10 text-white text-xl font-bold transition-all duration-300 shadow ${
              loading ? "bg-gray-400 w-[170px] cursor-not-allowed" : "bg-[#0077C8] w-[150px]"
            }`}>
            {loading ? "Cadastrando..." : "Cadastrar"}
          </button>
        </form>
        <p className='self-center pb-4'>
          Já possui uma conta?{" "}
          <Link to='/login' className='text-[#0077C8]'>
            Faça login
          </Link>
        </p>
      </div>
    </>
  );
}
