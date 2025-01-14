import Form from '../Components/LoginComponent/Form'
import LayoutLogin from '../Components/LoginComponent/Layouts'
export default function LoginPage(){
    return(
        <LayoutLogin children={<Form/>}></LayoutLogin>
    )
}

