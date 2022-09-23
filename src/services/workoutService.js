
// const Workout = require("../database/Workout");
// // In src/services/workoutService.js
// const getAllWorkouts = () => {
//   // *** ADD ***
//   const allWorkouts = Workout.getAllWorkouts();
//   // *** ADD ***
//   return allWorkouts;
// };

// In src/database/workoutService.js
// *** ADD ***
const { v4: uuid } = require("uuid");

const Workout = require("../database/Workout");
const getAllWorkouts = () => {
    try{
            // *** ADD ***
    const allWorkouts = Workout.getAllWorkouts();
    // *** ADD ***
    return allWorkouts;
    }
    catch(error)
    {
        throw error;
    }
};
const getOneWorkout = (workoutId) => {
    try{
        const workout = Workout.getOneWorkout(workoutId);
    return workout;
    }
    catch(error)
    {
        throw error;
    }
};

const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("es-Us", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("es-Us", { timeZone: "UTC" })
    };
    try {
        const createdWorkout = Workout.createNewWorkout(workoutToInsert);
        return createdWorkout;
    }
    catch (eroror) {
        throw error;
    }
};

const updateOneWorkout = (workoutId, changes) => {
    try{
        const updatedWorkout = Workout.updateOneWorkout(workoutId, changes);
        return updateOneWorkout;
    }
    catch(error)
    {
        throw error;
    }
};

const deleteOneWorkout = (workoutId) => {
    try{
        Workout.deleteOneWorkout(workoutId);
    }
    catch(error)
    {
        throw error;
    }
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
}