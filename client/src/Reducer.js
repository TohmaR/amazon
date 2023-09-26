export const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    user: JSON.parse(localStorage.getItem('user')) || null,
    searchBar: "",
    searchCategory: "Toutes nos Catégories",
};

export const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0);
    


export const reducer = (state, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.item]
            };


        case "REMOVE_FROM_CART":
           
            const index = state.cart.findIndex(
                (CartItem) => CartItem.id === action.id);

            let newCart = [...state.cart];

            if(index >= 0){
                newCart.splice(index, 1);
            }
            
            else {
                console.warn(`Impossible de supprimer le produit (id: ${action.id}) car il n'est pas dans le panier !`)
            }

            return {
                ...state,
                cart: newCart
            };


        case "SET_USER":
            return{
                ...state,
                user: action.user
            }
        case "SEARCH_BAR":
            return{
                ...state,
                searchBar: action.searchBar
            };
            
        case "SEARCH_CATEGORY":
            return{
                ...state,
                searchCategory: action.searchCategory
            };
               
        default:
            return state;
    }
}

export default reducer