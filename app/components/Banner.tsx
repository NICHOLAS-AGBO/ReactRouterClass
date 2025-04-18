import Jeep from "~/img/jeep.jpg";
import TypeIt from "typeit-react";
import {useState} from "react";


export default function Banner() {
    const [state, setState] = useState(true);

    const stopCursor = ()=>{
        setState(!state);
    }

    return(
        <section className={"banner"} style={{
            backgroundImage: ` linear-gradient(to right, var(--color-gray-800), var(--color-red-600)), url(${Jeep})`,
        }}>
            <div>
                <h2>How to get started with React Router ?</h2>
                <TypeIt as={"q"} options={{lifeLike: true, waitUntilVisible: true, speed: 2, cursor: state, afterComplete: stopCursor}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse eget tincidunt nisi.
                    Sed eu erat ac nunc volutpat fringilla.
                    Donec ac ante accumsan, ultrices nunc maximus, venenatis sem. Aliquam erat volutpat.
                    Praesent dignissim tincidunt odio quis ultricies. Cras ultricies eu lacus semper luctus.
                </TypeIt>
                <span className={"author"} onClick={stopCursor}>Brander</span>
            </div>
        </section>
    );
}