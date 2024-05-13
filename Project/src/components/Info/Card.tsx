import { FC } from "react";
import styles from "./Info.module.scss";
interface Card {
  title: string;
  count: number;
}

const Card: FC<Card> = (props) => {
  return (
    <div className={styles.infoCard}>
      <p>{props.title}</p>
      <b>{props.count}</b>
    </div>
  );
};

export default Card;
