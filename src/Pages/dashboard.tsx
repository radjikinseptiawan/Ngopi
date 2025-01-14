import { Box, Paper, Typography } from "@mui/material";
import CardComponent from "../Components/DashboardComponent/Card";
import CardSekletonComponent from "../Components/DashboardComponent/CardSekleton";
import NavigationComponents from "../Components/DashboardComponent/NavigationComponent/NavigationBar";
import { useState,useEffect } from "react";
export default function Dashboard():JSX.Element{
    const [cardFetching,setCardFetching] = useState<boolean>(true)

    useEffect(()=>{
        setTimeout(()=>{
            setCardFetching(false)
        },3000)
    },[cardFetching])
    return(
        <>
        <NavigationComponents></NavigationComponents>
        <Box sx={{mx:"auto",mt:10}} width={800} height={600}>
        <Typography color="secondary" variant="h4">Dokumentasi</Typography>
        <Paper sx={{my:2,p:2, display:'grid',gridTemplateRows:"repeat(auto-fit,1fr)",gridTemplateColumns:"repeat(3,1fr)"}}>
        {
        cardFetching ? 
        <>
              <CardSekletonComponent></CardSekletonComponent>
              <CardSekletonComponent></CardSekletonComponent>
        </>
              :
        <>
         <CardComponent url="Block.png" title={"Blockchain"} href={"/blockchain"}></CardComponent>
         <CardComponent url="Network.png" title={"Cyber Security"} href={"/cybersecurity"}></CardComponent>
         </>

        }
    </Paper>
    </Box>
    </>
    )
}