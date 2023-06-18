<script lang="ts" setup>
import { PropType, getCurrentInstance, provide, reactive, toRefs } from 'vue';
import type { Size } from '../_utils/constant';
import { configProviderInjectionKey } from './context';

defineOptions({
  name: 'ConfigProvider'
});

const props = defineProps({
  // css类名前缀
  prefixCls: {
    type: String,
    default: 'fan'
  },
  // 大小
  size: {
    type: String as PropType<Size>
  },
  // 是否全局生效
  global: {
    type: Boolean,
    default: false
  }
});

const slots = defineSlots();

const { prefixCls, size } = toRefs(props);

const config = reactive({
  slots,
  prefixCls,
  size
});

if (props.global) {
  const instance = getCurrentInstance();
  // 设置全局接受
  instance && instance.appContext.app.provide(configProviderInjectionKey, config);
} else {
  provide(configProviderInjectionKey, config);
}
</script>

<template>
  <slot />
</template>
