<template>
  <q-page padding>
    <q-form @submit="handleSubmit" class="q-gutter-md">
      <q-input filled v-model="form.email" label="Email" :rules="[emailRule]" />
      <q-input
        filled
        v-model="form.password"
        label="Password"
        type="password"
        :rules="[passwordRule]"
      />
      <q-btn label="Sign Up" type="submit" color="primary" />
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
});

const emailRule = (val: string) =>
  (!!val && val.includes('@')) || 'Valid email is required';
const passwordRule = (val: string) => val || 'Password requirements not met';

const handleSubmit = () => {
  // handle form
  console.log(form.value);
};
</script>
