import { GlobalStyles, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./globalStyles";
import {
  Navbar,
  Home,
  Register,
  Login,
  Employment,
  Types,
  Supplier,
  SearchItem,
} from "pages";
import theme from "theme";
import { ReadyToWorkModal } from "components";

const App = () => {
  return (
    <main>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyles styles={styles} />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/">
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route path="/employment" element={<Employment />} />
            <Route path="/types" element={<Types />} />
            <Route path="/supplier" element={<Supplier />}>
              <Route path="ready-to-work" element={<ReadyToWorkModal />} />
            </Route>
            <Route path="/search-item" element={<SearchItem />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </ThemeProvider>
      </Router>
    </main>
  );
};

export default App;
