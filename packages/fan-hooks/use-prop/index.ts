import { ComputedRef, computed, getCurrentInstance } from 'vue';

export const useProp = <T>(name: string): ComputedRef<T | undefined> => {
  const vm = getCurrentInstance();
  // 从当前实例的props中获取属性
  return computed(() => (vm?.proxy?.$props as any)?.[name]);
};
