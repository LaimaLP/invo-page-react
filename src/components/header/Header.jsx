import './Header.css';

export function Header() {
    return (
        <header className="main-header">
            <div className="search">
            <button className="search-btn fa fa-search" type="submit"></button>
                <input id="search-address" class="input" type="text" placeholder="Tap to search"></input>
                
            </div>
            <div className="avatarAndNotification">
                
                <div className="vartotojas"> <span>notification </span> AvatarPhoto</div>
            </div>
        </header>
    );
}