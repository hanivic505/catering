import React from "react";
import { IProduct } from "core.models";
import { Link } from "react-router-dom";
import clsx from "clsx";

import { Image } from "../../../../ui/image";

import styles from "./ListItem.module.scss";

interface IProps {
  item: IProduct;
}

export default function ListItem({ item }: IProps) {
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
          <div className={styles.description}>{item.product_description}</div>
          <div className={styles.footer}>
            <div />
            <Link className="btn btn-primary btn-sm" to={`/${item.product_id}`}>
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
