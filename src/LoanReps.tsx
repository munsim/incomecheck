import React from "react";
import Input from "@mui/material/Input";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import { useMediaQuery } from "react-responsive";
import {
  useState,
  useEffect,
  useReducer,
  useRef,
  createContext,
  useContext,
} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LoanReps = ({ style }: any) => {
  const [naf, setnaf] = useState<number>();
  const [term, setterm] = useState("");
  const [rate, setrate] = useState("");
  const [balloon, setballoon] = useState<number>(0);
  const [reps, setreps] = useState("");
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  //const [state, dispatch] = useReducer(reducer, initialState);

  const calculate = () => {
    if (naf && term && rate) {
      let pvif = Math.pow(1 + Number(rate) / 1200, Number(term));
      let repayments = (
        ((Number(rate) / 1200) * (Number(naf) * pvif - Number(balloon))) /
        (pvif - 1)
      ).toFixed(2);
      setreps("$" + repayments.toString());
    } else {
      alert("please, ensure all boxes are completed");
    }
  };

  const refresh = () => {
    setnaf(0);
    setrate("");
    setterm("");
    setballoon(0);
    setreps("");
  };

  useEffect(() => {
    if (Number(term) > 60) {
      alert("Term cant exceed 60 months");
      setterm("60");
    }
    if (Number(balloon) > Number(naf)) {
      alert("Balloon cant exceed Amount financed");
      setballoon(Number(naf));
    }
  }, [term, balloon, naf]);

  return (
    <>
      <section className="sec2" style={{ display: style }}>
        <h1>Calculate loan repayments</h1>

        <FormControl
          sx={{ mt: 10, width: 200, background: "rgba(242, 243, 255, 0.3)" }}
        >
          <InputLabel
            htmlFor="outlined-adornment-amount"
            sx={{ color: "black", fontWeight: "bold" }}
          >
            Financed Amount
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={naf}
            onChange={(e: any) => setnaf(e.target.value)}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Financed Amount"
          />
        </FormControl>
        <TextField
          sx={{ mt: 1, width: 200, background: "rgba(242, 243, 255, 0.3)" }}
          id="outlined-number"
          label="Term in months"
          type="number"
          value={term}
          onChange={(e) => setterm(e.target.value)}
          InputLabelProps={{
            className: "black",
            shrink: true,
          }}
        />
        <FormControl
          sx={{ mt: 1, width: 200, background: "rgba(242, 243, 255, 0.3)" }}
        >
          <InputLabel
            htmlFor="outlined-adornment-amount"
            sx={{ color: "black", fontWeight: "bold" }}
          >
            Interest rate
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={rate}
            onChange={(e) => setrate(e.target.value)}
            startAdornment={<InputAdornment position="start">%</InputAdornment>}
            label="Interest rate"
          />
        </FormControl>
        <FormControl
          sx={{ mt: 1, width: 200, background: "rgba(242, 243, 255, 0.3)" }}
        >
          <InputLabel
            htmlFor="outlined-adornment-amount"
            sx={{ color: "black", fontWeight: "bold" }}
          >
            Final balloon
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={balloon}
            onChange={(e: any) => setballoon(e.target.value)}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Final balloon"
          />
        </FormControl>
        <div className="buttons">
          <Button
            onClick={() => calculate()}
            sx={{
              mt: 1,
              background:
                "linear-gradient(to right bottom, white, lightgreen )",
              color: "black",
              width: 150,
            }}
            variant="outlined"
          >
            CALCULATE
          </Button>
          <Button
            onClick={() => refresh()}
            sx={{
              mt: 1,
              background: "linear-gradient(to right bottom, white, lightblue )",
              color: "black",
              width: 150,
              ml: 0,
            }}
            variant="outlined"
          >
            REFRESH
          </Button>
        </div>
        <p>Monthly repayments:</p>
        <span style={{ fontSize: 25, fontWeight: "bold" }}>{reps}</span>
      </section>
    </>
  );
};

export default LoanReps;
