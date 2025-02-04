import "./App.css";
import { useState } from "react";
import { useFetch } from "./hooks";
import { Card, CustomForm, Button, ColorRed, GradientBackground, TaskList } from "./components";
import { GlobalProvider } from "./context/global.provider";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Data {
  name: string;
  lastName: string;
  age: number;
}

function App() {
  const [count, setCount] = useState(0);

  const countMore = () => setCount(count + 1);

  const alertHola = () => {
    alert("hola");
  };

  const { data, loading, error } = useFetch<Data>(url);

  if (loading) return <div>Loading ....</div>;

  if (error) return <div>Ocurrió un error {error.message}</div>;

  return (
    <GradientBackground>
      <GlobalProvider>
        <div style={{ position: 'relative' }}>
          <Card>
            <div style={{ borderRadius: 'inherit' }}>
              <TaskList />
            </div>
          </Card>
        </div>
          {/* <ColorRed>
            <Button parentMethod={alertHola}>Hola</Button>
          </ColorRed>
          <Button parentMethod={countMore}>count {count}</Button>
          <CustomForm />
          <div>{JSON.stringify(data)}</div> */}
      </GlobalProvider>
    </GradientBackground>
  );
}

export default App;
