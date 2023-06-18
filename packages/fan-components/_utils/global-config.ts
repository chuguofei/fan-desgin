import { App, getCurrentInstance, inject } from 'vue';
import { configProviderInjectionKey } from '../config-provider/context';
import { FanOptions } from './types';

// 注册组件时候的前缀
const COMPONENT_PREFIX = 'F';
// css 类前缀
const CLASS_PREFIX = 'fan';
// 自定义设置全局类名
const GLOBAL_CONFIG_NAME = '$fan';

/**
 * 注册组件前缀
 * @param options
 * @returns
 */
export const getComponentPrefix = (options?: FanOptions): string => {
  return options?.componentPrefix ?? COMPONENT_PREFIX;
};

/**
 * 设置前缀
 * @param app
 * @param options
 */
export const setGlobalConfig = (app: App, options?: FanOptions): void => {
  if (options && options.classPrefix) {
    app.config.globalProperties[GLOBAL_CONFIG_NAME] = {
      ...(app.config.globalProperties[GLOBAL_CONFIG_NAME] ?? {}),
      classPrefix: options.classPrefix
    };
  }
};

/**
 * 获取css类名前缀
 * @param componentName
 * @returns
 */
export const getPrefixCls = (componentName?: string): string => {
  const instance = getCurrentInstance();
  const configProvider = inject(configProviderInjectionKey, null);

  const prefix =
    configProvider?.prefixCls ??
    instance?.appContext.config.globalProperties[GLOBAL_CONFIG_NAME] ??
    CLASS_PREFIX;

  if (componentName) {
    return `${prefix}-${componentName}`;
  }

  return prefix;
};
