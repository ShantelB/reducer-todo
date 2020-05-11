import React, {useReducer} from 'react';
import './App.css';
import TodoList from '../src/reducer/TodoList';
import TodoForm from '../src/reducer/TodoForm';
import { reducer, todos } from '../src/reducer/reducer';


function App () {

  const [todo, dispatch] = useReducer(reducer, todos);
  

  const addTodo = todoItem => {
    dispatch({ type: "ADD_TODO", payload: todoItem });
  };

  const toggle = clicked => {
    dispatch({ type: "TOGGLE", payload: clicked });
};

const removeTodos = () => {
  dispatch({ type: "REMOVE_TODOS"})
};


    return (
      <div className="App">
        <div className="header">
        <h1>Todo</h1>  
        <TodoForm addTodo={addTodo} />
        </div>
        <TodoList todo={todo} toggle={toggle} removeTodos={removeTodos} />
      </div>
    );
}

export default App;
