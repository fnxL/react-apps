import { Heading, IconButton, useColorMode, VStack } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { useLocalStorage } from './hooks';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  const [todos, setTodos] = useLocalStorage('items', []);

  return (
    <div className='App'>
      <VStack p={4}>
        <IconButton
          onClick={toggleColorMode}
          alignSelf='flex-end'
          size='lg'
          isRound
          icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        />
        <Heading
          mb='8'
          fontWeight='extrabold'
          size='2xl'
          bgGradient='linear(to-r, #00c9ff, #92fe9d)'
          bgClip='text'
        >
          Todo App
        </Heading>
        <AddTodo todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </VStack>
    </div>
  );
}

export default App;
