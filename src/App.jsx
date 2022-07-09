import { GlobalStyles } from "@mui/material";
import styles from "./globalStyles";
import { Navbar, Home } from "pages";

const App = () => {
  return (
    <main>
      <GlobalStyles styles={styles} />
      <Navbar />
      <Home />
    </main>
  );
};

export default App;
