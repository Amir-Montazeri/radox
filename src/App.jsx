import { GlobalStyles } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./globalStyles";
import { Navbar, Home, Register, Login, Employment, Types } from "pages";

const App = () => {
  return (
    <main>
      <Router>
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
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
