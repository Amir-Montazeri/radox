import { GlobalStyles } from "@mui/material";
import styles from "./globalStyles";

const App = () => {
  return (
    <main>
      <GlobalStyles styles={styles} />
      <h1>Title</h1>
    </main>
  );
};

export default App;
