<style>
  .thread-modal{
    max-width: 250px;
  }

  .colors{
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
  }
</style>

<template>

  <div>
    <div class="modal-mask">
          <div class="modal-container thread-modal">

            <div class="row row--l">
              <h3>Edit Thread</h3>
              <button class="btn-invisible" @click="$emit('close-clicked')"><img class="img--s" src="./../imgs/icn-x.svg"></button>
            </div>

            <input class="input" placeholder="Thread Name"></input><br><br>

            <br />

            <div class="row row--l">
              <button class="btn btn-red">Delete</button>
              <button class="btn btn-green">Save</button>
            </div>

        </div>
    </div>
  </div>

</template>

<script>
  export default {
  name: 'ThreadModal',
  data() {
      return {
      }
      colors: ["#111111", "#9AAAA3", "#4FCC44", "#CCCBFF", "#FFFC31"]
    },
  methods: {
  },
}
</script>
