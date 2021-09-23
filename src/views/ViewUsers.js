import { Link } from "react-router-dom";


const ViewUsers = () => {
    return (
        <>
            <div className= "container">
                <div className="row">
                    <div className= "col-md-12">
                        <div className="card my-5">
                            <div className="card-header">
                                <h2 className="card-title">
                                    listado de usuarios

                                </h2>
                            </div>
                            <div className="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Apellido</th>
                                    <th scope="col">Telefono</th>
                                    <th scope="col">E-mail</th>
                                    <th scope="col" style={{width: '5%'}} colSpan="2">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>eeee</td>
                                    <td>
                                        <Link to={`/${1}/edit`} className= "btn btn-info btn-sm">
                                            <i className="fa fa-edit"></i>
                                        </Link>
                                    </td>
                                    <td>
                                        <a href="" className= "btn btn-danger btn-sm">
                                            <i className="fa fa-trash"></i>
                                        </a>
                                    </td>
                                    </tr>
                                    <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>mmmm</td>
                                    <td>
                                        <Link to={`/${2}/edit`} className= "btn btn-info btn-sm">
                                            <i className="fa fa-edit"></i>
                                        </Link>
                                    </td>
                                    <td>
                                        <a href="" className= "btn btn-danger btn-sm">
                                            <i className="fa fa-trash"></i>
                                        </a>
                                    </td>
                                    </tr>
                                    <tr>
                                    <th scope="row">3</th>
                                    <td >Larry</td>
                                    <td>@twitter</td>
                                    <td>22222</td>
                                    <td>ffff</td>
                                    <td>
                                        <Link to={`/${3}/edit`} className= "btn btn-info btn-sm">
                                            <i className="fa fa-edit"></i>
                                        </Link>
                                    </td>
                                    <td>
                                        <a href="" className= "btn btn-danger btn-sm">
                                            <i className="fa fa-trash"></i>
                                        </a>
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                        
                        </div>   
                    </div>  
                </div> 
            </div>    
        </>
    )
}
export default ViewUsers;