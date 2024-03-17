<template>
  <q-page padding>
    <q-form @submit="handleSubmit" class="q-gutter-md">
      <q-input filled v-model="form.name" label="Name" :rules="[nameRule]" />
      <q-input filled v-model="form.email" label="Email" :rules="[emailRule]" />
      <q-input
        filled
        v-model="form.password"
        label="Password"
        type="password"
        :rules="[passwordRule]"
      />
      <q-input
        filled
        v-model="form.confirmPassword"
        label="Confirm Password"
        type="password"
        :rules="[confirmPasswordRule]"
      />
      <q-btn label="Sign Up" type="submit" color="primary" />
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const form = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
});

const nameRule = (val: string) => !!val || 'Name is required';
const emailRule = (val: string) =>
  (!!val && val.includes('@')) || 'Valid email is required';
const passwordRule = (val: string) =>
  (val &&
    val.length >= 8 &&
    /[A-Z]/.test(val) &&
    /[a-z]/.test(val) &&
    /[0-9]/.test(val) &&
    /[\W_]/.test(val)) ||
  'Password requirements not met';
const confirmPasswordRule = (val: string) =>
  val === form.value.password || 'Passwords must match';

const handleSubmit = () => {
  // handle form
  console.log(form.value);

  // Call Firebase API "Create"
  // Call Firebase API "Update" (for name)
  // Call Firebase API "Send Email" - is this required?
  // Call my API "Create User"
};
</script>
