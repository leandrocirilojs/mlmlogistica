// Função para alternar o formulário do WhatsApp
function toggleForm() {
    const form = document.getElementById("whatsapp-form");
    form.classList.toggle("open");
}

// Função para enviar mensagem pelo WhatsApp
function enviarWhatsApp() {
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;

    if (!nome || !telefone || !email) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const mensagem = `Olá, meu nome é ${nome}. Meu telefone é ${telefone} e meu e-mail é ${email}. Gostaria de mais informações.`;
    const url = `https://wa.me/5511987654321?text=${encodeURIComponent(mensagem)}`;
    
    window.open(url, "_blank");
}

// Configuração da cotação de frete
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('distancia');
    const distanciaValue = document.getElementById('distancia-value');
    const valorFrete = document.getElementById('valor-frete');

    if (slider && distanciaValue && valorFrete) {
        slider.addEventListener('input', function() {
            const distancia = this.value;
            const valor = distancia * 5;
            
            distanciaValue.textContent = distancia;
            valorFrete.textContent = `R$ ${valor.toFixed(2).replace('.', ',')}`;
        });
    }

    // Configuração do botão de cotação
    const cotacaoBtn = document.querySelector('#cotacao .btn');
    if (cotacaoBtn) {
        cotacaoBtn.addEventListener('click', solicitarCotacao);
    }
});

// Função para solicitar cotação
function solicitarCotacao() {
    const partida = document.getElementById('partida')?.value;
    const destino = document.getElementById('destino')?.value;
    const distancia = document.getElementById('distancia')?.value;
    const valor = document.getElementById('valor-frete')?.textContent;

    if (!partida || !destino) {
        alert("Por favor, preencha os endereços de partida e destino.");
        return;
    }

    const mensagem = `*COTAÇÃO DE FRETE*\n\n` +
                   `📍 *Origem:* ${partida}\n` +
                   `🏁 *Destino:* ${destino}\n` +
                   `📏 *Distância:* ${distancia} km\n` +
                   `💵 *Valor Estimado:* ${valor}\n\n` +
                   `Por favor, confirme os dados ou ajuste se necessário.`;
    
    window.open(`https://wa.me/5511987654321?text=${encodeURIComponent(mensagem)}`, "_blank");
}

