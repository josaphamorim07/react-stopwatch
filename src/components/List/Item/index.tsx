import { ITarefas } from "../../../interface/ITarefas";
import "../styles.scss";

interface Props extends ITarefas {
  selecionadaTarefa: (tarefaSelecionada: ITarefas) => void;
}

const Item = ({
  selecionadaTarefa,
  tarefa,
  tempo,
  selecinado,
  completado,
  id,
}: Props) => {
  return (
    <li
      className={`"item" ${selecinado ? " itemSelecionado" : ""}   ${
        completado ? "itemCompletado" : ""
      }`}
      onClick={() =>
        !completado &&
        selecionadaTarefa({ tarefa, tempo, selecinado, completado, id })
      }
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
};

export default Item;
