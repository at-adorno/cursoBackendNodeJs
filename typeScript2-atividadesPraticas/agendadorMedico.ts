import console = require("console");

//declarando as interfaces e tipos
interface Agendamento {
    id: string;
    paciente: string;
    data: Date;
    observacoes?: string;
    dataCancelamento?: Date | null;
    status: "agendada" | "concluída" | "cancelada";
}

const agendamentos: Agendamento[] = [];

// Funções para gerenciar os agendamentos
function agendarConsulta(agendamento: Agendamento): void {
    if (agendamento.data < new Date()) {
        console.log('Não é possível agendar uma consulta para uma data passada.');
        return;
    }
    if (agendamentos.some(app => app.id === agendamento.id)) {
        console.log(`Agendamento com ID ${agendamento.id} já existe.`);
        return;
    }
    agendamentos.push(agendamento);
    //tratamento da data
    const dataBR = agendamento.data.toLocaleDateString('pt-BR');
    //tratamento da hora
    const horaBR = agendamento.data.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    console.log(`Consulta agendada para ${agendamento.paciente} em ${dataBR} às ${horaBR}.`);
    return;
}

function cancelarConsulta(id: string): void {
    const agendamento = agendamentos.find(app => app.id === id);
    if (agendamento) {
        agendamento.dataCancelamento = new Date();
        agendamento.status = 'cancelada';
        console.log(`Consulta com ID ${id} foi cancelada.`);
    } else {
        console.log(`Agendamento com ID ${id} não encontrado.`);
    }
}

function listarConsultas(): Agendamento[] {
    return agendamentos;
}

function listarPorStatus(status: string): Agendamento[] {
    return agendamentos.filter(app => app.status === status);
}

// exemplos de agendamentos
const agendamento1: Agendamento = {
    id: '1',
    paciente: 'André Tavares Adorno',
    data: new Date('2025-09-20T10:00:00'),
    observacoes: 'Primeira Consulta',
    status: 'agendada'
};

const agendamento2: Agendamento = {
    id: '2',
    paciente: 'Dona Maria',
    data: new Date('2026-10-02T11:00:00'),
    observacoes: 'Retorno de Consulta',
    status: 'agendada'
};

// Adicionando agendamentos
agendarConsulta(agendamento1);
agendarConsulta(agendamento2);
agendarConsulta(agendamento1);

// Listando todos os agendamentos
console.log('Todos os Agendamentos:', listarConsultas());

// Cancelando um agendamento
cancelarConsulta('1');

// Listando agendamentos por status
console.log('Agendamentos com status "agendada":', listarPorStatus('agendada'));
console.log('Agendamentos com status "cancelada":', listarPorStatus('cancelada'));