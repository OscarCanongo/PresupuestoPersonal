import React from 'react';
import logo from '../../images/gpac1.png';

const Sidebar = () => {

    let today = new Date();
    let day;
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let hour = today.getHours() + ':' + today.getMinutes();

    switch (today.getDay()) {
        case 1:
            day = "MON"
            break;
        case 2:
            day = "TUES"
            break;
        case 3:
            day = "WED"
            break;
        case 4:
            day = "THURS"
            break;
        case 5:
            day = "FRI"
            break;
        case 6:
            day = "SAT"
            break;
        case 7:
            day = "SUN"
            break;
        default:
            break;
    }
    
    return ( 
        <aside className = "aside">
            <img class="centrado" src={logo} />

            <div className="candidatos">
                <ul className="listado-candidatos">
                <button
                    type="button"
                    className="btn-aside btn-block" 
                    //onClick={ () => seleccionar(task.id) }
                > <p> Dashboard</p></button>
                <button
                    type="button"
                    className="btn-aside btn-block" 
                    //onClick={ () => seleccionar(task.id) }
                > <p>Job orders</p></button>
                <button
                    type="button"
                    className="btn-aside btn-block" 
                    //onClick={ () => seleccionar(task.id) }
                > <p> Companies</p></button>
                <button
                    type="button"
                    className="btn-aside btn-block" 
                    //onClick={ () => seleccionar(task.id) }
                > <p> S.Projects</p></button>
                <button
                    type="button"
                    className="btn-aside btn-block" 
                    //onClick={ () => seleccionar(task.id) }
                > <p> Map</p></button>
                <button
                    type="button"
                    className="btn-aside btn-block" 
                    //onClick={ () => seleccionar(task.id) }
                > <p> Task Toll</p></button>
                <button
                    type="button"
                    className="btn-aside btn-block" 
                    //onClick={ () => seleccionar(task.id) }
                > <p> Sendouts</p></button>
                </ul>
                <ul className="candidatos">
                    <p className = "date">{day}</p>
                    <p className = "date">{date}</p>
                    <p className = "hour">{hour}</p>
                </ul>
            </div>
        </aside>
     );
}
 
export default Sidebar;