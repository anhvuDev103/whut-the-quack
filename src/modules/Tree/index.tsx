import Button from '@components/Button';
import Empty from '@components/reusables/Empty';
import { useModal } from '@providers/Modal/core';

import AddTreeModal from './AddTreeModal';
import { TreeFrame, TreeFrameEmpty } from './styles';

const Tree = () => {
  const [showContractDetails] = useModal(<AddTreeModal />);

  return (
    <TreeFrameEmpty label='Tree'>
      <Empty />
      <Button onClick={showContractDetails}>Add Tree</Button>
    </TreeFrameEmpty>
  );

  // return (
  //   <TreeFrame label='Tree'>
  //    Tree
  //   </TreeFrame>
  // );
};

export default Tree;
