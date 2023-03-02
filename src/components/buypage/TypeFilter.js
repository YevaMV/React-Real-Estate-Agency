import classes from './TypeFilter.module.css';

function TypeFilter(props) {
  const typeFilterHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className={classes['type - filter']}>
      <div className={classes['type-filter__control']}>
        <select value={props.selected} onChange={typeFilterHandler}>
          <option selected disabled value="Ամբողջը">
            Ամբողջը
          </option>
          <option value="Բնակարան">Բնակարան</option>
          <option value="Առանձնատուն">Առանձնատուն</option>
          <option value="Կոմերցիոն տարածք">Կոմերցիոն տարածք</option>
          <option value="Հողատարածք">Հողատարածք</option>
          <option value="Այլ">Այլ</option>
        </select>
      </div>
    </div>
  );
}

export default TypeFilter;
