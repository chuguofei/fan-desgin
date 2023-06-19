import { buildProps } from '@fan-design/utils'
 
export const useSizeProp = buildProps({
  type: String,
  values: componentsSizes,
  required: false
});
