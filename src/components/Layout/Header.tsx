import { Fragment, useEffect, useState } from "react";
import mealsImage from "../../assets/img/meals.jpg";
import classes from "./Header.module.scss";
import { useAppDispatch, useAppSelector } from "../../reducer/hooks";
import { showCartAction, showInformation } from "../../reducer/mealsSlice";

function Header() {
  const dispatch = useAppDispatch();
  const [itemAdded, setItemAdded] = useState(false);
  const meals = useAppSelector((state) => state.meals);
  const amountItems = meals.reduce((acc, next: any) => acc + next.amount, 0);

  const btnClasses = `${classes.button} ${itemAdded && classes.bump}`;

  const openCart = () => {
    dispatch(showCartAction(true));
  };
  const openIconInformation = () => {
    dispatch(showInformation(true));
  };
  useEffect(() => {
    setItemAdded(true);
    const timer = setTimeout(() => {
      setItemAdded(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [meals]);
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.headerMenu}>
          <h2>ReactMeals</h2>
          <div className={classes.openIcon} onClick={openIconInformation}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 128 128"
            >
              <circle cx="64" cy="64" r="55" fill="#fff"></circle>
              <path
                fill="#75fa61"
                d="M15,69.2c-1.6,0-2.9-1.3-3-2.9c0-0.8-0.1-1.5-0.1-2.3c0-1.7,1.3-3,3-3s3,1.3,3,3c0,0.7,0,1.4,0,2.1 c0.1,1.7-1.2,3.1-2.9,3.1C15.1,69.2,15.1,69.2,15,69.2z"
              ></path>
              <path
                fill="#75fa61"
                d="M64,116c-19.9,0-37.8-11.1-46.6-29c-0.7-1.5-0.1-3.3,1.4-4s3.3-0.1,4,1.4C30.6,100.2,46.4,110,64,110 c25.4,0,46-20.6,46-46c0-12.3-4.8-23.8-13.5-32.5c-1.2-1.2-1.2-3.1,0-4.2c1.2-1.2,3.1-1.2,4.2,0C110.6,37.1,116,50.1,116,64 C116,92.7,92.7,116,64,116z"
              ></path>
              <circle cx="64" cy="39" r="7" fill="#e4e4e7"></circle>
              <path
                fill="#e4e4e7"
                d="M57,68l0,24c0,3.9,3.1,7,7,7h0c3.9,0,7-3.1,7-7V68c0-3.9-3.1-7-7-7h0C60.1,61,57,64.1,57,68z"
              ></path>
              <path
                fill="#444b54"
                d="M64,122C32,122,6,96,6,64S32,6,64,6s58,26,58,58S96,122,64,122z M64,12c-28.7,0-52,23.3-52,52s23.3,52,52,52 s52-23.3,52-52S92.7,12,64,12z"
              ></path>
              <path
                fill="#444b54"
                d="M64,49c-5.5,0-10-4.5-10-10s4.5-10,10-10s10,4.5,10,10S69.5,49,64,49z M64,35c-2.2,0-4,1.8-4,4s1.8,4,4,4 s4-1.8,4-4S66.2,35,64,35z"
              ></path>
              <path
                fill="#444b54"
                d="M64,102c-5.5,0-10-4.5-10-10V68c0-5.5,4.5-10,10-10s10,4.5,10,10v24C74,97.5,69.5,102,64,102z M64,64 c-2.2,0-4,1.8-4,4v24c0,2.2,1.8,4,4,4s4-1.8,4-4V68C68,65.8,66.2,64,64,64z"
              ></path>
            </svg>
          </div>
          <button className={btnClasses} onClick={openCart}>
            <span className={classes.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
              </svg>
            </span>
            <span className={classes.text}>Your Cart</span>
            <span className={classes.badge}>{amountItems}</span>
          </button>
        </div>
      </header>
      <div className={classes.headerImg}>
        <img src={mealsImage} alt="mealsImage" />
      </div>
    </Fragment>
  );
}
export default Header;
