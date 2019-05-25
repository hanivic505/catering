import React, { Component } from "react";
import { Api } from "../../api";
import { Button } from "antd";
import styles from "./home.module.scss";
import { Image } from "../../ui/image";

interface IState {
    items?: ProductJSON[];
}

class Home extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = { items: [] };
    }
    componentDidMount() {
        this.reload();
    }
    reload = () => {
        const items = Api.getProducts();
        this.setState({ items });
    };
    render() {
        const { items } = this.state;
        return (
            <div className={`container ${styles.wrapper}`}>
                <h1 className="page-title">Catering list</h1>
                <h2>HOT</h2>
                <hr />
                <ul className={styles.listing}>
                    {items &&
                        items.map((item: ProductJSON) => (
                            <li>
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
                                            <div>
                                                {item.product_description}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.footer}>
                                        <div />
                                        <Button type="primary">View</Button>
                                    </div>
                                </div>
                            </li>
                        ))}
                </ul>
            </div>
        );
    }
}

export default Home;
