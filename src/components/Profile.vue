<template>
  <div class="pane">
    <div class="row row--l">
      <h1>Your Profile</h1>
      <button class="btn btn-green">Save</button>
    </div>

    <form>
      <h4>AVATAR</h4>
      <div class="logo"></div>
      <a>Change</a>
      <h4>DISPLAY NAME</h4>
      <input type="text" name="firstname"><br>
      <h4>PASSWORD</h4>
      <input type="text" name="firstname"><br>
    </form>

  </div>
</template>

<script>
export default {
  name: 'Profile',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
