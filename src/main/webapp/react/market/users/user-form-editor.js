import userService from "./user-service";
const {useParams, useHistory} = window.ReactRouterDOM;
const {useState, useEffect} = React;

const UserFormEditor = () => {
    // const history = useHistory()
    const {id} = useParams();
    const [user, setUser] = useState({})
    useEffect(() => {
        if (id !== "new") {
            findUserById(id)
        }
    }, []);

    const updateUser = (id, newUser) =>
        userService.updateUser(id, newUser)
            .then(() => history.back())
    const createUser = (user) =>
        userService.createUser(user)
            .then(() => history.back())
    const deleteUser = (id) =>
        userService.deleteUser(id)
            .then(() => history.back())
    const findUserById = (id) =>
        userService.findUserById(id)
            .then(user => setUser(user))
    return (
        <div>
            <h2>User Editor</h2>
            <label>Id</label>
            <input value = {user.id}
                   className="form-control"
            />
            <label>First Name</label>
            <input value = {user.firstName}
                   className="form-control"
                   onChange={(e) =>
                       setUser(user =>
                           ({...user, firstName: e.target.value}))}
            />
            <label>Last Name</label>
            <input value = {user.lastName}
                   className="form-control"
                   onChange={(e) =>
                       setUser(user =>
                           ({...user, lastName: e.target.value}))}
            />
            <label>Username</label>
            <input value = {user.username}
                   className="form-control"
                   onChange={(e) =>
                       setUser(user =>
                           ({...user, username: e.target.value}))}
            />
            <label>Password</label>
            <input value = {user.password}
                   className="form-control"
                   onChange={(e) =>
                       setUser(user =>
                           ({...user, password: e.target.value}))}
            />
            <br/>

            <button onClick = {() => { history.back() }}
                    className="btn btn-warning">Cancel</button>

            <button onClick = {() => deleteUser(user.id)}
                    className="btn btn-danger">Delete</button>

            <button onClick = {() => updateUser(user.id, user)}
                className="btn btn-primary">Save</button>

            <button onClick = {() => createUser(user)}
                className="btn btn-success">Create</button>
        </div>
    )
}

export default UserFormEditor