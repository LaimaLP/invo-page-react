import './Aside.css';


export function Aside() {
    return (
        <aside className="aside">
            <div className="logo">img INVO.</div>
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
