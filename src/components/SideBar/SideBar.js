import React from "react";
import Avatar from '../../assets/images/avatar.png';
import "./SideBar.css";

import { SidebarData } from '../SideBar/SidebarData'

const SideBar = () => {

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-3 py-1 px-1  fw-bold " style={{
        }}>
            {
                <ul className="sidebarList ">
                    <li><img src={Avatar} alt="" width="100" />
                        <span style={{ fontWeight: "bold", marginLeft: "20px", marginTop: "-100px" }}>Hello,Shot</span></li>
                    <hr />

                    {SidebarData.map((val, key) => {
                        return (
                            <li className="row"
                                key={key}
                                id={window.location.pathname === val.link ? "active" : ""}
                                onClick={() => { window.location.pathname = val.link }}>
                                {""}
                                <div>{val.icon}</div>{""}
                                <div>{val.title}</div>
                            </li>
                        );

                    })}
                </ul>
            }
        </div >
    );
};

export default SideBar;