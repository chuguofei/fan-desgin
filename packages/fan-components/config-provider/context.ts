import type { Slots, InjectionKey } from 'vue';
import type { Size } from '../_utils/constant';

export interface ConfigProvider {
  // 插槽
  slots: Slots;
  // 类名前缀
  prefixCls?: string;
  // 统一大小
  size?: Size;
  updateAtScroll?: boolean;
  scrollToClose?: boolean;
}

export const configProviderInjectionKey: InjectionKey<ConfigProvider> = Symbol(
  'FanDesignConfigProvider'
);
