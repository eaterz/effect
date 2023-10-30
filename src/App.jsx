import "./App.css";
import ToDo from "./ToDo";

function App() {
  const todo = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: true,
  };
  return (
    <div className="App">
      <h1>Hi</h1>
      <ToDo {...todo} />
    </div>
  );
}

export default App;
