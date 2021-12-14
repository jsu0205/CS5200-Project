const PURCHASES_URL = "http://localhost:8080/api/inventories"

export const findAllInventories = () =>
    fetch(PURCHASES_URL)
        .then(response => response.json())


export const findInventoryById = (id) =>
    fetch(`${PURCHASES_URL}/${id}`)
        .then(response => response.json())

export const findInventoriesByVendorId = (id) =>
    fetch(`${PURCHASES_URL}/${id}`)
        .then(response => response.json())

export const deleteInventory = (id) =>
    fetch(`${PURCHASES_URL}/${id}`, {
        method: "DELETE"
    })

export const createInventory = (tea) =>
    fetch(PURCHASES_URL, {
        method: 'POST',
        body: JSON.stringify(tea),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


export const updateInventory = (id, tea) =>
    fetch(`${PURCHASES_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(tea),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


export default {
    findAllInventories,
    findInventoryById,
    deleteInventory,
    createInventory,
    updateInventory
}
