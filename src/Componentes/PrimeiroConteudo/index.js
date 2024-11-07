import "./style.css";

export function PrimeiroConteudo() {
    return (
        <>
            <div className="fundo">
                <div className="fundoQuadrado">
                    <h2>Sobre mim:</h2>
                    <p className="apresentaçao">Olá, eu sou o Gustavo! Tenho 16 anos e minha paixão sempre foi a tecnologia. Neste portfólio, você encontrará um pouco do que eu tenho explorado e aprendido.</p>
                </div>
                <div className="sociais">
                    <div className="titulo"><p>Redes Sociais</p></div>
                    <div className="instagram"> <div className="Instagram"></div><p>Instagram: <a className="linkI" href="https://www.instagram.com/gust4.snts/" target="_blank">gust4.snts</a></p></div>
                    <div className="linkedin"><p>Linkedin: <a className="linkL" href="https://www.linkedin.com/in/gustavo-cesar-0786b12a3/" target="_blank">Gustavo Santos</a></p></div>
                </div>
            </div>
        </>
    )
} 