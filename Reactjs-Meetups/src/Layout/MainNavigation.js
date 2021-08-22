import {Link} from 'react-router-dom'
import classes from './MainNavigation.module.css';

function ManinNavigation(){
    return <header className={classes.header}>
        <div className={classes.logo}>Summer Tours</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All MeetUps</Link>
                </li>
                <li className={classes.lists}>
                    <Link to='/new-meetups'>Add MeetUps</Link>
                </li>
                <li className={classes.lists}>
                    <Link to='/my-favourites'>Favourites</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default ManinNavigation;