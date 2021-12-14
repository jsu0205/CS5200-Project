const PURCHASES_URL = "http://localhost:8080/api/purchases"

export const findAllPurchases = () =>
    fetch(PURCHASES_URL)
        .then(response => response.json())

export const findPurchaseById = (id) =>
    fetch(`${PURCHASES_URL}/${id}`)
        .then(response => response.json())

export const deletePurchase = (id) =>
    fetch(`${PURCHASES_URL}/${id}`, {
        method: "DELETE"
    })

export const createPurchase = (tea) =>
    fetch(PURCHASES_URL, {
        method: 'POST',
        body: JSON.stringify(tea),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


export const updatePurchase = (id, tea) =>
    fetch(`${PURCHASES_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(tea),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


export default {
    findAllPurchases,
    findPurchaseById,
    deletePurchase,
    createPurchase,
    updatePurchase
}
