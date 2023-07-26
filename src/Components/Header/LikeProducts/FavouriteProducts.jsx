import {NavLink} from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import "./FavouriteProducts.css"

const FavouriteProducts = (props) => {
    return (
        <div className={"favouriteProducts"}>
            <NavLink to={"/favourites"}>
                <FavoriteBorderOutlinedIcon/>
                <div>
                    Избранное
                </div>
            </NavLink>
        </div>

    )
}

export default FavouriteProducts;
