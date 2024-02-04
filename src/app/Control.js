"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function Control() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const handleDeleteClick = (e) => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(`http://localhost:9999/topics/${id}`, options)
      .then((res) => res.json())
      .then((data) => {
        router.push("/");
        router.refresh();
      });
  };
  return (
    <ul>
      <li>
        <Link href="/create">Create</Link>
      </li>
      {id ? (
        <>
          <li>
            <Link href={`/update/${id}`}>Update</Link>
          </li>
          <li>
            <button onClick={handleDeleteClick}>delete</button>
          </li>
        </>
      ) : null}
    </ul>
  );
}
