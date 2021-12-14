import teaService from "./tea-service";
const {useParams, useHistory} = window.ReactRouterDOM;
const {useState, useEffect} = React;

const TeaFormEditor = () => {
    // const history = useHistory()
    const {id} = useParams();
    const [tea, setTea] = useState({})
    useEffect(() => {
        if (id !== "new") {
            findTeaById(id)
        }
    }, []);

    const updateTea = (id, newTea) =>
        teaService.updateTea(id, newTea)
            .then(() => history.back())
    const createTea = (tea) =>
        teaService.createTea(tea)
            .then(() => history.back())
    const deleteTea = (id) =>
        teaService.deleteTea(id)
            .then(() => history.back())
    const findTeaById = (id) =>
        teaService.findTeaById(id)
            .then(tea => setTea(tea))
    return (
        <div>
            <h2>Tea Editor</h2>
            <label>Id</label>
            <input  disabled
                    value = {tea.id}
                    className="form-control"
            />
            <label>Name</label>
            <input value = {tea.name}
                   className="form-control"
                   onChange={(e) =>
                       setTea(tea =>
                           ({...tea, name: e.target.value}))}
            />
            <label>Producer</label>
            <input value = {tea.producer}
                   className="form-control"
                   onChange={(e) =>
                       setTea(tea =>
                           ({...tea, producer: e.target.value}))}
            />
            <label>Type</label>
            <select value = {tea.type}
                   className="form-control"
                   onChange={(e) =>
                       setTea(tea =>
                           ({...tea, type: e.target.value}))}>
                               <option value = "WHITE"> White </option>
                               <option value = "GREEN"> Green </option>
                               <option value = "OOLONG"> Oolong </option>
                               <option value = "BLACK"> Black </option>
                               <option value = "RAW_PUER"> Raw Puer </option>
                               <option value = "RIPE_PUER"> Ripe Puer </option>
            </select>

                               

            <br/>

            <button onClick = {() => { history.back() }}
                    className="btn btn-warning">Back</button>

            <button onClick = {() => deleteTea(tea.id)}
                    className="btn btn-danger">Delete Tea</button>

            <button onClick = {() => updateTea(tea.id, tea)}
                className="btn btn-primary">Save Tea</button>
            
            <br/>
            <button onClick = {() => createTea(tea)}
                className="btn btn-success">Create Tea</button>
        </div>
    )
}

export default TeaFormEditor