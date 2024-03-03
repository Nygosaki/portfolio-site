import classes from "../styling/Layout.module.scss";

const Layout = (props) => {
  return <div class={classes.content}>{props.children}</div>;
};

export default Layout;
