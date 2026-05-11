let totalSalario = 0;
let totalHabitantes = 0;
let maiorIdade = -Infinity;
let menorIdade = Infinity;
let mulheresAte5000 = 0;

let continuar = true;

while (true) {
    let idade = parseInt(prompt("Digite a idade (ou um número negativo para encerrar):"));
    
    // Condição de parada: idade negativa
    if (idade < 0) {
        break;
    }
    
    let sexo = prompt("Digite o sexo (M/F):").toUpperCase();
    let salario = parseFloat(prompt("Digite o salário:"));
    
    // Atualiza maior e menor idade
    if (idade > maiorIdade) maiorIdade = idade;
    if (idade < menorIdade) menorIdade = idade;
    
    // Calcula média de salário
    totalSalario += salario;
    totalHabitantes++;
    
    // Conta mulheres com salário até R$ 5000
    if (sexo === 'F' && salario <= 5000) {
        mulheresAte5000++;
    }
}

// Resultados
if (totalHabitantes > 0) {
    let mediaSalario = totalSalario / totalHabitantes;
    alert(`
    --- Resultados da Pesquisa ---
    Média de salário do grupo: R$ ${mediaSalario.toFixed(2)}
    Maior idade: ${maiorIdade}
    Menor idade: ${menorIdade}
    Quantidade de mulheres com salário até R$ 5000: ${mulheresAte5000}
    `);
} else {
    alert("Nenhum dado foi inserido.");
}
