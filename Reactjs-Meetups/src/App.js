
import {Route,Switch} from 'react-router-dom'
import AllMeetUpsPage from './Pages/AllMeetUps';
import NewMeetUpsPage from './Pages/NewMeetUps';
import FavouritesPage from './Pages/Favourites';
import ManinNavigation from './Layout/MainNavigation';

function App(){
    return <div>
        <ManinNavigation/>
       <Switch>
        <Route path='/' exact={true}>
            <AllMeetUpsPage/>
        </Route>
        <Route path='/new-meetups'>
            <NewMeetUpsPage/>
        </Route>
        <Route path='/my-favourites'>
            <FavouritesPage/>
        </Route>
        </Switch>
    </div>
}

export default App;