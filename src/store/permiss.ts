import { defineStore } from "pinia";

interface ObjectList {
  [key: string]: string[];
}

export const usePermissStore = defineStore("permiss", {
  state: () => {
    const defaultList: ObjectList = {
      admin: [
        'd1',
        'd2',
        'd3',
        'm0',
        'm1',
        'm2',
        'm2a',
        'm3',
        'm4',
        'a1',
        'a2',
        'a3',
        '1',
        '11',
        '12',
        '13',
        '2',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '3',
        '31',
        '32',
        '33',
        '34',
        '4',
        '42',
        '43',
        '5',
        '7'
      ],
      user: [
        'd1',
        'd2',
        'd3',
        'm0',
        'm1',
        'm2',
        'm3',
        'm4',
        '3',
        '31',
        '32',
        '33',
        '34',
        '4',
        '43',
        '5',
        '7'
      ],
    };
    const username = localStorage.getItem("vuems_name");
    console.log(username);
    return {
      key: (username == "admin"
        ? defaultList.admin
        : defaultList.user) as string[],
      defaultList,
    };
  },
  actions: {
    handleSet(val: string[]) {
      this.key = val;
    },
  },
});
