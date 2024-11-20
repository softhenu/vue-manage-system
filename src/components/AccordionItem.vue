<template>
    <div>
      <button @click="toggle" class="accordion-button bg-white flex justify-between items-center p-4 border border-green-200 rounded-lg w-full"
      :class="isOpen ? 'active' : ''">
        <span class="flex-1 text-center">{{ item.title }}</span>
        <span class="flex-1 text-center">{{ item.value }}</span>
        <span class="flex-1 text-center">{{ item.score }}</span>
        <span class="flex-1 text-center" @click="goToOtherPages">{{ item.rank }}</span>
      

      </button>
      <div v-show="isOpen" class="accordion-content">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>

  export default {
    props: {
      item: Object,
      to: String
    },
    data() {
      return {
        isOpen: false
      };
    },
    methods: {
      toggle() {
        console.log("toggle")
        this.isOpen = !this.isOpen;
      },
      goToOtherPages(){
        console.log(this.to)
        if(this.to !== ""){
          this.$router.push(this.to)
        }
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
  