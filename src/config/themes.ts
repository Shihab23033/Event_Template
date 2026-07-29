export const availableThemes = ['gold', 'rose', 'emerald', 'midnight'] as const;
export type Theme = typeof availableThemes[number];