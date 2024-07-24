export const dateReducer = (state, { type, payload }) => {
    switch (type) {
        case "OPEN_SEARCH_MODAL":
            return {
                ...state,
                isSearchModalOpen: !state.isSearchModalOpen,
            };
        case "CHECK_IN":
            return {
                ...state,
                checkInDate: payload,
            };
        case "CHECK_OUT":  // Changed from "CHECK_IN" to "CHECK_OUT"
            return {
                ...state,
                checkOutDate: payload,
            };
        case "DESTINATION":
            return {
                ...state,
                destination: payload,
            };
        case "GUESTS":
            return {
                ...state,
                guests: payload,
            };
        case "DATE_FOCUS":
            return{
                ...state,
                isSearchResultOpen:false,
            }
        case "SHOW_SEARCH_RESULT":
            return{
                ...state,
                isSearchResultOpen:true,
            }
        default:
            return state;
    }
};
