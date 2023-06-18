// 组件大小
export const SIZES = ['mini', 'small', 'medium', 'large'] as const;
export type Size = (typeof SIZES)[number];

// 状态
export const STATUSES = ['primary', 'success', 'warning', 'danger'] as const;
export type Status = (typeof STATUSES)[number];
