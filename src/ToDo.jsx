import { useState } from "react";
function ToDo(props) {
  const [check, setCompl] = useState(props.check);
  return (
    <>
      <input id="numberInput" type="checkbox" checked={check} />
    </>
  );
}
export default ToDo;
