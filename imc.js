const resultado = document.getElementById('resultado');

function imc () 
{
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;

    validacao(nome, altura, peso)
    mascara()
    
}

function validacao(nome,altura, peso)
{
    if(nome.length  && altura.length  && peso.length) 
    { 
        calcular(nome,altura, peso)

    }else{
        
        resultado.innerHTML =  `<div class="resultado2">Preencha todos os campos!</div>`;
        return;
    }   
}

function mascara()
{
    $(document).ready(function() {
        $("#altura").keyup(function(){
            $('#altura').mask("0.00");
        });
    })
}

function calcular(nome, altura, peso)
{
    let classificacao = '';
    const valorIMC = (peso / (altura * altura)).toFixed(1);

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau I.';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II';
        }else {
            classificacao = 'com obesidade grau III. Cuidado!';
        }
        if(valorIMC !== 'NaN'){

            resultado.innerHTML = `<div class="resultado2"> ${nome} seu IMC é ${valorIMC} e você está ${classificacao}</div>`; 
        }
}

const calcula = document.getElementById('calcula');

calcula.addEventListener('click', imc);

