<script lang="ts" setup>
import { computed } from 'vue';
import { buttonProps, buttonEmits } from './button';
import { useNamespace } from '@fan-design/hooks';
import { useButton } from './use-button';
defineOptions({
  name: 'FButton'
});
const props = defineProps(buttonProps);

const emit = defineEmits(buttonEmits);

const namespace = useNamespace('button');

const { _type, _size, _disabled } = useButton(props, emit);

const cls = computed(() => [
  namespace.b(),
  namespace.m(_type.value),
  namespace.m(_size.value),
  namespace.is('disabled', _disabled.value),
  namespace.is('loading', props.loading),
  namespace.is('plan', props.plain),
  namespace.is('round', props.round),
  namespace.is('circle', props.circle),
  namespace.is('text', props.text),
  namespace.is('link', props.link)
]);
</script>

<template>
  <component :is="tag" :class="cls">
    <span v-if="$slots.default">
      <slot />
    </span>
  </component>
</template>
