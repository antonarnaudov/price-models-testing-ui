import Decimal from 'decimal.js'

Decimal.set({rounding: 4})

export function generateProducts() {
    const localStorageShops = localStorage.getItem('shops')
    try {
        const shops = JSON.parse(localStorageShops || '[]')
        shops.forEach(shop => {
            shop['products'] = []

            for (let i = 1; i < shop['products_count']; i++) {
                const minPrice = Number(shop['min_price'])
                const maxPrice = Number(shop['max_price'])
                const price = new Decimal(Math.random() * (maxPrice - minPrice) + minPrice)

                const pureCommission = price.times(new Decimal(shop['commission']).dividedBy(100))
                const discount = price.times(new Decimal(shop['discount']).dividedBy(100))

                const commission = pureCommission.plus(new Decimal(shop['min_profit']))
                const shopProfit = price.minus(commission.plus(discount))

                shop['products'].push(
                    {
                        "id": `Shop ${shop['id']} Product ${i}`,
                        "name": `Product ${i}`,
                        "price": price.toFixed(2),
                        "commission": commission.toFixed(2),
                        "discount": discount.toFixed(2),
                        "shop_profit": shopProfit.toFixed(2),
                        "min_profit": shop['min_profit'],
                        "pure_commission": pureCommission.toFixed(2)
                    }
                )
            }
        })

        localStorage.setItem('shops', JSON.stringify(shops))

        return shops
    } catch (e) {
        console.error(e)
    }
}