<template>
  <q-item clickable @click="navigate">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

defineOptions({
  name: 'DrawerNavLink',
});

export interface DrawerNavLinkProps {
  title: string;
  caption?: string;
  link?: string;
  icon?: string;
}

const props = withDefaults(defineProps<DrawerNavLinkProps>(), {
  caption: '',
  link: '#',
  icon: '',
});

const router = useRouter();

function navigate() {
  if (props.link) {
    router.push(props.link);
  }
}
</script>
