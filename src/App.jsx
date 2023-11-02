import "./App.css";
import ToDo from "./ToDo";
import { useEffect, useState } from "react";

function App() {
  const [todo, setTodo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("hello");
    async function getData() {
      const respons = await fetch(
        "https://jsonplaceholder.typicode.com/todos/130"
      );
      const data = await respons.json();
      console.log(data);
      setTodo(data);
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Hi</h1>
      {loading ? <p>ladejas.. </p> : <ToDo {...todo} />}
    </div>
  );
}

export default App;
