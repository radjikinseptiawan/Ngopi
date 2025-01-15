import { useEffect, useState } from "react";
import CardSekletonComponent from "../CardSekleton";
import CardComponent from "../Card";

export default function DocumentSection():JSX.Element{
    const [cardFetching,setCardFetching] = useState<boolean>(true)
    
    useEffect(()=>{
        setTimeout(()=>{
            setCardFetching(false)
        },3000)
    },[cardFetching])
    return(
        <>
        {
            cardFetching ? 
        <>
              <CardSekletonComponent></CardSekletonComponent>
              <CardSekletonComponent></CardSekletonComponent>
              <CardSekletonComponent></CardSekletonComponent>
        </>
              :
        <>
         <CardComponent url="Block.png" title={"Blockchain"} href={"/blockchain"}></CardComponent>
         <CardComponent url="Website1.png" title={"Website Development"} href={"/website-development"}></CardComponent>
         <CardComponent url="Network.png" title={"Cyber Security"} href={"/cybersecurity"}></CardComponent>
         </>

        }
        </>
    )
}