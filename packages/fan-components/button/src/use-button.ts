import { SetupContext, computed, inject, ref } from 'vue';
import type { ButtonEmits, ButtonProps } from './button';
import { buttonGroupInjectionKey } from '../context';

export const useButton = (
  props: ButtonProps,
  emit: SetupContext<ButtonEmits>['emit']
) => {
  const _ref = ref<HTMLButtonElement>();

  const buttonGroupContext = inject(buttonGroupInjectionKey, undefined);

  const _type = computed(() => props.type || buttonGroupContext?.type || '');

  const _size = computed(() => props.size ?? buttonGroupContext?.size);

  const _disabled = computed(() => props.disabled ?? false);

  const handleClick = (event: MouseEvent) => {
    if (props.nativeType == 'reset') {
      // 表单重置
    }
    emit('click', event);
  };

  return {
    _ref,
    _type,
    _size,
    _disabled,
    handleClick
  };
};
