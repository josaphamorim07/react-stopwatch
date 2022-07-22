import { ITarefas } from "../../../interface/ITarefas";
import "./styles.scss";

interface Props {
  tempo: number | undefined;
}

const Watch = ({ tempo = 0 }: Props) => {
  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;

  const [minutosDezena, minutosUnidades] = String(minutos).padStart(2,'0');
  const [segundoDezena, segundoUnidades] = String(segundos).padStart(2,'0');

  return (
    <>
      <span className="relogioNumero">{minutosDezena}</span>
      <span className="relogioNumero">{minutosUnidades}</span>
      <span className="relogioDivisao">:</span>
      <span className="relogioNumero">{segundoDezena}</span>
      <span className="relogioNumero">{segundoUnidades}</span>
    </>
  );
};

export default Watch;
