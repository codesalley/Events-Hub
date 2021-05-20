const CategoryList = [
  {
    id: 1,
    name: 'Music',
  },
  {
    id: 2,
    name: 'Rock',
  },
  {
    id: 3,
    name: 'Country',
  },
  {
    id: 4,
    name: 'Merchandise',
  },
  {
    id: 5,
    name: 'Individual',
  },
  {
    id: 6,
    name: 'Casino/Gaming',
  },
  {
    id: 7,
    name: 'Aquatics',
  },
  {
    id: 8,
    name: 'Alternative',
  },
  {
    id: 9,
    name: 'Children\'s Theatre',
  },
  {
    id: 10,
    name: 'Donation',
  },
];

const Category = () => (
  <div>
    {CategoryList.map((ele, indx) => (
      <p key={indx.toString()}>
        {ele.name}
      </p>
    ))}

  </div>
);

export default Category;
