<script lang="ts" setup>
import { buttonProps } from './button'
defineOptions({
  name: 'Button'
});

const props = defineProps(buttonProps);
</script>

<template>
  <button>123</button>
</template>
