import { ComponentSize } from '@fan-design/constants';
import { useGlobalSize } from '@fan-design/hooks';
import { useProp } from '@fan-design/hooks/use-prop';
import { MaybeRef, computed, ref, unref } from 'vue';

export const useFormSize = (
  ignore: Partial<Record<'prop' | 'form' | 'formItem' | 'global', boolean>>,
  fallback?: MaybeRef<ComponentSize | undefined>
) => {
  const emptyRef = ref(undefined);

  const size = ignore.prop ? emptyRef : useProp<ComponentSize>('size');

  const globalConfig = ignore.global ? emptyRef : useGlobalSize();

  return computed(() => size.value || unref(fallback) || globalConfig.value || '');
};
