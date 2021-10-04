import { BrowserRouter , Route, Switch } from "react-router-dom";
import ViewUsers from "./views/ViewUsers";
import EditUser from "./views/EditUser";
import injectContext from "./store/appContext";

function Layout() {
    return (
        <>
          <BrowserRouter>
             
            <Switch>
                <Route exact path="/">
                    <ViewUsers />
                </Route>
               
                <Route exact patch="/:id/edit">
                
                    <EditUser />
                </Route>
            
            </Switch>
          
          </BrowserRouter>
        </>
    )    
}
export default injectContext(Layout);