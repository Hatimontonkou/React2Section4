import { CssModules } from "./compenents/CssModules";
import { Emotion } from "./compenents/Emotion";
import { InlineStyle } from "./compenents/InlineStyle";
import { StyledComponents } from "./compenents/StyledComponents";
import { StyledJsx } from "./compenents/StyledJsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
