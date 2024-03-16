export default function Pizza({pizzaList}){
    return (
        <li className = {Boolean(pizzaList.soldOut) ? 'pizza sold-out' : 'pizza'}>
            <img src = {pizzaList.photoName}/>
            <div>
                <h3>{pizzaList.name}</h3>
                <p>{pizzaList.ingredients}</p>
                <span>{Boolean(pizzaList.soldOut) ? 'SOLD OUT' : `$${pizzaList.price}.00`}</span>
            </div>
        </li>
    )
}