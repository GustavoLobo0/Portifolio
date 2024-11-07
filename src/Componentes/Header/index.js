import "./Header.css";

export function Header() {
    return (
        <header>
            <h1 className="title">Olá, Seja Bem vindo!</h1>
            <nav className="nav-links">
                <a>Sobre</a>
                <a href="#ParteTecnologias">Tecnologias</a>
                <a href="#ParteContato">Contato</a>
                <a href="#Gostos">Gostos</a>
            </nav>
        </header>
    );
}
