import { useState } from 'react';
import EstateItem from './EstateItem';
import classes from './AllEstate.module.css';
import estateImage from '../../assets/post-1.jpg';
import TypeFilter from '../buypage/TypeFilter';

const DUMMY_ESTATES = [
  {
    id: 'e1',
    image: estateImage,
    type: 'Բնակարան',
    place: 'Երևան, Կենտրոն',
    price: '100.000',
    bed: '3',
    sqft: '60',
  },
  {
    id: 'e5',
    image: estateImage,
    type: 'Բնակարան',
    place: 'Երևան, Կենտրոն',
    price: '100.000',
    bed: '3',
    sqft: '60',
  },
  {
    id: 'e2',
    image: estateImage,
    type: 'Առանձնատուն',
    place: 'Երևան, Կենտրոն',
    price: '200.000',
    bed: '5',
    sqft: '160',
  },
  {
    id: 'e3',
    image: estateImage,
    type: 'Հողատարածք',
    place: 'Երևան, Կենտրոն',
    price: '100.000',
    bed: '3',
    sqft: '60',
  },
  {
    id: 'e4',
    image: estateImage,
    type: 'Կոմերցիոն տարածք',
    place: 'Երևան, Կենտրոն',
    price: '100.000',
    bed: '3',
    sqft: '60',
  },
];

function AllEstate() {
  const [filteredEstate, setFilteredEstate] = useState('Ամբողջը');

  const filteredItems = DUMMY_ESTATES.filter((item) => {
    if (filteredEstate === 'Ամբողջը') {
      return true;
    } else {
      return item.type === filteredEstate;
    }
  });

  const filterChangeHandler = (selectedEstate) => {
    setFilteredEstate(selectedEstate);
  };

  return (
    <section>
      <TypeFilter
        selected={filteredEstate}
        onChangeFilter={filterChangeHandler}
      />

      <ul className={classes['estate-list']}>
        {filteredItems.map((estate) => (
          <li>
            <EstateItem
              key={estate.id}
              image={estate.image}
              type={estate.type}
              place={estate.place}
              price={estate.price}
              bed={estate.bed}
              sqft={estate.sqft}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AllEstate;
