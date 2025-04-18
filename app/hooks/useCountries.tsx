import {useContext} from "react";
import {CountriesContext} from "~/context/Countries";

export default function useCountries() {
    return useContext(CountriesContext);
}