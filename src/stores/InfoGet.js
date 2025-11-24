import { defineStore } from 'pinia'
import { api } from 'src/boot/axios.js'
export const useinfocomponentget = defineStore('infoget', {
  state: () => ({
    infoinputs: [
      { id: 1, text: 'my name is : ', plac: 'how to write', value: '' },
      { id: 2, text: 'task explanation : ', plac: 'write task', value: '' },
    ],
    list: [],
    InfoCard: [],
  }),
  getters: {
    tasks: (state) => {
      return state.infoinputs[0].value + ' ' + state.infoinputs[1].value
    },
  },
  actions: {
    async GetInfoCard() {
      try {
        const res = await api.get('products')
        this.InfoCard = res.data
      } catch (error) {
        console.log(error)
      }
    },
  },
})
