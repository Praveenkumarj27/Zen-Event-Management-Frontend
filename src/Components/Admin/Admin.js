import { FormControl, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ColorButton, CustomPaper, CustomTypography } from "./adminComponents";
import axios from "axios";
import * as Yup from "yup";
import { url } from "../../Api/api";
import { useFormik } from "formik";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
const Admin = () => {
  const navigate = useNavigate();

  let submitCapstone = useFormik({
    initialValues: {
      student: "",
      title: "",
      doclink: "",
      description: "",
    },
    validationSchema: Yup.object({
      student: Yup.string().required("Required"),
      title: Yup.string().required("Required"),
      doclink: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
    }),

    onSubmit: async (values) => {
      try {
        const capstonetasks = await axios.post(`${url}/capstonetasks`, values, {
          headers: {
            Authorization: `${localStorage.getItem}(react_app_token)`,
          },
        });
        alert(capstonetasks.data.message);
        navigate("/capstone");
        localStorage.setItem("react_app_token", capstonetasks.data.token);
      } catch (error) {
        console.log(error);
      }
    },
  });

  let submitHackathon = useFormik({
    initialValues: {
      student: "",
      title: "",
      doclink: "",
      description: "",
    },

    validationSchema: Yup.object({
      student: Yup.string().required("Required"),
      title: Yup.string().required("Required"),
      doclink: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
    }),

    onSubmit: async (values) => {
      try {
        const hackathontasks = await axios.post(
          `${url}/hackathontasks`,
          values,
          {
            headers: {
              Authorization: `${localStorage.getItem}(react_app_token)`,
            },
          }
        );
        alert(hackathontasks.data.message);
        navigate("/hackathon");
        localStorage.setItem("react_app_token", hackathontasks.data.token);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Navbar />
          <div className="admin">
            <Grid
              container
              spacing={2}
              marginLeft="100px"
              marginTop="10px"
              overflow="hidden"
            >
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <CustomPaper sx={{ p: 2 }}>
                  <Typography variant="h4">Create Capstone </Typography>

                  <form
                    autoComplete="off"
                    validationSchema
                    onSubmit={submitCapstone.handleSubmit}
                  >
                    <Grid mb={2}>
                      <CustomTypography>Student</CustomTypography>
                      <FormControl fullWidth>
                        <TextField
                          type="text"
                          id="outlined"
                          label="Student"
                          name="student"
                          helperText={
                            submitCapstone.touched.student &&
                            submitCapstone.errors.student
                              ? "Required"
                              : ""
                          }
                          onChange={submitCapstone.handleChange}
                          onBlur={submitCapstone.handleBlur}
                          value={submitCapstone.values.student}
                          error={
                            submitCapstone.touched.student &&
                            submitCapstone.errors.student
                          }
                        />
                      </FormControl>
                    </Grid>

                    <Grid mb={2}>
                      <CustomTypography>Title</CustomTypography>
                      <FormControl fullWidth>
                        <TextField
                          type="text"
                          id="outlined"
                          label="Title"
                          name="title"
                          helperText={
                            submitCapstone.touched.title &&
                            submitCapstone.errors.title
                              ? "Required"
                              : ""
                          }
                          onChange={submitCapstone.handleChange}
                          onBlur={submitCapstone.handleBlur}
                          value={submitCapstone.values.title}
                          error={
                            submitCapstone.touched.title &&
                            submitCapstone.errors.title
                          }
                        />
                      </FormControl>
                    </Grid>

                    <Grid mb={2}>
                      <CustomTypography>
                        Capstone Document Link
                      </CustomTypography>
                      <FormControl fullWidth>
                        <TextField
                          type="text"
                          id="outlined"
                          label="Document Link"
                          name="doclink"
                          helperText={
                            submitCapstone.touched.doclink &&
                            submitCapstone.errors.doclink
                              ? "Required"
                              : ""
                          }
                          onChange={submitCapstone.handleChange}
                          onBlur={submitCapstone.handleBlur}
                          value={submitCapstone.values.doclink}
                          error={
                            submitCapstone.touched.doclink &&
                            submitCapstone.errors.doclink
                          }
                        />
                      </FormControl>
                    </Grid>

                    <Grid mb={2}>
                      <CustomTypography>
                        Capstone Project Description
                      </CustomTypography>
                      <FormControl fullWidth>
                        <TextField
                          type="text"
                          id="outlined"
                          label="Description"
                          name="description"
                          helperText={
                            submitCapstone.touched.description &&
                            submitCapstone.errors.description
                              ? "Required"
                              : ""
                          }
                          onChange={submitCapstone.handleChange}
                          onBlur={submitCapstone.handleBlur}
                          value={submitCapstone.values.description}
                          error={
                            submitCapstone.touched.description &&
                            submitCapstone.errors.description
                          }
                        />
                      </FormControl>
                    </Grid>

                    <Grid
                      mb={2}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <ColorButton type="submit" size="small">
                        Create Capstone
                      </ColorButton>
                    </Grid>
                  </form>
                  <div></div>
                </CustomPaper>
              </Grid>

              <Grid item xs={12} sm={12} md={4} lg={4} marginLeft="50px">
                <CustomPaper sx={{ p: 2 }}>
                  <Typography variant="h4">Create Hackathon</Typography>
                  <form
                    autoComplete="off"
                    noValidate
                    onSubmit={submitHackathon.handleSubmit}
                  >
                    <Grid mb={2}>
                      <CustomTypography>Student</CustomTypography>
                      <FormControl fullWidth>
                        <TextField
                          type="text"
                          id="outlined"
                          label="Student"
                          name="student"
                          helperText={
                            submitHackathon.touched.student &&
                            submitHackathon.errors.student
                              ? "Required"
                              : ""
                          }
                          onChange={submitHackathon.handleChange}
                          onBlur={submitHackathon.handleBlur}
                          value={submitHackathon.values.student}
                          error={
                            submitHackathon.touched.student &&
                            submitHackathon.errors.student
                          }
                        />
                      </FormControl>
                    </Grid>

                    <Grid mb={2}>
                      <CustomTypography>Title</CustomTypography>
                      <FormControl fullWidth>
                        <TextField
                          type="text"
                          id="outlined"
                          label="Title"
                          name="title"
                          helperText={
                            submitHackathon.touched.title &&
                            submitHackathon.errors.title
                              ? "Required"
                              : ""
                          }
                          onChange={submitHackathon.handleChange}
                          onBlur={submitHackathon.handleBlur}
                          value={submitHackathon.values.title}
                          error={
                            submitHackathon.touched.title &&
                            submitHackathon.errors.title
                          }
                        />
                      </FormControl>
                    </Grid>

                    <Grid mb={2}>
                      <CustomTypography>
                        Capstone Document Link
                      </CustomTypography>
                      <FormControl fullWidth>
                        <TextField
                          type="text"
                          id="outlined"
                          label="Document Link"
                          name="doclink"
                          helperText={
                            submitHackathon.touched.doclink &&
                            submitHackathon.errors.doclink
                              ? "Required"
                              : ""
                          }
                          onChange={submitHackathon.handleChange}
                          onBlur={submitHackathon.handleBlur}
                          value={submitHackathon.values.doclink}
                          error={
                            submitHackathon.touched.doclink &&
                            submitHackathon.errors.doclink
                          }
                        />
                      </FormControl>
                    </Grid>

                    <Grid mb={2}>
                      <CustomTypography>
                        Capstone Project Description
                      </CustomTypography>
                      <FormControl fullWidth>
                        <TextField
                          type="text"
                          id="outlined"
                          label="Description"
                          name="description"
                          helperText={
                            submitHackathon.touched.description &&
                            submitHackathon.errors.description
                              ? "Required"
                              : ""
                          }
                          onChange={submitHackathon.handleChange}
                          onBlur={submitHackathon.handleBlur}
                          value={submitHackathon.values.description}
                          error={
                            submitHackathon.touched.description &&
                            submitHackathon.errors.description
                          }
                        />
                      </FormControl>
                    </Grid>

                    <Grid
                      mb={2}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <ColorButton type="submit" size="small">
                        Create Hackathon
                      </ColorButton>
                    </Grid>
                  </form>
                </CustomPaper>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
