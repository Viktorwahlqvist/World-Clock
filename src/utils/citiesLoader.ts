import type Cities from "../interfaces/Cities";

export default async function citiesLoader() {
    return { 
        cities: await(await fetch("/json/cities.json")).json() as Cities[]
    }
}