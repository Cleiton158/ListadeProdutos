const produtos = [
  { nome: "Console Nintendo MegaCube", categoria: "Games", preco: 400, imagem: "imagens/game2.jpg" },
  { nome: "Console Nintendo 64", categoria: "Games", preco: 800, imagem: "imagens/game.jpg" },
  { nome: "Console Playstation 5 + 2 Controles + Headset Pulse", categoria: "Games", preco: 4500, imagem: "imagens/game1.jpg" },
  { nome: "Fone de Ouvido Bluetooth", categoria: "Periféricos", preco: 450, imagem: "imagens/fone.jpg" },
  { nome: "HD Externo Samsung 1TB", categoria: "Periféricos", preco: 357, imagem: "imagens/Per5.jpg" },
  { nome: "Impressora Multifuncional Epson", categoria: "Periféricos", preco: 1750, imagem: "imagens/Per1.jpg" },
  { nome: "Kit Teclado + Mouse Gamer", categoria: "Periféricos", preco: 114, imagem: "imagens/Per.jpg" },
  { nome: "Pen Drive Twist 64GB Preto Multilaser", categoria: "Periféricos", preco: 57, imagem: "imagens/Per4.jpg" },
  { nome: "Projetor Epson Powerlite", categoria: "Periféricos", preco: 4250, imagem: "imagens/Per3.jpg" },
  { nome: "Webcam para Notebook", categoria: "Periféricos", preco: 170, imagem: "imagens/Per2.jpg" },
  { nome: "Pneu 800/70R38 Alliance Agristar", categoria: "Pneus", preco: 19937, imagem: "imagens/pneu.jpg" },
  { nome: "Pneu 175/70R18 Goodyear", categoria: "Pneus", preco: 450, imagem: "imagens/pneu1.jpg" },
  { nome: "Pneu Carro de Mão", categoria: "Pneus", preco: 79, imagem: "imagens/pneu2.jpg" },
  { nome: "Tripé Universal Câmera e Celular", categoria: "Acessórios", preco: 210, imagem: "imagens/Ace.jpg" },
  { nome: "Capa Silicone para Celular", categoria: "Acessórios", preco: 75, imagem: "imagens/Ace1.jpg" },
  { nome: "Suporte para TV", categoria: "Acessórios", preco: 35, imagem: "imagens/Ace2.jpg" },
  { nome: "Carregador Portátil Power Bank 10.000 Mah", categoria: "Acessórios", preco: 87, imagem: "imagens/Ace3.jpg" },
  { nome: "Central Multimídia Android, Tela IPS 7", categoria: "Acessórios", preco: 572, imagem: "imagens/Ace4.jpg" },
];

function filtrarProdutos() {
  const nomeFiltro = document.getElementById("filtroNome").value.toLowerCase();
  const categoriaFiltro = document.getElementById("filtroCategoria").value;
  const lista = document.getElementById("listaProdutos");
  const mensagem = document.getElementById("mensagem");
  const resumo = document.getElementById("resumo");

  const produtosFiltrados = produtos.filter(p => {
    const nomeMatch = p.nome.toLowerCase().includes(nomeFiltro);
    const categoriaMatch = categoriaFiltro === "" || p.categoria === categoriaFiltro;
    return nomeMatch && categoriaMatch;
  });

  lista.innerHTML = "";
  mensagem.textContent = "";
  resumo.textContent = "";

  if (produtosFiltrados.length === 0) {
    mensagem.textContent = "Nenhum Produto Encontrado";
    return;
  }

  let total = 0;

  produtosFiltrados.forEach(p => {
    total += p.preco;

    const div = document.createElement("div");
    div.className = "produto";
    div.innerHTML = `
      <img src="${p.imagem}" alt="${p.nome}">
      <div class="info">
        <strong>${p.nome}</strong>
        <span>Categoria: ${p.categoria}</span>
        <span>Preço: R$ ${p.preco.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
      </div>
    `;
    lista.appendChild(div);
  });

  resumo.textContent = `Total de produtos: ${produtosFiltrados.length} | Valor total: R$ ${total.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

window.onload = filtrarProdutos;