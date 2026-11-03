import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Apply from "./pages/Apply";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="apply" element={<Apply />} />
      {/* Old URLs that may still be bookmarked or shared */}
      <Route path="index-1" element={<Navigate to="/" replace />} />
      <Route path="contact" element={<Navigate to={{ pathname: "/", hash: "#contact" }} replace />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default App;
