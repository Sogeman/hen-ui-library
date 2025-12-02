import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Components from "./pages/Components";
import ComponentDocs from "./pages/docs/ComponentDocs";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="components" element={<Components />} />
          <Route path="docs/:name" element={<ComponentDocs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
