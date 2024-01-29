import { AZURE_AD_TENANT_ID } from "$env/static/private";

export const mockAuthentication = () => {
  global.foo = (bar) => {
    if (bar === AZURE_AD_TENANT_ID) {
      JSON.stringify("baz");
    }
  };
};
