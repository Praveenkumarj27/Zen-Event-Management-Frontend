import styled from "@emotion/styled";
import { Button, Paper, Typography } from "@mui/material";

export const CustomPaper = styled(Paper)({
    background: 'rgb(255, 255, 255)',
    border: '1px solid rgb(222, 222, 222)',
    boxSizing: 'border-box',
    borderRadius: '8px',
    height: 'max-content',
    boxShadow: 'rgb(0 0 0 / 10%) 0px 1px 10px',
  })

  export const CustomTypography = styled(Typography)({
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#7e8e9f',
    paddingBottom: '5px',
  })

  export const ColorButton = styled(Button)(({ theme }) => ({
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