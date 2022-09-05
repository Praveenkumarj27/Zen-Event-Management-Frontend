import styled from "@emotion/styled";
import { LoadingButton } from "@mui/lab";
import { Grid } from "@mui/material";


export const ColorButton = styled(LoadingButton)(({ theme }) => ({
    '&:hover': {
      backgroundColor: '#4b0dba',
    },
    backgroundColor: '#4b0dba',
    color: '#fff',
    fontFamily: 'DM Sans',
    fontSize: '20px',
    textTransform: 'inherit',
    fontWeight: 100,
  }))

  export const ResponsiveLogo=styled(Grid)({
    marginTop: '10px',
    display: 'flex',


})

  export const ResponsiveForm = styled(Grid) ({
    marginTop: '70px',
    marginLeft: '90px',
    marginRight:"-30px",
    justifyContent: 'center',
    alignItems: 'center',
   
 
})

export const Responsive=styled(Grid)({
marginTop:'1px',
scrollMarginRight:'150px',
});