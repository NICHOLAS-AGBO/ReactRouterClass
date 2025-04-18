import Header from "~/components/Header";
import notfound from "~/img/notfound.gif";
import TypeIt from "typeit-react";


export default function NotFound() {
    return (<>
    <Header/>
        <main className={"not-found"}>
            <img src={notfound} alt={"animated_404_image"}/>
            <p><TypeIt as={"b"} options={{waitUntilVisible: true, speed: 10, cursor: false}}>Opps!!, This page is broken</TypeIt></p>
        </main>
    </>);
}