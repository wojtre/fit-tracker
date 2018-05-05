import _ from 'lodash'
let initialState = {
    trainings: []
}

export default (state = initialState, action) => {
    let newState = _.merge({}, state)
    switch (action.type) {
        default:
            return state
    }
}