function calcularIdade() {
    const dia = document.getElementById('dia').value;
    const mes = document.getElementById('mes').value;
    const ano = document.getElementById('ano').value;

    if (dia && mes && ano) {
        const hoje = new Date();
        const dataNasc = new Date(ano, mes - 1, dia);
        const diffMs = hoje - dataNasc;
        const diffDate = new Date(diffMs);

        const years = diffDate.getUTCFullYear() - 1970;  // Ajusta o ano base
        const months = diffDate.getUTCMonth();
        const days = diffDate.getUTCDate() - 1;

        document.getElementById('years').innerText = years;
        document.getElementById('months').innerText = months;
        document.getElementById('days').innerText = days;
    } else {
        document.getElementById('years').innerText = '--';
        document.getElementById('months').innerText = '--';
        document.getElementById('days').innerText = '--';
    }
}
