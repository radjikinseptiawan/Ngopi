import {Box,Paper,Typography} from '@mui/material'

interface Children{
    children : JSX.Element
}

export default function LayoutLogin({children}:Children){
    return(
    <Box>
    <Paper sx={{mx:'auto',width:500, textAlign:"center",my:8}}>
    <Typography color='secondary' variant='h4'>Login</Typography>
    <Typography color='secondary' variant='subtitle1'>Selamat datang kembali!</Typography>
    {children}
    </Paper>
</Box>) 
}