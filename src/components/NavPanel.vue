<style scoped>
.navpanel{
  background-color: var(--lightgray);
  border-right: 1px solid var(--bluegray);
  min-height: 500px;
  width: 20%;
  min-width: 150px;
  padding: 1px 1% 1% 20px;
}

ul{
  padding-left: 0;
}

li{
  width: 100%;
  cursor: pointer;
  list-style-type: none;
  line-height: 2em;
  padding-left: 0;
}

li:hover{
  color: var(--teal);
}
</style>

<template>
  <div class="navpanel">

  <div>
    <h4>COMMUNITY</h4>
    <ul>
      <li @click="navItemClicked('Community')">Community Settings</li>
      <li @click="navItemClicked('Users')">Manage Users</li>
      <li @click="navItemClicked('Threads')">Manage Threads</li>
    </ul>

    <h4>USER</h4>
    <ul>
      <li @click="navItemClicked('Profile')">Your Profile</li>
    </ul>
  </div>
  
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
    }
  },
  methods: {
    navItemClicked(item) {
      this.$router.push({name: item})
    }
  }
}
</script>
