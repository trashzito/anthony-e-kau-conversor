function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

function converterMoeda() {
    const valor = parseFloat(document.getElementById('valorMoeda').value);
    const de = document.getElementById('deMoeda').value.toUpperCase();
    const para = document.getElementById('paraMoeda').value.toUpperCase();

    const cotacoes = {
        'USD': 5.0,
        'EUR': 6.0,
        'BRL': 1.0,
    };

    if (de in cotacoes && para in cotacoes) {
        const valorEmBrl = valor / cotacoes[de];
        const resultado = valorEmBrl * cotacoes[para];
        document.getElementById('resultadoMoeda').innerText = `${valor} ${de} = ${resultado.toFixed(2)} ${para}`;
    } else {
        document.getElementById('resultadoMoeda').innerText = "Moeda não suportada.";
    }
}

function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const imc = peso / (altura ** 2);
    document.getElementById('resultadoIMC').innerText = `Seu IMC é: ${imc.toFixed(2)}`;
}

function converterMedidas() {
    const valor = parseFloat(document.getElementById('valorMedida').value);
    const tipo = document.getElementById('tipoConversao').value;
    let resultado;

    switch (tipo) {
        case 'metrosParaKilometros':
            resultado = valor / 1000;
            document.getElementById('resultadoMedidas').innerText = `${valor} metros = ${resultado.toFixed(2)} km`;
            break;
        case 'quilometrosParaMetros':
            resultado = valor * 1000;
            document.getElementById('resultadoMedidas').innerText = `${valor} km = ${resultado.toFixed(2)} metros`;
            break;
        case 'centimetrosParaMetros':
            resultado = valor / 100;
            document.getElementById('resultadoMedidas').innerText = `${valor} cm = ${resultado.toFixed(2)} metros`;
            break;
    }
}
