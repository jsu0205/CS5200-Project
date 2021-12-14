const {useParams, Link, useHistory} = window.ReactRouterDOM;
import teawareService from "../teawares/teaware-service";

const { useState, useEffect } = React;
const PurchaseListTeaware = () => {
    const {id} = useParams();
    const history = useHistory()
    const [purchases, setPurchases] = useState([])
    useEffect(() => {
        if (id !== "new") {
            findPurchasesByTeaware(id)
        }
    }, [])

    const findPurchasesByTeaware = (id) =>
        teawareService.findPurchasesByTeaware(id)
            .then(purchases => setPurchases(purchases))

    return(
        <div>
            <h2>Purchase List for Teaware {id}</h2>
            <button onClick = {() => history.push("/purchases/new")}
                className="btn btn-primary">
                Add Purchase
            </button>
            <ul className="list-group">
            {
               purchases.map(purchase =>
                  <li className = "list-group-item"
                  key={purchase.id}>
                  <Link to={`/purchases/${purchase.id}`}>
                      {purchase.quantity}, ${purchase.price}
                  </Link>
                  </li>)
            }
            </ul>
        </div>
    )
}

export default PurchaseListTeaware;