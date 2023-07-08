import Decimal from "decimal.js";

export const toInt = (value) => value.replace(/\D/g, '')
export const toFloat = (value) => value.replace(/[^\d.]|(?<=\..*)\./g, '')

export function setValuesToFixed(obj) {
    for (let key in obj) {
        if (Decimal.isDecimal(obj[key])) {
            obj[key] = obj[key].toFixed(2);
        }
    }
}

export function generateSequence(shops, currentSequence) {
    let sequence = currentSequence ? (shops.length > 0 && currentSequence) : 0

    if (!currentSequence) shops.forEach(shop => {
        if (shop.id > sequence) sequence = shop.id
    })

    return ++sequence
}