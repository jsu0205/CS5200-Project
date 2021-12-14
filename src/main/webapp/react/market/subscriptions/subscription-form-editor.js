import subscriptionService, { findPurchasesBySubscription } from "./subscription-service";
import userService from "../users/user-service"
const {useParams, useHistory, Link} = window.ReactRouterDOM;
const {useState, useEffect} = React;

const SubscriptionFormEditor = () => {
    // const history = useHistory()
    let {id} = useParams();
    const [subscription, setSubscription] = useState({})
    useEffect(() => {
        if (id !== "new") {
            findSubscriptionById(id);
        }
    }, []);

    const updateSubscription = (id, newSubscription) =>
        subscriptionService.updateSubscription(id, newSubscription)
            .then(() => history.back())
    const createSubscription = (subscription) =>
        subscriptionService.createSubscription(subscription)
            .then(() => history.back())
    const deleteSubscription = (id) =>
        subscriptionService.deleteSubscription(id)
            .then(() => history.back())
    const findSubscriptionById = (id) =>
        subscriptionService.findSubscriptionById(id)
            .then(subscription => setSubscription(subscription))

    return (
        <div>
            <h2>Subscription Editor</h2>
            <label>Id</label>
            <input onChange={(e) =>
                       setSubscription(subscription =>
                           ({...subscription, id: e.target.value}))}
                value = {subscription.id}
                   className="form-control"
            />
            <label>Date Joined</label>
            <input value = {subscription.dateJoined}
                   className="form-control"
                   onChange={(e) =>
                       setSubscription(subscription =>
                           ({...subscription, dateJoined: e.target.value}))}
            />

            <button onClick = {() => { history.back() }}
                    className="btn btn-warning">Back</button>

            <button onClick = {() => deleteSubscription(subscription.id)}
                    className="btn btn-danger">Delete Subscription</button>

            <button onClick = {() => updateSubscription(subscription.id, subscription)}
                    className="btn btn-primary">Save Subscription</button>
            
            <br/>
            <button onClick = {() => createSubscription(subscription)}
                    className="btn btn-success">Create Subscription</button>

            <br/>
        </div>
    )
}

export default SubscriptionFormEditor