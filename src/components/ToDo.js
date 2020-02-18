import React, { useState } from "react";
import moment from "moment";

function Todo({ todo, dispatch }) {
  const [thisDeadline, setDeadline] = useState('');
  const [thisError, setError] = useState('');

  const toggleCompleted = () => {
    dispatch({
      type: "TOGGLE_COMPLETED",
      payload: todo.id
    });
  };

  const handleDeadline =(e, {...todo}) => {
    e.preventDefault();
    e.stopPropagation();
    return todo[
      {
        deadline: thisDeadline,
        error: thisError
      }
    ]
  }

  const handleChanges = e => {
    e.preventDefault();
    console.log(e.target.value);
    if(moment().isBetween(todo.date, e.target.value)) {
      setDeadline(e.target.value.toString())
    } else {
      setError('That task is overdue.')
    }
  };


  console.log(todo);
  return (
    <>
      <div>
        <p onClick={toggleCompleted} style={{ textDecoration: todo.completed ? "line-through" : "" }}>
        {todo.item} 
        <span>{todo.deadline}</span><span>{todo.error}</span></p>
            <input type = 'date' onChange = {handleChanges}  />
              <button onclick = {handleDeadline}>Confirm</button>
       
      </div>
    </>
  );
}

export default Todo; 