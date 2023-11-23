import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TodoList from "../components/TodoList";
import { deleteTodos, getTodos } from "../utils/local";
import "../App.css";

function Home() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const onDeleteHandler = (index) => {
    deleteTodos(index);
    setTodos(getTodos());
  };

  const filteredTodos = todos.filter((todo) => {
    return todo.title.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    const data = getTodos();
    setTodos(data);
  }, []);

  return (
    <div className="p-3">
      <strong className="fs-1 text-light">Todo List Anita Soffiyun</strong>
      <br/>
      <Button
        className="mb-3 btn-outline-info text-center "
        variant="light"
        type="submit"
        style={{
          marginTop: "25px",
        }}
        onClick={() => {
          navigate("/add");
        }}
      >
        Add Todo
      </Button>
      <input
        className="form-control me-2 aria-label= Search mb-4 col-12 px-2 "
        type="text"
        onChange={(event) => {
          handleChangeSearch(event);
        }}
        value={search}
        placeholder="Search..."
      />
      <div>
        <TodoList todos={filteredTodos} onDelete={onDeleteHandler} />
      </div>
    </div>
  );
}

export default Home;
