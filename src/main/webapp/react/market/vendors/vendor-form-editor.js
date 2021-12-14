import vendorService from "./vendor-service";
import userService from "../users/user-service"
const {useParams, useHistory} = window.ReactRouterDOM;
const {useState, useEffect} = React;

const VendorFormEditor = () => {
    // const history = useHistory()
    const {id} = useParams();
    const [vendor, setVendor] = useState({})
    useEffect(() => {
        if (id !== "new") {
            findVendorById(id)
        }
    }, []);

    const updateVendor = (id, newVendor) =>
        vendorService.updateVendor(id, newVendor)
            .then(() => history.back())
    const createVendor = (vendor) =>
        vendorService.createVendor(vendor)
            .then(() => history.back())
    const deleteVendor = (id) =>
        vendorService.deleteVendor(id)
            .then(() => history.back())
    const findVendorById = (id) =>
        vendorService.findVendorById(id)
            .then(vendor => setVendor(vendor))

    return (
        <div>
            <h2>Vendor Editor</h2>
            <label>Id</label>
            <input onChange={(e) =>
                       setVendor(vendor =>
                           ({...vendor, id: e.target.value}))}
                value = {vendor.id}
                   className="form-control"
            />
            <label>Business Name</label>
            <input value = {vendor.businessName}
                   className="form-control"
                   onChange={(e) =>
                       setVendor(vendor =>
                           ({...vendor, businessName: e.target.value}))}
            />
            <label>Business Email</label>
            <input value = {vendor.businessEmail}
                   className="form-control"
                   onChange={(e) =>
                       setVendor(vendor =>
                           ({...vendor, businessEmail: e.target.value}))}
            />
            <label>About Us</label>
            <input value = {vendor.aboutUs}
                   className="form-control"
                   onChange={(e) =>
                       setVendor(vendor =>
                           ({...vendor, aboutUs: e.target.value}))}
            />

            <label>Verified</label>
            <select value = {vendor.verified}
                   className="form-control"
                   onChange={(e) =>
                       setVendor(vendor =>
                           ({...vendor, verified: e.target.value}))}>
            <option value = "true">True</option>
            <option value = "false">False</option>/>
            </select>
            <br/>

            <button onClick = {() => { history.back() }}
                    className="btn btn-warning">Back</button>

            <button onClick = {() => deleteVendor(vendor.id)}
                    className="btn btn-danger">Delete Vendor</button>

            <button onClick = {() => updateVendor(vendor.id, vendor)}
                    className="btn btn-primary">Save Vendor</button>

            <br/>
            <button onClick = {() => createVendor(vendor)}
                    className="btn btn-success">Create Vendor</button>
        </div>
    )
}

export default VendorFormEditor