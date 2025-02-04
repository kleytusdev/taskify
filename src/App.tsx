import "./App.css";
import { Card, GradientBackground, TaskList } from "./components";
import { GlobalProvider } from "./context/global.provider";

function App() {
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
      </GlobalProvider>
    </GradientBackground>
  );
}

export default App;
