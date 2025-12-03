import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Components from "./pages/Components";
import ComponentDocs from "./pages/docs/ComponentDocs";
import Home from "./pages/Home";

const basename = import.meta.env.BASE_URL || "/";
console.log("App basename:", basename, "BASE_URL:", import.meta.env.BASE_URL);

function App() {
  return (
    <BrowserRouter basename={basename}>
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
