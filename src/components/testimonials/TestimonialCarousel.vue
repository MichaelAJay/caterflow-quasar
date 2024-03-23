<template>
  <div class="q-my-sm">
    <q-carousel
      animated
      :autoplay="true"
      infinite
      v-model="currentTestimonial"
      arrows
    >
      <q-carousel-slide
        v-for="testimonial in testimonials"
        :name="testimonial.author"
        :key="testimonial.author"
      >
        <q-card flat bordered class="q-pa-md">
          <q-card-section>
            <div class="text-subtitle2">{{ testimonial.author }}</div>
          </q-card-section>
          <q-card-section> "{{ testimonial.content }}" </q-card-section>
        </q-card>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { TESTIMONIALS, Testimonial } from './testimonials';
const testimonials = ref<Testimonial[]>(TESTIMONIALS);

const currentTestimonial = ref(testimonials.value[0].author);
</script>

<style scoped>
/* Add your component styles here */
</style>
