const resultado = document.getElementById('resultado');

function imc () 
{
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;

    calcular(nome,altura, peso)
    validacao(nome, altura, peso)
    

}

function validacao(nome, altura, peso)
{
    if (nome == '' && altura == '' && peso == '') 
    { 
        resultado.textContent = 'Preencha todos os campos!';
        return;
    }
    
}

function calcular(nome, altura, peso) 
{
    validacao(nome, altura, peso);
    let classificacao = '';
    const valorIMC = (peso / (altura * altura)).toFixed(1);

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau I.';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II';
        }else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }
        if(valorIMC !== 'NaN'){

            resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`; 
        }
}

const calcula = document.getElementById('calcula');

calcula.addEventListener('click', imc); //evento de click