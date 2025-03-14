import {NavLink} from 'react-router-dom';

export default function NavBar(){
    return(
        <div>
            <nav className="flex justify-between items-center ">
                <NavLink to="/" className="">
                    *Logo Here*
                </NavLink>
                <NavLink to="/create" className="">
                    Create Record   
                </NavLink>
            </nav>
        </div>
    )
}