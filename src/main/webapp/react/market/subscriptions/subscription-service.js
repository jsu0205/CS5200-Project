const SUBSCRIPTIONS_URL = "http://localhost:8080/api/subscriptions"

export const findAllSubscriptions = () =>
    fetch(SUBSCRIPTIONS_URL)
        .then(response => response.json())


export const findSubscriptionById = (id) =>
    fetch(`${SUBSCRIPTIONS_URL}/${id}`)
        .then(response => response.json())

export const deleteSubscription = (id) =>
    fetch(`${SUBSCRIPTIONS_URL}/${id}`, {
        method: "DELETE"
    })

export const createSubscription = (user) =>
    fetch(SUBSCRIPTIONS_URL, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


export const updateSubscription = (id, user) =>
    fetch(`${SUBSCRIPTIONS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


export default {
    findAllSubscriptions,
    findSubscriptionById,
    deleteSubscription,
    createSubscription,
    updateSubscription
}
