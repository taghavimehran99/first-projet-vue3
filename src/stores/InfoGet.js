import { defineStore } from 'pinia'
export const useinfocomponentget = defineStore('infoget', {
  state: () => ({
    how: '',
    tascks: '',
    infoinputs: [
      { id: 1, text: 'my name is : ', plac: 'how to write', value: '' },
      { id: 2, text: 'tasck explanation : ', plac: 'write tasck', value: '' },
    ],
    count: 10,
    list: [],
    InfoBtnRouters: [
      { id: 1, text: 'Go To Route Home', function: '/', class: 'btn-router' },
      { id: 2, text: 'Go To Route Detail', function: '/HomeDeatal', class: 'btn-router' },
      { id: 3, text: 'Go To Route Get Api', function: '/GetApi', class: 'btn-router' },
    ],
  }),
  getters: {
    tasck: (state) => {
      return state.infoinputs[0].value + ' ' + state.infoinputs[1].value
    },
  },
  actions: {
    BuildRow(state) {
      state.list = this.tasck
    },
  },
})
