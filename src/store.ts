import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
    state: () => ({ name: 'Иван', selected: [] as number[], }),
    getters: {
      getName: (state) => state.name,
      getSelected: (state) => state.selected,
    },
    actions: {
      setSelected(arr: number[]) {
        this.selected = arr;
      },
    },
})