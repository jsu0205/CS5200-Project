const {Link, useHistory} = window.ReactRouterDOM;
import teaService from "./tea-service";

const { useState, useEffect } = React;
const TeaList = () => {
    const history = useHistory()
    const [teas, setTeas] = useState([])
    useEffect(() => {
        findAllTeas()
    }, [])

    const findAllTeas = () =>
        teaService.findAllTeas()
            .then(teas => setTeas(teas))

    return(
        <div>
            <h2>Tea List</h2>
            <button onClick = {() => history.push("/teas/new")}
                className="btn btn-primary">
                Add Tea
            </button>
            <ul className="list-group">
            {
               teas.map(tea =>
                  <li className = "list-group-item"
                  key={tea.id}>
                  <Link to={`/teas/${tea.id}`}>
                      {tea.name}
                  </Link>
                  </li>)
            }
            </ul>
        </div>
    )
}

export default TeaList;