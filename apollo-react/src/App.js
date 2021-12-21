import "./App.css";
import CompagnyList from "./pages/CompagnyList";
import { Container } from "react-bootstrap";
import Header from "./Componnents/Header";

export default function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <CompagnyList></CompagnyList>
      </Container>
    </div>
  );
}
