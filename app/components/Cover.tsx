import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons";

export default function Cover() {
    return(
        <section className={"cover"}>
            <div>
                <h1>React</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse eget tincidunt nisi.
                    Sed eu erat ac nunc volutpat fringilla.
                </p>
                <div>
                    <a href="#" className={"docs"}><span>Documentation</span> <span><FontAwesomeIcon icon={faArrowRightLong}/></span></a>
                    <a href="#" className={"ex"}><span>Explore</span></a>
                </div>
            </div>
        </section>
    );
}