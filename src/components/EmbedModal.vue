<style>
/*------Modal----------*/

.embedCode{
  width: 500px;
}

</style>

<template>

  <div>
    <div class="modal-mask">
          <div class="modal-container embedCode">

            <div class="row row--l">
              <h3>Embed Code</h3>
              <button class="btn-invisible" @click="$emit('close-clicked')"><img class="img--s" src="./../imgs/icn-x.svg"></button>
            </div>

            <textarea class="embedCode"></textarea>
            <div class="row row--end">
              <button class="btn btn-teal">Copy</button>
            </div>

        </div>
    </div>
  </div>

</template>

<script>
  export default {
  name: 'EmbedModal',
  methods: {
  },
}
</script>
