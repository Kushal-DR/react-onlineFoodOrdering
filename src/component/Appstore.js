import { configureStore} from "@reduxjs/toolkit"
import cartReducer from "./CartStore"

const Appstore = configureStore({
    reducer:{
        cart:cartReducer,
    },
});

export default Appstore;