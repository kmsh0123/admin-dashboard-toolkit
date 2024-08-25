import Main from "../layout/Main";
import ChangePassword from "../pages/ChangePassword";
import CreateNote from "../pages/CreateNote";
import EditNote from "../pages/EditNote";
import Index from "../pages/Index";
import Information from "../pages/Information";
import Notes from "../pages/Notes";

export const dashboardRoute = [
    {
        path : "/",
        element :  <Main/>,
        children : [
            {
                index : true,
                element : <Index/>
            }, 
            {
                path : "/notes",
                element : <Notes/>
            },
            {
                path : "/create-note",
                element : <CreateNote/>
            },
            {
                path : "/edit-note",
                element : <EditNote/>
            },
            {
                path : "/profile/changePassword",
                element : <ChangePassword/>
            },
            {
                path : "/profile/information",
                element : <Information/>
            },
        ] 
    }    
]