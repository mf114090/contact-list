import { useHistory, useParams } from "react-router";

const EditUser = () => {
    const { id } = useParams();
    const history=useHistory();
   

    return (
        <>
            <div className= "container">
                <div className="row">
                    <div className= "col-md-6 offset-md-3">
                        <form on onSubmit={(e)=>{
                            e.preventDefault();
                        }}>
                            <div className="card my-5">
                                <div className="card-header">
                                    <h2 className="card-title">
                                        Editar usuarios ({id})

                                    </h2>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className= "col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="name">Nombre</label>
                                                <input 
                                                    type="text" 
                                                    id="name" 
                                                    name="name" 
                                                    placeholder="Ingresar Nombre" 
                                                    className="form-control mb-3"
                                                />
                                            </div>

                                        </div>
                                        <div className= "col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="name">Apellido</label>
                                                <input 
                                                    type="text" 
                                                    id="lastname" 
                                                    name="lastname" 
                                                    placeholder="Ingresar Apellido"
                                                    className="form-control mb-3" 
                                                />
                                            </div>
                                        </div>  
                                        <div className= "col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="name">Telefono</label>
                                                <input 
                                                    type="text" 
                                                    id="Telefono"
                                                    name="Telefono" 
                                                    placeholder="Ingresar Telefono" 
                                                    className="form-control mb-3"
                                                    
                                                />
                                            </div>
                                        </div>
                                        <div className= "col-md-8">
                                            <div className="form-group">
                                                <label htmlFor="name">Correo Electronico</label>
                                                <input 
                                                    type="text" 
                                                    id="Correo electronico" 
                                                    name="Correo Electronico" 
                                                    placeholder="Ingresar Correo" 
                                                    className="form-control mb-3"
                                                />
                                            </div>
                                        </div>
                                    </div>                                
                                </div>
                                <div className="card-footer d-flex justify-content-end">
                                    <button className="btn btn-success mx-1">Guardar</button>
                                    <button className="btn btn-warning  mx-1" onClick={history.goBack}>regresar</button>



                                </div>
                            </div>
                        </form>   
                    </div>  
                </div> 
            </div>    
        </>
    )
}
export default EditUser;