import MenuCard from "./MenuCard"
import Menu from "./menuApi"
import NavBar from "./NavBar"
import "./style.css"
import { useState } from "react"

const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu)

    const uniqueCatogery = [...new Set(Menu.map((curEle)=>{return curEle.category;})),'All'];

    const filterItem = (category) => {
        if(category === 'All'){
            setMenuData(Menu);
            return;
        }
        const updatedMenu = Menu.filter( (curEle) => {
            return curEle.category === category;
        } );
        setMenuData(updatedMenu);
    };

    return (
        <>
        <NavBar filterItem={filterItem} uniqueCatogery={uniqueCatogery}/> 
        <section className="main-card--cointainer">
            {menuData.map( (curEle) => {
                return (
                    <MenuCard ItemData={curEle} />
                );
            })}
        </section>
        </>
    )
}

export default Restaurant