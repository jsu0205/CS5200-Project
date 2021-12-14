const {Link, useHistory} = window.ReactRouterDOM;
import teawareService from "./teaware-service";

const { useState, useEffect } = React;
const TeawareList = () => {
    const history = useHistory()
    const [teawares, setTeawares] = useState([])
    useEffect(() => {
        findAllTeawares()
    }, [])

    const findAllTeawares = () =>
        teawareService.findAllTeawares()
            .then(teawares => setTeawares(teawares))

    return(
        <div>
            <h2>Teaware List</h2>
            <button onClick = {() => history.push("/teawares/new")}
                    className="btn btn-primary">
                Add Teaware
            </button>
            <ul className="list-group">
                {
                    teawares.map(teaware =>
                        <li className = "list-group-item"
                            key={teaware.id}>
                            <Link to={`/teawares/${teaware.id}`}>
                                {teaware.name}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default TeawareList;