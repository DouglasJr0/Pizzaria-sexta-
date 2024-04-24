import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import logopizza from './img/logo_pizza.png';
import cozinha from "./img/cozinha.jpg";
import frango from "./img/frango-removebg-preview.png";
import calabresa from "./img/calabresa-removebg-preview.png";
import portuguesa from "./img/portuguesa-removebg-preview.png";
import strogonoff from "./img/strogonoff-removebg-preview.png";
import chocolate from "./img/chocolate-removebg-preview.png";
import sensacao from "./img/sensacao-removebg-preview.png";
import confete from "./img/confete-removebg-preview.png";
import prestigio from "./img/prestigio-removebg-preview.png";
import { BsCartFill } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import  AppCarrinho from "./AppCarrinho";

function App() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/carrinho" component={AppCarrinho} />
          </Switch>
        </div>
      </Router>
    );
  }
  
const Home = () => (
<body>
    <header>
            <div class="content">
                <div class="logo">
                    <img src={logopizza}  alt="Cupcake"/>
                    <h3>PizzaShop</h3>
                </div>
                <ul class="list-menu">
                    <li><a href="#home">Início</a></li>
                    <li><a>Sobre nós</a></li>
                    <li><a>Cardápio</a></li>
                    <li><a>Contatos</a></li>
                    <li><a><BsInstagram /></a></li>
                    <li><a><BsFacebook /></a></li>
                    <li><a href="/carrinho"><BsCartFill /></a></li>

                </ul>

                <div class="menu-toggle">
                    <div class="one"></div>
                    <div class="two"></div>
                    <div class="three"></div>
                </div>

            </div>
        
    </header>

    <section class="first-section" id="home">
        
        <div class="conteudo-principal">
            <h1>Deixe seu dia mais saboroso!!!</h1>
            <h2>As pizzas mais recheadas da Região</h2>
            <div class="btn">
                <button class="reservar">Reserve a sua!</button>
                
            </div>
        </div>    
    </section>    

    <section class="sobre-nos" id="sobrenos"> 
        <div class="main">
            <div class="contentsobre">
                <h2>Sobre nós</h2>
                <p>Pizzaria da Casa é um lugar onde cada pizza é uma obra de arte, preparada com paixão e dedicação. Nossa missão é proporcionar uma experiência gastronômica única, onde os sabores se encontram em uma explosão de delícias. Desde as clássicas até as mais inovadoras combinações de ingredientes, cada pizza é cuidadosamente preparada para garantir o máximo de sabor e qualidade. Venha nos visitar e descubra o verdadeiro sabor da tradição italiana em cada pedaço da nossa pizza.</p>
            </div>     
            <div class="img-cozinha">
                <img src={cozinha} alt=""/>
            </div>
        </div>    
    </section>

    <section class="cardapio" id="cardapio">
        <h2>Cardápio</h2>

            <div class="itens-cardapio">
                <div class="frango">
                    <img src={frango} alt="frango"/>
                    <div class="info">
                        <h3>Frango</h3>
                        <h4>6 fatias <span>R$35,00</span></h4>
                        <h4>8 fatias <span>R$45,00</span></h4>
                        <h4>12 fatias <span>R$55,00</span></h4>
                        <button class="pedir"><a href="/carrinho">pedir agora</a></button>
                    </div>   
                </div>
                <div class="calabresa">
                    <img src={calabresa} alt="calabresa"/>
                    <div class="info">
                        <h3>Calabresa</h3>
                        <h4>6 fatias <span>R$35,00</span></h4>
                        <h4>8 fatias <span>R$45,00</span></h4>
                        <h4>12 fatias <span>R$55,00</span></h4>
                        <button class="pedir">pedir agora</button>
                    </div> 
                
                </div>
                <div class="portuguesa">
                    <img src={portuguesa} alt="portuguesa"/>
                    <div class="info">
                        <h3>Portuguesa</h3>
                        <h4>6 fatias <span>R$35,00</span></h4>
                        <h4>8 fatias <span>R$45,00</span></h4>
                        <h4>12 fatias <span>R$55,00</span></h4>
                        <button class="pedir"><a href="/carrinho">pedir agora</a></button>
                    </div> 
                
                </div>
                <div class="strogonoff">
                    <img src ={strogonoff} alt="strogonoff"/>
                    <div class="info">
                        <h3>Strogonoff</h3>
                        <h4>6 fatias <span>R$35,00</span></h4>
                        <h4>8 fatias <span>R$45,00</span></h4>
                        <h4>12 fatias <span>R$55,00</span></h4>
                        <button class="pedir"><a href="/carrinho">pedir agora</a></button>
                    </div> 
                
                </div>
                <div class="ChocolatePreto">
                    <img src={chocolate} alt="Chocolate"/>
                    <div class="info">
                        <h3>Chocolate Preto</h3>
                        <h4>6 fatias <span>R$35,00</span></h4>
                        <h4>8 fatias <span>R$45,00</span></h4>
                        <h4>12 fatias <span>R$55,00</span></h4>
                        <button class="pedir"><a href="/carrinho">pedir agora</a></button>
                    </div> 
                
                </div>
                <div class="sensacao">
                    <img src= {sensacao} alt="sensacao"/>
                    <div class="info">
                        <h3>Sensação</h3>
                        <h4>6 fatias <span>R$35,00</span></h4>
                        <h4>8 fatias <span>R$45,00</span></h4>
                        <h4>12 fatias <span>R$55,00</span></h4>
                        <button class="pedir"><a href="/carrinho">pedir agora</a></button>
                    </div> 
                
                </div>
                <div class="confete">
                    <img src={confete} alt="confete"/>
                    <div class="info">
                        <h3>Confete</h3>
                        <h4>6 fatias <span>R$35,00</span></h4>
                        <h4>8 fatias <span>R$45,00</span></h4>
                        <h4>12 fatias <span>R$55,00</span></h4>
                        <button class="pedir"><a href="/carrinho">pedir agora</a></button>
                    </div> 
                
                </div>
                <div class="prestigio">
                    <img src={prestigio} alt="prestigio"/>
                    <div class="info">
                        <h3>Prestigio</h3>
                        <h4>6 fatias <span>R$35,00</span></h4>
                        <h4>8 fatias <span>R$45,00</span></h4>
                        <h4>12 fatias <span>R$55,00</span></h4>
                        <button class="pedir"><a href="/carrinho">pedir agora</a></button>
                    </div> 
                
                </div>
                
            </div>

    </section>

    <section class="contatos" id="contatos">
        <h3>Contatos</h3>
        <div class="contatos-secao">
            <div>
                <BsFillTelephoneFill />
                <span> (41) 0000-00000</span>
            </div>
            <div>
                <BsInstagram />
                <span> @pizzaria_casa</span>
            </div>
            <div>
                <BsFacebook />
                <span> Pizzaria da Casa</span>
            </div>
        </div>
    </section>

    <script src="./script.js"></script>
</body>
  );

export default App;
