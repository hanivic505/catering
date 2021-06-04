import React from "react";
import { IProduct } from "core.models";
import clsx from "clsx";
import { Button } from "antd";

import { Image } from "../../../../ui/image";

import styles from "./ListItemDetail.module.scss";

interface IProps {
  item: IProduct;
}

export default function ListItemDetail({ item }: IProps) {
  return (
    <div className={clsx(styles.item)}>
      <div className={styles.content}>
        <div>
          <Image src={item.product_image} />
        </div>
        <div className={styles.data}>
          <h2>
            <span>{item.product}</span>
            <span>Price: {item.price}</span>
          </h2>
          <div>{item.product_description}</div>
          <div className={styles.description}>
            {item.product_description_long}
          </div>
          <hr />
          <div>
            <h6>Toppings</h6>
            <ul>
              {item.toppings.map((t) => (
                <li key={t.id}>{t.name}</li>
              ))}
            </ul>
          </div>
          <div className={styles.footer}>
            <div />
            <Button type="primary">Add to Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
