import customerService, { findAllCustomers } from "../customers/customer-service";
import teaService, { findAllTeas } from "../teas/tea-service";
import teawareService, { findAllTeawares } from "../teawares/teaware-service";
import inventoryService from "./inventory-service";
const {useParams, useHistory} = window.ReactRouterDOM;
const {useState, useEffect} = React;

const InventoryFormEditor = () => {
    const historyRouter = useHistory()
    const {id} = useParams();
    const [inventory, setInventory] = useState({})
    
    useEffect(() => {
        if (id !== "new") {
            findInventoryById(id)
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

    const updateInventory = (id, newInventory) =>
        inventoryService.updateInventory(id, newInventory)
            .then(() => history.back())
    const createInventory = (inventory) =>
        inventoryService.createInventory(inventory)
            .then(() => historyRouter.push("/customers/new"))
    const deleteInventory = (id) =>
        inventoryService.deleteInventory(id)
            .then(() => history.back())
    const findInventoryById = (id) =>
        inventoryService.findInventoryById(id)
            .then(inventory => setInventory(inventory))
    return (
        <div>
            <h2>Inventory Editor</h2>
            <label>Id</label>
            <input disabled
                value = {inventory.id}
                   className="form-control"
            />
            <label>Vendor Id</label>
            <input value = {inventory.vendor}
                   className="form-control"
                   onChange={(e) =>
                       setInventory(inventory =>
                           ({...inventory, vendor: e.target.value}))}
            />
            <label>Teaware Id</label>
            <input value = {inventory.teaware}
                   className="form-control"
                   onChange={(e) =>
                       setInventory(inventory =>
                           ({...inventory, teaware: e.target.value}))}
            />
            <label>Tea Id</label>
            <input value = {inventory.tea}
                   className="form-control"
                   onChange={(e) =>
                       setInventory(inventory =>
                           ({...inventory, tea: e.target.value}))}
            />
            <label>Quantity</label>
            <input value = {inventory.quantity}
                   className="form-control"
                   onChange={(e) =>
                       setInventory(inventory =>
                           ({...inventory, quantity: e.target.value}))}
            />
            <label>Price per unit</label>
            <input value = {inventory.price}
                   className="form-control"
                   onChange={(e) =>
                       setInventory(inventory =>
                           ({...inventory, price: e.target.value}))}
            />
            <br/>

            <button onClick = {() => { history.back() }}
                    className="btn btn-warning">Back</button>

            <button onClick = {() => deleteInventory(inventory.id)}
                    className="btn btn-danger">Delete Inventory</button>

            <button onClick = {() => updateInventory(inventory.id, inventory)}
                className="btn btn-primary">Save Inventory</button>

            <br/>
            <button onClick = {() => createInventory(inventory)}
                className="btn btn-success">Create Inventory</button>

        </div>
    )
}

export default InventoryFormEditor