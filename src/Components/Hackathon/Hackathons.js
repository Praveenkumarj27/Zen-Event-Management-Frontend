import styled from "@emotion/styled";
import {
  Divider,
  Grid,
  Link,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ColorButton2,
  CustomPaper,
  HackathonChip,
  QueryHeading,
} from "./hackathonComponents";
import { url } from "../../Api/api";
import { useFormik } from "formik";
import Navbar from "../Navbar/Navbar";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#fff",
    color: "black",
    fontWeight: "bolder",
    fontFamily: "DM Sans",
    fontSize: "15px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    fontFamily: "DM Sans",
  },
}));

export const WebcodeDetail = () => {
  const [hackathon, setHackathon] = useState([]);
  let fetchData = async () => {
    try {
      let res = await axios.get(`${url}/hackathontasks`, {
        headers: {
          Authorization: `${localStorage.getItem}(react_app_token)`,
        },
      });
      console.log(res.data);
      setHackathon(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {hackathon.map((hack) => (
        <CustomPaper
          sx={{ mb: 1, mt: 1, cursor: "pointer" }}
          // onClick={}
        >
          <Grid
            container
            sx={{ display: "flex", justifyContent: "space-between", p: 2 }}
          >
            <Grid item xs={10} sm={10} md={10} lg={10}>
              <QueryHeading>{hack.student}</QueryHeading>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2}>
              <HackathonChip filled label="Hackathon"></HackathonChip>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              pt: 0,
              pb: 2,
              pl: 2,
              pr: 2,
            }}
          >
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <Typography sx={{ color: "#7e8e9f" }}>{hack.title}</Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={6}
              lg={6}
              display="flex"
              alignItems="flex-start"
              justifyContent="flex-end"
            >
              <Typography variant="subtitle2" sx={{ color: "#555a8f" }}>
                Yet to be graded
              </Typography>
            </Grid>
          </Grid>
        </CustomPaper>
      ))}
    </>
  );
};

const Hackathons = () => {
  const [fetchedHackathon, setFetchedHackathon] = useState([]);
  let formik = useFormik({
    initialValues: {
      frontsource: "",
      frontdeployed: "",
      backsource: "",
      backdeployed: "",
    },
    validationSchema: Yup.object({
      frontsource: Yup.string().required("Required"),
      frontdeployed: Yup.string().required("Required"),
      backsource: Yup.string().required("Required"),
      backdeployed: Yup.string().required("Required"),
    }),

    onSubmit: async (values) => {
      try {
        const hackathonSubmission = await axios.post(
          `${url}/hackathonsubmission`,
          values,
          {
            headers: {
              Authorization: `${localStorage.getItem}(react_app_token)`,
            },
          }
        );
        alert(hackathonSubmission.data.message);
        navigate("/hackathon");
        localStorage.setItem("react_app_token", hackathonSubmission.data.token);
      } catch (error) {
        console.log(error);
      }
    },
  });

  const [hackathon, setHackathon] = useState([]);
  let fetchData = async () => {
    try {
      let res = await axios.get(`${url}/hackathontasks`, {
        headers: {
          Authorization: `${localStorage.getItem}(react_app_token)`,
        },
      });
      console.log(res.data);
      setHackathon(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <Navbar></Navbar>
      <h2>Hackathon</h2>
      <Grid container sx={{ wordWrap: "break-word" }}>
        <Grid item xs={12} sm={12} md={12} lg={6} mb={2}>
          <WebcodeDetail />
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          sx={{
            pl: 2,
            mt: 1,
          }}
        >
          <CustomPaper sx={{ p: 2, wordWrap: "break-word" }}>
            <Grid
              container
              sx={{ display: "flex", justifyContent: "space-between", p: 2 }}
            >
              <Grid item xs={10} sm={10} md={10} lg={10}>
                <QueryHeading></QueryHeading>

                <Typography sx={{ color: "#7e8e9f" }}>
                  {"No Data Available"}
                </Typography>
              </Grid>
              <Grid item xs={2} sm={2} md={2} lg={2}>
                <HackathonChip filled label="Hackathon"></HackathonChip>
              </Grid>
            </Grid>
            <Divider />
            <Grid item mb={4}>
              <Grid container mt={2}>
                <Grid item mt={2}>
                  <Typography
                    p={0}
                    m={0}
                    sx={{ color: "rgb(126 142 159)", mb: 2 }}
                  >
                    Description:
                  </Typography>
                  <Typography
                    sx={{ fontWeight: "bolder", color: "#555a8f", mb: 2 }}
                  >
                    Task Document Link
                  </Typography>
                  <Typography>
                    <Link>{"No Data Available"}</Link>
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "bolder",
                      color: "#555a8f",
                      mt: 2,
                      mb: 2,
                    }}
                  >
                    Guidelines:
                  </Typography>
                  <Typography p={0} m={0} sx={{ color: "#555a8f" }}>
                    {"No Data Available"}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <form
              autoComplete="off"
              validationSchema
              onSubmit={formik.handleSubmit}
            >
              <TableContainer>
                <Table aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Code</StyledTableCell>
                      <StyledTableCell align="left">Submission</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <StyledTableCell>Front-end Source code</StyledTableCell>
                      <StyledTableCell align="left">
                        <TextField
                          size="small"
                          type="text"
                          id="outlined"
                          label="Link"
                          name="frontsource"
                          helperText={
                            formik.touched.frontsource &&
                            formik.errors.frontsource
                              ? "Required"
                              : ""
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.frontsource}
                          error={
                            formik.touched.frontsource &&
                            formik.errors.frontsource
                          }
                          fullWidth
                        />
                      </StyledTableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell>Back-end Source code</StyledTableCell>
                      <StyledTableCell align="left">
                        <TextField
                          size="small"
                          type="text"
                          id="outlined"
                          label="Link"
                          name="backsource"
                          helperText={
                            formik.touched.backsource &&
                            formik.errors.backsource
                              ? "Required"
                              : ""
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.backsource}
                          error={
                            formik.touched.backsource &&
                            formik.errors.backsource
                          }
                          fullWidth
                        />
                      </StyledTableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell>Front-end Deployed URL</StyledTableCell>
                      <StyledTableCell align="left">
                        <TextField
                          size="small"
                          type="text"
                          id="outlined"
                          label="Link"
                          name="frontdeployed"
                          helperText={
                            formik.touched.frontdeployed &&
                            formik.errors.frontdeployed
                              ? "Required"
                              : ""
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.frontdeployed}
                          error={
                            formik.touched.frontdeployed &&
                            formik.errors.frontdeployed
                          }
                          fullWidth
                        />
                      </StyledTableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell>Back-end Deployed URL</StyledTableCell>
                      <StyledTableCell align="left">
                        <TextField
                          size="small"
                          type="text"
                          id="outlined"
                          label="Link"
                          name="backdeployed"
                          helperText={
                            formik.touched.backdeployed &&
                            formik.errors.backdeployed
                              ? "Required"
                              : ""
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.backdeployed}
                          error={
                            formik.touched.backdeployed &&
                            formik.errors.backdeployed
                          }
                          fullWidth
                        />
                      </StyledTableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 7,
                }}
              >
                <ColorButton2 type="submit" sx={{ borderRadius: "8px" }}>
                  Submit
                </ColorButton2>
              </Grid>
            </form>
          </CustomPaper>
        </Grid>
      </Grid>
    </>
  );
};

export default Hackathons;
