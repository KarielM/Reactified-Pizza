import Order from "../order/Order";
const hours = new Date().getHours();



export default function Footer(){
    return(
        hours > 10 && hours < 22 ? 
            <Order/> :
            <footer className="footer">
                <p>We're closed, we welcome you to return between 10:00 AM and 10:00 PM.</p>
            </footer> 
    )
};

