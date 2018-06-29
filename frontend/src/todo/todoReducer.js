const INITIAL_STATE = {
    description: '', list: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload }
        case 'TODO_CLEAR':
            return { ...state, description: ''}
        case 'TODO_ADD':
            return { ...state, list: [...state.list, action.payload]}
        case 'TODO_LIST_UPDATE':
            return { ...state, list: action.payload }
        case 'TODO_LIST_PRESERVE':
            return { ...state, list: [...state.list] }
        case 'TODO_LIST_DELETE':
            return { ...state, list: [
                ...state.list.slice(0, action.payload),
                ...state.list.slice(action.payload + 1)
            ]}
        default: 
            return state
    }
}