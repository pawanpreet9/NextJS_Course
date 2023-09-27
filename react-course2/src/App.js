import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavouriteMeetupPage from './pages/Favourite';
import MainNavigation from './layout/MainNavigation';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  return (
    <div className="App">
       <MainNavigation/>
      <Switch>

       <Route path = '/' exact>
        <AllMeetupsPage />
       </Route>
       <Route path = '/new-meetup'>
        <NewMeetupPage />
       </Route>
       <Route path = '/favourites'>
        <FavouriteMeetupPage/>
       </Route>
       </Switch>
    </div>
  );
}

export default App;
