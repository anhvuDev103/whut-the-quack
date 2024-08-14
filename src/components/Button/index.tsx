import { ButtonFrame } from './styled';
import { ButtonProps, VARIANTS } from './types';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = VARIANTS.SUCCESS,
  loading,
  disabled,
  ...props
}) => {
  return (
    <ButtonFrame
      disabled={loading || disabled}
      $variant={loading ? VARIANTS.LOADING : variant}
      {...props}
    >
      <div className='ButtonLabel'>{children}</div>
    </ButtonFrame>
  );
};

export default Button;
