import { AccountCircle } from '@mui/icons-material'
import {Box,TextField,Button, Backdrop, CircularProgress, Typography, InputAdornment, Select, MenuItem, SelectChangeEvent} from '@mui/material'
import {useState} from "react"

export default function FormRegister():JSX.Element{
    const [clicked, setClicked] = useState<boolean>(false)
   
    const trueClick = ()=>{
         setClicked(true)
    }
 
    const falseClick = ()=>{
     setClicked(false)
    }
    return(
    <Box>
    <RegisterBackdrop att1={clicked} att2={falseClick}/>
    <form action=''>
    <br/>
    <TextField 
    sx={{my:2,width:300}} 
    type='text' 
    variant="standard"
    label="Fullname"/>
    <br/>
    <TextField 
    sx={{my:2,width:300}} 
    variant="standard"
    type='password' 
    label="Password"/>
    <br/>
    <TextField 
    sx={{my:2,width:300}} 
    type='text' 
    variant="standard"
    label="Username"
    slotProps={{
        input:{
            startAdornment : (
            <InputAdornment position = "start">
                <AccountCircle fontSize='medium'/>    
            </InputAdornment>
        )}
    }}
    />
    <br/>
    <TextField 
    sx={{my:2,width:300}} 
    type='email' 
    variant="standard"
    label="Email"/>
    <br/>
    <PhoneNumberField/>
    <br/>
    
    <Button color="secondary" sx={{my:2}} size="large" variant="contained" onClick={trueClick} type='submit'>Daftar</Button>
    <br/>
    <Button color='secondary' sx={{my:2}} variant='text' href="/login" onClick={trueClick}>Sudah punya akun</Button>
    </form>
    </Box>

    )
}

interface children{
    att1 : boolean,
    att2 : ()=> void
}

function RegisterBackdrop({att1,att2}:children):JSX.Element{
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



const state = ["+62","+63"]

function PhoneNumberField():JSX.Element{
   const [phoneNumber,setPhoneNumber] = useState<string>("+62")

   const changeSelect = (event:SelectChangeEvent) =>{
    setPhoneNumber(event.target.value as string)
   }
    return(
        <>
    <Box sx={{display:'flex',alignItems:"center",justifyContent:"center",alignContent:"center",justifyItems:"center"}}>
    <Select 
    sx={{width:60,mx:1,mt:2}}
    type="number"
    variant='standard'
    value={phoneNumber}
    onChange={changeSelect}
    >
        {
            state.map((number,index) => {
                return(
                    <MenuItem value={index}>{number}</MenuItem>
                )
            })
        }
    </Select>
    <TextField 
    sx={{my:2,width:240}} 
    type='number'
    variant="standard"
    label="Nomor Telepon"/>
   </Box>
   
        </>
    )
}