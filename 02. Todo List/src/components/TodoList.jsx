import {
  Heading,
  HStack,
  IconButton,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaCheck, FaTimes, FaTrash } from 'react-icons/fa';
import { useToast } from '@chakra-ui/react';

const TodoList = ({ todos, setTodos }) => {
  const toast = useToast();

  function handleDelete(id) {
    const newList = todos.filter((todo) => todo.id !== id);
    setTodos(newList);
    toast({
      title: 'Deleted.',
      description: 'Successfully deleted the item from your list.',
      status: 'error',
      duration: 7000,
      isClosable: true,
      position: 'top',
    });
  }

  function toggleComplete(id) {
    const newList = todos.map((todo) => {
      if (todo.id === id) {
        const updated = {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
        return updated;
      }

      return todo;
    });
    setTodos(newList);
  }
  return (
    <VStack
      divider={<StackDivider />}
      w='100%'
      borderWidth='2px'
      borderColor='gray.200'
      borderRadius='lg'
      p='4'
      maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
      alignItems='stretch'
    >
      {todos.length >= 1 ? (
        todos.map((todo) => (
          <HStack key={todo.id}>
            <Text as={todo.isCompleted ? 's' : ''}>{todo.name}</Text>
            <Spacer />
            <IconButton
              onClick={() => toggleComplete(todo.id)}
              icon={todo.isCompleted ? <FaTimes /> : <FaCheck />}
            />
            <IconButton
              onClick={() => handleDelete(todo.id)}
              icon={<FaTrash />}
            />
          </HStack>
        ))
      ) : (
        <Heading alignSelf='center'>No items to show!</Heading>
      )}
    </VStack>
  );
};

export default TodoList;
