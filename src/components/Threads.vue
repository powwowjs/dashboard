<style>

.table{
  border: 1px solid var(--bluegray);
  border-radius: 4px;
}

.tableHeader:hover{
  background-color: transparent;
}

.table th{
  border-bottom: 1px solid var(--bluegray);
  padding: 5px;
  text-align: left;
  background-color: var(--lightgray);
}

.table tr{
  border-bottom: 1px solid var(--lightgray);
  padding-top: 5px;
  padding-bottom: 5px;
  cursor: pointer;
}

.table a:hover{
  text-decoration: underline;
}

.table td{
  padding: 5px;
  text-align: left;
}

.table tr:last-child{
  border-bottom: none;
}

.table tr:hover{
  background-color: var(--paleblue);
}

.colorSwatch{
  width: 20px;
  height: 20px;
  background-color: blue;
  border-radius: 30px;
  margin: 5px;
  cursor: pointer;
}

.colorSwatch:hover{
  opacity: 0.8;
  background-size: cover;
}

</style>

<template>
  <div class="pane">

    <div class="row row--l">
      <h1>Manage Threads</h1>
      <button class="btn cell" @click="showThreadModal = !showThreadModal">Add Thread +</button>
    </div>
  <br>

    <table class="table" width="100%">
      <tr class="tableHeader">
        <th>Color</th>
        <th>Thread Name</th>
        <th>Posts</th>
        <th>Edit</th>
      </tr>
      <tr>
        <td><div class="colorSwatch"></div></td>
        <td>Thread Name Goes Here</td>
        <td>#</td>
        <td><a @click="showThreadModal = !showThreadModal">Edit</a></td>
      </tr>
    </table>

    <thread-modal v-if="showThreadModal" @close-clicked="closeThreadModal"></thread-modal>
  </div>
</template>

<script>
import ThreadModal from '@/components/ThreadModal'

export default {
  name: 'Threads',
  components: {
    ThreadModal,
  },
  data() {
      return {
        showThreadModal: false,
      }
    },
  methods: {
  closeThreadModal() {
    this.showThreadModal = false
  },
}
}
</script>
