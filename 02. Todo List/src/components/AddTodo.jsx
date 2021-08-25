import { IconButton, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useToast } from '@chakra-ui/react';

const AddTodo = ({ todos, setTodos }) => {
  const [content, setContent] = useState('');
  const toast = useToast();
  const handleSubmit = (e) => {
    e.preventDefault();

    const todo = {
      id: todos ? todos.length + 1 : 1,
      name: content,
      isCompleted: false,
    };

    setTodos([...todos, todo]);
    setContent('');

    toast({
      title: 'Added.',
      description: 'Successfully added into your list.',
      status: 'success',
      duration: 7000,
      isClosable: true,
      position: 'top',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack m={8}>
        <Input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          variant='filled'
          laceholder='Add Todo'
        />
        <IconButton type='submit' colorScheme='teal' px='4' icon={<FaPlus />} />
      </HStack>
    </form>
  );
};

export default AddTodo;
