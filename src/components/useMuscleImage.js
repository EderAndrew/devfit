export default (muscle) => {
    let muscleImage = null

    switch(muscle){
        case 'abs':
            muscleImage = require('../assets/muscles/abs.png')
            break
        case 'back':
            muscleImage = require('../assets/muscles/back.png')
            break
        case 'biceps':
            muscleImage = require('../assets/muscles/biceps.png')
            break
        case 'chest':
            muscleImage = require('../assets/muscles/chest.png')
            break
    }
    return muscleImage
}