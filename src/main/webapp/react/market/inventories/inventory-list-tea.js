const {useParams, Link, useHistory} = window.ReactRouterDOM;
import teaService from "../teas/tea-service";

const { useState, useEffect } = React;
const InventoryListTea = () => {
    const {id} = useParams();
    const history = useHistory()
    const [inventories, setInventories] = useState([])
    useEffect(() => {
        if (id !== "new") {
            findInventoriesByTea(id)
        }
    }, [])

    const findInventoriesByTea = (id) =>
        teaService.findInventoriesByTea(id)
            .then(inventories => setInventories(inventories))

    return(
        <div>
            <h2>Inventory List for Tea {id}</h2>
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

export default InventoryListTea;