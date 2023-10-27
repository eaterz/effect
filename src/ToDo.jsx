import { useState } from "react";
function ToDo(props) {
  const [check, setCompl] = useState(props.check);

  function handleCheck(niga) {
    setCompl(niga.target.value);
  }

  return (
    <>
      <p>{props.todo.title}</p>
      <p>userId:{props.todo.userId}</p>
      <p>ToDoId:{props.todo.id}</p>
      <input
        id="numberInput"
        type="checkbox"
        checked={check}
        onChange={handleCheck}
      />
    </>
  );
}
export default ToDo;
