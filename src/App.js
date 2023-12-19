import './App.css';
import { TodoList } from './components/TodoList';
import { TodoAdd } from './components/TodoAdd';
import { useTodo } from './hooks/useTodo';

function App() {
  const {
    todos,
    todosCount,
    pedingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo
  } = useTodo();
  return (
    <>
      <div className='card-to-do'>
        <h1>Lista de Tareas</h1>
        <div className='counter-todos'>
          <h3>N° Tareas: <span>{todosCount}</span></h3>
          <h3>Pendiente:<span>{pedingTodosCount}</span></h3>
        </div>
        <div className='add-todo'>
          <h3>Agregar tarea</h3>
          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>


        <TodoList
          todos={todos}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
          handleUpdateTodo={handleUpdateTodo}

        />
      </div>

    </>
  );
}

export default App;
