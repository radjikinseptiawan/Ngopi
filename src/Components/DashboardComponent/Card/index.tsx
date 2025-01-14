import { QuestionMark } from "@mui/icons-material";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { Fragment } from "react/jsx-runtime";

interface propsType{
    title : string,
    click : string
}

export default function CardComponent({title,click} : propsType):JSX.Element{
    return(
        <Box>
            <Card sx={{p:3,mt:10,width:200,textAlign:"center"}}>
            <Fragment>
                <CardContent>
                <QuestionMark color="secondary" fontSize="large"/>
                <Typography color="secondary" variant="h6">{title}</Typography>
                </CardContent>
                <Button sx={{p:2}} variant="contained" color="secondary">{click}</Button>
            </Fragment>
            </Card>
        </Box>
    )
}