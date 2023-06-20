export type EqPropInputDefault<Required extends boolean, Default> = Required extends true
  ? never
  : Default extends Record<string, undefined> | Array<any>
  ? () => Default
  : (() => Default) | Default;

export type IfEpProp<T, Y, N> = T extends { [epPropKey]: true } ? Y : N;

export type EqPropInput<Type, Required extends boolean, Value, Validator, Default> = {
  // 类型
  type?: Type;
  // 是否必填
  required?: Required;
  // propTypes
  values?: readonly Value[];
  // 验证器
  validator?: ((val: any) => val is Validator) | ((val: any) => boolean);
};
