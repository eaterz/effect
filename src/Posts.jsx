import React from "react";
import { useState } from "react";

export default function Posts(props) {
  return (
    <div>
      <p>title: {props.title}</p>
      <p>userId: {props.userId}</p>
      <p>toDoId: {props.id}</p>
      <p>body: {props.body}</p>
      <p>---------------------------</p>
    </div>
  );
}
