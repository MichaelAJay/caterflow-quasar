<template>
  <q-page class="q-pa-md">
    <div class="text-h4 q-my-md">Integrations</div>
    <p>
      Here you can manage your integrations between different services, like
      EZCater and your CRM systems. Set up new integrations to streamline your
      catering orders directly into your business processes.
    </p>

    <div v-if="integrations && integrations.length > 0">
      <!-- Dynamic list of integrations -->
      <q-list bordered class="q-mt-md">
        <q-item
          v-for="integration in integrations"
          :key="integration.id"
          clickable
        >
          <q-item-section>
            <q-item-label>{{ integration.name }}</q-item-label>
            <q-item-label caption>{{ integration.status }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <div v-else class="text-center q-my-md">
      <q-icon name="mdi-bridge" size="52px" />
      <div class="q-my-md">You have no integrations set up yet.</div>
      <q-btn
        label="Set Up New Integration"
        color="primary"
        @click="goToIntegrationSetup"
      />
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Example integrations data
const integrations = ref([
  // Assuming the structure is { id, name, status }
  // This data would normally come from your backend or a state management store
]);

const router = useRouter();

function goToIntegrationSetup() {
  router.push('/integration-setup'); // Adjust the route as needed
}
</script>

<style scoped>
/* Add your styles here */
</style>
