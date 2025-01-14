import { Box, Skeleton,Card } from "@mui/material";
import { Fragment } from "react/jsx-runtime";
export default function CardSekletonComponent(){
    return (
        <Box>
        <Card sx={{p:3,width:200,textAlign:"center"}}>
        <Fragment>
          <Skeleton variant="rounded" sx={{p:4,height:150}}></Skeleton>
          <Skeleton variant="rounded" sx={{p:1,mt:1}}></Skeleton>
          <Skeleton variant="rounded" sx={{p:2,mt:1}}></Skeleton>
          </Fragment>
        </Card>
    </Box>
    )
}