import React, { useState, useEffect } from 'react';
import Task from './components/Task';
import {
  Box,
  Center,
  CheckboxGroup,
  Text,
  Flex,
  Input,
  Button,
} from '@chakra-ui/react';
import axios from 'axios';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState('');

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:3010/tasks');
    setTasks(response.data);
  };

  const createTask = async () => {
    await axios.post('http://localhost:3010/tasks', {
      name: name,
      is_done: false,
    });
    setName('');
    fetchTasks();
  };

  const destroyTask = async (id) => {
    await axios.delete(`http://localhost:3010/tasks/${id}`);
    fetchTasks();
  };

  const toggleIsDone = async (index, id) => {
    const isDone = tasks[index].is_done;
    await axios.put(`http://localhost:3010/tasks/${id}`, {
      is_done: !isDone,
    });
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <Box mt='64px'>
        <Center>
          <Box>
            <Box mb='24px'>
              <Text fontSize='24px' fontWeight='bold'>
                タスク一覧
              </Text>
            </Box>
            <Flex mb='24px'>
              <Input
                placeholder='タスク名を入力'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Box ml='16px'>
                <Button
                  colorScheme='teal'
                  onClick={createTask}
                  isDisabled={!name}
                >
                  タスクを作成
                </Button>
              </Box>
            </Flex>
            <CheckboxGroup>
              {tasks.map((task, index) => {
                return (
                  <Task
                    key={index}
                    index={index}
                    id={task.id}
                    name={task.name}
                    isDone={task.is_done}
                    toggleIsDone={toggleIsDone}
                    destroyTask={destroyTask}
                  />
                );
              })}
            </CheckboxGroup>
          </Box>
        </Center>
      </Box>
    </>
  );
};

export default App;
