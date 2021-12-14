const {Link, useHistory, useParams} = window.ReactRouterDOM;
import customerService from "../customers/customer-service";
import subscriptionService from "./subscription-service";

const { useState, useEffect } = React;
const SubscriptionListCustomer = () => {
    const {id} = useParams();
    const history = useHistory()
    const [subscriptions, setSubscriptions] = useState([])
    useEffect(() => {
        if (id !== "new") {
            findSubscriptionsByCustomer(id)
        }
    }, [])

    const findSubscriptionsByCustomer = (id) =>
        customerService.findSubscriptionsByCustomer(id)
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

export default SubscriptionListCustomer;