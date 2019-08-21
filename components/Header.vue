<template>
  <header class="mainHeader u-bgMain u-colorLight">
    <div class="container">
      <div class="row">
        <div class="col col-vcenter">
          <h1 class="u-title-5">
            <n-link class="u-noUnderline" to="/" v-html="'Project Title'"/>
          </h1>
        </div>
        <div class="col col-vcenter">
          <Navbar :items="NavbarItems" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import NavbarItems from '@/data/navigation.js'
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      NavbarItems: NavbarItems,
    }
  }
}
</script>
