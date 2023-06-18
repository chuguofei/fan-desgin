import { InjectionKey } from 'vue';
import { Size, Status } from '../_utils/constant';

export interface ButtonGroupContext {
  // 按钮大小
  size: Size | undefined;
  // 按钮状态
  status: Status | undefined;
  // 按钮类型
  type: 'dark' | 'light' | 'border';
  // 是否禁用
  disabled: Boolean;
  // 圆角
  shape: 'square' | 'round' | 'circle' | undefined;
}

export const buttonGroupInjectionKey: InjectionKey<ButtonGroupContext> =
  Symbol('FanButtonGroup');
