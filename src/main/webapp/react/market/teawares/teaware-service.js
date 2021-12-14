const TEAWARES_URL = "http://localhost:8080/api/teawares"

export const findAllTeawares = () =>
    fetch(TEAWARES_URL)
        .then(response => response.json())

export const findTeawareById = (id) =>
    fetch(`${TEAWARES_URL}/${id}`)
        .then(response => response.json())

export const findPurchasesByTeaware = (id) =>
    fetch(`${TEAWARES_URL}/${id}/purchases`)
        .then(response => response.json())

export const findInventoriesByTeaware = (id) =>
    fetch(`${TEAWARES_URL}/${id}/inventories`)
        .then(response => response.json())

export const deleteTeaware = (id) =>
    fetch(`${TEAWARES_URL}/${id}`, {
        method: "DELETE"
    })

export const createTeaware = (tea) =>
    fetch(TEAWARES_URL, {
        method: 'POST',
        body: JSON.stringify(tea),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


export const updateTeaware = (id, tea) =>
    fetch(`${TEAWARES_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(tea),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


export default {
    findAllTeawares,
    findTeawareById,
    deleteTeaware,
    createTeaware,
    updateTeaware,
    findInventoriesByTeaware,
    findPurchasesByTeaware
}
