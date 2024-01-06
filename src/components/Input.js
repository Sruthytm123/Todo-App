import React, { useState } from "react";
import classes from "../modules/Input.module.css";

import Todos from "./Todos";

function Input() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  console.log(list);

const deleteTodo=(index)=>{
  const newArr=list.filter((item,i)=> i !==index )
  setList(newArr)
}

  const changeStatus=(index)=>{
    const newArr=[...list]
    newArr[index].isCompleted = !newArr[index].isCompleted;
    setList(newArr)
  }



  return (
    <div className={classes.outerBox}>
      <div className={classes.first}>ToDo App</div>
      <div className={classes.second}>
        <div className={classes.container}>
          <input
            type="text"
            className={classes.todo}
            placeholder="add a new task"
            onChange={(e) => setTodo(e.target.value)}
          />
          <br />
          <button
            className={classes.btn}
            onClick={() =>
              setList([...list, { name: todo, isCompleted: false }])
            }
          >
            save
          </button>
        </div>
      </div>


      <div className={classes.third}>
        {list.map((items, index) => {
          return (
            <div className={classes.listContainer}>
              <input type="checkbox" onChange={() => changeStatus(index)} />
              <p className={items.isCompleted===true ? classes.completed : classes.incomplete} > {items.name}</p>
              <button onClick={()=>deleteTodo(index)} className={classes.listBtn}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Input;
