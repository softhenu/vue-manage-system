<template>
    <div>
      <button @click="toggle" class="accordion-button bg-white flex justify-between items-center p-4 border border-green-200 rounded-lg w-full">
        <span class="flex-1 text-center">{{ item.title }}</span>
        <span class="flex-1 text-center">{{ item.value }}</span>
        <span class="flex-1 text-center">{{ item.score }}</span>
        <span class="flex-1 text-center">{{ item.rank }}</span>
        <span class="flex-1 text-center">{{ item.sa }}</span>
        <span class="flex-1 text-center">{{ item.co }}</span>

      </button>
      <div v-show="isOpen" class="accordion-content">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      item: Object
    },
    data() {
      return {
        isOpen: false
      };
    },
    methods: {
      toggle() {
        this.isOpen = !this.isOpen;
      }
    }
  };
  </script>
  
  <style scoped>
  .accordion-button:after {
    content: "\f107"; /* FontAwesome down arrow */
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
  }
  .accordion-button.active:after {
    content: "\f106"; /* FontAwesome up arrow */
  }
  .accordion-content {
    overflow: hidden;
    transition: max-height 0.3s ease-out;
  }
  </style>
  