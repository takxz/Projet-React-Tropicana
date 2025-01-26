import InventoryBar from "../components/InventoryBar";

export default function Inventory(){


    return(
    <>
    <div className="inventoryPage">
    <h1>L'inventaire de la salle</h1>
        <p>Retrouvez l'inventaire de la salle de sport et du bar !</p>
        <br />
        <p>N'hésitez pas à nous prévenir de tout manquement.</p>
    <div className="inventory">

        <div className="inventoryBar">
            <h1>Inventaire</h1>
            <InventoryBar />
        </div>

    </div>
    </div>

    </>
    )
}