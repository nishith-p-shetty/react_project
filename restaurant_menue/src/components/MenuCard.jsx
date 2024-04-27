import "./style.css"

const MenuCard = ({ItemData}) => {
    const {id, name, category, image, description} = ItemData
    return (
        <>
            <div className="card-container" key={id}>
                <div className="card">
                    <div className="card-body">
                        <span className="card-number card-circle subtle">{id}</span>
                        <span className="card-author subtle">{category}</span>
                        <h2 className="card-title">{name}</h2>
                        <span className="card-discription subtle">{description}</span>
                        <div className="card-read">Read</div>
                    </div>
                    <img src={image} alt="card media" className="card-media" />
                    <span className="card-tag subtle">Order Now</span>
                </div>
            </div>
        </>
    )
}

export default MenuCard