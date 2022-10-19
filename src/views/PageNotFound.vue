<template>
  <section class="page_404">
    <!-- Не мое, нашел на codepen -->
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-10 col-sm-offset-1 text-center">
            <div class="four_zero_four_bg">
              <h1 class="section-title" style="margin-bottom: 10px">
                Page Not Found
              </h1>
              <h2 class="section-title">404</h2>
            </div>

            <div class="contant_box_404">
              <router-link to="/" class="link_404 btn">Go to Home</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.page_404 {
  background-color: #fff;
  padding: 40px 0;
  background: #fff;
}

.page_404 img {
  width: 100%;
}

.four_zero_four_bg {
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: calc(100vh - 150px);
  background-position: center;
  background-size: cover;
}

.link_404 {
  text-align: center;
  margin: 0 auto;
  display: block;
  width: 200px;
}

.contant_box_404 {
  margin-top: -50px;
}
</style>