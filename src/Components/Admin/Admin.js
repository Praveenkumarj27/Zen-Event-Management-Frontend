import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import { ColorButton, CustomPaper, CustomTypography } from "./adminComponents";
  const Admin = ({ currentId, setCurrentId,}) => {
    // const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const [hackathon, setHackathon] = useState({
      title: '',
      doclink: '',
      description: '',
    })
  
    const [capstone, setCapstone] = useState({
      title: '',
      doclink: '',
      description: '',
    })
    
    const submitHackathon =()=>{

    }
    
    const submitCapstone =(e)=>{

    }


    // const submitHackathon = (e) => {
    //   e.preventDefault()
    //   console.log(hackathon)
    //   dispatch(createHackathons(hackathon))
    //   handleClickOpen()
    // }
  
    // const submitCapstone = (e) => {
    //   e.preventDefault()
    //   console.log(capstone)
    //   dispatch(createCapstone(capstone))
    //   handleClickOpen()
    // }
  
   
  
    //   Modal States Starts
    // const [open, setOpen] = React.useState(false)
  
    // const handleClickOpen = () => {
    //   setOpen(true)
    // }
  
    // const handleClose = () => {
    //   setOpen(false)
    // }
    //   Modal States Ends
  
  return (
    
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <CustomPaper sx={{ p: 2 }}>
          <Typography variant="h4">Create Capstone Project</Typography>

          <form
             autoComplete="off" noValidate onSubmit={submitCapstone}
          >
            {/* <Grid mb={2}>
              <CustomTypography>User</CustomTypography>
              <TextField
                name="heading"
                variant="outlined"
                label="user"
                type="text"
                fullWidth
                // value={capstone.title}
                // onChange={(e) =>
                //   setCapstone({
                //     ...capstone,
                //     title: e.target.value,
                //   })
                // }
              />
            </Grid> */}

          

            <Grid mb={2}>
              <CustomTypography>Capstone Project Title</CustomTypography>
              <TextField
                name="heading"
                variant="outlined"
                label="Title"
                type="text"
                fullWidth
                // value={capstone.title}
                // onChange={(e) =>
                //   setCapstone({
                //     ...capstone,
                //     title: e.target.value,
                //   })
                // }
              />
            </Grid>

            <Grid mb={2}>
              <CustomTypography>Capstone Document Link</CustomTypography>
              <FormControl fullWidth>
                <TextField
                  type="text"
                    label="Document Link"
                    // value={capstone.doclink}
                  //   onChange={(e) =>
                  //     setCapstone({
                  //       ...capstone,
                  //       doclink: e.target.value,
                  //     })
                  //   }
                />
              </FormControl>
            </Grid>
            <Grid mb={2}>
              <CustomTypography>Capstone Project Description</CustomTypography>
              <FormControl fullWidth>
                <TextField
                  type="text"
                     label="Description"
                    // value={capstone.description}
                  //   onChange={(e) =>
                  //     setCapstone({
                  //       ...capstone,
                  //       description: e.target.value,
                  //     })
                  //   }
                />
              </FormControl>
            </Grid>

            <Grid mb={2} sx={{ display: "flex", justifyContent: "center" }}>
              <ColorButton type="submit" size="small">
                Create Capstone
              </ColorButton>
              <ColorButton sx={{ ml: 2 }}>Clear</ColorButton>
            </Grid>
          </form>

          <div>
            <Dialog
              //   open={open}
              //   onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Submitted Successfully"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  The Capstone Project has been added successfully.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button 
                // onClick={handleClose}
                >Close</Button>
                <Button 
                // onClick={() => navigate('/capstone')} autoFocus
                >
                  View Capstone
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </CustomPaper>
      </Grid>



      <Grid item xs={12} sm={12} md={4} lg={4}>
        <CustomPaper sx={{ p: 2 }}>
          <Typography variant="h4">Create Hackathon</Typography>

          <form
             autoComplete="off" noValidate onSubmit={submitCapstone}
          >
            <Grid mb={2}>
              <CustomTypography>Hackathon Title</CustomTypography>
              <TextField
                name="heading"
                variant="outlined"
                label="Title"
                type="text"
                fullWidth
                // value={hackathon.title}
                // onChange={(e) =>
                //   setHackathon({
                //     ...hackathon,
                //     title: e.target.value,
                //   })
                // }
              />
            </Grid>

            <Grid mb={2}>
              <CustomTypography>Hackathon Document Link</CustomTypography>
              <FormControl fullWidth>
                <TextField
                  type="text"
                    label="Document Link"
                    // value={hackathon.doclink}
                  //   onChange={(e) =>
                  //     setHackathon({
                  //       ...hackathon,
                  //       doclink: e.target.value,
                  //     })
                  //   }
                />
              </FormControl>
            </Grid>
            <Grid mb={2}>
              <CustomTypography>Hackathon Description</CustomTypography>
              <FormControl fullWidth>
                <TextField
                  type="text"
                     label="Description"
                    // value={hackathon.description}
                  //   onChange={(e) =>
                  //    setHackathon ({
                  //       ...hackathon,
                  //       description: e.target.value,
                  //     })
                  //   }
                />
              </FormControl>
            </Grid>

            <Grid mb={2} sx={{ display: "flex", justifyContent: "center" }}>
              <ColorButton type="submit" size="small">
                Create Hackathon
              </ColorButton>
              <ColorButton sx={{ ml: 2 }}>Clear</ColorButton>
            </Grid>
          </form>

          <div>
            <Dialog
              //   open={open}
              //   onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Submitted Successfully"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  The Hackathon has been added successfully.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button 
                // onClick={handleClose}
                >Close</Button>
                <Button 
                // onClick={() => navigate('/hackathon')} autoFocus
                >
                  View Hackathons
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </CustomPaper>
      </Grid>
    </Grid>
  );
};

export default Admin;
