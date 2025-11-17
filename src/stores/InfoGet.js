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
