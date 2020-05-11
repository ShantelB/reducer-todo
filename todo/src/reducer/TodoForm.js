import React, {useState} from 'react';

function TodoForm (props) {
    const [newTodo, setNewTodo] = useState("");

   const change = event => {
        setNewTodo(event.target.value);
    };

    const submitForm = event => {
        event.preventDefault();
        props.addTodo(newTodo);
        setNewTodo('');
    };
  
      return (
        <form onSubmit={submitForm}>
          <input onChange= {change} type= 'text' name= 'item' value={newTodo} />
        
          <button>Add</button>
        </form>
      );
  }
  
  export default TodoForm;