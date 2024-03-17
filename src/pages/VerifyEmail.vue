<template>
  <q-page padding>
    <div class="text-h6 q-my-md">Verify Email</div>
    <div class="q-my-md">
      You should have received an email asking you to verify your email account.
      Please verify your email and then click "I Verified".
    </div>
    <div class="row justify-around q-my-md">
      <q-btn
        label="I Verified"
        class="col q-mx-sm"
        @click="handleIVerifiedClick"
      />
      <q-btn
        label="Resend Email"
        class="col q-mx-sm"
        @click="handleResendEmailClick"
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { EVENTS } from 'src/common/events';

const emit = defineEmits([EVENTS.nextSlide]);

const handleIVerifiedClick = () => {
  // handle click event
  console.log('I Verified button clicked');
  console.log(EVENTS.nextSlide);
  emit(EVENTS.nextSlide);
};

const handleResendEmailClick = () => {
  // handle click event
  console.log('Resend Email button clicked');
};
</script>
