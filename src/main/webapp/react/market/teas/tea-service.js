const TEAS_URL = "http://localhost:8080/api/teas"

export const findAllTeas = () =>
    fetch(TEAS_URL)
        .then(response => response.json())


export const findTeaById = (id) =>
    fetch(`${TEAS_URL}/${id}`)
        .then(response => response.json())

export const findPurchasesByTea = (id) =>
    fetch(`${TEAS_URL}/${id}/purchases`)
        .then(response => response.json())

export const findInventoriesByTea = (id) =>
    fetch(`${TEAS_URL}/${id}/inventories`)
        .then(response => response.json())

export const deleteTea = (id) =>
    fetch(`${TEAS_URL}/${id}`, {
        method: "DELETE"
    })

export const createTea = (tea) =>
    fetch(TEAS_URL, {
        method: 'POST',
        body: JSON.stringify(tea),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


export const updateTea = (id, tea) =>
    fetch(`${TEAS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(tea),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


export default {
    findAllTeas,
    findTeaById,
    deleteTea,
    createTea,
    updateTea,
    findInventoriesByTea,
    findPurchasesByTea
}
