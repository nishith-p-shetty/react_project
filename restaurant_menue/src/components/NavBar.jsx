const NavBar = ({filterItem, uniqueCatogery}) => {
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    {uniqueCatogery.map((curEle, index) => {
                        return (<button key={index} className="btn-group__item" onClick={ () => filterItem(curEle)} >{curEle}</button>);
                    })}
                </div>
        </nav>
        </>
    );
};

export default NavBar;