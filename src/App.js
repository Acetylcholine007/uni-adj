import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import AuthContextProvider from "./shared/contexts/AuthContextProvider";
import Layout from "./layout/pages/Layout";
import OrderContextProvider from "./shared/contexts/OrderContextProvider";
import InventoryContextProvider from "./shared/contexts/InventoryContextProvider";
import UserContextProvider from "./shared/contexts/UserContextProvider";

function App() {
  return (
    <AuthContextProvider>
      <OrderContextProvider>
        <InventoryContextProvider>
          <UserContextProvider>
            <Router>
              <Layout />
            </Router>
          </UserContextProvider>
        </InventoryContextProvider>
      </OrderContextProvider>
    </AuthContextProvider>
  );
}

export default App;
