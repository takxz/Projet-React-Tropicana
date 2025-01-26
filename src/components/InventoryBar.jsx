import { useState, useEffect } from "react";

export default function InventoryBar(){
    const [items, setItems] = useState ([])
    const [newItem, setNewItem] = useState("")
    const [urlImages, setUrlImages] = useState("")
    const [available, setAvailable] =useState(false)
    const [date, setDate] = useState()
    const [quantity, setQuantity] = useState()
    const [showAvailable, setShowAvailable] = useState(false)
    const [findItems, setFindItems] = useState("")

    useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('items'))
        if(savedItems){
            setItems(savedItems);
        }
    }, [])

    useEffect(() => {
        if(items.length > 0){
            localStorage.setItem('items', JSON.stringify(items))
        }
    }, [items])


    const addItem = () => {
        if (newItem.trim() !== "" && quantity >= 0){
        setItems([...items, {itemName : newItem, urlName : urlImages, available: available, date: date, quantity: quantity}])
        setNewItem("")
        setUrlImages("")
        setAvailable(false)
        setDate("")
        setQuantity("")
        }
    }

    const deleteItem = (itemRemove) => {
        if(window.confirm("Voulez-vous supprimer cet élément ?")){
        setItems(items.filter((item => item !== itemRemove)))
    }
}

    const availableFilteredItems = showAvailable ? items.filter(item => item.available) : items  
    const filterItems = availableFilteredItems.filter(item => item.itemName.toLowerCase().includes(findItems.toLowerCase()))


    const itemsElement = filterItems.map((item) => (
        <ul key ={item.itemName} className="inventory-item">
            <li><p><span>Nom : </span>{item.itemName}</p></li>
            <li><p><span>Image : </span>{item.urlName && <img src={item.urlName} className="imageUrl"/>}</p></li>
            <li><p><span>Disponibilité :</span>{item.available ? " Oui" : " Non" }</p></li>
            <li><p><span>Date de MAJ : </span>{item.date}</p></li>
            <li><p><span>Quantité : </span>{item.quantity}</p></li>
            <button>Modifier</button>
            <button onClick={() => deleteItem(item)}>Supprimer</button>
        </ul>
    ))

    return (
        <>
        <div className="inventory-bar-return">
            
            <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder="Nom de l'objet" />
            <input type="text" value={urlImages} onChange={(e) => setUrlImages(e.target.value)} placeholder="URL de l'image"/>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <input type="number" value={quantity} min='0' onChange={(e) => setQuantity(e.target.value)} placeholder="Quantité"/>
            <p>Disponible : <input type="checkbox" checked={available} onChange={() => setAvailable(!available)}/> </p> 
            <br/>
            <hr/>
            <br />
            <p>Filtrer par articles disponibles : <input type="checkbox" checked={showAvailable} onChange={() => setShowAvailable(!showAvailable)}/></p>    
            <input type="text" value={findItems} onChange={(e) => setFindItems(e.target.value)} placeholder="Rechercher un article" />      
            <button onClick={addItem}>Ajouter !</button>
            <div className="inventory-bar-element">
                {itemsElement}
            </div>
        </div>
        </>
    )
}