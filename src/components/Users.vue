<template>
  <div class="pane">

    <div class="row row--l">
      <h1>Manage Users</h1>
      <input class="input" placeholder="Search Users"/>
    </div>

    <br />
    <table class="table" width="100%">
      <tr class="tableHeader">
        <th>Avatar</th>
        <th>User Name</th>
        <th>Email</th>
        <th>Delete</th>
      </tr>
      <tr>
        <td><div class="colorSwatch"></div></td>
        <td>UserName300</td>
        <td>UserName300@mail.com</td>
        <td><a>Delete</a></td>
      </tr>
    </table>

  </div>
</template>

<script>
export default {
  name: 'Users',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
