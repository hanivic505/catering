import * as shared from "core.models";

export const ServiceProxy = new shared.ServiceProxy(
  process.env.REACT_APP_API_URL || ""
);
