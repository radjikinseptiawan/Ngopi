import CardComponent from "../Components/DashboardComponent/Card";
import CardSekletonComponent from "../Components/DashboardComponent/CardSekleton";
import NavigationComponents from "../Components/DashboardComponent/NavigationComponent/NavigationBar";

export default function Dashboard():JSX.Element{
    return(
        <>
        <NavigationComponents></NavigationComponents>
        <CardComponent title={"Lorem Dip sum"} click={"sit dolor amet"}></CardComponent>
        <CardSekletonComponent></CardSekletonComponent>
        </>
    )
}