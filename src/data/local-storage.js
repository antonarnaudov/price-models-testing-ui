export function getShops() {
    try {
        return JSON.parse(localStorage.getItem('shops') || '[]')
    } catch (e) {
        console.error(e)
    }
}

export function setShops(shops) {
    try {
        localStorage.setItem('shops', JSON.stringify(shops))
    } catch (e) {
        console.error(e)
    }
}

export function getSequence() {
    try {
        return JSON.parse(localStorage.getItem('shops_sequence') || '0')
    } catch (e) {
        console.error(e)
    }
}

export function setSequence(sequence) {
    try {
        localStorage.setItem('shops_sequence', JSON.stringify(sequence))
    } catch (e) {
        console.error(e)
    }
}

export function getAllProductsCount() {
    try {
        return JSON.parse(localStorage.getItem('all_products_count') || '0')
    } catch (e) {
        console.error(e)
    }
}

export function setAllProductsCount(shops) {
    try {
        let products = 0
        shops.forEach(shop => products += Number(shop.products_count))
        localStorage.setItem('all_products_count', JSON.stringify(products))
    } catch (e) {
        console.error(e)
    }
}

export function getGlobalStatistics() {
    try {
        return JSON.parse(localStorage.getItem('global_statistics') || '{}')
    } catch (e) {
        console.error(e)
    }
}

export function setGlobalStatistics(globalStatistics) {
    try {
        localStorage.setItem('global_statistics', JSON.stringify(globalStatistics))
    } catch (e) {
        console.error(e)
    }
}