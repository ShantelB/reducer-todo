import React from 'react';
import Todo from './Todo';
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


const TodoList = props => {
 
      return (
        <div className="todoList">
         {props.todo.map( item => (
             <Todo key={item.id} item={item} toggle={props.toggle}
             />
         ))}
         <p>{props.todo.name}</p>
          <button className='clear' onClick={props.removeTodos}>Clear</button>
          </div>

      );
  }
  
  export default TodoList;