let produtos = [];
let clientes = [];
let vendas = [];

/* Troca de páginas */
function mostrar(pagina) {
  document.querySelectorAll(".pagina").forEach(p => p.style.display = "none");
  document.getElementById(pagina).style.display = "block";
}

/* ===== ESTOQUE ===== */
function addProduto(e) {
  e.preventDefault();
  const nome = document.getElementById("produtoNome").value.trim();
  const tamanho = document.getElementById("produtoTamanho").value.trim();
  const preco = parseFloat(document.getElementById("produtoPreco").value);

  if (!nome || !tamanho || isNaN(preco)) {
    alert("Preencha todos os campos corretamente!");
    return;
  }

  produtos.push({ nome, tamanho, preco });
  atualizarEstoque();
  e.target.reset();
}

function atualizarEstoque() {
  const tbody = document.querySelector("#tabelaEstoque tbody");
  tbody.innerHTML = "";
  produtos.forEach(p => {
    tbody.innerHTML += `<tr>
      <td>${p.nome}</td>
      <td>${p.tamanho}</td>
      <td>R$ ${p.preco.toFixed(2)}</td>
    </tr>`;
  });
}

/* ===== CLIENTES ===== */
function addCliente(e) {
  e.preventDefault();
  const nome = document.getElementById("clienteNome").value.trim();
  const cpf = document.getElementById("clienteCPF").value.trim();

  if (!nome || !cpf) {
    alert("Preencha todos os campos corretamente!");
    return;
  }

  clientes.push({ nome, cpf });
  atualizarClientes();
  e.target.reset();
}

function atualizarClientes() {
  const tbody = document.querySelector("#tabelaClientes tbody");
  tbody.innerHTML = "";
  clientes.forEach(c => {
    tbody.innerHTML += `<tr>
      <td>${c.nome}</td>
      <td>${c.cpf}</td>
    </tr>`;
  });
}


/* ===== VENDAS ===== */
function addVenda(e) {
  e.preventDefault();

  const cliente = document.getElementById("cliente").value.trim();
  const produto = document.getElementById("produto").value.trim();
  const tamanho = document.getElementById("tamanho").value.trim();
  const preco = parseFloat(document.getElementById("preco").value);

  if (!cliente || !produto || !tamanho || isNaN(preco)) {
    alert("Preencha todos os campos corretamente!");
    return;
  }

  const data = new Date().toLocaleDateString("pt-BR");
  vendas.push({ cliente, produto, tamanho, preco, data });
  atualizarVendas();
  e.target.reset();
}

function atualizarVendas() {
  const tbody = document.querySelector("#tabelaVendas tbody");
  tbody.innerHTML = "";
  vendas.forEach(v => {
    tbody.innerHTML += `<tr>
      <td>${v.cliente}</td>
      <td>${v.produto}</td>
      <td>${v.tamanho}</td>
      <td>R$ ${v.preco.toFixed(2)}</td>
      <td>${v.data}</td>
    </tr>`;
  });
}

/* ===== Evento de submit Vendas ===== */
document.getElementById("formVenda").addEventListener("submit", addVenda);
