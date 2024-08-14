export const VARIANTS = {
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
  LOADING: 'loading',
} as const;

export type Variant = (typeof VARIANTS)[keyof typeof VARIANTS];

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: Variant;
  children?: React.ReactNode;
  loading?: boolean;
}
