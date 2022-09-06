import styled from "@emotion/styled";
import { Button, Chip, Grid, Paper, TableCell, tableCellClasses, TableRow, Typography } from "@mui/material";

export const CustomPaper = styled(Paper)({
    background: 'rgb(255, 255, 255)',
    border: '1px solid rgb(222, 222, 222)',
    boxSizing: 'border-box',
    borderRadius: '8px',
    height: 'max-content',
    boxShadow: 'rgb(0 0 0 / 10%) 0px 1px 10px',
  })
  export const HackathonChip = styled(Chip)({
    backgroundColor: '#ffebd5',
    color: '#ff9a28',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: '8px',
    height: '32px',
    fontWeight: 700,
    fontSize: '12px',
    width: 'max-content',
  })
  export const QueryHeading = styled(Typography)({
    fontWeight: 500,
    fontSize: '20px',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    width: '100%',
    color: '#555a8f',
  })

  export const CustomPaper3 = styled(Paper)({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgb(240, 239, 255)',
    height: '64px',
    width: '100%',
    padding: '16px 20px',
    borderTop: '1.5px solid rgb(222, 222, 222)',
    justifyContent: 'space-between',
  })

  export const ColorButton2 = styled(Button)(({ theme }) => ({
    '&:hover': {
      backgroundColor: '#4b0dba',
    },
    backgroundColor: '#4b0dba',
    color: '#fff',
    fontFamily: 'DM Sans',
    fontSize: '15px',
    textTransform: 'inherit',
    fontWeight: 100,
  }))

 export const StyledTableCell = styled(TableCell)(({ theme }) => ({
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
  
 export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  
  