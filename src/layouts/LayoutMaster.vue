<template>
  <Header HeaderText="this is header" />
  <section>
    <Contain />
  </section>
  <Footer FooterText="this is footer" />
</template>
<script setup>
import Header from '../components/HeaderComponent.vue'
import Footer from '../components/FooterComponent.vue'
import Contain from '../pages/HomeMain.vue'
</script>
<style lang="scss" scoped></style>
