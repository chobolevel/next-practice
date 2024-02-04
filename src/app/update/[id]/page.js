"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Update() {
  const params = useParams();
  const id = params.id;
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    };
    fetch(`http://localhost:9999/topics/${id}`, options)
      .then((res) => res.json())
      .then((data) => {
        router.push(`/read/${data.id}`);
        router.refresh();
      });
  };
  useEffect(() => {
    fetch(`http://localhost:9999/topics/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setBody(data.body);
      });
  }, [id]);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <textarea
          name="body"
          placeholder="body"
          value={body}
          onChange={handleBodyChange}
        />
      </div>
      <div>
        <button>update</button>
      </div>
    </form>
  );
}
