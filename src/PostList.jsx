import React from "react";
import Post from "./Post";
import { useEffect, useState } from "react";

export default function PostList() {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      const respons = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await respons.json();
      console.log(data);
      setPost(data);
      setLoading(false);
    }
    getData();
  }, []);

  return <div>{loading ? <p>ladejas.. </p> : <Post {...post} />}</div>;
}
