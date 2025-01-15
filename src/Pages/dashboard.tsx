import { Box, Button, Paper, Typography } from "@mui/material";
import CardComponent from "../Components/DashboardComponent/Card";
import CardSekletonComponent from "../Components/DashboardComponent/CardSekleton";
import NavigationComponents from "../Components/DashboardComponent/NavigationComponent/NavigationBar";
import { useState,useEffect } from "react";
import DocumentSection from "../Components/DashboardComponent/DocumentSection";
export default function Dashboard():JSX.Element{
    return(
        <>
        <NavigationComponents></NavigationComponents>
        <Box sx={{mx:"auto",mt:10}} width={800} height={600}>
        <Typography color="secondary" variant="h4">Dokumentasi</Typography>
        <Paper sx={{my:2,p:2, display:'grid',gridTemplateRows:"repeat(1,1fr)",gridTemplateColumns:"repeat(3,1fr)"}}>
            <DocumentSection/>
        </Paper>
        <Button color="secondary" size="large" variant="contained">Selengkapnya</Button>
    </Box>
    </>
    )
}