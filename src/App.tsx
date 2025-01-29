import "./App.css";
import { useState } from "react";
import { useFetch } from "./hooks";
import { Button } from "./components";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Data {
  name: string;
  lastName: string;
  age: number;
}

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("world");

  const countMore = () => {
    setCount(count + 1);
  };

  const changeName = () => {
    setName("Hello world");
  };

  const { data, loading, error } = useFetch<Data>(url);

  if (loading) return <div>Loading ....</div>;

  if (error) return <div>Ocurrió un error {error.message}</div>;

  return (
    <>
      <div className="card">
        <Button label={`count is ${count}`} parentMethod={countMore} />
        <Button label="Change name" parentMethod={changeName} />
        <p>{name}</p>
        <div>{JSON.stringify(data)}</div>
      </div>
    </>
  );
}

export default App;
