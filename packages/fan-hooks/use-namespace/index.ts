import { InjectionKey, Ref, computed, inject, ref, unref } from 'vue';

export const defaultNamespace = 'f';

const statePrefix = 'is-';

export const namespaceContextKey: InjectionKey<Ref<string | undefined>> =
  Symbol('namespaceContextKey');

const _bem = (
  namespace: string,
  block: string,
  {
    blockSuffix,
    element,
    modifier
  }: { blockSuffix?: string; element?: string; modifier?: string }
) => {
  let cls = `${namespace}-${block}`;
  // 前缀
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }

  //
  if (element) {
    cls += `__${element}`;
  }

  //
  if (modifier) {
    cls += `--${modifier}`;
  }

  return cls;
};

export const useGetDerivedNamespace = (namespaceOverrides?: Ref<string | undefined>) => {
  const derivedNamespace =
    namespaceOverrides || inject(namespaceContextKey, ref(defaultNamespace));

  const namespace = computed(() => unref(derivedNamespace) || defaultNamespace);
  return namespace;
};

// 使用命名空间
export const useNamespace = (
  block: string,
  namespaceOverrodes?: Ref<string | undefined>
) => {
  const namespace = useGetDerivedNamespace(namespaceOverrodes);

  const b = (blockSuffix = '') => {
    return _bem(namespace.value, block, { blockSuffix: blockSuffix });
  };

  const m = (modifier?: string) => {
    return modifier ? _bem(namespace.value, block, { modifier }) : '';
  };

  const is = (name: string, ...args: [boolean | undefined]) => {
    const state = args.length >= 1 ? args[0] : true;
    return name && state ? `${statePrefix}${name}` : '';
  };

  return {
    b,
    m,
    is
  };
};
