import {
  Divider,
  Grid,
  Link,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../../Api/api";
import {
  ColorButton2,
  CustomPaper,
  HackathonChip,
  QueryHeading,
  StyledTableCell,
} from "./capstoneComponents";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const CapstoneDetail = () => {
  const [capstone, setCapstone] = useState([]);
  let fetchData = async () => {
    try {
      let res = await axios.get(`${url}/capstonetasks`, {
        headers: {
          Authorization: `${localStorage.getItem}(react_app_token)`,
        },
      });
      console.log(res.data);
      setCapstone(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {capstone.map((cap) => (
        <CustomPaper
          sx={{ mb: 1, mt: 1, cursor: "pointer" }}
          // onClick={}
        >
          <Grid
            container
            sx={{ display: "flex", justifyContent: "space-between", p: 2 }}
          >
            <Grid item xs={10} sm={10} md={10} lg={10}>
              <QueryHeading>{cap.student}</QueryHeading>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2}>
              <HackathonChip filled label="Capstone"></HackathonChip>
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
              <Typography sx={{ color: "#7e8e9f" }}>{cap.title}</Typography>
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

const Capstone = () => {
  const navigate = useNavigate();

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
        const capstoneSubmission = await axios.post(
          `${url}/capstonesubmission`,
          values,
          {
            headers: {
              Authorization: `${localStorage.getItem}(react_app_token)`,
            },
          }
        );
        alert(capstoneSubmission.data.message);
        navigate("/capstone");
        localStorage.setItem("react_app_token", capstoneSubmission.data.token);
      } catch (error) {
        console.log(error);
      }
    },
  });

  const [capstone, setCapstone] = useState([]);
  let fetchData = async () => {
    try {
      let res = await axios.get(`${url}/capstonetasks`, {
        headers: {
          Authorization: `${localStorage.getItem}(react_app_token)`,
        },
      });
      console.log(res.data);
      setCapstone(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Navbar />
          <h2  className="mt-3 " style={{paddingLeft:"10px"}} >Capstone</h2>
          <Grid container sx={{ wordWrap: "break-word" ,paddingLeft:"10px" }}>
            <Grid item xs={12} sm={12} md={12} lg={6} mb={2}>
              <CapstoneDetail />
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
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    p: 2,
                  }}
                >
                  <Grid item xs={10} sm={10} md={10} lg={10}>
                    <QueryHeading></QueryHeading>

                    <Typography sx={{ color: "#7e8e9f" }}>
                      {"No Data Available"}
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={2} md={2} lg={2}>
                    <HackathonChip filled label="Capstone"></HackathonChip>
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
                          <StyledTableCell align="left">
                            Submission
                          </StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <StyledTableCell>
                            Front-end Source code
                          </StyledTableCell>
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
                          <StyledTableCell>
                            Back-end Source code
                          </StyledTableCell>
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
                          <StyledTableCell>
                            Front-end Deployed URL
                          </StyledTableCell>
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
                          <StyledTableCell>
                            Back-end Deployed URL
                          </StyledTableCell>
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
                      p: 1,
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
        </div>
      </div>
    </div>
  );
};

export default Capstone;
