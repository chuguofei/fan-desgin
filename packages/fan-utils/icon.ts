import { Component } from 'vue';
import { definePropType } from './vue';

// icon 的类型
export const iconPropType = definePropType<string | Component>([
  String,
  Object,
  Function
]);
