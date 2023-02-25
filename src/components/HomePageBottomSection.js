import classes from './HomePageBottomSection.module.css';
import { useNavigate } from 'react-router-dom';

function HomePageBottomSections(props) {
  const navigate = useNavigate();

  function navigationHandler() {
    navigate(props.link);
  }

  return (
    <section className={classes.bottom} onClick={navigationHandler}>
      <div className={classes.img}>
        <img src={props.img} alt="section img" />
      </div>
      <h4>{props.title}</h4>
      <p className={classes.text}>{props.text}</p>
      <button>Տեսնել ավելին</button>
    </section>
  );
}
export default HomePageBottomSections;
