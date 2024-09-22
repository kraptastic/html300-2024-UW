export const myMixin = {
  data() {
    return {
      // store boolean to set a state, use let to allow variable to change
      clickedState: ref(false)
    }
  },

  methods: {
    // make a function and pass the event object in
    toggleBorder(e) {
      // toggle the state on click
      this.clickedState = !this.clickedState

      // logic for changing the border attribute to the string given if the state corresponds to true/false
      if (this.clickedState === true) {
        e.target.style.border = '3px dashed magenta'
      } else {
        e.target.style.border = 'none'
      }
    }
  }
}
