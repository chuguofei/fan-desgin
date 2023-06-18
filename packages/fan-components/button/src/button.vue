<script lang="ts" setup>
import { PropType, computed, inject } from 'vue';
import { getPrefixCls } from '../../_utils/global-config';
import { Status } from '../../_utils/constant';
import { Size } from '../../_utils/constant';
import { buttonGroupInjectionKey } from '../context';
import { useSize } from '../../_hooks/use-size';

defineOptions({
  name: 'Button'
});

const props = defineProps({
  /**
   * 按钮类型 深色 浅色 边框
   * @default dart
   */
  type: {
    type: String as PropType<'dark' | 'light' | 'border'>
  },
  /**
   * 按钮状态
   * primary success warning danger
   * 主要的 成功  警告 危险
   */
  status: {
    type: String as PropType<Status>
  },
  /**
   * 按钮形状
   * @value square  长方形（默认）、circle - 圆形、 round - 全圆角
   * @default square
   */
  shape: {
    type: String as PropType<'square' | 'round' | 'circle'>
  },
  /**
   * 按钮大小
   * @value 'mini', 'small', 'medium', 'large'
   * @default medium
   */
  size: {
    type: String as PropType<Size>
  },
  /**
   * 按钮是否在加载中
   * @default false
   */
  loading: {
    type: Boolean,
    default: false
  },
  /**
   * 按钮是否禁用
   * @default false
   */
  disabled: {
    type: Boolean,
    default: false
  }
});

const emits = defineEmits(['click']);

const prefixCls = getPrefixCls('btn');

// 获取从button group 中的属性
const groupContext = inject(buttonGroupInjectionKey, undefined);

const _size = computed(() => props.size ?? groupContext?.size);

const { mergedSize } = useSize(_size);

const cls = computed(() => [
  prefixCls,
  `${prefixCls}-type-${props.type ?? groupContext?.type ?? 'dark'}`,
  `${prefixCls}-status-${props.status ?? groupContext?.status ?? 'primary'}`,
  `${prefixCls}-shape-${props.shape ?? groupContext?.shape ?? 'square'}`,
  `${prefixCls}-size-${mergedSize.value}`,
  {
    [`${prefixCls}-disabled`]: props.disabled,
    [`${prefixCls}-loading`]: props.loading
  }
]);

const handleClick = (event: MouseEvent) => {
  if (props.loading || props.disabled) {
    event.preventDefault();
    return;
  }
  emits('click', event);
};
</script>

<template>
  <button :class="[cls]" :disabled="props.disabled" @click="handleClick">
    <span v-if="loading || $slots.icon" :class="`${prefixCls}-icon`">
      这里是loading 或者 是 自定义icon
    </span>
    <slot />
  </button>
</template>
