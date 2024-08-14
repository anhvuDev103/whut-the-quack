export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  error?: string | boolean;
  note?: string;
  onClickAction?: () => void;
  actionLabel?: string;
}
