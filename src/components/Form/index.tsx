import { ITarefas } from "../../interface/ITarefas";
import Button from "../Button";
import "./styles.scss";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface Props {
  tarefas: ITarefas[];
  setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>;
}

const Form = ({ tarefas, setTarefas }: Props) => {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");

  const HandleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTarefas([
      ...tarefas,
      {
        tarefa: novaTarefa,
        tempo: tempo,
        selecinado: false,
        completado: false,
        id:uuidv4()
      },
    ]);
    setTempo("");
    setNovaTarefa("");
  };

  return (
    <div>
      <form className="novaTarefa" onSubmit={HandleAddTask}>
        <div className="inputContainer">
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            value={novaTarefa}
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="o que voce quer estudar"
            onChange={(e) => setNovaTarefa(e.target.value)}
            required
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={tempo}
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
            onChange={(e) => setTempo(e.target.value)}
          />
        </div>
        <Button texto="adicionar" type="submit" />
      </form>
    </div>
  );
};

export default Form;
