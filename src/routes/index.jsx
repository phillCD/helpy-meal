import React from "react";
import './styles.css'; // Import the CSS file

export default function About() {
    return(
        <div className="about-container">
            <div className="about-card">
                <h1>Sobre Nós</h1>
                <p>Somos uma empresa dedicada à doação de alimentos. Acreditamos que ninguém deve passar fome e, por isso, criamos este site para facilitar a doação de alimentos para aqueles que mais precisam.</p>
                <br /><h2>Nossa Missão</h2>
                <p>Nossa missão é conectar pessoas que querem ajudar com aquelas que precisam de ajuda. Por meio de nosso site, facilitamos o processo de doação de alimentos, tornando-o simples e eficiente.</p>
                <br /><h2>Nossa Visão</h2>
                <p>Visamos um mundo onde a fome não exista. Um mundo onde todos tenham acesso a alimentos saudáveis e nutritivos. E estamos fazendo nossa parte para tornar essa visão uma realidade.</p>
                <br /><h2>Nossos Valores</h2>
                <p>Compromisso, Empatia, Solidariedade, Transparência e Respeito são os valores que nos guiam em nossa jornada para acabar com a fome.</p>
            </div>
        </div>
    )
}