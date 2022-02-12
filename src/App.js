import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { BrowserRouter as Router } from "react-router-dom";
import AuthContextProvider from "./shared/contexts/AuthContextProvider";
import Layout from "./layout/pages/Layout";
import OrderContextProvider from "./shared/contexts/OrderContextProvider";
import InventoryContextProvider from "./shared/contexts/InventoryContextProvider";
import UserContextProvider from "./shared/contexts/UserContextProvider";
import { grey, red } from "@mui/material/colors";

function App() {
  const theme = createTheme({
    palette: {
      primary: red,
      secondary: grey
    },
  });

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
