export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: null
    token:'BQD6kJ7x2pOeApY3E-hnAXZD22Ik4jcsNJQzLO-0egQdPYis8rNjjE5H83YeYs6qRx5wIPZ2u11cI8U2EFErfW2sVVTQCKf3JP-70JbC0lhT3PeTBbs4f1YfkJ5OyOCnzozv4kaQtIXJ_oDMHM9XH59zwX6fXw',
};

const reducer = (state, action) => {
    console.log(action);
    
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };

        default:
            return state;
    }
}

export default reducer;