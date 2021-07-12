function Navbar({ data, switchFunc }) {
    return (
    <nav className="responsive-div" id="navbar">
        <div id="nav-items">
            <ul>
                {data.map(cur => <li>
                  <a href={`#${cur.toLowerCase()}`} className="responsive-text">{cur}</a>
                </li>)}
            </ul>
        </div>
        <div id="switcher" onClick={e => switchFunc(e)}>
            <input type="checkbox" name="theme" id="switch" value="dark_theme"/>
            <label htmlFor="switch" id="switch-label" className="responsive-text" onClick={(e) => e.stopPropagation()}>Light theme</label>
        </div>
    </nav>
    )
};

export default Navbar;