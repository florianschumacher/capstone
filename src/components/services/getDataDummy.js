export default function getDataDummy() {
  return fetch('https://api.edamam.com/search', {
    query: '',
    health: 'health=high-protein&health=low-carb&health=low-fat',

    method: 'GET',
    headers: {
      app_key: '971f353d5c972855c1d4c1f8575bb7c2',
      app_id: '73198c18',
    },
  }).then((res) => res.json())
}
