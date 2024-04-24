import React from 'react';
import "./AppCarrinho.css";

function AppCarrinho() {
  function checkout() {
    document.querySelector('.carrinho').classList.add('hidden');
    document.querySelector('.pagamento').classList.remove('hidden');
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const valor = document.getElementById('valor').value;
    document.getElementById('recibo-nome').textContent = nome;
    document.getElementById('recibo-cpf').textContent = cpf;
    document.getElementById('recibo-valor').textContent = valor;
    document.querySelector('.pagamento').classList.add('hidden');
    document.querySelector('.recibo').classList.remove('hidden');
  }

  return (
    <body>
      <div className="container">
        <h1>Carrinho de Compras</h1>
        <div className="carrinho">
          <h2>Seu Carrinho</h2>
          <ul>
            <li>pizza - R$50.00</li>
            <li>pizza - R$30.00</li>
            <li>pizza - R$20.00</li>
          </ul>
          <h3>Total: R$100.00</h3>
          <button onClick={checkout}>Finalizar Compra</button>
        </div>
        <div className="pagamento hidden">
          <h2>Dados de Pagamento</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required/><br/><br/>
            <label htmlFor="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf" required/><br/><br/>
            <label htmlFor="numero_cartao">Número do Cartão:</label>
            <input type="text" id="numero_cartao" name="numero_cartao" required/><br/><br/>
            <label htmlFor="valor">Valor da Compra:</label>
            <input type="text" id="valor" name="valor" value="R$100.00" readOnly/><br/><br/>
            <button type="submit">Pagar</button>
          </form>
        </div>
        <div className="recibo hidden">
          <h2>Recibo</h2>
          <p>Nome: <span id="recibo-nome"></span></p>
          <p>CPF: <span id="recibo-cpf"></span></p>
          <p>Valor da Compra: <span id="recibo-valor"></span></p>
        </div>
      </div>
    </body>
  );
}

export default AppCarrinho;
