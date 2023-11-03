import React from "react";
import { useState } from "react";

export default function Post(props) {
  return (
    <div>
      <p>title: {props.title}</p>
      <p>userID: {props.userId}</p>
      <p>toDoId: {props.id}</p>
      <p>body: {props.body}</p>
    </div>
  );
}
