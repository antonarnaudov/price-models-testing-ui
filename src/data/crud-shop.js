import {generateSequence} from "./helpers";
import {getSequence, getShops, setAllProductsCount, setSequence, setShops} from "./local-storage";

export function createShop() {
    try {
        const shops = getShops()
        const sequence = generateSequence(shops, getSequence())

        shops.push({
            "id": sequence,
            "name": "",
            "products_count": 0,
            "commission": "0.00",
            "discount": "0.00",
            "min_profit": "0.00",
            "profit_limit": "0.00",
            "min_price": "0.00",
            "max_price": "0.00"
        })

        setShops(shops) // Update Shops
        setSequence(sequence) // Update Sequence

        return shops
    } catch (e) {
        console.error(e)
    }
}

export function updateShopField(id, key, value) {
    try {
        const shops = getShops()
        const index = shops.findIndex(shop => shop.id === id) // Get Shop index by id

        shops[index][key] = value // Update Field
        setShops(shops) // Update Shops

        // If products_count field is Updated, Update All Products Count
        if (key === 'products_count') setAllProductsCount(shops)
    } catch (e) {
        console.error(e)
    }
}

export function deleteShop(id) {
    try {
        const shops = getShops()
        const index = shops.findIndex(shop => shop.id === id) // Get Shop index by id

        shops.splice(index, 1) // Remove shop from Shops Array

        setShops(shops) // Update Shops
        setAllProductsCount(shops) // Update All Products Count

        return shops
    } catch (e) {
        console.error(e)
    }
}

