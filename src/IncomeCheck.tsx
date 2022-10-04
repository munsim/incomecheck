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

  interface State {
    range0min: number;
    range0max: number;
    range0rat: number;
    range0ext: number;
    range1min: number;
    range1max: number;
    range1rat: number;
    range1ext: number;
    range2min: number;
    range2max: number;
    range2rat: number;
    range2ext: number;
    range3min: number;
    range3max: number;
    range3rat: number;
    range3ext: number;
    range4min: number;
    range4max: number;
    range4rat: number;
    range4ext: number;
  }
  const [taxbrackets, setTaxbrackets] = useState<State>({
    range0min: 0,
    range0max: 0,
    range0rat: 0,
    range0ext: 0,
    range1min: 0,
    range1max: 0,
    range1rat: 0,
    range1ext: 0,
    range2min: 0,
    range2max: 0,
    range2rat: 0,
    range2ext: 0,
    range3min: 0,
    range3max: 0,
    range3rat: 0,
    range3ext: 0,
    range4min: 0,
    range4max: 0,
    range4rat: 0,
    range4ext: 0,
  });

  interface State2 {
    range00min: number;
    range00max: number;
    range00rat: number;
    range01min: number;
    range01max: number;
    range01rat: number;
    range02min: number;
    range02max: number;
    range02rat: number;
    range03min: number;
    range03max: number;
    range03rat: number;
    range04min: number;
    range04max: number;
    range04rat: number;
    range05min: number;
    range05max: number;
    range05rat: number;
    range06min: number;
    range06max: number;
    range06rat: number;
    range07min: number;
    range07max: number;
    range07rat: number;
    range08min: number;
    range08max: number;
    range08rat: number;
    range09min: number;
    range09max: number;
    range09rat: number;
    range10min: number;
    range10max: number;
    range10rat: number;
    range11min: number;
    range11max: number;
    range11rat: number;
    range12min: number;
    range12max: number;
    range12rat: number;
    range13min: number;
    range13max: number;
    range13rat: number;
    range14min: number;
    range14max: number;
    range14rat: number;
    range15min: number;
    range15max: number;
    range15rat: number;
    range16min: number;
    range16max: number;
    range16rat: number;
    range17min: number;
    range17max: number;
    range17rat: number;
    range18min: number;
    range18max: number;
    range18rat: number;
  }
  const [hdebt, sethdebt] = useState<State2>({
    range00min: 0,
    range00max: 0,
    range00rat: 0,
    range01min: 0,
    range01max: 0,
    range01rat: 0,
    range02min: 0,
    range02max: 0,
    range02rat: 0,
    range03min: 0,
    range03max: 0,
    range03rat: 0,
    range04min: 0,
    range04max: 0,
    range04rat: 0,
    range05min: 0,
    range05max: 0,
    range05rat: 0,
    range06min: 0,
    range06max: 0,
    range06rat: 0,
    range07min: 0,
    range07max: 0,
    range07rat: 0,
    range08min: 0,
    range08max: 0,
    range08rat: 0,
    range09min: 0,
    range09max: 0,
    range09rat: 0,
    range10min: 0,
    range10max: 0,
    range10rat: 0,
    range11min: 0,
    range11max: 0,
    range11rat: 0,
    range12min: 0,
    range12max: 0,
    range12rat: 0,
    range13min: 0,
    range13max: 0,
    range13rat: 0,
    range14min: 0,
    range14max: 0,
    range14rat: 0,
    range15min: 0,
    range15max: 0,
    range15rat: 0,
    range16min: 0,
    range16max: 0,
    range16rat: 0,
    range17min: 0,
    range17max: 0,
    range17rat: 0,
    range18min: 0,
    range18max: 0,
    range18rat: 0,
  });

  interface State3 {
    div293limit: number;
    div293cap: number;
    div293pc: number;
    extratax: number;
    super: number;
  }

  const [div293, setdiv293] = useState<State3>({
    div293limit: 0,
    div293cap: 0,
    div293pc: 0,
    extratax: 0,
    super: 0,
  });

  interface State4 {
    litodata0min: number;
    litodata0max: number;
    litodata0lito: number;
    litodata0pc: number;
    litodata1min: number;
    litodata1max: number;
    litodata1lito: number;
    litodata1pc: number;
    litodata2min: number;
    litodata2max: number;
    litodata2lito: number;
    litodata2pc: number;
  }

  const [litodata, setlitodata] = useState<State4>({
    litodata0min: 0,
    litodata0max: 0,
    litodata0lito: 0,
    litodata0pc: 0,
    litodata1min: 0,
    litodata1max: 0,
    litodata1lito: 0,
    litodata1pc: 0,
    litodata2min: 0,
    litodata2max: 0,
    litodata2lito: 0,
    litodata2pc: 0,
  });

  interface State5 {
    lmitodata0min: number;
    lmitodata0max: number;
    lmitodata0lito: number;
    lmitodata0pc: number;
    lmitodata1min: number;
    lmitodata1max: number;
    lmitodata1lito: number;
    lmitodata1pc: number;
    lmitodata2min: number;
    lmitodata2max: number;
    lmitodata2lito: number;
    lmitodata2pc: number;
    lmitodata3min: number;
    lmitodata3max: number;
    lmitodata3lito: number;
    lmitodata3pc: number;
  }

  const [lmitodata, setlmitodata] = useState<State5>({
    lmitodata0min: 0,
    lmitodata0max: 0,
    lmitodata0lito: 0,
    lmitodata0pc: 0,
    lmitodata1min: 0,
    lmitodata1max: 0,
    lmitodata1lito: 0,
    lmitodata1pc: 0,
    lmitodata2min: 0,
    lmitodata2max: 0,
    lmitodata2lito: 0,
    lmitodata2pc: 0,
    lmitodata3min: 0,
    lmitodata3max: 0,
    lmitodata3lito: 0,
    lmitodata3pc: 0,
  });

  interface State6 {
    medi0min: number;
    medi0max: number;
    medi0rata: number;
    medi1min: number;
    medi1max: number;
    medi1rata: number;
    medi2min: number;
    medi2max: number;
    medi2rata: number;
  }

  const [medidata, setmedidata] = useState<State6>({
    medi0min: 0,
    medi0max: 0,
    medi0rata: 0,
    medi1min: 0,
    medi1max: 0,
    medi1rata: 0,
    medi2min: 0,
    medi2max: 0,
    medi2rata: 0,
  });

  useEffect(() => {
    axios.get("http://localhost:8080/data").then((res) => {
      let data = res.data;
      setData(data);
      console.log(data);
      setTaxbrackets({
        ...taxbrackets,
        range0min: data.TaxBrackets[0].min,
        range0max: data.TaxBrackets[0].max,
        range0rat: data.TaxBrackets[0].rat,
        range0ext: data.TaxBrackets[0].ext,
        range1min: data.TaxBrackets[1].min,
        range1max: data.TaxBrackets[1].max,
        range1rat: data.TaxBrackets[1].rat,
        range1ext: data.TaxBrackets[1].ext,
        range2min: data.TaxBrackets[2].min,
        range2max: data.TaxBrackets[2].max,
        range2rat: data.TaxBrackets[2].rat,
        range2ext: data.TaxBrackets[2].ext,
        range3min: data.TaxBrackets[3].min,
        range3max: data.TaxBrackets[3].max,
        range3rat: data.TaxBrackets[3].rat,
        range3ext: data.TaxBrackets[3].ext,
        range4min: data.TaxBrackets[4].min,
        range4max: data.TaxBrackets[4].max,
        range4rat: data.TaxBrackets[4].rat,
        range4ext: data.TaxBrackets[4].ext,
      });
      sethdebt({
        ...hdebt,
        range00min: data.HelpDebtBrackets[0].min,
        range00max: data.HelpDebtBrackets[0].max,
        range00rat: data.HelpDebtBrackets[0].rat,
        range01min: data.HelpDebtBrackets[1].min,
        range01max: data.HelpDebtBrackets[1].max,
        range01rat: data.HelpDebtBrackets[1].rat,
        range02min: data.HelpDebtBrackets[2].min,
        range02max: data.HelpDebtBrackets[2].max,
        range02rat: data.HelpDebtBrackets[2].rat,
        range03min: data.HelpDebtBrackets[3].min,
        range03max: data.HelpDebtBrackets[3].max,
        range03rat: data.HelpDebtBrackets[3].rat,
        range04min: data.HelpDebtBrackets[4].min,
        range04max: data.HelpDebtBrackets[4].max,
        range04rat: data.HelpDebtBrackets[4].rat,
        range05min: data.HelpDebtBrackets[5].min,
        range05max: data.HelpDebtBrackets[5].max,
        range05rat: data.HelpDebtBrackets[5].rat,
        range06min: data.HelpDebtBrackets[6].min,
        range06max: data.HelpDebtBrackets[6].max,
        range06rat: data.HelpDebtBrackets[6].rat,
        range07min: data.HelpDebtBrackets[7].min,
        range07max: data.HelpDebtBrackets[7].max,
        range07rat: data.HelpDebtBrackets[7].rat,
        range08min: data.HelpDebtBrackets[8].min,
        range08max: data.HelpDebtBrackets[8].max,
        range08rat: data.HelpDebtBrackets[8].rat,
        range09min: data.HelpDebtBrackets[9].min,
        range09max: data.HelpDebtBrackets[9].max,
        range09rat: data.HelpDebtBrackets[9].rat,
        range10min: data.HelpDebtBrackets[10].min,
        range10max: data.HelpDebtBrackets[10].max,
        range10rat: data.HelpDebtBrackets[10].rat,
        range11min: data.HelpDebtBrackets[11].min,
        range11max: data.HelpDebtBrackets[11].max,
        range11rat: data.HelpDebtBrackets[11].rat,
        range12min: data.HelpDebtBrackets[12].min,
        range12max: data.HelpDebtBrackets[12].max,
        range12rat: data.HelpDebtBrackets[12].rat,
        range13min: data.HelpDebtBrackets[13].min,
        range13max: data.HelpDebtBrackets[13].max,
        range13rat: data.HelpDebtBrackets[13].rat,
        range14min: data.HelpDebtBrackets[14].min,
        range14max: data.HelpDebtBrackets[14].max,
        range14rat: data.HelpDebtBrackets[14].rat,
        range15min: data.HelpDebtBrackets[15].min,
        range15max: data.HelpDebtBrackets[15].max,
        range15rat: data.HelpDebtBrackets[15].rat,
        range16min: data.HelpDebtBrackets[16].min,
        range16max: data.HelpDebtBrackets[16].max,
        range16rat: data.HelpDebtBrackets[16].rat,
        range17min: data.HelpDebtBrackets[17].min,
        range17max: data.HelpDebtBrackets[17].max,
        range17rat: data.HelpDebtBrackets[17].rat,
        range18min: data.HelpDebtBrackets[18].min,
        range18max: data.HelpDebtBrackets[18].max,
        range18rat: data.HelpDebtBrackets[18].rat,
      });
      setdiv293({
        ...div293,
        div293limit: data.Div293[0].figure, //250000
        div293cap: data.Div293[1].figure, //27500
        div293pc: data.Div293[2].figure, //0.15
        extratax: data.Div293[3].figure, //4125
        super: data.Div293[4].figure, //10.5%
      });
    });
  }, []);

  let n = new Date();
  let y = n.getFullYear();
  let m = n.getMonth() + 1;
  let d = n.getDate();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const [taxird, settaxird] = useState<number>(0);
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
  const [divisionird, setdivisionird] = useState<number>(0);
  const [paycycle, setpaycycle] = useState<number>(0);
  const [rounder, setrounder] = useState<number>(0);
  const [grossincome, setgrossincome] = useState<number>(0);
  const [npmfromgrossincome, setnpmfromgrossincome] = useState<number>(0);
  const [litoird, setlitoird] = useState<number>(0);
  const [lmitoird, setlmitoird] = useState<number>(0);
  const [levyird, setlevyird] = useState<number>(0);
  const [rounderird, setrounderird] = useState<number>(0);
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
    if (Number(grossincome) < hdebt.range00max) {
      sethelpdebtpaymentSE(0);
    } else if (
      Number(grossincome) >= hdebt.range01min &&
      Number(grossincome) <= hdebt.range01max
    ) {
      sethelpdebtpaymentSE(hdebt.range01rat * Number(grossincome));
    } else if (
      Number(grossincome) >= hdebt.range02min &&
      Number(grossincome) <= hdebt.range02max
    ) {
      sethelpdebtpaymentSE(hdebt.range02rat * Number(grossincome));
    } else if (
      Number(grossincome) >= hdebt.range03min &&
      Number(grossincome) <= hdebt.range03max
    ) {
      sethelpdebtpaymentSE(hdebt.range03rat * Number(grossincome));
    } else if (
      Number(grossincome) >= hdebt.range04min &&
      Number(grossincome) <= hdebt.range04max
    ) {
      sethelpdebtpaymentSE(hdebt.range04rat * Number(grossincome));
    } else if (
      Number(grossincome) >= hdebt.range05min &&
      Number(grossincome) <= hdebt.range05max
    ) {
      sethelpdebtpaymentSE(hdebt.range05rat * Number(grossincome));
    } else if (
      Number(grossincome) >= hdebt.range06min &&
      Number(grossincome) <= hdebt.range06max
    ) {
      sethelpdebtpaymentSE(hdebt.range06rat * Number(grossincome));
    } else if (
      Number(grossincome) >= hdebt.range07min &&
      Number(grossincome) <= hdebt.range07max
    ) {
      sethelpdebtpaymentSE(hdebt.range07rat * Number(grossincome));
    } else if (
      Number(grossincome) >= hdebt.range08min &&
      Number(grossincome) <= hdebt.range08max
    ) {
      sethelpdebtpaymentSE(hdebt.range08rat * Number(grossincome));
    } else if (
      Number(grossincome) >= hdebt.range09min &&
      Number(grossincome) <= hdebt.range09max
    ) {
      sethelpdebtpaymentSE(hdebt.range09rat * Number(grossincome));
    } else if (
      Number(grossincome) >= hdebt.range10min &&
      Number(grossincome) <= hdebt.range10max
    ) {
      sethelpdebtpaymentSE(hdebt.range10rat * Number(grossincome));
    } else if (
      Number(grossincome) >= hdebt.range11min &&
      Number(grossincome) <= hdebt.range11max
    ) {
      sethelpdebtpaymentSE(hdebt.range11rat * Number(grossincome));
    } else if (
      Number(grossincome) >= hdebt.range12min &&
      Number(grossincome) <= hdebt.range12max
    ) {
      sethelpdebtpaymentSE(hdebt.range12rat * Number(grossincome));
    } else if (
      Number(grossincome) >= hdebt.range13min &&
      Number(grossincome) <= hdebt.range13max
    ) {
      sethelpdebtpaymentSE(hdebt.range13rat * Number(grossincome));
    } else if (
      Number(grossincome) >= hdebt.range14min &&
      Number(grossincome) <= hdebt.range14max
    ) {
      sethelpdebtpaymentSE(hdebt.range14rat * Number(grossincome));
    } else if (
      Number(grossincome) >= hdebt.range15min &&
      Number(grossincome) <= hdebt.range15max
    ) {
      sethelpdebtpaymentSE(hdebt.range15rat * Number(grossincome));
    } else if (
      Number(grossincome) >= hdebt.range16min &&
      Number(grossincome) <= hdebt.range16max
    ) {
      sethelpdebtpaymentSE(hdebt.range16rat * Number(grossincome));
    } else if (
      Number(grossincome) >= hdebt.range17min &&
      Number(grossincome) <= hdebt.range17max
    ) {
      sethelpdebtpaymentSE(hdebt.range17rat * Number(grossincome));
    } else if (Number(grossincome) >= hdebt.range18min) {
      sethelpdebtpaymentSE(hdebt.range18rat * Number(grossincome));
    }

    if (Number(grossincome) <= taxbrackets.range0max) {
      settaxird(0);
    } else if (
      taxbrackets.range1min < Number(grossincome) &&
      Number(grossincome) <= taxbrackets.range1max
    ) {
      settaxird(
        taxbrackets.range1rat * (Number(grossincome) - taxbrackets.range0max)
      );
    } else if (
      taxbrackets.range2min < Number(grossincome) &&
      Number(grossincome) <= taxbrackets.range2max
    ) {
      settaxird(
        taxbrackets.range2ext +
          taxbrackets.range2rat * (Number(grossincome) - taxbrackets.range1max)
      );
    } else if (
      taxbrackets.range3min < Number(grossincome) &&
      Number(grossincome) <= taxbrackets.range3max
    ) {
      settaxird(
        taxbrackets.range3ext +
          taxbrackets.range3rat * (Number(grossincome)! - taxbrackets.range2max)
      );
    } else if (Number(grossincome) > taxbrackets.range4min) {
      settaxird(
        taxbrackets.range4ext +
          taxbrackets.range4rat * (Number(grossincome) - taxbrackets.range3max)
      );
    }

    if (Number(grossincome) >= div293.div293limit) {
      if (Number(grossincome) - div293.div293limit <= div293.div293cap) {
        setdivisionird(
          (Number(grossincome) - div293.div293limit) * div293.div293pc
        );
      } else if (Number(grossincome) - div293.div293limit > div293.div293cap) {
        setdivisionird(div293.extratax);
      } else {
        setdivisionird(0);
      }
    } else {
      setdivisionird(0);
    }

    if (0 < Number(grossincome) && Number(grossincome) <= 37500) {
      setlitoird(700);
    } else if (37501 < Number(grossincome) && Number(grossincome) <= 45000) {
      setlitoird(700 - 0.05 * (Number(grossincome) - 37500));
    } else if (45001 < Number(grossincome) && Number(grossincome) <= 66667) {
      setlitoird(325 - 0.015 * (Number(grossincome) - 45000));
    } else if (66667 < Number(grossincome)) {
      setlitoird(0);
    } else if (Number(grossincome) === 0) {
      setlitoird(0);
    }

    if (0 < Number(grossincome) && Number(grossincome) <= 37000) {
      setlmitoird(675);
    } else if (37001 < Number(grossincome) && Number(grossincome) <= 48000) {
      setlmitoird(
        675 + 0.075 * (Number(grossincome) - 37000) > 1500
          ? 1500
          : 675 + 0.075 * (Number(grossincome) - 37000)
      );
    } else if (48001 < Number(grossincome) && Number(grossincome) <= 90000) {
      setlmitoird(1500);
    } else if (90001 < Number(grossincome) && Number(grossincome) <= 126000) {
      setlmitoird(1500 - 0.03 * (Number(grossincome) - 90000));
    } else if (126001 < Number(grossincome)) {
      setlmitoird(0);
    } else if (Number(grossincome) === 0) {
      setlmitoird(0);
    }

    if (Number(grossincome) <= 23226) {
      setlevyird(0);
    } else if (23227 < Number(grossincome) && Number(grossincome) <= 29032) {
      setlevyird(0.1 * (Number(grossincome) - 23226));
    } else if (Number(grossincome) > 29032) {
      setlevyird(0.02 * Number(grossincome));
    }

    if (Number(grossincome) > 40000 && Number(grossincome) < 55000) {
      setrounderird(50);
    }

    if (Number(grossincome) > 100000 && Number(grossincome) <= 150000) {
      setrounderird(50);
    }
    if (Number(grossincome) > 20000 && Number(grossincome) <= 40000) {
      setrounderird(-72);
    }

    if (Number(grossincome) > 40000 && Number(grossincome) <= 100000) {
      setrounderird(36);
    }
    if (Number(grossincome) > 150000) {
      setrounderird(50);
    }
    console.log(taxbrackets);
    console.log("tax:" + taxird);
    console.log("lito" + litoird);
    console.log("lmito:" + lmitoird);
    console.log("levy:" + levyird);
    console.log("division:" + divisionird);
    console.log(helpdebtpaymentSE);
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
    if (Number(payfreq) === 1) {
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
      } else if (finalincome! * 12 === 0) {
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
      } else if (finalincome! * 12 === 0) {
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
    } else if (Number(payfreq) === 2) {
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
      } else if (finalincome! * 26 === 0) {
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
      } else if (finalincome! * 26 === 0) {
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
    } else if (Number(payfreq) === 3) {
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
      } else if (finalincome! * 52 === 0) {
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
      } else if (finalincome! * 52 === 0) {
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
    } else if (Number(payfreq) === 3) {
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
                          (Number(grossincome) -
                            (taxird - litoird - lmitoird <= 0
                              ? levyird
                              : taxird -
                                litoird -
                                lmitoird +
                                levyird +
                                divisionird) -
                            (taxird - litoird - lmitoird <= 0
                              ? taxird
                              : lmitoird + litoird) -
                            rounderird -
                            (helpdebtselfemp ? helpdebtpaymentSE : 0)) /
                          12
                        ).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="income2">
                <h2>Income Based On Monthly/FN/Weekly Pay</h2>
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
