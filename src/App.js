import { useState } from "react/cjs/react.development";
import About_us from "./About_us";
import Alert from "./Alert";
import "./App.css";
import Darkmode from "./Darkmode";
import "./Navbar";
import Navbar from "./Navbar";
import Text_Form from "./Text_Form";

function App() {
  const [aalert, setAlert] = useState(null);
  const [ModeInfo, setModeInfo] = useState({
    Text_color: "Black",
    bg_color: "White",
    ButtonText: "DarkMode",
    OtherColors: "Cyan",
  });

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <div
      style={{ backgroundColor: ModeInfo.bg_color, color: ModeInfo.Text_color }}
      className="fill-window"
    >
      <Navbar />
      <Alert alert={aalert} />
      <Text_Form ModeInfo={ModeInfo} showAlert={showAlert} />

      <Darkmode
        ModeInfo={ModeInfo}
        ChangeMode={() => {
          if (ModeInfo.ButtonText === "DarkMode") {
            setModeInfo({
              Text_color: "White",
              bg_color: "Black",
              ButtonText: "LightMode",
              OtherColors: "DarkSlateBlue",
            });
          } else {
            setModeInfo({
              Text_color: "Black",
              bg_color: "White",
              ButtonText: "DarkMode",
              OtherColors: "Cyan",
            });
          }
        }}
      />
      <About_us ModeInfo={ModeInfo} />
    </div>
  );
}

export default App;
