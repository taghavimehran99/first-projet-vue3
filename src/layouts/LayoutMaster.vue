<template>
  <q-layout view="hHh lpR fFf">
    <Header HeaderText="this is header" />
    <BtnRouter />
    <q-page-container>
      <router-view />
    </q-page-container>
    <Footer FooterText="this is footer" />
  </q-layout>
</template>
<script setup>
import Header from '../components/HeaderComponent.vue'
import Footer from '../components/FooterComponent.vue'
import BtnRouter from '../components/BtnRouter.vue'
</script>
