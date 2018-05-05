import * as firebase from 'firebase'
let database

export const init = () => {
    let config = {
        apiKey: "AIzaSyB_2puRqklWWWdJnA2NuN5rzCV-hPyCSCs",
        authDomain: "fit-tracker-d13bf.firebaseapp.com",
        databaseURL: "https://fit-tracker-d13bf.firebaseio.com",
        projectId: "fit-tracker-d13bf",
        storageBucket: "fit-tracker-d13bf.appspot.com",
        messagingSenderId: "538577210428"
    }
    firebase.initializeApp(config)
    database = firebase.database()
}

export const getTrainingsDB = () => {
    return database.ref('/').once('value')
}

export const getTraining = (trainingId) => {
    return database.ref(`/${trainingId}`).once('value')
}


export const addTraining = (training) => {
    let key = database.ref('/').push().key
    training.id = key
    return database.ref('/' + key).set(training)
}

export const addExercise = (trainingId, exercise) => {
    return new Promise((resolve, reject) => {
        database.ref(`/${trainingId}`.once('value').then((training) => {
            let exercises = training.val().exercises || []
            let key = database.ref(`/${trainingId}`).push().key
            exercise.id = key
            exercises.push(exercise)
            database.ref(`/${trainingId}/exercises`).set(exercises)
                .then(res => { resolve(res) })
                .catch(error => { reject(error) })
        }))
    })
}