import Header from '../modules/Header'

const StoreList = (shoppingList) => {
    const key = Header
    localStorage.setItem(key, JSON.stringify(shoppingList))
}

export default StoreList