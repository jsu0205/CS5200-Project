const {Link, useHistory, useParams} = window.ReactRouterDOM;
import vendorService from "../vendors/vendor-service";

const { useState, useEffect } = React;
const SubscriptionListVendor = () => {
    const history = useHistory()
    const {id} = useParams()
    const [subscriptions, setSubscriptions] = useState([])
    useEffect(() => {
        if (id !== "new") {
            findSubscriptionsByVendor(id)
        }
    }, [])

    const findSubscriptionsByVendor = (id) =>
        vendorService.findSubscriptionsByVendor(id)
            .then(subscriptions => setSubscriptions(subscriptions))

    return(
        <div>
            <h2>Subscription List</h2>
            <button onClick = {() => history.push("/subscriptions/new")}
                className="btn btn-primary">
                Add Subscription
            </button>
            <ul className="list-group">
            {
               subscriptions.map(subscription =>
                  <li className = "list-group-item"
                  key={subscription.id}>
                  <Link to={`/subscriptions/${subscription.id}`}>
                      ID: {subscription.id}, {subscription.dateJoined}
                  </Link>
                  </li>)
            }
            </ul>
        </div>
    )
}

export default SubscriptionListVendor;