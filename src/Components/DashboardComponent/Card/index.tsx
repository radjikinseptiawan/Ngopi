import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { Fragment } from "react/jsx-runtime";
interface propsType{
    title : string,
    href : string,
    url : string
}

export default function CardComponent({title,href,url} : propsType):JSX.Element{
    return(
        <Box>
            <Card sx={{p:3,width:200,textAlign:"center"}}>
            <Fragment>
                <CardContent>
                    <Box>
                        <img src={url} width={"150px"}/>
                    </Box>
                <Typography color="secondary" variant="h6">{title}</Typography>
                </CardContent>
                <Button sx={{p:2}} variant="contained" color="secondary" href={href}>Pelajari</Button>
            </Fragment>
            </Card>
        </Box>
    )
}