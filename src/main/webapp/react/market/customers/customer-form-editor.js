import customerService, { findPurchasesByCustomer } from "./customer-service";
import userService from "../users/user-service"
const {useParams, useHistory, Link} = window.ReactRouterDOM;
const {useState, useEffect} = React;

const CustomerFormEditor = () => {
    // const history = useHistory()
    let {id} = useParams();
    const [customer, setCustomer] = useState({})
    useEffect(() => {
        if (id !== "new") {
            findCustomerById(id);
        }
    }, []);

    const updateCustomer = (id, newCustomer) =>
        customerService.updateCustomer(id, newCustomer)
            .then(() => history.back())
    const createCustomer = (customer) =>
        customerService.createCustomer(customer)
            .then(() => history.back())
    const deleteCustomer = (id) =>
        customerService.deleteCustomer(id)
            .then(() => history.back())
    const findCustomerById = (id) =>
        customerService.findCustomerById(id)
            .then(customer => setCustomer(customer))
    const findPurchasesByCustomer = (id) =>
        customerService.findPurchasesByCustomer(id)
            .then(purchases => setPurchases(purchases))

    return (
        <div>
            <h2>Customer Editor</h2>
            <label>Id</label>
            <input onChange={(e) =>
                       setCustomer(customer =>
                           ({...customer, id: e.target.value}))}
                value = {customer.id}
                   className="form-control"
            />
            <label>Shipping Address</label>
            <input value = {customer.shippingAddress}
                   className="form-control"
                   onChange={(e) =>
                       setCustomer(customer =>
                           ({...customer, shippingAddress: e.target.value}))}
            />
            <label>Money Spent</label>
            <input value = {customer.moneySpent}
                   className="form-control"
                   onChange={(e) =>
                       setCustomer(customer =>
                           ({...customer, moneySpent: e.target.value}))}
            />

            <button onClick = {() => { history.back() }}
                    className="btn btn-warning">Back</button>

            <button onClick = {() => deleteCustomer(customer.id)}
                    className="btn btn-danger">Delete Customer</button>

            <button onClick = {() => updateCustomer(customer.id, customer)}
                    className="btn btn-primary">Save Customer</button>
            
            <br/>
            <button onClick = {() => createCustomer(customer)}
                    className="btn btn-success">Create Customer</button>

            <br/>
        </div>
    )
}

export default CustomerFormEditor