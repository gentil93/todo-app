import uuid from 'uuid'


// const URL = 'http://localhost:3003/api/todos'

export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        // const description = getState().todo.description
        // const search = description ? `&description__regex=/${description}/` : ''
        // const request = axios.get(`${URL}?sort=-createdAt${search}`)
        //     .then(resp => dispatch({
        //         type: 'TODO_SEARCHED',
        //         payload: resp.data
        //     }))
        dispatch({
            type: 'TODO_SEARCHED',
            payload: []
        })
    }
}


export const add = (description) => {
    let todo = {
        description,
        createdAt: new Date(),
        done: false,
        id: uuid.v4()
    }
    return dispatch => {
        dispatch({
            type: 'TODO_ADD',
            payload: todo
        })
        dispatch(clear())
    }
}

export const markAsDone = (todo) => {
    return (dispatch, getState) => {
        let list = getState().todo.list
        let index = findByIndex(todo.id, list)
        console.log(index)
        let newTodoList = returnUpdatedList(index, list, 'done', true)
        dispatch(updateList(newTodoList))
        dispatch({
            type: 'TODO_LIST_PRESERVE'
        })
    }
}

export const markAsPending = (todo) => {
    return (dispatch, getState) => {
        let list = getState().todo.list
        let index = findByIndex(todo.id, list)
        console.log(index)
        let newTodoList = returnUpdatedList(index, list, 'done', false)
        dispatch(updateList(newTodoList))
        dispatch({
            type: 'TODO_LIST_PRESERVE'
        })
    }
}

export const remove = (todo) => {
    return (dispatch, getState) => {
        let list = getState().todo.list
        let index = findByIndex(todo.id, list)
        dispatch({
            type: 'TODO_LIST_DELETE',
            payload: index
        })
        // dispatch({
        //     type: 'TODO_LIST_PRESERVE'
        // })
    }
}

export const clear = () => {
    return [{ type: 'TODO_CLEAR' }]
}

export const returnUpdatedList = (index, list, field, value) => {
    let newObj = list[index]
    newObj[field] = value     
    let newList = list
    newList[index] = newObj
    return newList
}

const findById = (id, list) => {
    return list.find(todo => todo.id === id)
}

const findByIndex = (id, list) => {
    console.log("index", id, list)
    let index = list.findIndex((element) => {
        return element.id == id
    })
    return index
}

export const updateList = (list) => {
    return {
        type: "TODO_LIST_UPDATE",
        payload: list
    }
}