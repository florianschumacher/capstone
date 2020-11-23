export default function getDataDummy() {
    return fetch('https://rickandmortyapi.com/api/character/')
        .then(res => res.json())
}  