import styled from "@emotion/styled";
import {
    Button,
    Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
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
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  ColorButton2,
  CustomPaper,
  CustomPaper3,
  HackathonChip,
  QueryHeading,
  CapstoneDetail,
  StyledTableCell
} from "./capstoneComponents";


const Capstone = () => {
    const [fetchedCapstone, setFetchedCapstone] = useState([])
    const [formData, setFormData] = useState({
      frontsource: '',
      frontdeployed: '',
      backsource: '',
      backdeployed: '',
    })
  
    // const dispatch = useDispatch()
    // const navigate = useNavigate()
    // const capstone = useSelector((state) => state.Capstone)
    // console.log(capstone)

    // const getSingleCapstone = (capstoneId) => {
    //     const capstoneDetails = capstone.filter((cap) => cap._id === capstoneId)
    //     setFetchedCapstone(capstoneDetails)
    //     console.log(fetchedCapstone)
    //   }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(formData)
    //     dispatch(createCapstoneSubmission(formData))
    //     handleClickOpen()
    //   }

    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
      }
    
      const handleClose = () => {
        setOpen(false)
      }


    //   useEffect(() => {
    //     // dispatch(getHackathons())
    //     dispatch(getCapstone())
    //   }, [])

  return (
    <Grid container sx={{ wordWrap: "break-word" }}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <CustomPaper3></CustomPaper3>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6} mb={2}>
        {/* {capstone.map((cap) => ( */}
        <CapstoneDetail
        // key={cap._id}
        // capstone={cap}
        // getSingleCapstone={getSingleCapstone}
        />
        {/* ))} */}
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
              <QueryHeading>Praveenkumar J</QueryHeading>
              <Typography sx={{ color: "#7e8e9f" }}>
                {/* {fetchedCapstone[0]
                  ? fetchedCapstone[0].title
                  : 'No Capstone Project Available'} */}
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
                  {/* <Link>
                    {fetchedCapstone[0]
                      ? fetchedCapstone[0].doclink
                      : 'No Data Available'}
                  </Link> */}
                </Typography>
                <Typography
                  sx={{ fontWeight: "bolder", color: "#555a8f", mt: 2, mb: 2 }}
                >
                  Guidelines:
                </Typography>
                <Typography p={0} m={0} sx={{ color: "#555a8f" }}>
                  {/* {fetchedCapstone[0]
                    ? fetchedCapstone[0].description
                    : 'No Data Available'} */}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <form
          //   autoComplete="off" noValidate onSubmit={handleSubmit}
          >
            <TableContainer
            //  component={Paper}
            >
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
                        name="heading"
                        variant="outlined"
                        label="Link"
                        type="text"
                        fullWidth
                        // value={formData.frontsource}
                        // onChange={(e) =>
                        //   setFormData({
                        //     ...formData,
                        //     frontsource: e.target.value,
                        //   })
                        // }
                      />
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell>Back-end Source code</StyledTableCell>
                    <StyledTableCell align="left">
                      <TextField
                        name="heading"
                        variant="outlined"
                        label="Link"
                        type="text"
                        fullWidth
                        // value={formData.backsource}
                        // onChange={(e) =>
                        //   setFormData({
                        //     ...formData,
                        //     backsource: e.target.value,
                        //   })
                        // }
                      />
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell>Front-end Deployed URL</StyledTableCell>
                    <StyledTableCell align="left">
                      <TextField
                        name="heading"
                        variant="outlined"
                        label="Link"
                        type="text"
                        fullWidth
                        // value={formData.frontdeployed}
                        // onChange={(e) =>
                        //   setFormData({
                        //     ...formData,
                        //     frontdeployed: e.target.value,
                        //   })
                        // }
                      />
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell>Back-end Deployed URL</StyledTableCell>
                    <StyledTableCell align="left">
                      <TextField
                        name="heading"
                        variant="outlined"
                        label="Link"
                        type="text"
                        fullWidth
                        // value={formData.backdeployed}
                        // onChange={(e) =>
                        //   setFormData({
                        //     ...formData,
                        //     backdeployed: e.target.value,
                        //   })
                        // }
                      />
                    </StyledTableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Grid
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 7,
              }}
            >
              <ColorButton2 type="submit" sx={{ borderRadius: '8px' }}>
                Submit
              </ColorButton2>
            </Grid>
          </form>

          <div>
            <Dialog
            //   open={open}
            //   onClose={handleClose}
            //   aria-labelledby="alert-dialog-title"
            //   aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {'Submitted Successfully'}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  The Capstone Project has been submitted successfully.
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
    </Grid>
  );
};

export default Capstone;
