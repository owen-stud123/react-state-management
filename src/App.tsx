import { LIGHT_THEME } from "./constants/theme";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import TaskManager from "./components/TaskManager";
import "./App.css";

function AppContent() {
  const { theme } = useTheme();
  const themeClass =
    theme === LIGHT_THEME ? "app-shell--light" : "app-shell--dark";

  return (
    <div className={`app-shell ${themeClass}`}>
      <Navbar />
      <main className="app-content">
        <TaskManager />
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
