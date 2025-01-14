import { Box } from '@mui/material'
import LayoutRegister from '../Components/RegisterPage/Layouts'
import FormRegister from '../Components/RegisterPage/Form'
export default function RegisterPage(){
    return(
        <Box>
            <LayoutRegister children={<FormRegister/>} ></LayoutRegister>
        </Box>
    )
}