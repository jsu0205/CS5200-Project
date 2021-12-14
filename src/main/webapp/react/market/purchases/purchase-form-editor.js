import customerService, { findAllCustomers } from "../customers/customer-service";
import teaService, { findAllTeas } from "../teas/tea-service";
import teawareService, { findAllTeawares } from "../teawares/teaware-service";
import purchaseService from "./purchase-service";
const {useParams, useHistory} = window.ReactRouterDOM;
const {useState, useEffect} = React;

const PurchaseFormEditor = () => {
    const historyRouter = useHistory()
    const {id} = useParams();
    const [purchase, setPurchase] = useState({})
    const [customers, setCustomers] = useState({})
    const [teas, setTeas] = useState({})
    const [teawares, setTeawares] = useState({})
    
    useEffect(() => {
        if (id !== "new") {
            findPurchaseById(id)
        } else {
            findAllCustomers()
            // findAllTeas()
            // findAllTeawares()
        }
    }, []);

    const findAllCustomers = () =>
        customerService.findAllCustomers()
        .then(customers => setCustomers(customers))
    const findAllTeawares = () =>
        teawareService.findAllTeawares()
        .then(teawares => setTeawares(teawares))
    const findAllTeas = () =>
        teaService.findAllTeas()
        .then(teas => setTeas(teas))

    const updatePurchase = (id, newPurchase) =>
        purchaseService.updatePurchase(id, newPurchase)
            .then(() => history.back())
    const createPurchase = (purchase) =>
        purchaseService.createPurchase(purchase)
            .then(() => historyRouter.push("/customers/new"))
    const deletePurchase = (id) =>
        purchaseService.deletePurchase(id)
            .then(() => history.back())
    const findPurchaseById = (id) =>
        purchaseService.findPurchaseById(id)
            .then(purchase => setPurchase(purchase))
    return (
        <div>
            <h2>Purchase Editor</h2>
            <label>Id</label>
            <input disabled
                value = {purchase.id}
                   className="form-control"
            />
            <label>Quantity</label>
            <input value = {purchase.quantity}
                   className="form-control"
                   onChange={(e) =>
                       setPurchase(purchase =>
                           ({...purchase, quantity: e.target.value}))}
            />
            <label>Price per unit</label>
            <input value = {purchase.price}
                   className="form-control"
                   onChange={(e) =>
                       setPurchase(purchase =>
                           ({...purchase, price: e.target.value}))}
            />
            <br/>

            <button onClick = {() => { history.back() }}
                    className="btn btn-warning">Back</button>

            <button onClick = {() => deletePurchase(purchase.id)}
                    className="btn btn-danger">Delete Purchase</button>

            <button onClick = {() => updatePurchase(purchase.id, purchase)}
                className="btn btn-primary">Save Purchase</button>

            <br/>
            <button onClick = {() => createPurchase(purchase)}
                className="btn btn-success">Create Purchase</button>

        </div>
    )
}

export default PurchaseFormEditor