import classes from './HomePageTopSections.module.css';

function HomePageTopSections(props) {
  const { specialStyle } = props;
  return (
    <section className={classes.top}>
      <div className={` ${specialStyle ? classes.special : classes.top}`}>
        <div className={classes['image-block']}>
          <img src={props.img} alt="section img" />
        </div>
        <div className={classes.text}>
          <h2>{props.title}</h2>
          <p>{props.text}</p>
        </div>
      </div>
    </section>
  );
}

export default HomePageTopSections;
