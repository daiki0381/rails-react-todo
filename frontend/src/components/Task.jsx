import { Checkbox, Text, Flex } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

const Task = ({ name, isDone, toggleIsDone, index, destroyTask, id }) => {
  return (
    <Flex mb='16px' justifyContent='space-between' alignItems='center'>
      <Checkbox
        colorScheme='blue'
        size='lg'
        isChecked={isDone}
        onChange={() => {
          toggleIsDone(index, id);
        }}
      >
        <Text>{name}</Text>
      </Checkbox>
      <CloseIcon onClick={() => destroyTask(id)} />
    </Flex>
  );
};

export default Task;
