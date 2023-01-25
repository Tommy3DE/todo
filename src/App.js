import "./App.css";
import { useState } from "react";
import {FaTrash} from 'react-icons/fa'


function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodoHandler = (todo) => {

    if(input.length < 1){
      alert('Please enter task name')
      return
    }

    const newTodo = {
      id: Math.random(),
      todo: todo,
    };
    setList([...list, newTodo]);

    setInput("");
  };

  const deleteHandler =(id)=>{
    const newList = list.filter((todo)=> todo.id !== todo.id)
    setList(newList)
  }

  return (
    <div className="todo__background">
      <section className="todo__title">
        <h1>
          To Do
          <br />
          List
        </h1>
      </section>
      <section className="todo__container">
        <div className="todo__form">
          <div>
            <label htmlFor="task-name">Task name:</label>
            <input
              type="text"
              id="task-name"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className='todo__input'
            />
          </div>
          <button
            className="todo__btn-submit"
            type="submit"
            onClick={() => addTodoHandler(input)}
          >
            Add task
          </button>
        </div>
        
        {list.length > 0 ? (
          <ul className="todo__task-list">
            {list.map((todo) => (
              <li key={todo.id} className="todo__task-container">
                {todo.todo}
                <button onClick={deleteHandler}><FaTrash className="todo__trash"/></button>
              </li>
            ))}
          </ul>
        ) : (
          <p style={{marginTop: '20rem'}}>No tasks found</p>
        )}
      </section>
    </div>
  );
}

export default App;
