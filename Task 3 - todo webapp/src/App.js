import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import List from "./Components/List";
import Filter from "./Components/Filter";

function App() {
  const [todos, setTodos] = useState([
    {
      date : new Date().toLocaleString(),
      text : "todo title",
      isDone: false,
    }
  ]);

  const addTodo = text => {
    const date = new Date().toLocaleString();
    const newTodos = [...todos, { text, date }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const [filter, setFilter] = useState('All Tasks');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredTasks = () => {
    switch (filter) {
      case 'All Tasks':
        return todos;
      case 'Completed Tasks':
        return todos.filter(todo => todo.isDone);
      case 'Pending Tasks':
        return todos.filter(todo => !todo.isDone);
      default:
        return todos;
    }
  };

  return (
    <div className="app">
      <div className="w-[100vw] h-[100vh] text-center overflow-x-hidden overflow-y-scroll bg-gradient-to-b from-emerald-400 to-blue-600 ">
        <h1 className="text-xl p-5 font-bold">TO-DO List</h1>

        <div >
          <Form addTodo={addTodo} />

         
          <div className="flex flex-col px-8 py-4 mt-6 w-[50%] m-[auto] border rounded">

          <Filter filter={filter} handleFilterChange={handleFilterChange}/>


          <div className='flex justify-between border-b-4 pb-4 '>
          <p> <b>Date</b> </p>
          <p> <b>Title</b> </p>
          <p> <b>Action</b> </p>
          </div>

          <div>
            {filteredTasks().map((todo, index) => {
              return (
                <List
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                  filter={filter}
                  handleFilterChange={handleFilterChange}
                />
              );
            })}
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
