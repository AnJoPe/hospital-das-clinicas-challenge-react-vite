export type Paciente = {
  id?: string | number;
  nomePaciente: string;
  idade: string | number;
  altura: string | number;
  peso: string | number;
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
