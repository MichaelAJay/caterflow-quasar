<template>
  <q-carousel v-model="currentSlide" animated swipeable>
    <q-carousel-slide name="1">
      <VerifyEmail @next-step="handleVerifySuccess" />
    </q-carousel-slide>
    <q-carousel-slide name="2">
      <CreateOrganization @next-step="handleOrganizationAdded" />
    </q-carousel-slide>
    <q-carousel-slide name="3">
      <!-- Wizard outflow utilizes vue-router in OnboardConfirmation -->
      <OnboardConfirmation />
    </q-carousel-slide>
  </q-carousel>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VerifyEmail from './VerifyEmail.vue';
import CreateOrganization from './CreateOrganization.vue';
import OnboardConfirmation from 'src/components/onboard/OnboardConfirmation.vue';

const currentSlide = ref('1');

const handleVerifySuccess = () => {
  currentSlide.value = '2'; // Move to the next slide
};

const handleOrganizationAdded = () => {
  currentSlide.value = '3'; // Move to the next slide
};
</script>
