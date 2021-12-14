import teawareService from "./teaware-service";
const {useParams, useHistory} = window.ReactRouterDOM;
const {useState, useEffect} = React;

const TeawareFormEditor = () => {
    // const history = useHistory()
    const {id} = useParams();
    const [teaware, setTeaware] = useState({})
    useEffect(() => {
        if (id !== "new") {
            findTeawareById(id)
        }
    }, []);

    const updateTeaware = (id, newTeaware) =>
        teawareService.updateTeaware(id, newTeaware)
            .then(() => history.back())
    const createTeaware = (teaware) =>
        teawareService.createTeaware(teaware)
            .then(() => history.back())
    const deleteTeaware = (id) =>
        teawareService.deleteTeaware(id)
            .then(() => history.back())
    const findTeawareById = (id) =>
        teawareService.findTeawareById(id)
            .then(teaware => setTeaware(teaware))
    return (
        <div>
            <h2>Teaware Editor</h2>
            <label>Id</label>
            <input disabled
                   value = {teaware.id}
                   className="form-control"
            />
            <label>Name</label>
            <input value = {teaware.name}
                   className="form-control"
                   onChange={(e) =>
                       setTeaware(teaware =>
                           ({...teaware, name: e.target.value}))}
            />
            <label>Capacity (in mL)</label>
            <input value = {teaware.capacity}
                   className="form-control"
                   onChange={(e) =>
                       setTeaware(teaware =>
                           ({...teaware, capacity: e.target.value}))}
            />
            <label>Type</label>
            <select value = {teaware.type}
                    className="form-control"
                    onChange={(e) =>
                        setTeaware(teaware =>
                            ({...teaware, type: e.target.value}))}>
                <option value = "TEACUP"> Teacup </option>
                <option value = "GAIWAN"> Gaiwan </option>
                <option value = "TEAPOT"> Teapot </option>
                <option value = "YIXING_CLAY"> Yixing Clay </option>
                <option value = "MISCELLANEOUS"> Miscellaneous </option>
            </select>

            <br/>

            <button onClick = {() => { history.back() }}
                    className="btn btn-warning">Back</button>

            <button onClick = {() => deleteTeaware(teaware.id)}
                    className="btn btn-danger">Delete Teaware</button>

            <button onClick = {() => updateTeaware(teaware.id, teaware)}
                    className="btn btn-primary">Save Teaware</button>

            <br/>
            <button onClick = {() => createTeaware(teaware)}
                    className="btn btn-success">Create Teaware</button>
        </div>
    )
}

export default TeawareFormEditor