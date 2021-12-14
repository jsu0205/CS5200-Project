import UserList from "./users/user-list";
import UserFormEditor from "./users/user-form-editor";
import TeaList from "./teas/tea-list";
import TeaFormEditor from "./teas/tea-form-editor";
import VendorList from "./vendors/vendor-list";
import VendorFormEditor from "./vendors/vendor-form-editor";
import TeawareList from "./teawares/teaware-list";
import TeawareFormEditor from "./teawares/teaware-form-editor"
import CustomerFormEditor from "./customers/customer-form-editor";
import CustomerList from "./customers/customer-list";
import PurchaseList from "./purchases/purchase-list";
import PurchaseListTea from "./purchases/purchase-list-tea";
import PurchaseListTeaware from "./purchases/purchase-list-teaware";
import PurchaseFormEditor from "./purchases/purchase-form-editor";
import InventoryFormEditor from "./inventories/inventory-form-editor";
import InventoryList from "./inventories/inventory-list";
import InventoryListTeaware from "./inventories/inventory-list-teaware";
import InventoryListTea from "./inventories/inventory-list-tea";
import SubscriptionListVendor from "./subscriptions/subscription-list-vendor";
import SubscriptionListCustomer from "./subscriptions/subscription-list-customer";
import SubscriptionFormEditor from "./subscriptions/subscription-form-editor";

const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            { <HashRouter>
                {/* all users */}
                <Route path={["/users", "/"]} exact={true}>
                    <UserList/>
                </Route>
                {/* specific user */}
                <Route path="/users/:id" exact={true}>
                    <UserFormEditor/>
                </Route>
                <br/>

                {/* all vendors */}
                <Route path={["/vendors", "/"]} exact={true}>
                    <VendorList/>
                </Route>
                {/* specific vendor */}
                <Route path="/vendors/:id" exact={true}>
                    <VendorFormEditor/>
                    <br/>
                    <InventoryList/>
                    <br/>
                    <SubscriptionListVendor/>
                </Route>
                <br/>

                {/* specific inventory */}
                <Route path="/inventories/:id" exact={true}>
                    <InventoryFormEditor/>
                </Route>

                {/* all customers */}
                <Route path={["/customers", "/"]} exact={true}>
                    <CustomerList/>
                </Route>
                {/* specific customer */}
                <Route path="/customers/:id" exact={true}>
                    <CustomerFormEditor/>
                    <br/>
                    <PurchaseList/>
                    <br/>
                    <SubscriptionListCustomer/>
                </Route>
                <br/>

                {/* specific purchase */}
                <Route path="/purchases/:id" exact={true}>
                    <PurchaseFormEditor/>
                </Route>

                {/* specific subscription */}
                    <Route path="/subscriptions/:id" exact={true}>
                    <SubscriptionFormEditor/>
                </Route>

                {/* all teas */}
                <Route path={["/teas", "/"]} exact={true}>
                   <TeaList/>
                </Route>
                {/* specific tea */}
                <Route path="/teas/:id" exact={true}>
                   <TeaFormEditor/>
                   <br/>
                   <PurchaseListTea/>
                   <br/>
                   <InventoryListTea/>
                </Route>
                <br/>

                {/* all teawares */}
                <Route path={["/teawares", "/"]} exact={true}>
                    <TeawareList/>
                </Route>
                {/* specific teaware */}
                <Route path="/teawares/:id" exact={true}>
                    <TeawareFormEditor/>
                    <br/>
                    <PurchaseListTeaware/>
                    <br/>
                    <InventoryListTeaware/>
                </Route>
                <br/>

            </HashRouter> }
        </div>
    );
}

export default App;
