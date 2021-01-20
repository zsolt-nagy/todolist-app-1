import React from 'react';
import './TodoForm.css';

// Add and Clear Buttons

export default function TodoForm(props) {
    const updateData = event => {
        event.preventDefault();
        const todolist = document.querySelector('.js-todolist-item').value;
        const time = document.querySelector('.js-time').value;
        
        if (todolist.trim().length === 0 || time.trim().length === 0) {
            document.querySelector('.js-todolist-item').value = '';
            document.querySelector('.js-time').value = '';
            props.handleAdd(todolist, time);
        } else {
            // display an error message
            alert('error');  // OR: add an error field next to the buttons and display a message in red
        }
    }

  return (
    <form onSubmit={ updateData }>
    <label className="label1"><strong>List Your "To Do" List Activity Here:</strong></label>
      <input type="text" ClassName="todolist-item" className="js-todolist-item" placeholder="List Activity" />
      <label className="label2"><strong>List the Time and "Press Add":</strong></label>
      <input type="text" className="js-time" placeholder="List Time" />
    <button type="submit">Add</button>
    <button onClick={props.handleClear}>Clear</button>
    </form>
  )
}
