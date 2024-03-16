<template>
  <q-page padding class="q-pa-sm column">
    <div class="q-pa-sm">
      <div class="text-center">
        <img
          :src="logo"
          alt="Caterflow logo - a catering truck with a chef's hat on"
          class="logo"
        />
      </div>
    </div>

    <div class="text-center q-my-sm">
      <p class="text-subtitle2">Cooking Up Simplified Catering Management</p>
    </div>

    <div class="flex-equal-buttons-container q-my-sm">
      <q-btn
        label="Get Started"
        color="primary"
        class="col q-mx-sm"
        size="md"
      />
      <q-btn
        label="Login"
        unelevated
        color="primary"
        class="col q-mx-sm"
        size="md"
      />
    </div>

    <div class="q-my-sm">
      <h2 class="text-center text-h6 q-mt-xs q-mb-sm">Features</h2>
      <div class="q-pl-sm">
        <p class="text-caption">Feature 1</p>
        <p class="text-caption">Feature 2</p>
        <p class="text-caption">Feature 3</p>
      </div>
    </div>

    <div class="q-mt-xs q-mb-sm">
      <h2 class="text-center text-h6 q-mt-xs q-mb-sm">Testimonials</h2>
      <TestimonialCarousel />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import logo from 'src/assets/CF_logo.svg';
import TestimonialCarousel from 'src/components/testimonials/TestimonialCarousel.vue';
</script>

<style scoped>
.logo {
  height: 6rem;
}

.flex-equal-buttons-container {
  display: flex;
  justify-content: space-around; /* Adjust based on your layout */
}

.flex-equal-buttons-container .q-btn {
  flex-grow: 1;
  max-width: 150px; /* Adjust to control the maximum width */
}

@media (min-width: 600px) {
  .logo {
    height: 6rem;
  }
}
</style>
