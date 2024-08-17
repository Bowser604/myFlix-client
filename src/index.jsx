import Container from "react-bootstrap/Container";
import { createRoot } from 'react-dom/client';
import "./index.scss";
import { MainView } from './components/main-view/main-view';

// Main component (will eventually use all the others)
const MyFlixApplication = () => {
  return (
    <Container style={{ border: "1px solid black" }}>
      <MainView />
    </Container>

  //   <div className="my-flix">
  //     <MainView></MainView>
  //   </div>
  );
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<MyFlixApplication />);