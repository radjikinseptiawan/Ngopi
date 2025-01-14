import {Box,TextField,Button, Backdrop, CircularProgress, Typography} from '@mui/material'
import {useState} from "react"
export default function FormLogin():JSX.Element{
    const [clicked, setClicked] = useState<boolean>(false)
   
    const trueClick = ()=>{
         setClicked(true)
    }
 
    const falseClick = ()=>{
     setClicked(false)
    }
    return(
    <Box>
    <LoginBackDrop att1={clicked} att2={falseClick}/>
    <form action=''>
    <br/>
    <TextField sx={{my:2,width:300}} type='text' label="username"/>
    <br/>
    <TextField sx={{my:2,width:300}} type='password' label="password"/>
    <br/>
    <Button color="secondary" sx={{my:2}} size="large" variant="contained" onClick={trueClick} type='submit' href='/dashboard'>Login</Button>
    <br/>
    <Button color='secondary' sx={{my:2}} variant='text' href="/register" onClick={trueClick}>Belum punya akun</Button>
    </form>
    </Box>

    )
}

interface children{
    att1 : boolean,
    att2 : ()=> void
}

function LoginBackDrop({att1,att2}:children):JSX.Element{
return(
    <Backdrop
    sx={(theme)=> ({color:"#fff",theme:theme.zIndex.drawer + 1})}
    open = {att1}
    onClick = {att2}
    >
        <Box sx={{display:'flex',flexDirection:"column", justifyContent:"center",alignItems:"center",}}>
        <CircularProgress color='secondary'/>
        <Typography variant="body1">Memuat...</Typography>
        <Button variant="outlined" color="secondary">Batalkan</Button>
        </Box>
    </Backdrop>
)
}