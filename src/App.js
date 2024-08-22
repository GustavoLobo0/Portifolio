import { Header } from "./Componentes/Header/index.js";
import { PrimeiroConteudo } from "./Componentes/PrimeiroConteudo/index.js";
import { RedeSociais } from "./Componentes/RedeSociais/RedeSociais.js";
import { SegundoConteudo } from "./Componentes/SegundoConteudo/SegundoConteudo.js";

export default function App() {
  return (
    <>
      <Header />
      <PrimeiroConteudo />
      <RedeSociais />
      <SegundoConteudo />
    </>
  );
}


