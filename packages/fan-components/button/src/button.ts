import { buildProps, definePropType } from '@fan-design/utils';
import { useSizeProp } from '@fan-design/hooks';
import { iconPropType } from '@fan-design/utils/icon';
import { FIconLoading } from '@fan-design/icons';
import { Component, ExtractPropTypes } from 'vue';

export const buttonTypes = [
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  'text'
] as const;

export const buttonNativeTypes = ['button', 'submit', 'reset'] as const;

export const buttonProps = buildProps({
  /**
   * button size
   */
  size: useSizeProp,
  /**
   * 是否禁用
   */
  disabled: Boolean,
  /**
   * 按钮类型
   */
  type: {
    type: String,
    values: buttonTypes,
    default: ''
  },
  /**
   * icon
   */
  icon: {
    type: iconPropType
  },
  /**
   * 组件类型
   */
  nativeType: {
    type: String,
    values: buttonNativeTypes,
    default: 'button'
  },
  loading: Boolean,
  loadingIcon: {
    type: iconPropType,
    default: () => FIconLoading
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  round: Boolean,
  circle: Boolean,
  /**
   * 自定义 custom element tag
   */
  tag: {
    type: definePropType<string | Component>([String, Object]),
    default: () => 'button'
  }
} as const);

export const buttonEmits = {
  click: (event: MouseEvent) => event instanceof MouseEvent
};

// ExtractPropTypes 类型提取
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;

export type ButtonEmits = typeof buttonEmits;
