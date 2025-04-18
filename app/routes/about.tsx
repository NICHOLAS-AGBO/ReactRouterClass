import Header from "~/components/Header";
import office from "~/img/office.jpg";


export default function About(){
    return(
        <>
            <Header/>
        <main className={"about"}>
            <h1>About us</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget tincidunt nisi.
                Sed eu erat ac nunc volutpat fringilla. Donec ac ante accumsan, ultrices nunc maximus, venenatis sem.
                Aliquam erat volutpat. Praesent dignissim tincidunt odio quis ultricies. Cras ultricies eu lacus semper luctus.
                Donec at posuere lectus. Pellentesque sollicitudin luctus neque, eget convallis massa lobortis non.
                Aliquam feugiat, ipsum vitae fringilla semper, felis odio bibendum orci, hendrerit porta mi metus ac urna.
                Sed vehicula orci ac metus aliquet varius. Ut mauris justo, dapibus congue consectetur ut, faucibus at orci.
                Donec vehicula ligula sem, eu elementum elit aliquet vitae. Integer feugiat nisi erat, ac imperdiet magna pharetra vel.
                Donec metus urna, sodales efficitur mauris at, posuere accumsan nisi.
                Integer faucibus, est eget tristique fermentum, nisl lorem semper nibh, ac sagittis lorem ipsum non dolor.

            </p>
            <img src={office} alt={"staff_at_work"}/>
        </main>
        </>
    )
}