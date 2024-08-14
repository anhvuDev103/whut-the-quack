import { createContext, ReactElement, useContext } from 'react';

interface ContextModalContext {
  show: (_content: ReactElement) => void;
  dismiss: (_content: ReactElement) => Promise<void>;
  isVisible: boolean;
}

export const Context = createContext<ContextModalContext>({
  show: () => {},
  dismiss: async () => {},
  isVisible: false
});

export function useModal(content: ReactElement) {
  const value = useContext(Context);

  if (value === undefined) {
    throw new Error('Modal must be wrapped inside Provider');
  }

  const handleShow = () => value.show(content);

  const handleDismiss = () => value.dismiss(content);

  return [handleShow, handleDismiss];
}
