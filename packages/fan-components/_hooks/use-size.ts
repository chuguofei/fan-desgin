import { Ref, computed, inject } from 'vue';
import { Size } from '../_utils/constant';
import { configProviderInjectionKey } from '../config-provider/context';

export const useSize = (
  size?: Ref<Size | undefined>,
  { defaultValue = 'medium' }: { defaultValue?: Size } = {}
): { mergedSize: Ref<string | undefined> } => {
  // 从全局中获取
  const configProviderCtx = inject(configProviderInjectionKey, undefined);

  const mergedSize = computed(
    () => size?.value ?? configProviderCtx?.size ?? defaultValue
  );

  return {
    mergedSize
  };
};
