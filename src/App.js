import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import AuthContextProvider from "./shared/contexts/AuthContextProvider";
import Layout from "./layout/pages/Layout";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Layout />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
