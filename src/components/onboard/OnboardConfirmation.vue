<template>
  <q-page class="onboard-confirmation">
    <q-card>
      <q-card-section>
        <div class="text-h6">Onboarding Complete!</div>
        <div>
          That was easy! When you're ready, you can explore the integrations.
          Otherwise, check out the dashboard.
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Integrations" @click="handleIntegrationsClick" />
        <q-btn flat label="Dashboard" @click="handleDashboardClick" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
import { ROUTE_NAMES } from 'src/router/master-routes';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
  // Add any props you need here
});

const handleIntegrationsClick = () => {
  // Add your logic for the "Integrations" button click here
  router.push({ name: ROUTE_NAMES.IntegrationHome });
};

const handleDashboardClick = () => {
  // Add your logic for the "Dashboard" button click here
  router.push({ name: ROUTE_NAMES.Dashboard });
};
</script>

<style scoped>
/* Add your styles here */
</style>
