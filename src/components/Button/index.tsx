import { ButtonFrame } from './styled';
import { ButtonProps, VARIANTS } from './types';

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
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

Button.defaultProps = {
  variant: VARIANTS.SUCCESS,
};

export default Button;
