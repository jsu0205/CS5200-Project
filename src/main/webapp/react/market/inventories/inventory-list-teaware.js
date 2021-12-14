const {useParams, Link, useHistory} = window.ReactRouterDOM;
import teawareService from "../teawares/teaware-service";


const { useState, useEffect } = React;
const InventoryListTeaware = () => {
    const {id} = useParams();
    const history = useHistory()
    const [inventories, setInventories] = useState([])
    useEffect(() => {
        if (id !== "new") {
            findInventoriesByTeaware(id)
        }
    }, [])

    const findInventoriesByTeaware = (id) =>
        teawareService.findInventoriesByTeaware(id)
            .then(inventories => setInventories(inventories))

    return(
        <div>
            <h2>Inventory List for Teaware {id}</h2>
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

export default InventoryListTeaware;