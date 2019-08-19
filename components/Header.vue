<template>
  <header class="mainHeader u-bgMain u-colorLight">
    <div class="container">
      <div class="row">
        <div class="col col-vcenter">
          <h1 class="u-title-5">
            <a :href="baseURL">
              Project Title
            </a>
          </h1>
        </div>
        <div class="col col-vcenter">
          <Navbar />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
export default {
  components: {
    Navbar
  },
  data() {
    return {
      baseURL: process.env.baseURL
    }
  }
}
</script>
