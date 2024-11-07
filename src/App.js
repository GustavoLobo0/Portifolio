import { Header } from "./Componentes/Header/index.js";
import { PrimeiroConteudo } from "./Componentes/PrimeiroConteudo/index.js";
import { SegundoConteudo } from "./Componentes/SegundoConteudo/SegundoConteudo.js";
import { TerceiroConteudo } from "./Componentes/TerceiroConteudo/TerceiroConteudo.js";
import { QuartoConteudo } from "./Componentes/QuartoConteudo/QuartoConteudo.js";

export default function App() {
  return (
    <>
      <Header />
      <PrimeiroConteudo />
      <SegundoConteudo />
      <TerceiroConteudo />
      <QuartoConteudo />
    </>
  );
}


