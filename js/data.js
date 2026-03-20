let usuarioLogado = null;
let paginaAtual = 'login';
let voluntarios = [];

// Dados iniciais de exemplo
const VOLUNTARIOS_INICIAIS = [
    {
        id: 1,
        nome: "João Silva",
        telefone: "(11) 98765-4321",
        endereco: "Rua A, 123 - São Paulo, SP",
        redeSocial: "@joaosilva",
        areaAtuacao: "Logística",
        areaFormacao: "Administração",
        experienciaVoluntariado: true,
        localExperiencia: "Cruz Vermelha",
        horarioDisponivel: "Fins de semana",
        publicoPreferencia: "Crianças",
        hobby: "Futebol",
        tipo: "Sistemático"
    },
    {
        id: 2,
        nome: "Maria Santos",
        telefone: "(11) 99876-5432",
        endereco: "Av. B, 456 - São Paulo, SP",
        redeSocial: "@mariasantos",
        areaAtuacao: "Saúde",
        areaFormacao: "Enfermagem",
        experienciaVoluntariado: true,
        localExperiencia: "Hospital Beneficente",
        horarioDisponivel: "Terças e quintas",
        publicoPreferencia: "Idosos",
        hobby: "Leitura",
        tipo: "Sistemático",
        profissao: "Dentista"
    },
    {
        id: 3,
        nome: "Pedro Costa",
        telefone: "(11) 97654-3210",
        endereco: "Rua C, 789 - São Paulo, SP",
        redeSocial: "@pedrocosta",
        areaAtuacao: "Construção",
        areaFormacao: "Engenharia Civil",
        experienciaVoluntariado: false,
        localExperiencia: "",
        horarioDisponivel: "Eventos pontuais",
        publicoPreferencia: "Famílias",
        hobby: "Arquitetura",
        tipo: "Pontual",
        profissao: "Arquiteto"
    },
    {
        id: 4,
        nome: "Ana Paula",
        telefone: "(11) 96543-2109",
        endereco: "Rua D, 321 - São Paulo, SP",
        redeSocial: "@anapaulapsico",
        areaAtuacao: "Saúde Mental",
        areaFormacao: "Psicologia",
        experienciaVoluntariado: true,
        localExperiencia: "Centro de Acolhimento",
        horarioDisponivel: "Fins de semana",
        publicoPreferencia: "Adolescentes",
        hobby: "Meditação",
        tipo: "Sistemático",
        profissao: "Psicólogo"
    },
    {
        id: 5,
        nome: "Carlos Mendes",
        telefone: "(11) 95432-1098",
        endereco: "Rua E, 654 - São Paulo, SP",
        redeSocial: "@carlosmendes",
        areaAtuacao: "Manutenção",
        areaFormacao: "Eletricista",
        experienciaVoluntariado: true,
        localExperiencia: "Projeto Luz para Todos",
        horarioDisponivel: "Sábados",
        publicoPreferencia: "Comunidades",
        hobby: "Eletrônica",
        tipo: "Pontual",
        profissao: "Eletricista"
    }
];
