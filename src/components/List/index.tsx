import { ITarefas } from "../../interface/ITarefas";
import Item from "./Item";
import "./styles.scss";

interface Props {
  tarefas: ITarefas[];
  selecionadaTarefa:(tarefaSelecionada: ITarefas)=>void
}

const List = ({ tarefas,selecionadaTarefa }: Props) => {
  return (
    <aside className="listaTarefas">
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
        
          <Item key={item.id}   selecionadaTarefa={selecionadaTarefa} {...item} />
        ))}
      </ul>
    </aside>
  );
};

export default List;
