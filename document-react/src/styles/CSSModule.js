import styles from "./CSSModule.module.scss";

const CSSModule = () => {
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      Hello World i'm <span className="something">CSS Module!!</span>
    </div>
  );
};

export default CSSModule;
