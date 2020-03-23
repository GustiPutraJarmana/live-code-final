<template>
<div>
	<div>
	</div>
  <div class="container">
  <Table></Table>
  </div>
  </div>
</template>

<script>
import Vue from "vue";
import Table from "../components/Table";
export default Vue.extend({
  name: "Home",
  components: {
    Navbar,
    Table
  }
})
</script>

<style>
</style>