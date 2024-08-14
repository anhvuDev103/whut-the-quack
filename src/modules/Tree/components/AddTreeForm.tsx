import Button from '@components/Button';
import Input from '@components/Input';
import { InputProps } from '@components/Input/types';
import { generateName } from '@utils/common';
import { isEmpty } from 'lodash';
import { useMemo, useState } from 'react';

import { AddForm } from '../styles';

interface AddFormState {
  name: string;
  array: string;
}

const AddTreeForm = () => {
  const [addFormState, setAddFormState] =
    useState<AddFormState>(getDefaultAddForm());

  const errorForm = useMemo(() => {
    if (!addFormState.name) {
      return 'Empty Name';
    }

    if (!addFormState.array) {
      return 'Empty Array';
    }

    try {
      const parsed = JSON.parse(addFormState.array);
      if (!Array.isArray(parsed)) throw new Error();

      if (isEmpty(parsed)) return 'Empty Array';
    } catch {
      return 'Invalid Array';
    }
  }, [addFormState.array, addFormState.name]);

  const computedInputProps = (name: keyof AddFormState): InputProps => {
    return {
      value: addFormState[name],
      onChange: (event) =>
        setAddFormState((prev) => ({
          ...prev,
          [name]: event.target.value,
        })),
    };
  };

  const handleAddContract = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <AddForm onSubmit={handleAddContract}>
        <Input label='Tree Name' {...computedInputProps('name')} />
        <Input label='Array' {...computedInputProps('array')} />
        <Button disabled={!!errorForm} className='Tree-AddAction'>
          {errorForm || 'Add Tree'}
        </Button>
      </AddForm>
    </div>
  );
};

function getDefaultAddForm(): AddFormState {
  return {
    name: generateName(),
    array: '',
  };
}

export default AddTreeForm;
