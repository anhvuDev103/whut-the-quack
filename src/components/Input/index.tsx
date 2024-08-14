import Button from '@components/Button';

import { InputFrame } from './styled';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({
  label,
  error,
  note,
  onClickAction,
  actionLabel,
  ...props
}) => {
  return (
    <InputFrame>
      {label && (
        <div className='Input-Head'>
          <label>{label}</label>
          <span className='Input-Error'>{error}</span>
        </div>
      )}
      <div className='Input-Container'>
        <input {...props} />
        {note && <div className='Input-Note'>{note}</div>}
        {!!onClickAction && (
          <Button onClick={onClickAction}>{actionLabel}</Button>
        )}
      </div>
    </InputFrame>
  );
};

export default Input;
