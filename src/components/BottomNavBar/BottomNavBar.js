import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './BottomNavBar.css';
import { IconContext } from 'react-icons';
import Avatar from '../../assets/images/avatar.png';
import search from '../../assets/images/search.png';

function BottomNavBar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='bottom-navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <div className="d-flex justify-content-start p-2 m-2 "
                        style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}>
                        <Link style={{ paddingRight: "100px", textDecoration: "none" }} to='#' >ALL</Link>
                        <Link style={{ paddingRight: "100px", textDecoration: "none" }} to='#' >LEARN</Link>
                        <Link style={{ paddingRight: "100px", textDecoration: "none" }} to='#' >INCUBATOR</Link>
                        <Link style={{ paddingRight: "100px", textDecoration: "none" }} to='#' >MENTORSHIP</Link>
                        <Link style={{ paddingRight: "100px", textDecoration: "none" }} to='#' >EVENTS</Link>
                        <Link style={{ paddingRight: "100px", textDecoration: "none" }} to='#' >CAREERS</Link>
                        <Link style={{ paddingRight: "150px", textDecoration: "none" }} to='#' >CONSULTANCY</Link>
                        <img src={search} alt="" />
                    </div>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>

                        <li><img src={Avatar} alt="" width="100" />
                            <span style={{ fontWeight: "bold", marginLeft: "20px", marginTop: "-100px", color: "white" }}>Hello,Shot</span></li>
                        <hr style={{ color: "white" }} />
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default BottomNavBar;