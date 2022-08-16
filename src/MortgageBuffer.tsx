import React from "react";
import Input from "@mui/material/Input";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useMediaQuery } from "react-responsive";

const MortgageBuffer = ({ style }: any) => {
  const [mortgagebalance, setmortgagebalance] = useState<number>();
  const [mortgageterm, setmortgageterm] = useState("");
  const [mortgagerate, setmortgagerate] = useState("");
  const [mortgagereps, setmortgagereps] = useState("");

  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const handleTick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const addBuffer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked2(event.target.checked);
  };

  const calculatemortgage = () => {
    if (checked2 === false) {
      if (checked === false) {
        if (mortgagebalance && mortgageterm && mortgagerate) {
          let pvif = Math.pow(
            1 + Number(mortgagerate) / 1200,
            Number(mortgageterm)
          );

          let repayments = (
            (((mortgagebalance * Number(mortgagerate)) / 100 / 12) *
              Math.pow(
                1 + Number(mortgagerate) / 100 / 12,
                Number(mortgageterm) * 12
              )) /
            (Math.pow(
              1 + Number(mortgagerate) / 100 / 12,
              Number(mortgageterm) * 12
            ) -
              1)
          ).toFixed(2);

          setmortgagereps("$" + repayments.toString());
        } else {
          alert("please, ensure all boxes are completed");
        }
      } else if (checked === true) {
        if (mortgagebalance && mortgageterm && mortgagerate) {
          let repayments = (
            (mortgagebalance / 1200) *
            Number(mortgagerate)
          ).toFixed(2);

          setmortgagereps("$" + repayments.toString());
        } else {
          alert("please, ensure all boxes are completed");
        }
      }
    } else if (checked2 === true) {
      let mortgagerate2 = Number(mortgagerate) + 1.35;
      if (checked === false) {
        if (mortgagebalance && mortgageterm && mortgagerate2) {
          let pvif = Math.pow(1 + mortgagerate2 / 1200, Number(mortgageterm));

          let repayments = (
            (((mortgagebalance * mortgagerate2) / 100 / 12) *
              Math.pow(
                1 + mortgagerate2 / 100 / 12,
                Number(mortgageterm) * 12
              )) /
            (Math.pow(1 + mortgagerate2 / 100 / 12, Number(mortgageterm) * 12) -
              1)
          ).toFixed(2);

          setmortgagereps("$" + repayments.toString());
        } else {
          alert("please, ensure all boxes are completed");
        }
      } else if (checked === true) {
        if (mortgagebalance && mortgageterm && mortgagerate) {
          let repayments = (
            (mortgagebalance / 1200) *
            Number(mortgagerate)
          ).toFixed(2);

          setmortgagereps("$" + repayments.toString());
        } else {
          alert("please, ensure all boxes are completed");
        }
      }
    }
  };

  const refreshmortgage = () => {
    setmortgagebalance(0);
    setmortgagerate("");
    setmortgageterm("");
    setmortgagereps("");
    setChecked(false);
    setChecked2(false);
  };

  useEffect(() => {
    if (Number(mortgageterm) > 60) {
      alert("Term cant exceed 60 months");
      setmortgageterm("60");
    }
  }, [mortgageterm, mortgagebalance]);

  return (
    <>
      <section className="sec4" style={{ display: style }}>
        <h1>Calculate mortgage repayments</h1>

        <FormControl
          sx={{
            mt: 10,
            width: 200,
            background: "rgba(242, 243, 255, 0.3)",
          }}
        >
          <InputLabel
            htmlFor="outlined-adornment-amount"
            sx={{ color: "black", fontWeight: "bold" }}
          >
            Mortgage Amount
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={mortgagebalance}
            onChange={(e: any) => setmortgagebalance(e.target.value)}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Financed Amount"
          />
        </FormControl>
        <TextField
          sx={{ mt: 1, width: 200, background: "rgba(242, 243, 255, 0.3)" }}
          id="outlined-number"
          label="Term in years"
          type="number"
          value={mortgageterm}
          onChange={(e) => setmortgageterm(e.target.value)}
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
            value={mortgagerate}
            onChange={(e) => setmortgagerate(e.target.value)}
            startAdornment={<InputAdornment position="start">%</InputAdornment>}
            label="Interest rate"
          />
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox
              sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
              checked={checked}
              onChange={handleTick}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label="Interest Only"
        />
        <FormControlLabel
          control={
            <Checkbox
              sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
              checked={checked2}
              onChange={addBuffer}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label="Add Buffer"
        />
        <div className="buttons">
          <Button
            onClick={() => calculatemortgage()}
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
            onClick={() => refreshmortgage()}
            sx={{
              mt: 3,
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
        <span style={{ fontSize: 25, fontWeight: "bold" }}>{mortgagereps}</span>
      </section>
    </>
  );
};
export default MortgageBuffer;
