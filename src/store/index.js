import { createStore } from 'redux'

const counterReducer = (state={counter:0}, action) => {
    if(action.type === 'increment'){
        return {
            counter: state.counter + 1
        }
    }

    if(action.type === 'decrement'){
        return {
            counter: state.counter - 1
        }
    }

    return state;
}

const store = createStore(counterReducer);

export default store;
// we want to connect React app to the store 
// we need to provide this store to the app
// since we only have one Redux Store 
// we only need to provide our store once 