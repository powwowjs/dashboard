<style>
  .logo{
    width: 100px;
    height: 100px;
    border: 1px solid var(--bluegray);
    background-size: contain;
    border-radius: 4px;
    background-image: url("http://www.ics.forth.gr/mobile/female.png");
  }
</style>

<template>
  <div class="pane">

    <div class="row row--l">
      <h1>Community Settings</h1>
      <button class="btn btn-green">Save</button>
    </div>

    <form>
      <h4>COMMUNITY LOGO</h4>
      <div class="logo"></div>
      <a>Change</a>
      <h4>COMMUNITY NAME</h4>
      <input type="text" name="firstname"><br>
      <h4>COMMMUNITY DESCRIPTION</h4>
      <textarea></textarea>
    </form>

  </div>
</template>

<script>
export default {
  name: 'Community',
}
</script>
