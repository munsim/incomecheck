import React from "react";
import { useState, useEffect, useReducer } from "react";
import Button from "@mui/material/Button";
import LoanReps from "./LoanReps";
import ServicingCheck from "./ServicingCheck";
import IncomeCheck from "./IncomeCheck";
import MortgageBuffer from "./MortgageBuffer";
import { useMediaQuery } from "react-responsive";

const ACTIONS = {
  OPEN_SECTION: "open-section",
};

function reducer(state: any, action: any) {}

const unclicked = "linear-gradient(to right bottom, white, lightblue)";
const clicked = "linear-gradient(to right bottom, white, lightgreen)";

export const arr = [
  { number: 0, button: "Calculate servicing" },
  { number: 1, button: "Calculate loan repayments" },
  { number: 2, button: "Income Check" },
  { number: 3, button: "Mortgage with buffer %" },
];

function App() {
  const [display1, setdisplay1] = useState<any>("none");
  const [display2, setdisplay2] = useState<any>("none");
  const [display3, setdisplay3] = useState<any>("none");
  const [display4, setdisplay4] = useState<any>("none");

  const [display, setdisplay] = useState<any>([]);

  const [colorarr, setcolorarr] = useState<any>([]);
  const [lowlevel, setlowlevel] = useState<string>("translateY(-235px)");
  const [maindivdown, setmaindivdown] = useState<string>("translateY(0px)");
  const [menutext, setmenutext] = useState<string>(
    "NAVIGATE HERE TO SELECT TOOL"
  );
  const [h1fontsize, seth1fontsize] = useState("5em");
  const [h1level, seth1level] = useState("transalateY(0px)");
  const [seclevel, setseclevel] = useState("transalateY(0px)");

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  useEffect(() => {
    const array: string[] = new Array(arr.length).fill(unclicked);
    setcolorarr(array);

    const array2: string[] = new Array(arr.length).fill("none");
    setdisplay(array2);
  }, []);

  const opentool = (index: any) => {
    if (index === 0 && display1 === "none") {
      setdisplay1("flex");
      setdisplay2("none");
      setdisplay3("none");
      setdisplay4("none");

      colorarr[index] = clicked;
      colorarr[3] = unclicked;
      colorarr[1] = unclicked;
      colorarr[2] = unclicked;

      setseclevel("translateY(-100px)");
      seth1fontsize("3em");
      seth1level("translateY(-100px)");
    } else if (index === 1 && display2 === "none") {
      setdisplay1("none");
      setdisplay2("flex");
      setdisplay3("none");
      setdisplay4("none");
      seth1fontsize("3em");
      setseclevel("translateY(-100px)");
      seth1level("translateY(-100px)");
      colorarr[0] = unclicked;
      colorarr[index] = clicked;
      colorarr[2] = unclicked;
      colorarr[3] = unclicked;
    } else if (index === 2 && display3 === "none") {
      setdisplay1("none");
      setdisplay2("none");
      setdisplay3("flex");
      setdisplay4("none");
      seth1fontsize("3em");
      setseclevel("translateY(-100px)");
      seth1level("translateY(-100px)");
      colorarr[0] = unclicked;
      colorarr[1] = unclicked;
      colorarr[index] = clicked;
      colorarr[3] = unclicked;
    } else if (index === 3 && display4 === "none") {
      setdisplay1("none");
      setdisplay2("none");
      setdisplay3("none");
      setdisplay4("flex");
      seth1fontsize("3em");
      setseclevel("translateY(-100px)");
      seth1level("translateY(-100px)");
      colorarr[0] = unclicked;
      colorarr[1] = unclicked;
      colorarr[2] = unclicked;
      colorarr[index] = clicked;
    } else {
      setdisplay1("none");
      setdisplay2("none");
      setdisplay3("none");
      setdisplay4("none");
      seth1fontsize("5em");
      setseclevel("translateY(0px)");
      seth1level("translateY(0px)");
      colorarr[0] = unclicked;
      colorarr[1] = unclicked;
      colorarr[2] = unclicked;
      colorarr[3] = unclicked;
    }
  };

  const lower = () => {
    setlowlevel("translateY(0px)");
    setmenutext("");
  };
  const lower2 = () => {
    setlowlevel("translateY(-235px)");
    setmenutext("NAVIGATE HERE TO SELECT TOOL");
  };
  return (
    <>
      {isDesktopOrLaptop && (
        <>
          <div
            className="menu"
            style={{ transform: lowlevel, zIndex: 5 }}
            onMouseOver={() => lower()}
            onMouseLeave={() => lower2()}
          >
            <div className="buttons">
              {arr.map((but, index) => (
                <Button
                  key={index}
                  sx={{
                    width: 300,
                    height: 40,
                    mt: 2,
                    color: "black",
                    border: "black solid 1px",
                    background: colorarr[index],
                  }}
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    opentool(index);
                  }}
                >
                  {arr[index].button}
                </Button>
              ))}
            </div>
            <h3 style={{ color: "darkred" }}>{menutext}</h3>
          </div>
          <div className="main">
            <h1
              style={{
                fontSize: h1fontsize,
                marginTop: "100px",
                color: "#353638",
                transform: h1level,
                transition: "1s",
              }}
            >
              Income Check Tool
            </h1>
            <div
              className="container"
              style={{ transform: seclevel, transition: "1s" }}
            >
              <ServicingCheck style={display1} />
              <LoanReps style={display2} />
              <IncomeCheck style={display3} />
              <MortgageBuffer style={display4} />
            </div>
          </div>
        </>
      )}
      {isTabletOrMobile && (
        <div className="main2">
          <div className="logos">
            <div>
              <img className="logobmw" src={require("./img/bmw.png")} />
            </div>
            <div>
              {" "}
              <img className="logomini" src={require("./img/mini2.png")} />
            </div>
          </div>
          <div className="menu2">
            <div className="buttons">
              {arr.map((but, index) => (
                <Button
                  key={index}
                  sx={{
                    width: 300,
                    mt: 2,
                    color: "black",
                    border: "black solid 1px",
                    background: colorarr[index],
                  }}
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    opentool(index);
                  }}
                >
                  {arr[index].button}
                </Button>
              ))}
            </div>
          </div>
          <div className="container2">
            <ServicingCheck style={display1} />
            <LoanReps style={display2} />
            <IncomeCheck style={display3} />
            <MortgageBuffer style={display4} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
