import classes from "./breadcrumb.module.scss";

const Breadcrumb = ({ categories }) => {
  return (
    <div className={classes.breadcrumb}>
      <ul>
        {categories && categories.length > 0 ? (
          categories.map((category, index) => <li key={index}>{category}</li>)
        ) : (
          <li></li>
        )}
      </ul>
    </div>
  );
};

export default Breadcrumb;