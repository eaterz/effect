import React from "react";
import Posts from "./Posts";
import { useEffect, useState } from "react";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState([]);
  useEffect(() => {
    async function getData() {
      const respons = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await respons.json();
      console.log(data);
      setPosts(data);
      setLoading(false);
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData2() {
      const respons = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await respons.json();
      console.log(data);
      setName(data);
      setLoading(false);
    }
    getData2();
  }, []);
  //////

  const list = posts.map((post) => {
    const userName = name.map((user) => {
      if (post.userId == user.userId) {
        return user.userId;
      }
    });
    return (
      <>
        {loading == true ? (
          <p>ladejas</p>
        ) : (
          <Posts
            title={post.title}
            userId={userName}
            id={post.id}
            body={post.body}
          />
        )}
      </>
    );
  });

  return <div>{list}</div>;
}
