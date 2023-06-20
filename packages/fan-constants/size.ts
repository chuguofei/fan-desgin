export const componentsSizes = ['', 'default', 'small', 'large'] as const;

export type ComponentSize = (typeof componentsSizes)[number];
