<style>
nav{
  background-color: white;
  display: flex;
  height: 60px;
  border-bottom: 1px solid var(--bluegray);
  padding: 0px 3% 0px 3%;
}

nav a{
  color: white;
  cursor: pointer;
}

nav a:hover{
  color: inherit;
}

@media screen and (max-width: 500px) {
  @-ms-viewport { width: 500px; }
  #dashboard-title{
    display: none;
  }
}

</style>

<template>
  <nav>
      <div class="row row--l">
        <div class="row">
          <img class="img--s" src="./../imgs/temp-logo.svg" />
          <h3 class="teal">Dashboard</h3>
        </div>
      <div>
        <a class="teal">Log out &nbsp;&nbsp;&nbsp;</a>
        <a class="btn btn-teal" @click="showEmbed = !showEmbed"><b>< / ></b></a>
        <a class="btn btn-teal" @click="showApp = !showApp">☉ &nbsp; Preview Community</a>

        <app-modal v-if="showApp" @close-clicked="closeApp"></app-modal>
        <embed-modal v-if="showEmbed" @close-clicked="closeEmbed"></embed-modal>

      </div>

    </div>
  </nav>
</template>


<script>

import AppModal from '@/components/AppModal'
import EmbedModal from '@/components/EmbedModal'


export default {
  name: 'TopNav',
  components: {
    AppModal,
    EmbedModal
  },
  data() {
      return {
        showApp: false,
        showEmbed: false
      }
    },
  methods: {
  closeApp() {
    this.showApp = false
  },
  closeEmbed() {
    this.showEmbed = false
  },
  methods: {
    runApp() {
      var script = document.createElement('script');
      script.async = true;
      script.src ='http://localhost:8081/dist/library.js';
      var entry = document.getElementsByTagName('script')[0];
      entry.parentNode.insertBefore(script, entry);
    }
  },

}
}
</script>
