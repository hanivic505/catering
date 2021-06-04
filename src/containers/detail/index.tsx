import { IProduct } from "core.models";
import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { ServiceProxy } from "../../ServiceProxy";
import ListItemDetail from "../home/components/ListItemDetail";

interface IProps extends RouteComponentProps<{ id: string }> {}

export default function Detail({ match }: IProps) {
  const [item, setItem] = useState<IProduct | null>();

  useEffect(() => {
    ServiceProxy.ProductService.get(match.params.id).then((p) => setItem(p));
  }, [match.params.id]);

  if (!item) return <div>Loading...</div>;

  return (
    <div>
      <ListItemDetail item={item} />
    </div>
  );
}
