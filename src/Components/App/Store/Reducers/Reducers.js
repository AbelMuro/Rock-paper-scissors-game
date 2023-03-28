export default function ScoreReducer(state = 0, action) {
    
    switch(action.type){
        case 'update score':
            return state + 1;
        case 'get score':
            return state;
        default:
            return state;
    }

}