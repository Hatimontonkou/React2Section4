import { CssModules } from "./compenents/CssModules";
import { InlineStyle } from "./compenents/InlineStyle";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
    </div>
  );
}
