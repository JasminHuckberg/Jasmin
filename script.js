
function atualizarClasses() {
    const genero = document.getElementById('genero').value;
    const classeSelect = document.getElementById('classe');
    classeSelect.innerHTML = ''; 
    const classesMasculinas = ['Guerreiro', 'Arqueiro', 'Mago', 'Clérigo'];
    const classesFemininas = ['Guerreira', 'Arqueira', 'Maga', 'Clériga'];
    const classesNeutras = ['Guerreiro', 'Arqueiro', 'Mago', 'Clérigo', 'Guerreira', 'Arqueira', 'Maga', 'Clériga'];

    let classes = [];

    if (genero === 'masculino') {
        classes = classesMasculinas;
    } else if (genero === 'feminino') {
        classes = classesFemininas;
    } else {
        classes = classesNeutras;
    }

    classes.forEach(classe => {
        const option = document.createElement('option');
        option.value = classe.toLowerCase();
        option.textContent = classe;
        classeSelect.appendChild(option);
    });
}


function iniciarJogo() {
    const nome = document.getElementById('nome').value;
    const genero = document.getElementById('genero').value;
    const classe = document.getElementById('classe').value;

    const introducao = `
         <p class="fundo-roxo">Bem-vindo, ${nome}, ${genero === 'masculino' ? 'o Valente' : genero === 'feminino' ? 'a Benevolente' : 'valente'} ${classe}! Sua jornada em Eldoria começa agora.</p>
         
         <p class="fundo-roxo">Em um tempo distante, além das montanhas nebulosas e dos oceanos cintilantes, existia um reino encantado chamado Eldoria. Este mundo era repleto de maravilhas e mistérios, onde a magia fluía como rios de luz e criaturas fantásticas habitavam florestas antigas e cidades flutuantes.</p>
         <p class="fundo-roxo">Eldoria era governada por uma rainha sábia e benevolente, conhecida como Rainha Elara, cujo poder era derivado de um cristal mágico que brilhava com todas as cores do arco-íris. Sob seu reinado, o reino prosperava em harmonia e paz.</p>
         <p class="fundo-roxo">No entanto, nas sombras das montanhas, uma força sombria começava a despertar. Um antigo feiticeiro, banido há séculos, estava determinado a recuperar seu poder e mergulhar Eldoria em trevas eternas.</p>
         <p class="fundo-roxo">Uma carroça seguia em direção ao reino de Stonewall, conhecido por seus turistas e comércio vibrante. Um novato cobre seu rosto e carrega uma bolsa pesada, a carruagem estava a caminho para uma entrega importante e você conseguiu carona após pagar a pequena taxa.</p>
         <p class="fundo-roxo">Você escuta um barulho e olha para trás, vocês estão sendo perseguidos.</p>
    `;

    document.getElementById('introducao').innerHTML = introducao;

   
    document.getElementById('passo-0').classList.remove('ativo');
    
    document.getElementById('passo-1').classList.add('ativo');
}


document.querySelectorAll('.btn-proximo').forEach(button => {
    button.addEventListener('click', () => {
        const proximoPasso = button.getAttribute('data-proximo');
        document.querySelector('.passo.ativo').classList.remove('ativo');
        document.getElementById(`passo-${proximoPasso}`).classList.add('ativo');
    });
});


document.addEventListener('DOMContentLoaded', atualizarClasses);
