import React, { Component } from "react";
import styles from "./home.module.scss";
import { IProduct } from "core.models";
import { ServiceProxy } from "../../ServiceProxy";
import ListItem from "./components/ListItem";

interface IState {
  items?: IProduct[];
}

class Home extends Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = { items: [] };
  }
  componentDidMount() {
    this.reload();
  }
  reload = async () => {
    const items = await ServiceProxy.ProductService.getAll();
    this.setState({ items });
  };
  render() {
    const { items } = this.state;
    console.log(items);
    return (
      <div className={`container ${styles.wrapper}`}>
        <h1 className="page-title">Catering list</h1>
        <h2>HOT</h2>
        <hr />
        <ul className={styles.listing}>
          {items &&
            items.map((item: IProduct) => (
              <li>
                <ListItem item={item} key={item.product_id} />
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default Home;
