import faker from 'faker';

export const productsArray = [...Array(20)].map(() => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  image: faker.random.image(),
  stock: faker.random.arrayElement([0, 1, 3, 5, 9]),
  rating: faker.random.arrayElement([1, 2, 3, 4, 5]),
}));
