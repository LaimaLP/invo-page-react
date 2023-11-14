import './Aside.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons"; 
import { faUserGroup } from "@fortawesome/free-solid-svg-icons"; 
import { faReceipt } from "@fortawesome/free-solid-svg-icons"; 
import { faMessage } from "@fortawesome/free-regular-svg-icons"; 
import { faGear } from "@fortawesome/free-solid-svg-icons"; 
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons"; 
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"; 









export function Aside() {
    return (
        <aside className="aside">

            <FontAwesomeIcon icon={faLightbulb} />
            <div className="logo"> INVO.</div>
            <div className="menu-component">
                <div className="menu-container">
                    <div><FontAwesomeIcon icon={faHouse} /></div>
                    <div>Home</div>
                    <div>notification</div>
                </div>
                <div className="menu-container">
                    <div><FontAwesomeIcon icon={faFileInvoice} /></div>
                    <div>Invoices</div>
                    <div>notification</div>
                </div>
                <div className="menu-container">
                    <div><FontAwesomeIcon icon={faUserGroup} /></div>
                    <div>Clients</div>
                    <div>notification</div>
                </div>
                <div className="menu-container">
                    <div><FontAwesomeIcon icon={faReceipt} /></div>
                    <div>Messages</div>
                    <div>notification</div>
                </div>
                <div className="menu-container">
                    <div><FontAwesomeIcon icon={faMessage} /></div>
                    <div>Messages</div>
                    <div>notification</div>
                </div>
                <div className="menu-container">
                <div><FontAwesomeIcon icon={faGear} /></div>

                    <div>Messages</div>
                    <div>notification</div>
                </div>
                <div className="menu-container">
                <div><FontAwesomeIcon icon={faCircleQuestion} /></div>

                    <div>Messages</div>
                    <div>notification</div>
                </div>
            </div >

                <div></div>
            <div className="log-out"> <FontAwesomeIcon icon={faRightFromBracket} flip="horizontal" /> Log Out</div>
        </aside >
    );
}



