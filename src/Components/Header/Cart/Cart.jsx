import {NavLink} from "react-router-dom";
import "./Cart.css"
import ShoppingBasketTwoToneIcon from '@mui/icons-material/ShoppingBasketTwoTone';

const Cart = (props) => {
    return (
        <div className={"cart"}>
            <NavLink to={"./cart"}>
                <ShoppingBasketTwoToneIcon/>
                <div>
                    Корзина
                </div>
            </NavLink>


        </div>

    )
}

export default Cart;
