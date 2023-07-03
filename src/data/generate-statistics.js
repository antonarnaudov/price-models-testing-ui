export function generateStatistics() {
    // TODO: Fix function, add actual functionality
    try {
        const globalStatistics = {
            "total_products_count": 0,
            "total_commission": 0.93,
            "total_discount": 0.43,
            "total_shop_profit": 4.40,
            "avg_commission": 0,
            "avg_discount": 0,
            "avg_shop_profit": 0,
            "total_min_profit": 0.30,
            "total_pure_commission": 0.63
        }

        localStorage.setItem('global_statistics', JSON.stringify(globalStatistics))

    } catch (e) {
        console.error(e)
    }
}