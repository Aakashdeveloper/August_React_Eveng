export default function(state={}, action){
    switch(action.type){
        case 'GET_GALLERY':
            return {...state,gallerydata:action.payload}
        default:
            return state;
    }
}