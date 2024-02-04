"use client";

import { useRouter } from "next/navigation";

export default function Create() {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    };
    fetch(`http://localhost:9999/topics`, options)
      .then((res) => res.json())
      .then((data) => {
        router.push(`/read/${data.id}`);
        router.refresh();
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" name="title" placeholder="title" />
      </div>
      <div>
        <textarea name="body" placeholder="body" />
      </div>
      <div>
        <button>create</button>
      </div>
    </form>
  );
}
