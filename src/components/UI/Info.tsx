import React from "react";
import classes from "./Info.module.scss";
function Info(props: any) {
  return <div className={classes.info}>{props.children}</div>;
}

export default Info;
