function generateSequence(shops, currentSequence) {
    let sequence = currentSequence ? (shops.length > 0 && currentSequence) : 0

    if (!currentSequence) for (let i = 0; i < shops.length; i++) {
        console.log('here')
        if (shops[i].id > sequence) sequence = shops[i].id
    }

    return ++sequence
}

export function createShop() {
    const localStorageShops = localStorage.getItem('shops')
    const localStorageSequence = localStorage.getItem('shops_sequence')

    try {
        const shops = JSON.parse(localStorageShops || '[]')
        const sequence = generateSequence(shops, JSON.parse(localStorageSequence))

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

        localStorage.setItem('shops', JSON.stringify(shops))
        localStorage.setItem('shops_sequence', JSON.stringify(sequence))

        return shops
    } catch (e) {
        console.error(e)
    }
}

export function updateShopField(id, key, value) {
    const localStorageShops = localStorage.getItem('shops')

    try {
        const shops = JSON.parse(localStorageShops || '[]')
        const index = shops.findIndex(shop => shop.id === id)

        shops[index][key] = value
        localStorage.setItem('shops', JSON.stringify(shops))
    } catch (e) {
        console.error(e)
    }
}

export function deleteShop(id) {
    const localStorageShops = localStorage.getItem('shops')

    try {
        const shops = JSON.parse(localStorageShops || '[]')
        const index = shops.findIndex(shop => shop.id === id)

        shops.splice(index, 1)
        localStorage.setItem('shops', JSON.stringify(shops))

        return shops
    } catch (e) {
        console.error(e)
    }
}

