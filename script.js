document.getElementById('salaryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const salary = parseFloat(document.getElementById('salary').value);

    if (salary > 0) {
        const essentials = salary * 0.50;
        const lifestyle = salary * 0.30;
        const savings = salary * 0.20;

        document.getElementById('essentials').textContent = `Gastos essenciais: R$ ${essentials.toFixed(2)}`;
        document.getElementById('lifestyle').textContent = `Estilo de vida: R$ ${lifestyle.toFixed(2)}`;
        document.getElementById('savings').textContent = `Reserva: R$ ${savings.toFixed(2)}`;

        document.getElementById('results').classList.remove('hidden');
        document.getElementById('menu').classList.remove('hidden');
    }
});

document.getElementById('showMenu').addEventListener('click', function() {
    document.getElementById('menu').classList.remove('hidden');
});

document.getElementById('exit').addEventListener('click', function() {
    document.getElementById('results').classList.add('hidden');
    document.getElementById('menu').classList.add('hidden');
});

function showDetails(category) {
    let message = '';
    switch (category) {
        case 'essentials':
            message = document.getElementById('essentials').textContent;
            break;
        case 'lifestyle':
            message = document.getElementById('lifestyle').textContent;
            break;
        case 'savings':
            message = document.getElementById('savings').textContent;
            break;
    }
    alert(message);
}
