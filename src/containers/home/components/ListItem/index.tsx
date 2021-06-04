import React from "react";

import { Button } from "antd";
import { Image } from "../../../../ui/image";

import styles from "./ListItem.module.scss";
import { IProduct } from "core.models";

interface IProps {
  item: IProduct;
}

export default function ListItem({ item }: IProps) {
  return (
    <div className={styles.item}>
      <div className={styles.content}>
        <div>
          <Image src={item.product_image} />
        </div>
        <div className={styles.data}>
          <h2>
            <span>{item.product}</span>
            <span>Price: {item.price}</span>
          </h2>
          <div className={styles.description}>{item.product_description}</div>
          <div className={styles.footer}>
            <div />
            <Button type="primary">View</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
