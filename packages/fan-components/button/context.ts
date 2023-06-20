import { InjectionKey } from 'vue';
import { ButtonProps } from './src/button';

export interface ButtonGroupContext {
  size?: ButtonProps['size'];
  type?: ButtonProps['type'];
}

export const buttonGroupInjectionKey: InjectionKey<ButtonGroupContext> =
  Symbol('buttonGroupInjectKey');
