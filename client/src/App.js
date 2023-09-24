import { BrowserRouter } from "react-router-dom";
import './App.css';
import AppRouter from './components/app-router/app-router';
import Navigation from "./components/navigation/navigation";


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
