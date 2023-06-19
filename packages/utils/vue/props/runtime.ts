export const buildProp = <Props extends Record<string, any>>(props: Props) => {
  return Object.entries(props);
};
