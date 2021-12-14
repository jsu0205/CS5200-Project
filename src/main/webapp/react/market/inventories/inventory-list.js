const {useParams, Link, useHistory} = window.ReactRouterDOM;
import vendorService from "../vendors/vendor-service";

const { useState, useEffect } = React;
const InventoryList = () => {
    const {id} = useParams();
    const history = useHistory()
    const [inventories, setInventories] = useState([])
    useEffect(() => {
        if (id !== "new") {
            findInventoriesByVendor(id)
        }
    }, [])

    const findInventoriesByVendor = (id) =>
        vendorService.findInventoriesByVendor(id)
            .then(inventories => setInventories(inventories))

    return(
        <div>
            <h2>Inventory List for Customer {id}</h2>
            <button onClick = {() => history.push("/inventories/new")}
                className="btn btn-primary">
                Add Inventory
            </button>
            <ul className="list-group">
            {
               inventories.map(inventory =>
                  <li className = "list-group-item"
                  key={inventory.id}>
                  <Link to={`/inventories/${inventory.id}`}>
                      {inventory.quantity}, ${inventory.price}
                  </Link>
                  </li>)
            }
            </ul>
        </div>
    )
}

export default InventoryList;