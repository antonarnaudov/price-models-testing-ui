import Decimal from 'decimal.js'
import {setValuesToFixed} from "./helpers";
import {getShops, setAllProductsCount, setGlobalStatistics, setShops} from "./local-storage";

Decimal.set({rounding: 4})


function generateGlobalStatistics(shops) {
    try {
        let globalStatistics = {
            "total_shops_count": 0,
            "total_products_count": 0,
            "total_products_commissioned": 0,
            "total_commission": new Decimal(0),
            "total_discount": new Decimal(0),
            "total_shop_profit": new Decimal(0),
            "avg_commission": new Decimal(0),
            "avg_discount": new Decimal(0),
            "avg_shop_profit": new Decimal(0),
            "total_min_profit": new Decimal(0),
            "total_pure_commission": new Decimal(0)
        }

        shops.forEach(shop => {
            // Calculate Global Statistics
            globalStatistics.total_products_commissioned += shop.statistics.total_products_commissioned
            globalStatistics.total_commission = globalStatistics.total_commission.plus(new Decimal(shop.statistics.total_commission))
            globalStatistics.total_discount = globalStatistics.total_discount.plus(new Decimal(shop.statistics.total_discount))
            globalStatistics.total_shop_profit = globalStatistics.total_shop_profit.plus(new Decimal(shop.statistics.total_shop_profit))
            globalStatistics.avg_commission = globalStatistics.avg_commission.plus(new Decimal(shop.statistics.avg_commission))
            globalStatistics.avg_discount = globalStatistics.avg_discount.plus(new Decimal(shop.statistics.avg_discount))
            globalStatistics.avg_shop_profit = globalStatistics.avg_shop_profit.plus(new Decimal(shop.statistics.avg_shop_profit))
            globalStatistics.total_min_profit = globalStatistics.total_min_profit.plus(new Decimal(shop.statistics.total_min_profit))
            globalStatistics.total_pure_commission = globalStatistics.total_pure_commission.plus(new Decimal(shop.statistics.total_pure_commission))
        })

        globalStatistics.total_shops_count = shops.length
        globalStatistics.total_products_count = setAllProductsCount(shops)

        setValuesToFixed(globalStatistics)
        setGlobalStatistics(globalStatistics)
    } catch (e) {
        console.error(e)
    }
}

export function generateProductsAndStatistics() {
    try {
        const shops = getShops()
        shops.forEach(shop => { // Create Products and Statistics per Shop
            const profitLimit = new Decimal(shop.profit_limit)
            shop['products'] = []
            shop.statistics = {
                total_products_commissioned: 0,
                total_commission: new Decimal(0),
                total_discount: new Decimal(0),
                total_shop_profit: new Decimal(0),
                avg_commission: new Decimal(0),
                avg_discount: new Decimal(0),
                avg_shop_profit: new Decimal(0),
                total_min_profit: new Decimal(0),
                total_pure_commission: new Decimal(0)
            }

            // Generate Products
            for (let i = 1; i <= shop['products_count']; i++) {
                // Generate Product Price
                const minPrice = Number(shop['min_price'])
                const maxPrice = Number(shop['max_price'])
                const price = new Decimal(Math.random() * (maxPrice - minPrice) + minPrice)

                // Setup Commission Parts
                let minProfit = new Decimal(shop['min_profit'])
                let pureCommission = price.times(new Decimal(shop['commission']).dividedBy(100))

                // Profit Limit Calculations
                // Recalculate minProfit and pureCommission so total_commission never exceeds profitLimit if such exists
                if (Number(profitLimit) && profitLimit.lt(shop.statistics.total_commission.plus(pureCommission.plus(minProfit)))) {
                    const totalAndPureCommission = shop.statistics.total_commission.plus(pureCommission)
                    if (profitLimit.lt(totalAndPureCommission)) {
                        pureCommission = profitLimit.minus(shop.statistics.total_commission)
                        minProfit = new Decimal(0)
                    } else {
                        minProfit = profitLimit.minus(totalAndPureCommission)
                    }
                }

                // Calculate Commission, Discount and Shop Profit
                const discount = price.times(new Decimal(shop['discount']).dividedBy(100))
                const commission = pureCommission.plus(minProfit)
                const shopProfit = price.minus(commission.plus(discount))


                shop['products'].push( // Create Product with calculated fields
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

                // Calculate Shop Total Statistics
                if (Number(commission)) ++shop.statistics.total_products_commissioned
                shop.statistics.total_commission = shop.statistics.total_commission.plus(commission)
                shop.statistics.total_discount = shop.statistics.total_discount.plus(discount)
                shop.statistics.total_shop_profit = shop.statistics.total_shop_profit.plus(shopProfit)
                shop.statistics.total_min_profit = shop.statistics.total_min_profit.plus(minProfit)
                shop.statistics.total_pure_commission = shop.statistics.total_pure_commission.plus(pureCommission)
            }
            // Calculate Shop Average Statistics
            const productsCount = new Decimal(shop.products_count)
            const productsCommissioned = new Decimal(shop.statistics.total_products_commissioned)
            shop.statistics.avg_commission = shop.statistics.total_commission.dividedBy(productsCommissioned)
            shop.statistics.avg_discount = shop.statistics.total_discount.dividedBy(productsCount)
            shop.statistics.avg_shop_profit = shop.statistics.total_shop_profit.dividedBy(productsCount)

            setValuesToFixed(shop.statistics) // Parse Statistics from Decimal to floats
        })

        setShops(shops)
        generateGlobalStatistics(shops)
    } catch (e) {
        console.error(e)
    }
}