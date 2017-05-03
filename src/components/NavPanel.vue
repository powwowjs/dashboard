<template>
  <div>
    <ul>
    	<li @click="navItemClicked('Settings')">
    		Settings
    	</li>
    	<li @click="navItemClicked('Users')">
    		Users
    	</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'Nav',
  methods: {
  	navItemClicked(item) {
  		this.$router.push({name: item})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>