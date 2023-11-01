import classes from "../styling/Layout.module.scss";

const Layout = (props) => {
  return <div className={classes.content}>{props.children}</div>;
};

export default Layout;
