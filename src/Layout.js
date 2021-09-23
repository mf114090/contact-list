import { BrowserRouter , Route, Switch } from "react-router-dom";
import ViewUsers from "./views/ViewUsers";
import EditUser from "./views/EditUser";

export default function Layout() {
    return (
        <>
          <BrowserRouter>
             
            <Switch>
                <Route exact patch="/">
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