const CUSTOMERS_URL = "http://localhost:8080/api/customers"

export const findAllCustomers = () =>
    fetch(CUSTOMERS_URL)
        .then(response => response.json())


export const findCustomerById = (id) =>
    fetch(`${CUSTOMERS_URL}/${id}`)
        .then(response => response.json())

export const findPurchasesByCustomer = (id) =>
    fetch(`${CUSTOMERS_URL}/${id}/purchases`)
        .then(response => response.json())

export const findSubscriptionsByCustomer = (id) =>
    fetch(`${CUSTOMERS_URL}/${id}/subscriptions`)
        .then(response => response.json())

export const deleteCustomer = (id) =>
    fetch(`${CUSTOMERS_URL}/${id}`, {
        method: "DELETE"
    })

export const createCustomer = (user) =>
    fetch(CUSTOMERS_URL, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


export const updateCustomer = (id, user) =>
    fetch(`${CUSTOMERS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


export default {
    findAllCustomers,
    findCustomerById,
    deleteCustomer,
    createCustomer,
    updateCustomer,
    findPurchasesByCustomer,
    findSubscriptionsByCustomer
}
