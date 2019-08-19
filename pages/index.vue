<template>
  <div>
    <div class="heroImage u-bgImage" role="banner" :style="{'background-image':'url('+ baseURL + require('@/assets/img/slide.jpg') +')'}">
      <div class="container">
        <div class="row">
          <div class="col-vbottom">
            <span class="u-inlineBlock u-bgMain u-pad-05 u-title-5 u-colorLight">
              Lorem ipsum dolor sit amet
            </span>
            <br/>
            <span class="u-inlineBlock u-bgLight u-pad-05">
              Sed ut nunc cursus, dapibus sapien ut
            </span>
          </div>
        </div>
      </div>
    </div>

    <main role="main">
      <section class="container">
        <div class="row">
          <div class="col-lg-4">
            <h2 class="u-title-6">Lorem ipsum dolor sit amet</h2>
            <hr class="u-spacer-10">
            <p class="u-textBlock">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut nunc cursus, dapibus sapien ut, mollis mi. In at felis purus. Cras lacinia urna nec neque pellentesque, in tempus nunc tristique.</p>
            <br/>
            <a class="btn btn--main" href="#learn-more-1">Learn More</a>
          </div>
          <div class="col-md-6 col-lg-4">
            <h2 class="u-title-6">Lorem ipsum dolor sit amet</h2>
            <hr class="u-spacer-10">
            <p class="u-textBlock">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut nunc cursus, dapibus sapien ut, mollis mi. In at felis purus. Cras lacinia urna nec neque pellentesque, in tempus nunc tristique.</p>
            <br/>
            <a class="btn btn--main" href="#learn-more-2">Learn More</a>
          </div>
          <div class="col-md-6 col-lg-4">
            <h2 class="u-title-6">Lorem ipsum dolor sit amet</h2>
            <hr class="u-spacer-10">
            <p class="u-textBlock">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut nunc cursus, dapibus sapien ut, mollis mi. In at felis purus. Cras lacinia urna nec neque pellentesque, in tempus nunc tristique.</p>
            <br/>
            <a class="btn btn--main" href="#learn-more-3">Learn More</a>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseURL: process.env.baseURL
    }
  }
}
</script>
