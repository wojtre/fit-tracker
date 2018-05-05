import { default as UUID } from "uuid";

let trainingsStore = [
  {
    id: 1,
    date: "21-02-2018",
    title: "klata",
    exercises: [
      {
        id: 1,
        name: "wyciskanie",
        series: [
          90, 90, 80, 90
        ],
        unit: "kg"
      },
      {
        id: 2,
        name: "rospietki",
        series: [
          50, 50, 50
        ],
        unit: "kg"
      }
    ]

  }, {
    id: 2,
    date: "21-02-2017",
    title: "klata",
    exercises: []
  }, {
    id: 3,
    date: "21-02-2016",
    title: "klata",
    exercises: []
  }
]

const getStore = () => {
  return trainingsStore;
}

const setStore = (newStore) => {
  trainingsStore = newStore;
}

const functions = {
  getStore: getStore,
  setStore: setStore
}

export default functions;
