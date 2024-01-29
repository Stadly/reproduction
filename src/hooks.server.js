import { AZURE_AD_TENANT_ID } from "$env/static/private";
import AzureAD from "@auth/core/providers/azure-ad";
import { SvelteKitAuth } from "@auth/sveltekit";

// npx vite preview works with this:
// import { mockAuthentication } from "./mock.js";

// npx vite preview does not work with this:
const { mockAuthentication } = await import("./mock.js");

export const handle = SvelteKitAuth({
  providers: [
    AzureAD({
      tenantId: AZURE_AD_TENANT_ID,
    }),
  ],
});
