import "./Search.css"
import {TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = (props) => {
    return (

        <div className={"search"}>
            <TextField id="outlined-basic" label="Я ищу..."
                       style={{width: "100%", maxWidth: "700px", background: "white"}}/>
            <button className={"searchIcon"}><SearchIcon/></button>
        </div>

    )
}

export default Search;
