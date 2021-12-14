const VENDORS_URL = "http://localhost:8080/api/vendors"

export const findAllVendors = () =>
    fetch(VENDORS_URL)
        .then(response => response.json())


export const findVendorById = (id) =>
    fetch(`${VENDORS_URL}/${id}`)
        .then(response => response.json())

export const findInventoriesByVendor = (id) =>
    fetch(`${VENDORS_URL}/${id}/inventories`)
        .then(response => response.json())

export const findSubscriptionsByVendor = (id) =>
    fetch(`${VENDORS_URL}/${id}/subscriptions`)
        .then(response => response.json())

export const deleteVendor = (id) =>
    fetch(`${VENDORS_URL}/${id}`, {
        method: "DELETE"
    })

export const createVendor = (user) =>
    fetch(VENDORS_URL, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


export const updateVendor = (id, user) =>
    fetch(`${VENDORS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


export default {
    findAllVendors,
    findVendorById,
    deleteVendor,
    createVendor,
    updateVendor,
    findInventoriesByVendor,
    findSubscriptionsByVendor
}
