import "./App.css";
import CompagnyList from "./pages/CompagnyList";
import { Container, Col } from "react-bootstrap";
import Header from "./Componnents/Header";

export default function App() {
  return (
    <div className="App">
      <Container>
        <Col xs={12} md={12}>
          <Header />
        </Col>
        <Col xs={12} md={12}>
          <CompagnyList />
        </Col>
      </Container>
    </div>
  );
}
