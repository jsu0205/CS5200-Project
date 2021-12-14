const {Link, useHistory} = window.ReactRouterDOM;
import vendorService from "./vendor-service";

const { useState, useEffect } = React;
const VendorList = () => {
    // const history = useHistory()
    const [vendors, setVendors] = useState([])
    useEffect(() => {
        findAllVendors()
    }, [])

    const findAllVendors = () =>
        vendorService.findAllVendors()
            .then(vendors => setVendors(vendors))

    return(
        <div>
            <h2>Vendor List</h2>
            {/*<button onClick = {() => history.push("/vendors/new")}*/}
            {/*    className="btn btn-primary">*/}
            {/*    Add Vendor*/}
            {/*</button>*/}
            <ul className="list-group">
            {
               vendors.map(vendor =>
                  <li className = "list-group-item"
                  key={vendor.id}>
                  <Link to={`/vendors/${vendor.id}`}>
                      ID: {vendor.id}, {vendor.businessName}
                  </Link>
                  </li>)
            }
            </ul>
        </div>
    )
}

export default VendorList;