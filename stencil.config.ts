import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "aeioniconscomponent",
  outputTargets: [
    {
      type: "dist"
    },
    {
      type: "www",
      serviceWorker: null
    }
  ]
};
