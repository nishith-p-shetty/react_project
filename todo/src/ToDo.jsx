import { useEffect, useState } from 'react'
import './style.css'

const ToDo = () => {

    const [inputData, setInputData] = useState('');
    const [allItems, setAllItems] = useState(getItemsFromLocalStorage());
    const [editItemID, setEditItemID] = useState(-1);
    const [toggleEditButton, setToggleEditButton] = useState(false);

    useEffect(() => {
        localStorage.setItem('allItems', JSON.stringify(allItems));
    }, [allItems])
    
    function getItemsFromLocalStorage(){
        let tmpAllItems = localStorage.getItem('allItems');
        if (tmpAllItems) {
            return (JSON.parse(tmpAllItems));
        }
        else{
            return [];
        }
    }

    function addItemToList() {
        if (!inputData) {
            alert("Please enter an item");
        }
        else if (inputData && toggleEditButton){
            let updatedList = allItems.map((curItem) => {
                if (curItem.id === editItemID){
                    return {...curItem, name:inputData}
                }
                return curItem;
            });
            setAllItems(updatedList);
            setToggleEditButton(false);
            setInputData('');
            setEditItemID(-1);
        }
        else{
            const isDuplicate = allItems.some(item => item.name === inputData);
            if (isDuplicate) {
                alert("This item already exists in the list");
                return;
            }

            let tmpItemData = {
                id: new Date().getTime().toString(),
                name: inputData
            };
            setAllItems([...allItems, tmpItemData]);
            setInputData('');
        }
    }

    function editItemFromList(id){
        let selectedIndex = allItems.findIndex((curItem) => curItem.id === id);
        setInputData(allItems[selectedIndex].name);
        setToggleEditButton(true);
        setEditItemID(id);
    }

    function deleteItemFromList(id){
        let filteredItems = allItems.filter((curItem) => curItem.id !== id);
        setAllItems(filteredItems);
    }

    return (
        <>
            <div className='main-div'>
                <div className="child-div">
                    <figure>
                        <img src="/images/todo.svg" alt="todo logo" />
                        <figcaption>Add Your List Here</figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" className="form-control" placeholder='✍️ Add Item' value={inputData} onChange={(e) => setInputData(e.target.value)} />
                        {toggleEditButton ? <i className="fa fa-edit add-btn" onClick={addItemToList}></i> : <i className="fa fa-plus add-btn" onClick={addItemToList}></i>}
                    </div>

                    <div className="showItems">
                        {allItems.map((item) => {
                            return (<div className="eachItem" key={item.id}>
                                <h3>{item.name}</h3>
                                <div className="todo-btn">
                                    <i className="far fa-edit add-btn" onClick={() => editItemFromList(item.id)}></i>
                                    <i className="far fa-trash-alt add-btn" onClick={() => deleteItemFromList(item.id)}></i>
                                </div>
                            </div>);
                        })}
                    </div>



                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={() => setAllItems([])}><span>Check List</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDo