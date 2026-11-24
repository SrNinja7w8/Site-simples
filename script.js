//DADOS DOS PRODUTOS (nome, preço, foto e descrição)
const produtos = {
  blusa: {
    nome: "Blusa Básica",
    preco: "R$ 49,90",
    foto: "img/blusa.jpg",
    descricao: "Blusa de gola redonda em malha de algodão macio, com caimento ajustado ao corpo. Ideal para o dia a dia e fácil de combinar. Disponível nos tamanhos P, M e G. Lavar à mão ou na máquina em ciclo delicado."
  },
  camiseta: {
    nome: "Camiseta Oversized",
    preco: "R$ 59,90",
    foto: "img/camiseta.jpg",
    descricao: "Camiseta de modelagem ampla (oversized) em algodão 100%, com toque leve e confortável. Combina com jeans e calças de alfaiataria. Disponível nos tamanhos P, M, G e GG. Não precisa passar muito."
  },
  calca: {
    nome: "Calça Alfaiataria",
    preco: "R$ 99,90",
    foto: "img/calca.jpg",
    descricao: "Calça de cintura alta e perna larga em tecido de alfaiataria, com bolsos laterais e acabamento elegante. Serve tanto para o trabalho quanto para passeios. Disponível nos tamanhos 36 ao 44."
  },
  moletom: {
    nome: "Moletom Básico",
    preco: "R$ 129,90",
    foto: "img/moletom.jpg",
    descricao: "Moletom com capuz e bolso canguru, forrado por dentro para manter o corpo aquecido. Tecido macio que não perde a forma depois das lavagens. Disponível nos tamanhos P, M, G e GG."
  }
};

let produtoAtual = ""; // guarda qual produto está aberto

//ABRIR a janela com os detalhes do produto clicado
function abrirDetalhes(id) {
  const p = produtos[id];
  produtoAtual = p.nome;

  document.getElementById("modal-img").src = p.foto;
  document.getElementById("modal-nome").textContent = p.nome;
  document.getElementById("modal-preco").textContent = p.preco;
  document.getElementById("modal-descricao").textContent = p.descricao;
  document.getElementById("int-resposta").textContent = "";

  document.getElementById("modal").style.display = "flex";
}

//FECHAR a janela
function fecharDetalhes() {
  document.getElementById("modal").style.display = "none";
}

//FORMULÁRIO DE INTERESSE (ilustração: não envia nada para lugar nenhum)
function enviarInteresse(event) {
  event.preventDefault(); // impede a página de recarregar
  const nome = document.getElementById("int-nome").value;
  document.getElementById("int-resposta").textContent =
    "✅ Obrigado, " + nome + "! Registramos seu interesse em: " + produtoAtual;
  event.target.reset(); // limpa o formulário
}

//FILTRO: mostra só os produtos da categoria escolhida
function filtrar(categoria) {
  const lista = document.querySelectorAll(".produto");

  for (let i = 0; i < lista.length; i++) {
    if (categoria === "todos" || lista[i].classList.contains(categoria)) {
      lista[i].style.display = "block";
    } else {
      lista[i].style.display = "none";
    }
  }
}

//CONTATO: simula o envio do formulário da página de contato
function enviarContato(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  document.getElementById("resposta").textContent =
    "✅ Obrigado, " + nome + "! Recebemos sua mensagem.";
  event.target.reset();
}
