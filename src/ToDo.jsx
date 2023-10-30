import { useState } from "react";

function ToDo(props) {
  const [check, setCheck] = useState(props.completed);

  function handleCheck(event) {
    setCheck(event.target.checked);
  }
  return (
    <>
      <p>{props.title}</p>
      <p>userID: {props.userId}</p>
      <p>toDoId: {props.id}</p>.
      <input type="checkbox" checked={check} onChange={handleCheck} />
    </>
  );
}

export default ToDo;
