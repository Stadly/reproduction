import { SvelteKitAuth } from "@auth/sveltekit"
import AzureB2C from "@auth/sveltekit/providers/azure-ad-b2c"

export const { handle, signIn, signOut } = SvelteKitAuth({
  trustHost: true,
  providers: [
    AzureB2C({
      clientId: "asdf",
      clientSecret: "asdf",
      issuer: "asdf",
    }),
  ],
})
