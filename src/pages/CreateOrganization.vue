<template>
  <q-page padding>
    <div class="text-h6 q-my-md">Add Organization</div>
    <div class="q-my-md">
      Looks like you're the first one here! Please tell us your business's name
    </div>
    <q-form @submit="handleSubmit" class="q-gutter-md">
      <q-input filled v-model="form.name" label="Name" :rules="[nameRule]" />
      <q-btn label="Create Organization" type="submit" color="primary" />
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { EVENTS } from 'src/common/events';
// import { addOrganization } from 'src/services/api/backendService';
import { ref } from 'vue';

const emit = defineEmits([EVENTS.nextSlide]);

const form = ref({
  name: '',
});

const nameRule = (val: string) =>
  !!val || 'Please provide a name for your company';

const handleSubmit = async () => {
  const { name } = { ...form.value };
  // await addOrganization(name);
  // handle form
  console.log(name);
  emit(EVENTS.nextSlide);
};
</script>
