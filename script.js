document.getElementById('cadastroReserva').addEventListener('submit', function (event) {
    event.preventDefault();

    const reserva = {
        placa: document.getElementById('placa').value,
        proprietario: document.getElementById('proprietario').value,
        apartamento: document.getElementById('apartamento').value,
        bloco: document.getElementById('bloco').value,
        modelo: document.getElementById('modelo').value,
        cor: document.getElementById('cor').value,
        vaga: document.getElementById('vaga').value
    }

    console.log(`Informações da reserva cadastrada:
    Placa do Veículo: ${reserva.placa}
    Nome do Proprietário: ${reserva.proprietario}
    Número do Apartamento: ${reserva.apartamento}
    Bloco do Apartamento: ${reserva.bloco}
    Modelo do Veículo: ${reserva.modelo}
    Cor do Veículo: ${reserva.cor}
    Número da Vaga de Estacionamento: ${reserva.vaga}`);

    alert('Sua reserva foi cadastrada com sucesso!');
    document.getElementById('cadastroReserva').reset();
});
