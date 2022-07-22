import "./styles.scss";
import Form from "../components/Form";
import List from "../components/List";
import StopWatch from "../components/StopWatch";
import { useState } from "react";
import { ITarefas } from "../interface/ITarefas";

function App() {
  const [tarefas, setTarefas] = useState<ITarefas[] | []>([]);
  const [selecionados, setSelecionado] = useState<ITarefas>();

  const selecionadaTarefa = (tarefaSelecionada: ITarefas) => {
    setSelecionado(tarefaSelecionada);

    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) => ({
        ...tarefa,
        selecinado: tarefa.id === tarefaSelecionada.id ? true : false,
      }))
    );
  };

  const finalizaTarefa = () => {
    if (selecionados) {
      setSelecionado(undefined);

      setTarefas((tarefasAnteriores) =>
        tarefasAnteriores.map((tarefa) => {
          if (tarefa.id === selecionados.id) {
            return {
              ...tarefa,
              selecinado: false,
              completado: true,
            };
          }
          return tarefa;
        })
      );
    }
  };

  return (
    <div className="AppStyle">
      <Form setTarefas={setTarefas} tarefas={tarefas} />
      <List tarefas={tarefas} selecionadaTarefa={selecionadaTarefa} />
      <StopWatch selecionados={selecionados} finalizaTarefa={finalizaTarefa}/>
    </div> 
  );
}

export default App;
