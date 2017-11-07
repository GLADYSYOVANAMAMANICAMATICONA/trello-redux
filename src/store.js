import createStore from 'redux-zero'
let Cards = [
    {
        id:0,
        title: '',
        tarea:'',
        add: false
    }
]

const initialState = {
    card: Cards,
    selectedItem : -1, 
}

const store = createStore(initialState)
export default store