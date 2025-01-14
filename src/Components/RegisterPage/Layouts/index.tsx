import {Box,Paper,Typography} from '@mui/material'

interface Children{
    children : JSX.Element
}

export default function LayoutRegister({children}:Children){
    return(
    <Box>
    <Paper sx={{mx:'auto',width:500, textAlign:"center",my:8}}>
    <Typography color='secondary' variant='h4'>Register</Typography>
    <Typography color='secondary' variant='subtitle1'>Lengkapi kolom yang kosong</Typography>
    {children}
    </Paper>
</Box>) 
}