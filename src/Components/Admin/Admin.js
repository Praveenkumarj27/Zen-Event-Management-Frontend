import { FormControl, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ColorButton, CustomPaper, CustomTypography } from "./adminComponents";
import axios from "axios";
import { url } from "../../Api/api";
import { useFormik } from "formik";
const Admin = () => {
  const navigate = useNavigate();

  let submitCapstone = useFormik({
    initialValues: {
      student: "",
      title: "",
      doclink: "",
      description: "",
    },

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
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <CustomPaper sx={{ p: 2 }}>
          <Typography variant="h4">Create Capstone Project</Typography>

          <form
            autoComplete="off"
            noValidate
            onSubmit={submitCapstone.handleSubmit}
          >
            <Grid mb={2}>
              <CustomTypography>Student</CustomTypography>
              <FormControl fullWidth>
                <TextField
                  type="text"
                  label="Student"
                  name="student"
                  value={submitCapstone.values.student}
                  onChange={submitCapstone.handleChange}
                />
              </FormControl>
            </Grid>

            <Grid mb={2}>
              <CustomTypography>Capstone Document Link</CustomTypography>
              <FormControl fullWidth>
                <TextField
                  type="text"
                  label="Title"
                  name="title"
                  value={submitCapstone.values.title}
                  onChange={submitCapstone.handleChange}
                />
              </FormControl>
            </Grid>

            <Grid mb={2}>
              <CustomTypography>Capstone Document Link</CustomTypography>
              <FormControl fullWidth>
                <TextField
                  type="text"
                  label="Document Link"
                  name="doclink"
                  value={submitCapstone.values.doclink}
                  onChange={submitCapstone.handleChange}
                />
              </FormControl>
            </Grid>

            <Grid mb={2}>
              <CustomTypography>Capstone Project Description</CustomTypography>
              <FormControl fullWidth>
                <TextField
                  type="text"
                  label="Description"
                  name="description"
                  value={submitCapstone.values.description}
                  onChange={submitCapstone.handleChange}
                />
              </FormControl>
            </Grid>

            <Grid mb={2} sx={{ display: "flex", justifyContent: "center" }}>
              <ColorButton type="submit" size="small">
                Create Capstone
              </ColorButton>
            </Grid>
          </form>
          <div></div>
        </CustomPaper>
      </Grid>

      <Grid item xs={12} sm={12} md={4} lg={4}>
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
                  label="Student"
                  name="student"
                  value={submitHackathon.values.student}
                  onChange={submitHackathon.handleChange}
                />
              </FormControl>
            </Grid>

            <Grid mb={2}>
              <CustomTypography>Capstone Document Link</CustomTypography>
              <FormControl fullWidth>
                <TextField
                  type="text"
                  label="Title"
                  name="title"
                  value={submitHackathon.values.title}
                  onChange={submitHackathon.handleChange}
                />
              </FormControl>
            </Grid>

            <Grid mb={2}>
              <CustomTypography>Capstone Document Link</CustomTypography>
              <FormControl fullWidth>
                <TextField
                  type="text"
                  label="Document Link"
                  name="doclink"
                  value={submitHackathon.values.doclink}
                  onChange={submitHackathon.handleChange}
                />
              </FormControl>
            </Grid>

            <Grid mb={2}>
              <CustomTypography>Capstone Project Description</CustomTypography>
              <FormControl fullWidth>
                <TextField
                  type="text"
                  label="Description"
                  name="description"
                  value={submitHackathon.values.description}
                  onChange={submitHackathon.handleChange}
                />
              </FormControl>
            </Grid>

            <Grid mb={2} sx={{ display: "flex", justifyContent: "center" }}>
              <ColorButton type="submit" size="small">
                Create Capstone
              </ColorButton>
            </Grid>
          </form>
        </CustomPaper>
      </Grid>
    </Grid>
  );
};

export default Admin;
