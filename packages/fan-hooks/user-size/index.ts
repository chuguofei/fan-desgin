import { ComponentSize, componentsSizes } from '@fan-design/constants';
import { buildProp } from '@fan-design/utils';
import { InjectionKey, Ref, computed, inject, unref } from 'vue';

export const useSizeProp = buildProp({
  type: String,
  values: componentsSizes,
  required: false
} as const);

export interface SizeContext {
  size: Ref<ComponentSize>;
}

export const SIZE_INJECTION_KEY: InjectionKey<SizeContext> = Symbol('size');

// 获取全局size
export const useGlobalSize = () => {
  const injectSize = inject(SIZE_INJECTION_KEY, {} as SizeContext);

  return computed<ComponentSize>(() => {
    return unref(injectSize.size) || '';
  });
};
