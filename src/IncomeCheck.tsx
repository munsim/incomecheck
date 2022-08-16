import React from "react";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect, useRef, createContext, useContext } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useMediaQuery } from "react-responsive";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import axios from "axios";
import * as xlsx from "xlsx";
const IncomeCheck = ({ style }: any) => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    axios.get("http://localhost:8080/data").then((res) => {
      let data = res.data;
      setData(data);
      console.log(data[0].min);
      console.log(data[0].max);
    });
  }, []);

  let n = new Date();
  let y = n.getFullYear();
  let m = n.getMonth() + 1;
  let d = n.getDate();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [startDate, setStartDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState(new Date("2022/04/01"));
  const [endDate, setendDate] = useState(new Date());
  const [npmincome, setnpmincome] = useState<number>(0);
  const [maxterm, setmaxterm] = useState<number>(0);
  const [ytd, setytd] = useState<number>(0);
  const [base, setbase] = useState<number>(0);
  const [aleave, setaleave] = useState<number>(0);
  const [salsac, setsalsac] = useState<number>(0);
  const [fbt, setfbt] = useState<number>(0);
  const [pretaxother, setpretaxother] = useState<number>(0);
  const [other, setother] = useState<number>(0);
  const [carallowance, setcarallowance] = useState<number>(0);
  const [otherallowance, setotherallowance] = useState<number>(0);
  const [backpay, setbackpay] = useState<number>();
  const [comms, setcomms] = useState<number>(0);
  const [bonus, setbonus] = useState<number>(0);
  const [overtime, setovertime] = useState<number>(0);
  const [nonother, setnonother] = useState<number>(0);
  const [totalpretax, settotalpretax] = useState<number>(0);
  const [postaxother, setpostaxother] = useState<number>(0);
  const [postaxother2, setpostaxother2] = useState<number>(0);
  const [postfbt, setpostfbt] = useState<number>(0);
  const [helpdebt, sethelpdebt] = useState(false);
  const [helpdebtselfemp, sethelpdebtselfemp] = useState(false);
  const [totalpretaxdeductions, settotalpretaxdeductions] = useState<number>();
  const [totalposttaxdeductions, settotalposttaxdeductions] =
    useState<number>();
  const [totalgrosstaxed, settotalgrosstaxed] = useState<number>();
  const [totalgrosstaxedexlnonstandard, settotalgrosstaxedexlnonstandard] =
    useState<number>();
  const [finalincome, setfinalincome] = useState<number>();
  const [payfreq, setpayfreq] = useState("");
  const [adjnetincome, setadjnetincome] = useState<number>(0);
  const [tax, settax] = useState<number>(0);
  const [lito, setlito] = useState<number>(0);
  const [lmito, setlmito] = useState<number>(0);
  const [levy, setlevy] = useState<number>(0);
  const [helpdebtpayment, sethelpdebtpayment] = useState<number>(0);
  const [helpdebtpaymentSE, sethelpdebtpaymentSE] = useState<number>(0);
  const [totaltax, settotaltax] = useState<number>(0);
  const [division, setdivision] = useState<number>(0);
  const [paycycle, setpaycycle] = useState<number>(0);
  const [rounder, setrounder] = useState<number>(0);
  const [grossincome, setgrossincome] = useState<number>(0);
  const [npmfromgrossincome, setnpmfromgrossincome] = useState<number>(0);
  const refreshincomecheck = () => {
    setbase(0);
    settax(0);
    setlmito(0);
    setlito(0);
    setlevy(0);
    setdivision(0);
    setaleave(0);
    setother(0);
    setcarallowance(0);
    setotherallowance(0);
    setcomms(0);
    setbonus(0);
    setovertime(0);
    setnonother(0);
    setpostaxother(0);
    setpostaxother2(0);
    setpostfbt(0);
    setsalsac(0);
    setfbt(0);
    setadjnetincome(0);
    setpretaxother(0);
    settotalgrosstaxedexlnonstandard(0);
    settotalpretaxdeductions(0);
    settotaltax(0);
    sethelpdebtpayment(0);
    setpaycycle(0);
    sethelpdebt(false);
    setrounder(0);
  };
  const formcontrolbuttonStyle = {
    mt: 2,
    width: 175,
    background: "rgba(255, 255, 255, 0.5)",
  };
  const inputstyle = {
    color: "black",
    fontWeight: "bold",
  };
  /*   useEffect(() => {
    let curdate = new Date();
    let datedif = startDate.getTime() - curdate.getTime();
    let conservativeterm = Math.round(datedif / 2592000000) - 1;
    setmaxterm(conservativeterm);
  }, [startDate]);
 */
  const handlePayfreq = (event: SelectChangeEvent) => {
    setpayfreq(event.target.value);
  };
  const addHelpdebt = (event: React.ChangeEvent<HTMLInputElement>) => {
    sethelpdebt(event.target.checked);
  };

  const addHelpdebtselfemp = (event: React.ChangeEvent<HTMLInputElement>) => {
    sethelpdebtselfemp(event.target.checked);
  };

  useEffect(() => {
    let enddate = new Date();
    let ytddate = endDate.getTime() - startDate1.getTime();
    let ytdincome =
      (ytd / (Math.floor(ytddate / 86400000) + 1)) * 7 * 4.33333333333333333;

    setnpmincome(Math.floor(ytdincome));
  }, [startDate1, endDate, ytd]);

  useEffect(() => {
    if (grossincome * 1 < 47014) {
      sethelpdebtpaymentSE(0);
    } else if (grossincome * 1 >= 47014 && grossincome * 1 <= 54282) {
      sethelpdebtpaymentSE(0.01 * grossincome);
    } else if (grossincome * 1 >= 54283 && grossincome * 1 <= 57538) {
      sethelpdebtpaymentSE(0.02 * grossincome);
    } else if (grossincome * 1 >= 57539 && grossincome * 1 <= 60991) {
      sethelpdebtpaymentSE(0.025 * grossincome);
    } else if (grossincome * 1 >= 60992 && grossincome * 1 <= 64651) {
      sethelpdebtpaymentSE(0.03 * grossincome);
    } else if (grossincome * 1 >= 64652 && grossincome * 1 <= 68529) {
      sethelpdebtpaymentSE(0.035 * grossincome);
    } else if (grossincome * 1 >= 68530 && grossincome * 1 <= 72641) {
      sethelpdebtpaymentSE(0.04 * grossincome);
    } else if (grossincome * 1 >= 72642 && grossincome * 1 <= 77001) {
      sethelpdebtpaymentSE(0.045 * grossincome);
    } else if (grossincome * 1 >= 77002 && grossincome * 1 <= 81620) {
      sethelpdebtpaymentSE(0.05 * grossincome);
    } else if (grossincome * 1 >= 81621 && grossincome * 1 <= 86518) {
      sethelpdebtpaymentSE(0.055 * grossincome);
    } else if (grossincome * 1 >= 86519 && grossincome * 1 <= 91709) {
      sethelpdebtpaymentSE(0.06 * grossincome);
    } else if (grossincome * 1 >= 91710 && grossincome * 1 <= 97212) {
      sethelpdebtpaymentSE(0.065 * grossincome);
    } else if (grossincome * 1 >= 97213 && grossincome * 1 <= 103045) {
      sethelpdebtpaymentSE(0.07 * grossincome);
    } else if (grossincome * 1 >= 103046 && grossincome * 1 <= 109227) {
      sethelpdebtpaymentSE(0.075 * grossincome);
    } else if (grossincome * 1 >= 109228 && grossincome * 1 <= 115781) {
      sethelpdebtpaymentSE(0.08 * grossincome);
    } else if (grossincome * 1 >= 115782 && grossincome * 1 <= 122728) {
      sethelpdebtpaymentSE(0.085 * grossincome);
    } else if (grossincome * 1 >= 122729 && grossincome * 1 <= 130092) {
      sethelpdebtpaymentSE(0.09 * grossincome);
    } else if (grossincome * 1 >= 130093 && grossincome * 1 <= 137897) {
      sethelpdebtpaymentSE(0.095 * grossincome);
    } else if (grossincome * 1 >= 137898) {
      sethelpdebtpaymentSE(0.1 * grossincome);
    }

    if (grossincome <= 18200) {
      setnpmfromgrossincome(grossincome / 12);
    } else if (18201 < grossincome && grossincome <= 45000) {
      setnpmfromgrossincome((grossincome - 0.19 * (grossincome - 18200)) / 12);
    } else if (45001 < grossincome && grossincome <= 120000) {
      setnpmfromgrossincome(
        (grossincome - 5092 + 0.325 * (grossincome - 45000)) / 12
      );
    } else if (120001 < grossincome && grossincome <= 180000) {
      setnpmfromgrossincome(
        (grossincome - 29467 + 0.37 * (grossincome! - 120000)) / 12
      );
    } else if (grossincome > 180001) {
      setnpmfromgrossincome(
        (grossincome - 51667 + 0.45 * (grossincome - 180000)) / 12
      );
    }
  }, [grossincome]);

  useEffect(() => {
    settotalgrosstaxed(
      Number(base) +
        Number(aleave) +
        Number(other) +
        Number(carallowance) +
        Number(otherallowance) +
        Number(comms) +
        Number(bonus) +
        Number(overtime) +
        Number(nonother)
    );
    settotalgrosstaxedexlnonstandard(
      Number(base) +
        Number(aleave) +
        Number(other) +
        Number(carallowance) +
        Number(otherallowance)
    );

    settotalpretaxdeductions(
      Number(salsac) + Number(fbt) + Number(pretaxother)
    );

    settotalposttaxdeductions(
      Number(postaxother) + Number(postaxother2) + Number(postfbt)
    );
    setfinalincome(totalgrosstaxedexlnonstandard! - totalpretaxdeductions!);
  }, [
    salsac,
    fbt,
    pretaxother,
    postaxother,
    postaxother2,
    postfbt,
    base,
    aleave,
    other,
    carallowance,
    otherallowance,
    comms,
    bonus,
    overtime,
    nonother,
    totalgrosstaxedexlnonstandard,
    totalpretaxdeductions,
  ]);

  useEffect(() => {
    if (Number(payfreq) == 1) {
      if (1.1 * finalincome! * 12 >= 250000) {
        if (1.1 * finalincome! * 12 - 250000 <= 27500) {
          setdivision((1.1 * finalincome! * 12 - 250000) * 0.15);
        } else if (1.1 * finalincome! * 12 - 250000 > 27500) {
          setdivision(4125);
        } else {
          setdivision(0);
        }
      } else {
        setdivision(0);
      }

      if (finalincome! * 12 > 100000 && finalincome! * 12 < 150000) {
        setrounder(5.416666);
      }
      if (finalincome! * 12 > 20000 && finalincome! * 12 < 40000) {
        setrounder(-6);
      }
      if (finalincome! * 12 < 47014) {
        sethelpdebtpayment(0);
      } else if (finalincome! * 12 >= 47014 && finalincome! * 12 <= 54282) {
        sethelpdebtpayment(0.01 * finalincome!);
      } else if (finalincome! * 12 >= 54283 && finalincome! * 12 <= 57538) {
        sethelpdebtpayment(0.02 * finalincome!);
      } else if (finalincome! * 12 >= 57539 && finalincome! * 12 <= 60991) {
        sethelpdebtpayment(0.025 * finalincome!);
      } else if (finalincome! * 12 >= 60992 && finalincome! * 12 <= 64651) {
        sethelpdebtpayment(0.03 * finalincome!);
      } else if (finalincome! * 12 >= 64652 && finalincome! * 12 <= 68529) {
        sethelpdebtpayment(0.035 * finalincome!);
      } else if (finalincome! * 12 >= 68530 && finalincome! * 12 <= 72641) {
        sethelpdebtpayment(0.04 * finalincome!);
      } else if (finalincome! * 12 >= 72642 && finalincome! * 12 <= 77001) {
        sethelpdebtpayment(0.045 * finalincome!);
      } else if (finalincome! * 12 >= 77002 && finalincome! * 12 <= 81620) {
        sethelpdebtpayment(0.05 * finalincome!);
      } else if (finalincome! * 12 >= 81621 && finalincome! * 12 <= 86518) {
        sethelpdebtpayment(0.055 * finalincome!);
      } else if (finalincome! * 12 >= 86519 && finalincome! * 12 <= 91709) {
        sethelpdebtpayment(0.06 * finalincome!);
      } else if (finalincome! * 12 >= 91710 && finalincome! * 12 <= 97212) {
        sethelpdebtpayment(0.065 * finalincome!);
      } else if (finalincome! * 12 >= 97213 && finalincome! * 12 <= 103045) {
        sethelpdebtpayment(0.07 * finalincome!);
      } else if (finalincome! * 12 >= 103046 && finalincome! * 12 <= 109227) {
        sethelpdebtpayment(0.075 * finalincome!);
      } else if (finalincome! * 12 >= 109228 && finalincome! * 12 <= 115781) {
        sethelpdebtpayment(0.08 * finalincome!);
      } else if (finalincome! * 12 >= 115782 && finalincome! * 12 <= 122728) {
        sethelpdebtpayment(0.085 * finalincome!);
      } else if (finalincome! * 12 >= 122729 && finalincome! * 12 <= 130092) {
        sethelpdebtpayment(0.09 * finalincome!);
      } else if (finalincome! * 12 >= 130093 && finalincome! * 12 <= 137897) {
        sethelpdebtpayment(0.095 * finalincome!);
      } else if (finalincome! * 12 >= 137898) {
        sethelpdebtpayment(0.1 * finalincome!);
      }

      if (0 < finalincome! * 12 && finalincome! * 12 <= 37500) {
        setlito(700);
      } else if (37501 < finalincome! * 12 && finalincome! * 12 <= 45000) {
        setlito(700 - 0.05 * (finalincome! * 12 - 37500));
      } else if (45001 < finalincome! * 12 && finalincome! * 12 <= 66667) {
        setlito(325 - 0.015 * (finalincome! * 12 - 45000));
      } else if (66667 < finalincome! * 12) {
        setlito(0);
      } else if (finalincome! * 12 == 0) {
        setlito(0);
      }

      if (0 < finalincome! * 12 && finalincome! * 12 <= 37000) {
        setlmito(675);
      } else if (37001 < finalincome! * 12 && finalincome! * 12 <= 48000) {
        setlmito(
          675 + 0.075 * (finalincome! * 12 - 37000) > 1500
            ? 1500
            : 675 + 0.075 * (finalincome! * 12 - 37000)
        );
      } else if (48001 < finalincome! * 12 && finalincome! * 12 <= 90000) {
        setlmito(1500);
      } else if (90001 < finalincome! * 12 && finalincome! * 12 <= 126000) {
        setlmito(1500 - 0.03 * (finalincome! * 12 - 90000));
      } else if (126001 < finalincome! * 12) {
        setlmito(0);
      } else if (finalincome! * 12 == 0) {
        setlmito(0);
      }

      if (finalincome! * 12 <= 18200) {
        settax(0);
      } else if (18201 < finalincome! * 12 && finalincome! * 12 <= 45000) {
        settax(0.19 * (finalincome! * 12 - 18200));
      } else if (45001 < finalincome! * 12 && finalincome! * 12 <= 120000) {
        settax(5092 + 0.325 * (finalincome! * 12 - 45000));
      } else if (120001 < finalincome! * 12 && finalincome! * 12 <= 180000) {
        settax(29467 + 0.37 * (finalincome! * 12 - 120000));
      } else if (finalincome! * 12 > 180001) {
        settax(51667 + 0.45 * (finalincome! * 12 - 180000));
      }

      if (finalincome! * 12 <= 23226) {
        setlevy(0);
      } else if (23227 < finalincome! * 12 && finalincome! * 12 <= 29032) {
        setlevy(0.1 * (finalincome! * 12 - 23226));
      } else if (finalincome! * 12 > 29032) {
        setlevy(0.02 * finalincome! * 12);
      }
    } else if (Number(payfreq) == 2) {
      if (1.1 * finalincome! * 26 >= 250000) {
        if (1.1 * finalincome! * 26 - 250000 <= 27500) {
          setdivision((1.1 * finalincome! * 26 - 250000) * 0.15);
        } else if (1.1 * finalincome! * 26 - 250000 > 27500) {
          setdivision(4125);
        } else {
          setdivision(0);
        }
      } else {
        setdivision(0);
      }

      if (finalincome! * 26 > 100000 && finalincome! * 26 < 150000) {
        setrounder(5.416666);
      }

      if (finalincome! * 26 > 20000 && finalincome! * 26 < 40000) {
        setrounder(-6);
      }

      if (finalincome! * 26 < 47014) {
        sethelpdebtpayment(0);
      } else if (finalincome! * 26 >= 47014 && finalincome! * 26 <= 54282) {
        sethelpdebtpayment((0.01 * finalincome! * 26) / 12);
      } else if (finalincome! * 26 >= 54283 && finalincome! * 26 <= 57538) {
        sethelpdebtpayment((0.02 * finalincome! * 26) / 12);
      } else if (finalincome! * 26 >= 57539 && finalincome! * 26 <= 60991) {
        sethelpdebtpayment((0.025 * finalincome! * 26) / 12);
      } else if (finalincome! * 26 >= 60992 && finalincome! * 26 <= 64651) {
        sethelpdebtpayment((0.03 * finalincome! * 26) / 12);
      } else if (finalincome! * 26 >= 64652 && finalincome! * 26 <= 68529) {
        sethelpdebtpayment((0.035 * finalincome! * 26) / 12);
      } else if (finalincome! * 26 >= 68530 && finalincome! * 26 <= 72641) {
        sethelpdebtpayment((0.04 * finalincome! * 26) / 12);
      } else if (finalincome! * 26 >= 72642 && finalincome! * 26 <= 77001) {
        sethelpdebtpayment((0.045 * finalincome! * 26) / 12);
      } else if (finalincome! * 26 >= 77002 && finalincome! * 26 <= 81620) {
        sethelpdebtpayment((0.05 * finalincome! * 26) / 12);
      } else if (finalincome! * 26 >= 81621 && finalincome! * 26 <= 86518) {
        sethelpdebtpayment((0.055 * finalincome! * 26) / 12);
      } else if (finalincome! * 26 >= 86519 && finalincome! * 26 <= 91709) {
        sethelpdebtpayment((0.06 * finalincome! * 26) / 12);
      } else if (finalincome! * 26 >= 91710 && finalincome! * 26 <= 97212) {
        sethelpdebtpayment((0.065 * finalincome! * 26) / 12);
      } else if (finalincome! * 26 >= 97213 && finalincome! * 26 <= 103045) {
        sethelpdebtpayment((0.07 * finalincome! * 26) / 12);
      } else if (finalincome! * 26 >= 103046 && finalincome! * 26 <= 109227) {
        sethelpdebtpayment((0.075 * finalincome! * 26) / 12);
      } else if (finalincome! * 26 >= 109228 && finalincome! * 26 <= 115781) {
        sethelpdebtpayment((0.08 * finalincome! * 26) / 12);
      } else if (finalincome! * 26 >= 115782 && finalincome! * 26 <= 122728) {
        sethelpdebtpayment((0.085 * finalincome! * 26) / 12);
      } else if (finalincome! * 26 >= 122729 && finalincome! * 26 <= 130092) {
        sethelpdebtpayment((0.09 * finalincome! * 26) / 12);
      } else if (finalincome! * 26 >= 130093 && finalincome! * 26 <= 137897) {
        sethelpdebtpayment((0.095 * finalincome! * 26) / 12);
      } else if (finalincome! * 26 >= 137898) {
        sethelpdebtpayment((0.1 * finalincome! * 26) / 12);
      }

      if (0 < finalincome! * 26 && finalincome! * 26 <= 37500) {
        setlito(700);
      } else if (37501 < finalincome! * 26 && finalincome! * 26 <= 45000) {
        setlito(700 - 0.05 * (finalincome! * 26 - 37500));
      } else if (45001 < finalincome! * 26 && finalincome! * 26 <= 66667) {
        setlito(325 - 0.015 * (finalincome! * 26 - 45000));
      } else if (66667 < finalincome! * 26) {
        setlito(0);
      } else if (finalincome! * 26 == 0) {
        setlito(0);
      }

      if (0 < finalincome! * 26 && finalincome! * 26 <= 37000) {
        setlmito(675);
      } else if (37001 < finalincome! * 26 && finalincome! * 26 <= 48000) {
        setlmito(
          675 + 0.075 * (finalincome! * 26 - 37000) > 1500
            ? 1500
            : 675 + 0.075 * (finalincome! * 26 - 37000)
        );
      } else if (48001 < finalincome! * 26 && finalincome! * 26 <= 90000) {
        setlmito(1500);
      } else if (90001 < finalincome! * 26 && finalincome! * 26 <= 126000) {
        setlmito(1500 - 0.03 * (finalincome! * 26 - 90000));
      } else if (126001 < finalincome! * 26) {
        setlmito(0);
      } else if (finalincome! * 26 == 0) {
        setlmito(0);
      }

      if (finalincome! * 26 <= 18200) {
        settax(0);
      } else if (18201 < finalincome! * 26 && finalincome! * 26 <= 45000) {
        settax(0.19 * (finalincome! * 26 - 18200));
      } else if (45001 < finalincome! * 26 && finalincome! * 26 <= 120000) {
        settax(5092 + 0.325 * (finalincome! * 26 - 45000));
      } else if (120001 < finalincome! * 26 && finalincome! * 26 <= 180000) {
        settax(29467 + 0.37 * (finalincome! * 26 - 120000));
      } else if (finalincome! * 26 > 180001) {
        settax(51667 + 0.45 * (finalincome! * 26 - 180000));
      }

      if (finalincome! * 26 <= 23226) {
        setlevy(0);
      } else if (23227 < finalincome! * 26 && finalincome! * 26 <= 29032) {
        setlevy(0.1 * (finalincome! * 26 - 23226));
      } else if (finalincome! * 26 > 29032) {
        setlevy(0.02 * finalincome! * 26);
      }
    } else if (Number(payfreq) == 3) {
      if (1.1 * finalincome! * 52 >= 250000) {
        if (1.1 * finalincome! * 52 - 250000 <= 27500) {
          setdivision((1.1 * finalincome! * 52 - 250000) * 0.15);
        } else if (1.1 * finalincome! * 52 - 250000 > 27500) {
          setdivision(4125);
        } else {
          setdivision(0);
        }
      } else {
        setdivision(0);
      }

      if (finalincome! * 52 > 100000 && finalincome! * 52 < 150000) {
        setrounder(5.416666);
      }

      if (finalincome! * 52 > 20000 && finalincome! * 52 < 40000) {
        setrounder(-6);
      }

      if (finalincome! * 52 < 47014) {
        sethelpdebtpayment(0);
      } else if (finalincome! * 52 >= 47014 && finalincome! * 52 <= 54282) {
        sethelpdebtpayment((0.01 * finalincome! * 52) / 12);
      } else if (finalincome! * 52 >= 54283 && finalincome! * 52 <= 57538) {
        sethelpdebtpayment((0.02 * finalincome! * 52) / 12);
      } else if (finalincome! * 52 >= 57539 && finalincome! * 52 <= 60991) {
        sethelpdebtpayment((0.025 * finalincome! * 52) / 12);
      } else if (finalincome! * 52 >= 60992 && finalincome! * 52 <= 64651) {
        sethelpdebtpayment((0.03 * finalincome! * 52) / 12);
      } else if (finalincome! * 52 >= 64652 && finalincome! * 52 <= 68529) {
        sethelpdebtpayment((0.035 * finalincome! * 52) / 12);
      } else if (finalincome! * 52 >= 68530 && finalincome! * 52 <= 72641) {
        sethelpdebtpayment((0.04 * finalincome! * 52) / 12);
      } else if (finalincome! * 52 >= 72642 && finalincome! * 52 <= 77001) {
        sethelpdebtpayment((0.045 * finalincome! * 52) / 12);
      } else if (finalincome! * 52 >= 77002 && finalincome! * 52 <= 81620) {
        sethelpdebtpayment((0.05 * finalincome! * 52) / 12);
      } else if (finalincome! * 52 >= 81621 && finalincome! * 52 <= 86518) {
        sethelpdebtpayment((0.055 * finalincome! * 52) / 12);
      } else if (finalincome! * 52 >= 86519 && finalincome! * 52 <= 91709) {
        sethelpdebtpayment((0.06 * finalincome! * 52) / 12);
      } else if (finalincome! * 52 >= 91710 && finalincome! * 52 <= 97212) {
        sethelpdebtpayment((0.065 * finalincome! * 52) / 12);
      } else if (finalincome! * 52 >= 97213 && finalincome! * 52 <= 103045) {
        sethelpdebtpayment((0.07 * finalincome! * 52) / 12);
      } else if (finalincome! * 52 >= 103046 && finalincome! * 52 <= 109227) {
        sethelpdebtpayment((0.075 * finalincome! * 52) / 12);
      } else if (finalincome! * 52 >= 109228 && finalincome! * 52 <= 115781) {
        sethelpdebtpayment((0.08 * finalincome! * 52) / 12);
      } else if (finalincome! * 52 >= 115782 && finalincome! * 52 <= 122728) {
        sethelpdebtpayment((0.085 * finalincome! * 52) / 12);
      } else if (finalincome! * 52 >= 122729 && finalincome! * 52 <= 130092) {
        sethelpdebtpayment((0.09 * finalincome! * 52) / 12);
      } else if (finalincome! * 52 >= 130093 && finalincome! * 52 <= 137897) {
        sethelpdebtpayment((0.095 * finalincome! * 52) / 12);
      } else if (finalincome! * 52 >= 137898) {
        sethelpdebtpayment((0.1 * finalincome! * 52) / 12);
      }

      if (0 < finalincome! * 52 && finalincome! * 52 <= 37500) {
        setlito(700);
      } else if (37501 < finalincome! * 52 && finalincome! * 52 <= 45000) {
        setlito(700 - 0.05 * (finalincome! * 52 - 37500));
      } else if (45001 < finalincome! * 52 && finalincome! * 52 <= 66667) {
        setlito(325 - 0.015 * (finalincome! * 52 - 45000));
      } else if (66667 < finalincome! * 52) {
        setlito(0);
      } else if (finalincome! * 52 == 0) {
        setlito(0);
      }

      if (0 < finalincome! * 52 && finalincome! * 52 <= 37000) {
        setlmito(675);
      } else if (37001 < finalincome! * 52 && finalincome! * 52 <= 48000) {
        setlmito(
          675 + 0.075 * (finalincome! * 52 - 37000) > 1500
            ? 1500
            : 675 + 0.075 * (finalincome! * 52 - 37000)
        );
      } else if (48001 < finalincome! * 52 && finalincome! * 52 <= 90000) {
        setlmito(1500);
      } else if (90001 < finalincome! * 52 && finalincome! * 52 <= 126000) {
        setlmito(1500 - 0.03 * (finalincome! * 52 - 90000));
      } else if (126001 < finalincome! * 52) {
        setlmito(0);
      } else if (finalincome! * 52 == 0) {
        setlmito(0);
      }

      if (finalincome! * 52 <= 18200) {
        settax(0);
      } else if (18201 < finalincome! * 52 && finalincome! * 52 <= 45000) {
        settax(0.19 * (finalincome! * 52 - 18200));
      } else if (45001 < finalincome! * 52 && finalincome! * 52 <= 120000) {
        settax(5092 + 0.325 * (finalincome! * 52 - 45000));
      } else if (120001 < finalincome! * 52 && finalincome! * 52 <= 180000) {
        settax(29467 + 0.37 * (finalincome! * 52 - 120000));
      } else if (finalincome! * 52 > 180001) {
        settax(51667 + 0.45 * (finalincome! * 52 - 180000));
      }

      if (finalincome! * 52 <= 23226) {
        setlevy(0);
      } else if (23227 < finalincome! * 52 && finalincome! * 52 <= 29032) {
        setlevy(0.1 * (finalincome! * 52 - 23226));
      } else if (finalincome! * 52 > 29032) {
        setlevy(0.02 * finalincome! * 52.14);
      }
    }
  }, [payfreq, finalincome]);

  const calculateincome = () => {
    if (Number(payfreq) == 2) {
      setadjnetincome(
        (finalincome! * 26 -
          (tax - lito - lmito <= 0
            ? levy
            : tax - lito - lmito + levy + division)) /
          12 -
          (lito + lmito) / 12 +
          division / 12 -
          (totalposttaxdeductions! * 26) / 12 -
          (helpdebt ? helpdebtpayment : 0) +
          (paycycle * 26) / 12 -
          Number(rounder)
      );
    } else if (Number(payfreq) == 3) {
      setadjnetincome(
        (finalincome! * 52 -
          (tax - lito - lmito <= 0
            ? levy
            : tax - lito - lmito + levy + division)) /
          12 -
          (lito + lmito) / 12 +
          division / 12 -
          (totalposttaxdeductions! * 52) / 12 -
          (helpdebt ? helpdebtpayment : 0) +
          (paycycle * 52) / 12 -
          Number(rounder)
      );
    } else if (Number(payfreq) == 1) {
      setadjnetincome(
        (finalincome! * 12 -
          (tax - lito - lmito <= 0
            ? levy
            : tax - lito - lmito + levy + division)) /
          12 -
          (lito + lmito) / 12 +
          division / 12 -
          (totalposttaxdeductions! * 12) / 12 -
          (helpdebt ? helpdebtpayment : 0) +
          Number(paycycle) -
          Number(rounder)
      );
    } else {
      console.log("test");
    }
  };
  return (
    <>
      <section
        className="sec3"
        style={{ display: style, alignItems: "center" }}
      >
        {isDesktopOrLaptop && (
          <>
            <div className="income">
              <div className="income1">
                <div>
                  <h2>NPM INCOME BASED ON YTD</h2>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ fontSize: "larger", zIndex: 6 }}>
                      Start Date:
                      <DatePicker
                        className="picker"
                        dateFormat="dd/MM/yyyy"
                        selected={startDate1}
                        onChange={(date: Date) => setStartDate1(date)}
                      />
                    </div>
                    <div style={{ fontSize: "larger", zIndex: 5 }}>
                      End Date:
                      <DatePicker
                        className="picker"
                        dateFormat="dd/MM/yyyy"
                        selected={endDate}
                        onChange={(date: Date) => setendDate(date)}
                      />
                    </div>
                    <div>
                      <FormControl sx={formcontrolbuttonStyle}>
                        <InputLabel
                          htmlFor="outlined-adornment-amount"
                          sx={inputstyle}
                        >
                          YTD Income
                        </InputLabel>
                        <OutlinedInput
                          sx={inputstyle}
                          id="outlined-adornment-amount"
                          value={ytd}
                          onChange={(e: any) => setytd(e.target.value)}
                          startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                          }
                          label="YTD Income"
                        />
                      </FormControl>
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "larger",
                          fontWeight: "bold",
                          color: "blue",
                        }}
                      >
                        Net Per Month Income:
                      </p>
                      <p
                        style={{
                          fontSize: "2em",
                          fontWeight: "bold",
                          color: "black",
                        }}
                      >
                        ${npmincome}
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "50px" }}>
                  <h2>NPM INCOME BASED TAX RETURN</h2>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>
                      <FormControl sx={formcontrolbuttonStyle}>
                        <InputLabel
                          htmlFor="outlined-adornment-amount"
                          sx={inputstyle}
                        >
                          Taxable income
                        </InputLabel>
                        <OutlinedInput
                          sx={inputstyle}
                          id="outlined-adornment-amount"
                          value={grossincome}
                          onChange={(e: any) => setgrossincome(e.target.value)}
                          startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                          }
                          label="Taxable income"
                        />
                      </FormControl>
                      <p>Taxable income for full Finacial Year</p>
                      <FormControlLabel
                        style={{ marginLeft: "5px" }}
                        control={
                          <Checkbox
                            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                            checked={helpdebtselfemp}
                            onChange={addHelpdebtselfemp}
                            inputProps={{ "aria-label": "controlled" }}
                          />
                        }
                        label="Less Help Debt repayment"
                      />
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "larger",
                          fontWeight: "bold",
                          color: "blue",
                        }}
                      >
                        Net Per Month Income:
                      </p>
                      <p
                        style={{
                          fontSize: "2em",
                          fontWeight: "bold",
                          color: "black",
                        }}
                      >
                        $
                        {(
                          npmfromgrossincome -
                          (helpdebtselfemp ? helpdebtpaymentSE : 0) / 12
                        ).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="income2">
                <h2>INCOME BASED M/FN/W PAY</h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignSelf: "center",
                  }}
                >
                  <FormControl
                    sx={{
                      width: 200,
                      background: "lightgray",
                    }}
                  >
                    <InputLabel id="demo-simple-select-autowidth-label">
                      Select Pay Frequency
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={payfreq}
                      onChange={handlePayfreq}
                      label="Select Pay Frequency"
                    >
                      <MenuItem value="select">
                        <em>Pay Frequency</em>
                      </MenuItem>
                      <MenuItem value={1}>Monthly</MenuItem>
                      <MenuItem value={2}>Fortnightly</MenuItem>
                      <MenuItem value={3}>Weekly</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl sx={formcontrolbuttonStyle}>
                    <InputLabel
                      htmlFor="outlined-adornment-amount"
                      sx={inputstyle}
                    >
                      Standard Pay
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      value={base}
                      onChange={(e: any) => setbase(e.target.value)}
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                      label="Standard Pay"
                    />
                  </FormControl>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <h4>Paid Leave Entitlements</h4>
                    <FormControl sx={formcontrolbuttonStyle}>
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        sx={inputstyle}
                      >
                        Annual Leave
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        value={aleave}
                        onChange={(e: any) => setaleave(e.target.value)}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Annual Leave"
                      />
                    </FormControl>

                    <FormControl sx={formcontrolbuttonStyle}>
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        sx={inputstyle}
                      >
                        Other
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        value={other}
                        onChange={(e: any) => setother(e.target.value)}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Other"
                      />
                    </FormControl>
                    <h4>Standard Allowances</h4>
                    <FormControl sx={formcontrolbuttonStyle}>
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        sx={inputstyle}
                      >
                        Car Allowance
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        value={carallowance}
                        onChange={(e: any) => setcarallowance(e.target.value)}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Car Allowance"
                      />
                    </FormControl>
                    <FormControl sx={formcontrolbuttonStyle}>
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        sx={inputstyle}
                      >
                        Other
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        value={otherallowance}
                        onChange={(e: any) => setotherallowance(e.target.value)}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Other"
                      />
                    </FormControl>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <h4>Non-Standard Payments</h4>

                    <FormControl sx={formcontrolbuttonStyle}>
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        sx={inputstyle}
                      >
                        Commissions
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        value={comms}
                        onChange={(e: any) => setcomms(e.target.value)}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Commissions"
                      />
                    </FormControl>

                    <FormControl sx={formcontrolbuttonStyle}>
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        sx={inputstyle}
                      >
                        Bonus
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        value={bonus}
                        onChange={(e: any) => setbonus(e.target.value)}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Bonus"
                      />
                    </FormControl>

                    <FormControl sx={formcontrolbuttonStyle}>
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        sx={inputstyle}
                      >
                        Overtime
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        value={overtime}
                        onChange={(e: any) => setovertime(e.target.value)}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Overtime"
                      />
                    </FormControl>

                    <FormControl sx={formcontrolbuttonStyle}>
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        sx={inputstyle}
                      >
                        Other
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        value={nonother}
                        onChange={(e: any) => setnonother(e.target.value)}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Other"
                      />
                    </FormControl>
                  </div>
                </div>

                <p
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Taxable Gross Earnings: $ {totalgrosstaxed}
                </p>
                <p style={{ fontWeight: "bold", textAlign: "center" }}>
                  Excluding non standard payments: $
                  {totalgrosstaxedexlnonstandard}
                </p>

                <h2>Deductions</h2>
                <FormControlLabel
                  style={{ marginLeft: "30%" }}
                  control={
                    <Checkbox
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                      checked={helpdebt}
                      onChange={addHelpdebt}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                  label="Add Help Debt repayment"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                    }}
                  >
                    <div>
                      <p style={{ fontWeight: "bold" }}>
                        Pre-Tax Payroll Deductions
                      </p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <FormControl sx={formcontrolbuttonStyle}>
                        <InputLabel
                          htmlFor="outlined-adornment-amount"
                          sx={inputstyle}
                        >
                          Salary Sacrificed super
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-amount"
                          value={salsac}
                          onChange={(e: any) => setsalsac(e.target.value)}
                          startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                          }
                          label="Salary Sacrificed super"
                        />
                      </FormControl>
                      <FormControl sx={formcontrolbuttonStyle}>
                        <InputLabel
                          htmlFor="outlined-adornment-amount"
                          sx={inputstyle}
                        >
                          Fringe Benefit Tax
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-amount"
                          value={fbt}
                          onChange={(e: any) => setfbt(e.target.value)}
                          startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                          }
                          label="Fringe Benefit Tax"
                        />
                      </FormControl>
                      <FormControl sx={formcontrolbuttonStyle}>
                        <InputLabel
                          htmlFor="outlined-adornment-amount"
                          sx={inputstyle}
                        >
                          Other
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-amount"
                          value={pretaxother}
                          onChange={(e: any) => setpretaxother(e.target.value)}
                          startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                          }
                          label="Other"
                        />
                      </FormControl>
                    </div>
                    <div>
                      <p style={{ fontWeight: "bold" }}>
                        Total: $ {totalpretaxdeductions}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p style={{ fontWeight: "bold" }}>
                      Post-Tax Payroll Deductions
                    </p>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <FormControl sx={formcontrolbuttonStyle}>
                        <InputLabel
                          htmlFor="outlined-adornment-amount"
                          sx={inputstyle}
                        >
                          Fringe Benefit Tax
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-amount"
                          value={postfbt}
                          onChange={(e: any) => setpostfbt(e.target.value)}
                          startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                          }
                          label="Fringe Benefit Tax"
                        />
                      </FormControl>
                      <FormControl sx={formcontrolbuttonStyle}>
                        <InputLabel
                          htmlFor="outlined-adornment-amount"
                          sx={inputstyle}
                        >
                          Other
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-amount"
                          value={postaxother2}
                          onChange={(e: any) => setpostaxother2(e.target.value)}
                          startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                          }
                          label="Other"
                        />
                      </FormControl>
                      <FormControl sx={formcontrolbuttonStyle}>
                        <InputLabel
                          htmlFor="outlined-adornment-amount"
                          sx={inputstyle}
                        >
                          Union Fees
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-amount"
                          value={postaxother}
                          onChange={(e: any) => setpostaxother(e.target.value)}
                          startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                          }
                          label="Union Fees"
                        />
                      </FormControl>
                    </div>
                    <p style={{ fontWeight: "bold" }}>
                      Total: $ {totalposttaxdeductions}
                    </p>
                  </div>
                </div>
                <div>
                  <FormControl sx={formcontrolbuttonStyle}>
                    <InputLabel
                      htmlFor="outlined-adornment-amount"
                      sx={inputstyle}
                    >
                      Pay Cycle Addback
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      value={paycycle}
                      onChange={(e: any) => setpaycycle(e.target.value)}
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                      label="Pay Cycle Addback"
                    />
                  </FormControl>
                </div>
                <div style={{ marginTop: 25 }}>
                  <Button
                    onClick={() => calculateincome()}
                    sx={{
                      mb: 3,
                      background:
                        "linear-gradient(to right bottom, white, lightblue )",
                      color: "black",
                      width: 350,
                    }}
                    variant="outlined"
                  >
                    Calculate Income
                  </Button>
                  <Button
                    onClick={() => refreshincomecheck()}
                    sx={{
                      mb: 3,
                      ml: 5,
                      background:
                        "linear-gradient(to right bottom, white, lightblue )",
                      color: "black",
                      width: 150,
                    }}
                    variant="outlined"
                  >
                    REFRESH
                  </Button>
                  <p>
                    Net per month income:
                    <span style={{ fontWeight: "bold" }}>
                      $ {adjnetincome ? adjnetincome.toFixed(2) : 0}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

        {isTabletOrMobile && (
          <>
            <div className="incomecell">
              <div className="income1cell">
                <div>
                  <h2>INCOME BASED ON YTD</h2>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ fontSize: "larger", zIndex: 6 }}>
                      Start Date:
                      <DatePicker
                        className="picker"
                        dateFormat="dd/MM/yyyy"
                        selected={startDate1}
                        onChange={(date: Date) => setStartDate1(date)}
                      />
                    </div>
                    <div style={{ fontSize: "larger", zIndex: 5 }}>
                      End Date:
                      <DatePicker
                        className="picker"
                        dateFormat="dd/MM/yyyy"
                        selected={endDate}
                        onChange={(date: Date) => setendDate(date)}
                      />
                    </div>
                    <div>
                      <FormControl
                        sx={{
                          mt: 2,
                          width: 150,
                          background: "rgba(255, 255, 255, 0.5)",
                        }}
                      >
                        <InputLabel
                          htmlFor="outlined-adornment-amount"
                          sx={{
                            color: "black",
                            fontWeight: "bold",
                          }}
                        >
                          YTD Income
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-amount"
                          value={ytd}
                          onChange={(e: any) => setytd(e.target.value)}
                          startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                          }
                          label="YTD Income"
                        />
                      </FormControl>
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "larger",
                          fontWeight: "bold",
                          color: "blue",
                        }}
                      >
                        Net per Month Income:
                      </p>
                      <p
                        style={{
                          fontSize: "2em",
                          fontWeight: "bold",
                          color: "black",
                        }}
                      >
                        ${npmincome}
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "50px" }}>
                  <h2> INCOME BASED TAX RETURN</h2>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>
                      <FormControl sx={formcontrolbuttonStyle}>
                        <InputLabel
                          htmlFor="outlined-adornment-amount"
                          sx={inputstyle}
                        >
                          Taxable income
                        </InputLabel>
                        <OutlinedInput
                          sx={inputstyle}
                          id="outlined-adornment-amount"
                          value={grossincome}
                          onChange={(e: any) => setgrossincome(e.target.value)}
                          startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                          }
                          label="Taxable income"
                        />
                      </FormControl>
                      <p>Taxable income for full Finacial Year</p>
                      <FormControlLabel
                        style={{ marginLeft: "5px" }}
                        control={
                          <Checkbox
                            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                            checked={helpdebtselfemp}
                            onChange={addHelpdebtselfemp}
                            inputProps={{ "aria-label": "controlled" }}
                          />
                        }
                        label="Less Help Debt repayment"
                      />
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "larger",
                          fontWeight: "bold",
                          color: "blue",
                        }}
                      >
                        Net Per Month Income:
                      </p>
                      <p
                        style={{
                          fontSize: "2em",
                          fontWeight: "bold",
                          color: "black",
                        }}
                      >
                        $
                        {(
                          npmfromgrossincome -
                          (helpdebtselfemp ? helpdebtpaymentSE : 0) / 12
                        ).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="income2cell">
                <h2>INCOME BASED M/FN/W PAY</h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignSelf: "center",
                  }}
                >
                  <FormControl
                    sx={{
                      width: 200,
                      background: "lightgray",
                    }}
                  >
                    <InputLabel id="demo-simple-select-autowidth-label">
                      Select Pay Frequency
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={payfreq}
                      onChange={handlePayfreq}
                      label="Select Pay Frequency"
                    >
                      <MenuItem value="check">
                        <em>Select Pay Frequency</em>
                      </MenuItem>
                      <MenuItem value={1}>Monthly</MenuItem>
                      <MenuItem value={2}>Fortnightly</MenuItem>
                      <MenuItem value={3}>Weekly</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl
                    sx={{
                      mt: 2,
                      width: 150,
                      background: "rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    <InputLabel
                      htmlFor="outlined-adornment-amount"
                      sx={{
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      Standard Pay
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      value={base}
                      onChange={(e: any) => setbase(e.target.value)}
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                      label="Standard Pay"
                    />
                  </FormControl>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <h4>Paid Leave Entitlements</h4>
                    <FormControl sx={formcontrolbuttonStyle}>
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        sx={inputstyle}
                      >
                        Annual Leave
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        value={aleave}
                        onChange={(e: any) => setaleave(e.target.value)}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Annual Leave"
                      />
                    </FormControl>

                    <FormControl sx={formcontrolbuttonStyle}>
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        sx={inputstyle}
                      >
                        Other
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        value={otherallowance}
                        onChange={(e: any) => setotherallowance(e.target.value)}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Other"
                      />
                    </FormControl>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <h4>Non-Standard Payments</h4>

                    <FormControl sx={formcontrolbuttonStyle}>
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        sx={inputstyle}
                      >
                        Back Pay
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        value={backpay}
                        onChange={(e: any) => setbackpay(e.target.value)}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label=" Back Pay"
                      />
                    </FormControl>

                    <FormControl sx={formcontrolbuttonStyle}>
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        sx={inputstyle}
                      >
                        Commissions
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        value={comms}
                        onChange={(e: any) => setcomms(e.target.value)}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Commissions"
                      />
                    </FormControl>

                    <FormControl sx={formcontrolbuttonStyle}>
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        sx={inputstyle}
                      >
                        Bonus
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        value={bonus}
                        onChange={(e: any) => setbonus(e.target.value)}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Bonus"
                      />
                    </FormControl>

                    <FormControl sx={formcontrolbuttonStyle}>
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        sx={inputstyle}
                      >
                        Overtime
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        value={overtime}
                        onChange={(e: any) => setovertime(e.target.value)}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Overtime"
                      />
                    </FormControl>

                    <FormControl sx={formcontrolbuttonStyle}>
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        sx={inputstyle}
                      >
                        Other
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        value={nonother}
                        onChange={(e: any) => setnonother(e.target.value)}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Other"
                      />
                    </FormControl>
                  </div>
                </div>
                <p style={{ fontWeight: "bold" }}>Taxable Gross Earnings:</p>
                <p style={{ fontWeight: "bold" }}>
                  Excluding non standard payments:
                </p>

                <h2>Deductions</h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignSelf: "center",
                  }}
                >
                  <div>
                    <p style={{ fontWeight: "bold" }}>
                      Pre-Tax Payroll Deductions
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignSelf: "center",
                      }}
                    >
                      <FormControl sx={formcontrolbuttonStyle}>
                        <InputLabel
                          htmlFor="outlined-adornment-amount"
                          sx={inputstyle}
                        >
                          Salary Sacrificed super
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-amount"
                          value={salsac}
                          onChange={(e: any) => setsalsac(e.target.value)}
                          startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                          }
                          label="Salary Sacrificed super"
                        />
                      </FormControl>
                      <FormControl sx={formcontrolbuttonStyle}>
                        <InputLabel
                          htmlFor="outlined-adornment-amount"
                          sx={inputstyle}
                        >
                          Fringe Benefit Tax
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-amount"
                          value={fbt}
                          onChange={(e: any) => setfbt(e.target.value)}
                          startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                          }
                          label="Annual Leave"
                        />
                      </FormControl>
                      <FormControl sx={formcontrolbuttonStyle}>
                        <InputLabel
                          htmlFor="outlined-adornment-amount"
                          sx={inputstyle}
                        >
                          Other
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-amount"
                          value={pretaxother}
                          onChange={(e: any) => setpretaxother(e.target.value)}
                          startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                          }
                          label="Other"
                        />
                      </FormControl>
                    </div>
                    <p style={{ fontWeight: "bold" }}>
                      Total Pre-Tax Deductions:{" "}
                    </p>
                    ${totalpretax}
                  </div>
                  <div>
                    <p style={{ fontWeight: "bold" }}>
                      Post-Tax Payroll Deductions
                    </p>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <FormControl sx={formcontrolbuttonStyle}>
                        <InputLabel
                          htmlFor="outlined-adornment-amount"
                          sx={inputstyle}
                        >
                          Fringe Benefit Tax
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-amount"
                          value={postfbt}
                          onChange={(e: any) => setpostfbt(e.target.value)}
                          startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                          }
                          label="Annual Leave"
                        />
                      </FormControl>
                      <FormControl sx={formcontrolbuttonStyle}>
                        <InputLabel
                          htmlFor="outlined-adornment-amount"
                          sx={inputstyle}
                        >
                          Other
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-amount"
                          value={postaxother2}
                          onChange={(e: any) => setpostaxother2(e.target.value)}
                          startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                          }
                          label="Union Fees"
                        />
                      </FormControl>
                      <FormControl sx={formcontrolbuttonStyle}>
                        <InputLabel
                          htmlFor="outlined-adornment-amount"
                          sx={inputstyle}
                        >
                          Union Fees
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-amount"
                          value={postaxother}
                          onChange={(e: any) => setpostaxother(e.target.value)}
                          startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                          }
                          label="Other"
                        />
                      </FormControl>
                    </div>
                    <p style={{ fontWeight: "bold" }}>
                      Total Pre-Tax Deductions:
                    </p>
                  </div>
                </div>
                <div>
                  <FormControl sx={formcontrolbuttonStyle}>
                    <InputLabel
                      htmlFor="outlined-adornment-amount"
                      sx={inputstyle}
                    >
                      Pay Cycle Addback
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      value={paycycle}
                      onChange={(e: any) => setpaycycle(e.target.value)}
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                      label="Pay Cycle Addback"
                    />
                  </FormControl>
                </div>
                <FormControlLabel
                  style={{ marginLeft: "15%", marginTop: "12px" }}
                  control={
                    <Checkbox
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                      checked={helpdebt}
                      onChange={addHelpdebt}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                  label="Add Help Debt repayment"
                />
                <div
                  style={{
                    marginTop: 25,
                    display: "flex",
                    flexDirection: "column",
                    alignSelf: "center",
                  }}
                >
                  <Button
                    onClick={() => calculateincome()}
                    sx={{
                      mb: 3,
                      background:
                        "linear-gradient(to right bottom, white, lightblue )",
                      color: "black",
                      width: 250,
                      height: 50,
                    }}
                    variant="outlined"
                  >
                    Calculate Income
                  </Button>
                  <Button
                    onClick={() => refreshincomecheck()}
                    sx={{
                      mb: 3,

                      background:
                        "linear-gradient(to right bottom, white, lightblue )",
                      color: "black",
                      width: 250,
                      height: 30,
                    }}
                    variant="outlined"
                  >
                    REFRESH
                  </Button>
                  <p>
                    Net per month income:
                    <span style={{ fontWeight: "bold" }}>
                      $ {adjnetincome ? adjnetincome.toFixed(2) : 0}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default IncomeCheck;

/*  <div style={{ marginTop: "70px" }}>
   <h2>MAX VISA TERM</h2>
   <p style={{ fontSize: "larger" }}>
     Today's Date: {d}/{m}/{y}
   </p>
   <div style={{ fontSize: "larger" }}>
     Select VISA expiry date:
     <DatePicker
       className="picker"
       dateFormat="dd/MM/yyyy"
       selected={startDate}
       onChange={(date: Date) => setStartDate(date)}
     />
   </div>
   <p style={{ fontSize: "larger", color: "blue", fontWeight: "bold" }}>
     Max Loan Term (in months):
   </p>
   <p>{maxterm}</p>
 </div>; 
  <FormControl
                      sx={{
                        mt: 2,
                        width: 150,
                        background: "rgba(255, 255, 255, 0.5)",
                      }}
                    >
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        sx={{
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        Sick Leave
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        value={sleave}
                        onChange={(e: any) => setsleave(e.target.value)}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Sick Leave"
                      />
                    </FormControl>
                    <FormControl
                      sx={{
                        mt: 2,
                        width: 150,
                        background: "rgba(255, 255, 255, 0.5)",
                      }}
                    >
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        sx={{
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        Carer's Leave
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        value={cleave}
                        onChange={(e: any) => setcleave(e.target.value)}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Carer's Leave"
                      />
                    </FormControl>
                    <FormControl
                      sx={{
                        mt: 2,
                        width: 150,
                        background: "rgba(255, 255, 255, 0.5)",
                      }}
                    >
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        sx={{
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        Long Service Leave
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        value={lsleave}
                        onChange={(e: any) => setlsleave(e.target.value)}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Long Service Leave"
                      />
                    </FormControl>
                    <FormControl
                      sx={{
                        mt: 2,
                        width: 150,
                        background: "rgba(255, 255, 255, 0.5)",
                      }}
                    >
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        sx={{
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        Public Holiday
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        value={pubhol}
                        onChange={(e: any) => setpubhol(e.target.value)}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Public Holiday"
                      />
                    </FormControl>
 
 
  <FormControl
                      sx={{
                        mt: 2,
                        width: 150,
                        background: "rgba(255, 255, 255, 0.5)",
                      }}
                    >
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        sx={{
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        Travel Allowance
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        value={travallow}
                        onChange={(e: any) => settravallow(e.target.value)}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Travel Allowance"
                      />
                    </FormControl>

                    <FormControl
                      sx={{
                        mt: 2,
                        width: 150,
                        background: "rgba(255, 255, 255, 0.5)",
                      }}
                    >
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        sx={{
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        Meal Allowance
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        value={mealallow}
                        onChange={(e: any) => setmealallow(e.target.value)}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Meal Allowance"
                      />
                    </FormControl>

                    <FormControl
                      sx={{
                        mt: 2,
                        width: 150,
                        background: "rgba(255, 255, 255, 0.5)",
                      }}
                    >
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        sx={{
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        Leave Loading
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        value={lloading}
                        onChange={(e: any) => setlloading(e.target.value)}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Leave Loading"
                      />
                    </FormControl>
 
 */
