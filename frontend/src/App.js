import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProject from "./components/AddProject";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/projects/new" exact element={<AddProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
