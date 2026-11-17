const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');
const whatsapp = 'https://wa.me/551978363549';

function addBubble(text, who) {
  const bubble = document.createElement('div');
  bubble.className = `bubble ${who}`;
  bubble.textContent = text;
  chatMessages.appendChild(bubble);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getReply(message) {
  const m = message.toLowerCase();
  if (m.includes('coleção') || m.includes('produto') || m.includes('colar') || m.includes('brinco') || m.includes('anel') || m.includes('pulseira')) {
    return 'Que bom que você quer conhecer nossas peças! ✨ Acesse a página Coleção pelo menu para ver as inspirações. Para consultar disponibilidade e valores, fale com nossa equipe pelo WhatsApp: ' + whatsapp;
  }
  if (m.includes('entrega') || m.includes('frete') || m.includes('prazo')) {
    return 'As opções e prazos de entrega precisam ser confirmados pela equipe conforme sua localização. Clique em WhatsApp no menu para consultar.';
  }
  if (m.includes('pagamento') || m.includes('pix') || m.includes('cartão') || m.includes('preço') || m.includes('valor')) {
    return 'Para confirmar preços, formas de pagamento e disponibilidade atualizados, nossa equipe pode ajudar pelo WhatsApp: ' + whatsapp;
  }
  if (m.includes('atendente') || m.includes('pessoa') || m.includes('humano') || m.includes('whatsapp')) {
    return 'Claro! Nossa equipe pode continuar o atendimento pelo WhatsApp. Acesse o botão WhatsApp no topo da página. 💬';
  }
  if (m.includes('oi') || m.includes('olá') || m.includes('bom dia') || m.includes('boa tarde') || m.includes('boa noite')) {
    return 'Olá! 💛 Seja bem-vinda à VALENNA. Você gostaria de conhecer a coleção ou falar com nossa equipe?';
  }
  return 'Obrigada pela mensagem! Ainda estou aprendendo. Posso ajudar com coleção, entregas, pagamentos ou encaminhar você para nossa equipe pelo WhatsApp.';
}

function sendMessage(text) {
  const clean = text.trim();
  if (!clean) return;
  addBubble(clean, 'user');
  chatInput.value = '';
  window.setTimeout(() => addBubble(getReply(clean), 'bot'), 350);
}

if (chatForm) {
  chatForm.addEventListener('submit', event => {
    event.preventDefault();
    sendMessage(chatInput.value);
  });
  document.querySelectorAll('[data-question]').forEach(button => {
    button.addEventListener('click', () => sendMessage(button.dataset.question));
  });
}
