import React, {
  cloneElement,
  FC,
  Fragment,
  ReactElement,
  ReactNode,
  useEffect,
  useState
} from 'react';

import ModalContainer from './Container';
import { Context } from './core';

const Provider: FC<Props> = ({ children }) => {
  const [modals, setModals] = useState<ReactElement[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const show = (content: ReactElement) =>
    setModals((prev) => [...prev, content]);

  const dismiss = async (content: ReactElement) => {
    setIsVisible(false);

    return await new Promise<void>((resolve) =>
      setTimeout(() => {
        setModals((prev) =>
          prev.filter((_content) => !Object.is(_content, content))
        );
        resolve();
      }, 200)
    );
  };

  useEffect(() => {
    setIsVisible(!!modals.length);
  }, [modals.length]);

  return (
    <Context.Provider
      value={{
        show,
        dismiss,
        isVisible
      }}
    >
      {children}
      <ModalContainer>
        {modals.map((content, i) => {
          if (React.isValidElement(content))
            return (
              <Fragment key={i}>
                {cloneElement(content as ReactElement, {
                  dismiss: () => dismiss(content),
                  style: {
                    zIndex: i + 101
                  }
                })}
              </Fragment>
            );
        })}
      </ModalContainer>
    </Context.Provider>
  );
};

interface Props {
  children: ReactNode;
}

export default Provider;
