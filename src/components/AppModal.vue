<style>
/*------Modal----------*/

.modal-mask {
  position: absolute;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, .6);
  display: inline-block;
  transition: all 1s ease;
}

.modal-container {
  max-width: 900px;
  min-width: 180px;
  margin: 100px auto;
  padding: 5px 15px 15px 15px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
}

.btn-invisible{
  background-color: transparent;
  border-style: hidden;
  padding: 0;
  cursor: pointer;
}
</style>

<template>

  <div>
    <div class="modal-mask">
          <div class="modal-container">

            <div class="row row--l">
              <h3>Your Community</h3>
              <button class="btn-invisible" @click="$emit('close-clicked')"><img class="img--s" src="./../imgs/icn-x.svg"></button>
            </div>

            <div class="poww-div" stream-widget></div>

        </div>
    </div>
  </div>

</template>

<script>
  export default {
  name: 'AppModal',
  methods: {
  },
  mounted: function() {
        var script = document.createElement('script');
        script.async = true;
        script.src ='http://localhost:8081/dist/library.js';
        var entry = document.getElementsByTagName('script')[0];
        entry.parentNode.insertBefore(script, entry);
      }
}
</script>
