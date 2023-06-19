import { buildProps } from '@fan-design/utils';

export const buttonProps = buildProps({
  disabled: Boolean,
  type: {
    type: String,
    values: [],
    default: ''
  }
});
