import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Details from "./pages/Details";
import Home from "./pages/Home";
import { BASE_NAME } from "./constants/env";

function App() {
  console.log("app");
  return (
    <BrowserRouter basename={`/${BASE_NAME}`}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="details" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
