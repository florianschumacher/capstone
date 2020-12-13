const GetList = (shoppingList) => {
    const jList = localStorage.getItem(shoppingList)
    return JSON.parse(jList)
}

export default GetList