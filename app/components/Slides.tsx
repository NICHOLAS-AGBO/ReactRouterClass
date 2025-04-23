import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "~/components/ui/carousel";
import Jeep from "~/img/jeep.jpg";
import Office from "~/img/office.jpg";

export default function Slides() {
    return(
        <Carousel className="slide">
            <CarouselContent>
                <CarouselItem>
                    <img src={Jeep} alt={"Jeep"}/>
                </CarouselItem>
                <CarouselItem>
                    <img src={Office} alt={"Jeep"}/>
                </CarouselItem>
                <CarouselItem>
                    <img src={Jeep} alt={"Jeep"}/>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className={"prev"} />
            <CarouselNext />
        </Carousel>

    );
}