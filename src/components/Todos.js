import React from 'react';
import classes from '../modules/Todos.module.css';

function Todos() {
  return (
    <div className={classes.container}>
        <input type="text" className={classes.todo} placeholder='add a new task'/><br/>
        <button className={classes.btn}>save</button>
      
    </div>
  )
}

export default Todos
