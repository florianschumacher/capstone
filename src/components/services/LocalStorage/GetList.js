export default function GetLists(key) {
    const localRecipes = localStorage.getItem(key)
    try {
        console.log(JSON.parse(localRecipes))
        return JSON.parse(localRecipes)
    } catch (err) {
        console.log('that´s bad man')
        return {};
    }
};
