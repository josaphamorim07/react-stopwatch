import Button from "../Button";
import Watch from "./Watch";
import "./styles.scss";
import { tempoSegundo } from "../../utils/date";
import { ITarefas } from "../../interface/ITarefas";
import { useEffect, useState } from "react";
interface Props {
  selecionados: ITarefas | undefined;
  finalizaTarefa: () => void;
}

const StopWatch = ({ selecionados,finalizaTarefa }: Props) => {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionados?.tempo) {
      setTempo(tempoSegundo(selecionados.tempo));
    }
  }, [selecionados?.tempo]);

  const Regressiva = (contador: number = 0) => {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return Regressiva(contador - 1);
      }
      finalizaTarefa()
    }, 1000);
  };

  return (
    <div className="cronometro">
      <p className="titulo">Escolha um card e inicie o crnometro</p>
      <div className="relogioWrapper">
        <Watch tempo={tempo} />
      </div>
      <Button onClick={() => Regressiva(tempo)} texto="Começar" />
    </div>
  );
};

export default StopWatch;
