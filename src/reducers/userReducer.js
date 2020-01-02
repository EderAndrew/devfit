const initialState = {
    name:'',
    level:'',//beginner, intermediate and advanced
    workoutDays:[], //1-0
    myWorkouts:[],
    lastWorkout:'', //ID
    dailyProgress:['2019-12-31', '2019-12-30']
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'SET_NAME':
            return {...state, name:action.payload.name}
            break
        case 'SET_WORKOUTDAYS':
            return {...state, workoutDays:action.payload.workoutDays}
            break
        case 'SET_LEVEL':
            return {...state, level:action.payload.level}
            break
    }

    return state;
}