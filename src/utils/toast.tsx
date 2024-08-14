import { toast as _toast, ToastOptions } from 'react-toastify';

export const toast = {
  success: (
    title: React.ReactNode,
    detail?: React.ReactNode,
    opts?: ToastOptions
  ) => {
    _toast.dismiss();
    _toast.success(
      <>
        <span className='Toast-Title'>{title}</span>
        {detail && <div className='Toast-Detail'>{detail}</div>}
      </>,
      opts
    );
  },
  error: (
    title: React.ReactNode,
    detail?: React.ReactNode,
    opts?: ToastOptions
  ) => {
    _toast.dismiss();
    _toast.error(
      <>
        <span className='Toast-Title'>{title}</span>
        {detail && <div className='Toast-Detail'>{detail}</div>}
      </>,
      opts
    );
  }
};
