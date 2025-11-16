import { defineStore } from 'pinia'
export const useinfocomponentget = defineStore('infoget', {
  state: () => ({
    how: '',
    tascks: '',
    infoinputs: [
      { id: 1, text: 'my name is : ', plac: 'how to write' },
      { id: 2, text: 'tasck description : ', plac: 'write tasck' },
    ],
    
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },

  actions: {
    // increment() {
    //   this.counter++
    // },
  },
})
