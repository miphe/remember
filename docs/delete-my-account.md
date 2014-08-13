# Delete/Remove my account

If a user wants to remove himself from the app, he should be able to. This can be done from the account settings area's Danger Zone. When a user removes himself, his account and entries should not physically be deleted from the database, but rather made inaccessible.

When mentioning 'removing account', from here on I mean something more like _freeze_ or _archive_ the account.

## Acceptance tests

- When I have removed my account..
  - I can not log in to it.
  - I can not retrieve/reset/request my password.
  - I can not use a one-time-login token to access my account.
  - I can not access my account in any way.
  - Entries authored by me are still accessible.
  - Wherever my username/name was linked to my account, that link now looks inactive and doesn't lead to my account.

## Related stories

- [Update account details](update-account-details.md)
