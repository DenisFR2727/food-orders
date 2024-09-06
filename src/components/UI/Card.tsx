import React from "react";
import classes from "./Card.module.scss";

function Card(props: any) {
  return <div className={classes.card}>{props.children}</div>;
}
export default Card;
