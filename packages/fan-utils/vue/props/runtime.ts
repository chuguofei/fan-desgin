import { hasOwn } from '@vue/shared';
import { isObject } from '../../types';
import { PropType, warn } from 'vue';
import { fromPairs } from 'lodash-es';
import { IfEpProp } from './types';

export const definePropType = <T>(val: any): PropType<T> => val;

export const buildProp = (prop: Record<string, any>, key?: string) => {
  if (!isObject(prop)) {
    return prop as any;
  }

  const { values, required, default: defaultValue, type, validator } = prop;

  const _validator =
    values || validator
      ? (val: unknown) => {
          let valid = false;
          let allowedValues: unknown[] = [];

          if (values) {
            allowedValues = Array.from(values);
            if (hasOwn(prop, 'default')) {
              allowedValues.push(defaultValue);
            }
            valid ||= allowedValues.includes(val);
          }

          if (validator) {
            valid ||= validator(val);
          }

          if (!valid && allowedValues.length > 0) {
            warn(`Invalid prop erorr key:${key}`);
          }

          return valid;
        }
      : undefined;

  const eqProp: any = {
    type,
    required: !!required,
    validator: _validator
  };
  if (hasOwn(prop, 'default')) {
    eqProp['default'] = defaultValue;
  }

  return eqProp;
};

export const buildProps = <Props extends Record<string, any>>(props: Props): Props => {
  return fromPairs(
    Object.entries(props).map(([key, options]) => {
      return [key, buildProp(options as any, key)];
    })
  ) as any;
};
