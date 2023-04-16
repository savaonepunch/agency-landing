<template>
  <div>
    <div class="container">
      <TheHeader />
      <HeroSection />
      <div class="blue-rectangle">
        <LogosSection />
        <DesignSection />
        <RetailSection />
        <StrategicSection />
      </div>
      <CertificationSection />
      <ComprisedSection />
      <div class="blue-rectangle">
        <ReviewSlider />
        <IdeaSection />
        <FaqSection />
        <TheFooter/>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
div.container {
  & div.blue-rectangle {
    background: linear-gradient(151.98deg, #182E76 15.31%, #37233B 100%);
    width: 100vw;
    border-radius: 100px;
    padding-bottom: 300px;

    &:last-of-type {
      border-radius: 100px 100px 0 0;
      padding-bottom: 100px;
    }

    @media only screen and (max-width: 800px) {
      border-radius: 40px;
      padding-bottom: 50px;

      &:last-of-type {
        border-radius: 40px 40px 0 0;
      }
    }
  }
}
</style>  