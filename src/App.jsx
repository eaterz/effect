import "./App.css";
import ToDo from "./ToDo";

function App() {
  const todo = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
  ];
  const ToDoJSX = todo.map((checked, index) => {
    return (
      <label>
        {checked.userId}
        <ToDo check={checked.completed} key={index} />
        {checked.title}
      </label>
    );
  });

  return (
    <>
      <div>{ToDoJSX}</div>
    </>
  );
}

export default App;
