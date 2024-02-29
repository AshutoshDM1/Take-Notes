import Todobody from "./Todobody.jsx";
import { useState } from "react";

function TodoFunction() {
  let [todolist, setTodoList] = useState([
    {
      no: 1,
      input: "Hi  write your note",
      date: "2/29/2024",
      time: "8:23:18 PM"
    },
    {
      no: 2,
      input: "More notes",
      date: "2/29/2024",
      time: "8:23:52 PM"
    }
  ]);
  let [inputValue, setInput] = useState("");


  const handleInput = (event) => {
    let value = event.target.value;
    setInput(value);
  };


  const addnewList = () => {
    const newTodo = {
      no: todolist.length + 1,
      input: inputValue,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };
    setTodoList([...todolist, newTodo]);
    setInput("");
  };

  const RemoveList = (listNo) => {
    setTodoList(todolist.filter((obj) => obj.no !== listNo));
  };

  return (
    <>
      <center>
        <div className="container text-center">
          <div className="row">
            <input
              value={inputValue}
              onChange={handleInput}
              placeholder="Enter the text"
              className="col-4 m-2 p-3 bg-info text-white border border-2 border-black Enter"
            ></input>
            <div
              onClick={addnewList}
              className="col-2 p-3 m-2 btn btn-success text-white"
            >
              Add
            </div>
          </div>
        </div>
        {todolist.map((element) => (
          <Todobody
            key={element.no}
            listNo={element.no}
            input={element.input}
            date={element.date}
            time={element.time}
            RemoveList={RemoveList}
          />
        ))}
      </center>
    </>
  );
}

export default TodoFunction;