import React from "react";
import Input from "@mui/material/Input";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import { useState, useEffect, useRef, createContext, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useMediaQuery } from "react-responsive";

const ServicingCheck = ({ style }: any) => {
  const [praincome, setpraincome] = useState("0");
  const [cobincome, setcobincome] = useState("");
  const [nonbincome, setnonbincome] = useState("");
  const [cobdisabled, setcobdisabled] = useState(false);
  const [nonbdisabled, setnonbdisabled] = useState(false);
  const [nbcontrpc, setnbcontrpc] = useState("");
  const [nbcontr, setnbcontr] = useState("");
  const [incometext, setincometext] = useState("");
  const [rentincome, setrentincome] = useState("");
  const [rent, setrent] = useState("");
  const [mortreps, setmortreps] = useState("");
  const [invmortreps, setinvmorreps] = useState("");
  const [otherreps, setotherreps] = useState("");
  const [bmwreps, setbmwreps] = useState("");
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  useEffect(() => {
    if (Number(nbcontrpc) > 100) {
      alert("Contribution cannot be more than 100%");
      setnbcontrpc("100");
    }

    let precheck = ((Number(nbcontrpc) / 100) * Number(nonbincome)).toFixed(2);

    setnbcontr(
      ((Number(nbcontrpc) / 100) * Number(nonbincome)).toFixed(2).toString()
    );

    if (Number(praincome) < Number(precheck)) {
      setnbcontr(praincome);
      setincometext(
        "Non-Borrower's income is capped by Primary Borrower's income!"
      );
    } else {
      setnbcontr(precheck);
      setincometext("");
    }
  }, [nbcontrpc, praincome, nonbincome]);

  useEffect(() => {
    if (cobincome.length >= 1) {
      setnonbdisabled(true);
      setnonbincome("");
      setnbcontrpc("");
      setnbcontr("");
    } else if (cobincome.length < 1) {
      setnonbdisabled(false);
    } else if (nonbincome.length >= 1) {
      setcobdisabled(true);
    } else if (nonbincome.length < 1) {
      setcobdisabled(false);
    }
  }, [cobincome, nonbincome]);

  const calcservicing = () => {
    alert("checking");
  };

  return (
    <>
      <section className="sec1" style={{ display: style }}>
        <h1>Calculate affordability</h1>

        <div>
          <h3>Income</h3>
          <p style={{ color: "red", fontWeight: "bold" }}>{incometext}</p>
          {isDesktopOrLaptop && (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <FormControl
                    sx={{
                      mt: 2,
                      width: 200,
                      background: "rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    <InputLabel
                      htmlFor="outlined-adornment-amount"
                      sx={{
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      Primary Borrower income
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      value={praincome}
                      onChange={(e) => setpraincome(e.target.value)}
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                      label="Primary Borrower income"
                    />
                  </FormControl>
                  <FormControl
                    sx={{
                      mt: 2,
                      width: 200,
                      background: "rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    <InputLabel
                      htmlFor="outlined-adornment-amount"
                      sx={{
                        color: "black",

                        fontWeight: "bold",
                      }}
                    >
                      Rental Income
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      value={rentincome}
                      onChange={(e) => setrentincome(e.target.value)}
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                      label="Rental Income"
                    />
                  </FormControl>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 55,
                }}
              >
                <FormControl
                  sx={{
                    mt: 2,
                    width: 200,
                    background: "rgba(255, 255, 255, 0.3)",
                  }}
                >
                  <InputLabel
                    htmlFor="outlined-adornment-amount"
                    sx={{
                      color: "black",

                      fontWeight: "bold",
                    }}
                  >
                    Co Borrower income
                  </InputLabel>
                  <OutlinedInput
                    disabled={cobdisabled}
                    id="outlined-adornment-amount"
                    value={cobincome}
                    onChange={(e) => setcobincome(e.target.value)}
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    label="Co Borrower income"
                  />
                </FormControl>
                <FormControl
                  sx={{
                    mt: 2,
                    width: 200,
                    background: "rgba(255, 255, 255, 0.3)",
                  }}
                >
                  <InputLabel
                    htmlFor="outlined-adornment-amount"
                    sx={{
                      color: "black",

                      fontWeight: "bold",
                    }}
                  >
                    Non Borrower income
                  </InputLabel>
                  <OutlinedInput
                    disabled={nonbdisabled}
                    id="outlined-adornment-amount"
                    value={nonbincome}
                    onChange={(e) => setnonbincome(e.target.value)}
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    label="Non Borrower income"
                  />
                </FormControl>

                {nonbincome.length > 0 ? (
                  <>
                    <FormControl
                      sx={{
                        mt: 2,
                        width: 200,
                        background: "rgba(255, 255, 255, 0.3)",
                      }}
                    >
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        sx={{
                          color: "black",

                          fontWeight: "bold",
                        }}
                      >
                        Non Borrower contribution
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        value={nbcontrpc}
                        onChange={(e) => setnbcontrpc(e.target.value)}
                        startAdornment={
                          <InputAdornment position="start">%</InputAdornment>
                        }
                        label="Non Borrower contribution"
                      />
                    </FormControl>
                    {nbcontrpc.length > 0 ? (
                      <>
                        <p
                          style={{
                            fontWeight: "bold",
                            background: "rgba(255, 255, 255, 0.3)",
                          }}
                        >
                          Contribution: $<span>{nbcontr} </span>
                        </p>
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          )}
          {isTabletOrMobile && (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <FormControl
                    sx={{
                      mt: 2,
                      width: 200,
                      background: "rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    <InputLabel
                      htmlFor="outlined-adornment-amount"
                      sx={{
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      Primary Borrower income
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      value={praincome}
                      onChange={(e) => setpraincome(e.target.value)}
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                      label="Primary Borrower income"
                    />
                  </FormControl>
                  <FormControl
                    sx={{
                      mt: 2,
                      width: 200,
                      background: "rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    <InputLabel
                      htmlFor="outlined-adornment-amount"
                      sx={{
                        color: "black",

                        fontWeight: "bold",
                      }}
                    >
                      Rental Income
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      value={rentincome}
                      onChange={(e) => setrentincome(e.target.value)}
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                      label="Rental Income"
                    />
                  </FormControl>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <FormControl
                  sx={{
                    mt: 2,
                    width: 200,
                    background: "rgba(255, 255, 255, 0.3)",
                  }}
                >
                  <InputLabel
                    htmlFor="outlined-adornment-amount"
                    sx={{
                      color: "black",

                      fontWeight: "bold",
                    }}
                  >
                    Co Borrower income
                  </InputLabel>
                  <OutlinedInput
                    disabled={cobdisabled}
                    id="outlined-adornment-amount"
                    value={cobincome}
                    onChange={(e) => setcobincome(e.target.value)}
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    label="Co Borrower income"
                  />
                </FormControl>
                <FormControl
                  sx={{
                    mt: 2,
                    width: 200,
                    background: "rgba(255, 255, 255, 0.3)",
                  }}
                >
                  <InputLabel
                    htmlFor="outlined-adornment-amount"
                    sx={{
                      color: "black",

                      fontWeight: "bold",
                    }}
                  >
                    Non Borrower income
                  </InputLabel>
                  <OutlinedInput
                    disabled={nonbdisabled}
                    id="outlined-adornment-amount"
                    value={nonbincome}
                    onChange={(e) => setnonbincome(e.target.value)}
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    label="Non Borrower income"
                  />
                </FormControl>

                {nonbincome.length > 0 ? (
                  <>
                    <FormControl
                      sx={{
                        mt: 2,
                        width: 200,
                        background: "rgba(255, 255, 255, 0.3)",
                      }}
                    >
                      <InputLabel
                        htmlFor="outlined-adornment-amount"
                        sx={{
                          color: "black",

                          fontWeight: "bold",
                        }}
                      >
                        Non Borrower contribution
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        value={nbcontrpc}
                        onChange={(e) => setnbcontrpc(e.target.value)}
                        startAdornment={
                          <InputAdornment position="start">%</InputAdornment>
                        }
                        label="Non Borrower contribution"
                      />
                    </FormControl>
                    {nbcontrpc.length > 0 ? (
                      <>
                        <p
                          style={{
                            fontWeight: "bold",
                            background: "rgba(255, 255, 255, 0.3)",
                          }}
                        >
                          Contribution: $<span>{nbcontr} </span>
                        </p>
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          )}
        </div>
        <div>
          <h3 style={{ marginTop: 35 }}>Expenses</h3>
          <div className="flexcol">
            <FormControl
              sx={{
                mt: 2,
                width: 300,
                background: "rgba(255, 255, 255, 0.3)",
              }}
            >
              <InputLabel
                htmlFor="outlined-adornment-amount"
                sx={{
                  color: "black",

                  fontWeight: "bold",
                }}
              >
                Mortgage repayments
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={mortreps}
                onChange={(e) => setmortreps(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label="Mortgage repayments"
              />
            </FormControl>
            <FormControl
              sx={{
                mt: 2,
                width: 300,
                background: "rgba(255, 255, 255, 0.3)",
              }}
            >
              <InputLabel
                htmlFor="outlined-adornment-amount"
                sx={{
                  color: "black",

                  fontWeight: "bold",
                }}
              >
                Inv Mortgage repayments
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={invmortreps}
                onChange={(e) => setinvmorreps(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label="Inv Mortgage repayments"
              />
            </FormControl>
            <FormControl
              sx={{
                mt: 2,
                width: 300,
                background: "rgba(255, 255, 255, 0.3)",
              }}
            >
              <InputLabel
                htmlFor="outlined-adornment-amount"
                sx={{
                  color: "black",

                  fontWeight: "bold",
                }}
              >
                Rent
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={rent}
                onChange={(e) => setrent(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label="Rent"
              />
            </FormControl>
            <FormControl
              sx={{
                mt: 2,
                width: 300,
                background: "rgba(255, 255, 255, 0.3)",
              }}
            >
              <InputLabel
                htmlFor="outlined-adornment-amount"
                sx={{
                  color: "black",

                  fontWeight: "bold",
                }}
              >
                Other loan repayments
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={otherreps}
                onChange={(e) => setotherreps(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label="Other loan repayments"
              />
            </FormControl>
            <FormControl
              sx={{
                mt: 2,
                width: 300,
                background: "rgba(255, 255, 255, 0.3)",
              }}
            >
              <InputLabel
                htmlFor="outlined-adornment-amount"
                sx={{
                  color: "black",

                  fontWeight: "bold",
                }}
              >
                New car loan repayments
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={bmwreps}
                onChange={(e) => setbmwreps(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label="New car loan repayments"
              />
            </FormControl>
            <Button
              onClick={() => calcservicing()}
              sx={{
                mt: 2,
                background:
                  "linear-gradient(to right bottom, white, lightgreen )",
                color: "black",
                width: 300,
              }}
              variant="outlined"
            >
              CALCULATE SERVICING
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicingCheck;
