import "./style.css";

export function PrimeiroConteudo() {
    return (
        <>
            <div className="fundo">
                <div className="fundoQuadrado">
                    <h2>Sobre mim:</h2>
                    <p className="apresentaçao">Meu nome é Gustavo, tenho 16 anos e minha paixão sempre foi a tecnologia. Então, fiz este portfólio para demontrar um pouco dos meus conheçimentos.</p>
                </div>
                <div className="sociais">
                    <div className="titulo"><p>Redes Sociais</p></div>
                    <div className="instagram"> <div className="Instagram"></div><p>Instagram</p></div>
                    <div className="linkedin"><p>Linkedin</p></div>
                </div>
            </div>
        </>
    )
} 