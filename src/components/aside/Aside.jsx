import './Aside.css';
import img1 from 'img/Untitle.png';
<img src="" alt="" />

export function Aside() {
    return (
        <aside className="aside">
            <img src={img1} alt=""/>
            <div className="logo"> INVO.</div>
            <div className="menu-component">
                <div className="menu-container">
                    <div>ICON</div>
                    <div>Home</div>
                    <div>notification</div>
                </div>
            </div>

            <div className="log-out">Log Out</div>
        </aside>
    );
}


