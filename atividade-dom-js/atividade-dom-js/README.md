# Loja Rosas do Deserto

Atividade prática de manipulação do DOM com JavaScript puro (sem frameworks, sem bibliotecas).

Para deixar a atividade com uma cara mais real, escolhi um tema único para todos os exercícios: uma loja online de rosas do deserto. Assim cada exercício vira uma "parte" fictícia da loja — catálogo, carrinho, estoque, cadastro de cliente e por aí vai.

---

## Estrutura de Diretórios

```
atividade-dom-js/
├── index.html             
├── README.md
├── ex1-lista-itens/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── ex2-contador/
├── ex3-tarefas/
├── ex4-tema/
├── ex5-cadastro/
├── ex9-imc/
└── ex10-estoque/
```
---

## Os exercícios

### 1. Lista de produtos com destaque por tamanho do nome
Uma `<ul>` fixa no HTML com os produtos da loja. O JS percorre os `<li>`, mede o `textContent.length` de cada um e adiciona a classe `.nome-grande` nos que passam de 20 caracteres.

> *Ideia por trás:* nomes muito compridos quebram o layout do card do produto, então a loja sinaliza quais precisam de um nome curto pro catálogo.

**Conceitos:** `querySelectorAll`, `textContent`, `classList.add`

---

### 2. Contador de mudas
Um número na tela com os botões `+` e `-`, simulando a quantidade de mudas que o cliente quer comprar.

Detalhe que coloquei: o contador não desce abaixo de 1, porque não faz sentido comprar zero mudas.

**Conceitos:** `getElementById`, `addEventListener("click")`, variável de estado

---

### 3. Lista de cuidados com a planta
Uma lista fixa de tarefas de cuidado com a planta. Ao clicar, a tarefa fica riscada; clicando de novo, volta ao normal.

O `classList.toggle()` — já faz o "adiciona se não tem, remove se tem" sozinho, sem precisar de `if`. O risco no texto vem do CSS (`text-decoration: line-through`), não do JS.

**Conceitos:** `classList.toggle`, `this` dentro do listener, separação JS/CSS

---

### 4. Alternador de tema claro/escuro
Um botão que troca o tema da página inteira.

Em vez de mudar `style.backgroundColor` elemento por elemento, o JS só adiciona/remove a classe `.tema-escuro` no `<body>` e deixa o CSS resolver o resto. Uma linha de JavaScript, e a página toda muda.

**Conceitos:** `document.body`, `classList.toggle`, herança de estilos

---

### 5. Cadastro de cliente
Formulário com nome, e-mail e idade. Ao enviar:
- `event.preventDefault()` impede a página de recarregar;
- valida se algum campo ficou vazio (mostra mensagem vermelha se ficou);
- monta os dados formatados numa `<div>` que aparece logo abaixo;
- limpa o formulário com `form.reset()`.

**Conceitos:** evento `submit`, `preventDefault`, validação, `innerHTML`

---

### 9. Calculadora de IMC (adaptada da lista anterior)
O classificador de IMC que antes rodava no console virou formulário de verdade: campos de peso e altura, resultado na tela.

Fórmula: `IMC = peso / (altura × altura)`

| IMC | Classificação |
|-----|---------------|
| < 18,5 | Abaixo do peso |
| 18,5 a 24,9 | Peso normal |
| 25 a 29,9 | Sobrepeso |
| ≥ 30 | Obesidade |

Usei `parseFloat` + `isNaN` pra tratar quando o usuário digita algo que não é número, e `toFixed(2)` pra mostrar só duas casas decimais.

**Conceitos:** `parseFloat`, `isNaN`, `if/else if`, `toFixed`

---

### 10. Controle de estoque (adaptado da lista anterior)
O controle de estoque que era só `console.log` agora é renderizado na tela. Os produtos ficam num array de objetos (`nome`, `quantidade`, `minimo`) e o JS cria as `<div>` uma por uma com `createElement` + `appendChild`.

Quem está **abaixo do mínimo** ganha a classe `.estoque-baixo` (fundo vermelho) e um aviso no texto — é o alerta de reposição da loja.

**Conceitos:** array de objetos, `createElement`, `appendChild`, renderização dinâmica

---

São tons de deserto — combinam com a planta e ainda deixam o destaque em laranja/vermelho bem visível.
