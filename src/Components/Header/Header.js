import "./Header.css"
import LOGO from "./logoHeader.jpg"
import {NavLink} from "react-router-dom";
import FavouriteProducts from "./LikeProducts/FavouriteProducts";
import Cart from "./Cart/Cart";
import Search from "./SearchItems/Search";
import {Grid} from '@mui/material';


const Header = (props) => {

    return (

        <header>
            <div className={"header"} style={{background: "#f8eff0" }}>

                <Grid container spacing={2} alignItems={"center"}>
                    <Grid xs="auto" item className={"logo-wrapper"} style={{width: "200px", borderRight: "1px solid rgba(128,128,128, .1)"}}>
                        <NavLink to={"./"}><img alt={"Logo"} src={LOGO} className={"Logo"}/></NavLink>
                    </Grid>
                    <Grid xs item>
                        <Search/>
                    </Grid>
                    <Grid xs="auto" item className={"header-right"}>
                        <FavouriteProducts/>
                        <Cart/>
                    </Grid>

                </Grid>


            </div>
        </header>
    )
}


export default Header;