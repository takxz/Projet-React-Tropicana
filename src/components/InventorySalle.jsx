import { useState } from "react";

export default function InventorySalle(){
    const [items, setItems] = useState ([])
    const [newItem, setNewItem] = useState("")

    const addItem = () => {
        setItems([...items, newItem])
        setNewItem("")
    }

    const deleteItem = (itemRemove) => {
        setItems(items.filter((item => item !== itemRemove)))
    }

    const itemsElement = items.map((item) => (
        <li key ={item}>
            {item}
            <button>Modifier</button>
            <button onClick={() => deleteItem(item)}>Supprimer</button>
        </li>
        



    ))

    return (
        <>
        <div className="inventory-bar-return">
            <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
            <button onClick={addItem}>Ajouter !</button>
            {itemsElement}
        </div>
        </>
    )


}