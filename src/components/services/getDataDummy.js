export default function getDataDummy() {
    return fetch('https://hp-api.herokuapp.com/api/characters').then(res => res.json())
}  