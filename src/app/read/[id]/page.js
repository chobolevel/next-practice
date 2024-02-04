export default async function Read({ params }) {
  const res = await fetch(`http://localhost:9999/topics/${params.id}`, {
    cache: "no-store",
  });
  const topic = await res.json();
  return (
    <>
      <h2>{topic.title}</h2>
      <p>{topic.body}</p>
    </>
  );
}
