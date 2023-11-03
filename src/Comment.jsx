import React from "react";
import { useEffect, useState } from "react";
export default function Comment() {
  const [loading, setLoading] = useState(true);
  const [eff, setEff] = useState({});

  useEffect(() => {
    async function getData() {
      const respons = await fetch(
        "https://jsonplaceholder.typicode.com/comments/5"
      );
      const data = await respons.json();
      console.log(data);
      setEff(data);
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <>
      {loading == true ? (
        <p>ladejas</p>
      ) : (
        <ul>
          <li>userID: {eff.postId}</li>
          <li>toDoId: {eff.id}</li>
          <li>name: {eff.name}</li>
          <li>email: {eff.email}</li>
          <li>body: {eff.body}</li>
        </ul>
      )}
    </>
  );
}
