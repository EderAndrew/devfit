const initialState = {
  name: '',
  level: '', //beginner, intermediate and advanced
  workoutDays: [], //1-0
  myWorkouts: [],
  lastWorkout: '', //ID
  dailyProgress: ['2019-12-31', '2019-12-30'],
};

export default (state = initialState, action) => {
  let myWorkouts = [...state.myWorkouts];

  switch (action.type) {
    case 'SET_NAME':
      return {...state, name: action.payload.name};
    case 'SET_WORKOUTDAYS':
      return {...state, workoutDays: action.payload.workoutDays};
    case 'SET_LEVEL':
      return {...state, level: action.payload.level};
    case 'ADD_WORKOUT':
      if (myWorkouts.findIndex(i => i.id === action.payload.workout.id) < 0) {
        myWorkouts.push(action.payload.workout);
      }
      return {...state, myWorkouts};
    case 'DEL_WORKOUT':
      myWorkouts = myWorkouts.filter(i => i.id !== action.payload.workout.id);
      return {...state, myWorkouts};
  }

  return state;
};
