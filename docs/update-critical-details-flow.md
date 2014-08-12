# Updating critical account details

When updating critical account details (such as password, e-mail address and username), then I want to way to catch security breaches.

In the event of an unauthorized person gaining access to my account and attempts to change a critical setting, then I want to be able to catch that attempt and reset my details to secure ones.

## Acceptance tests

- When a critical account setting is being changed..
  - An e-mail should be sent to the previous (if the e-mail was changed, the last e-mail should be used) e-mail address.
  - The e-mail should explain that someone (hopefully I) has changed my account settings.
  - The e-mail should explain that if _I_ made these updates, I can disregard this e-mail.
  - The e-mail should supply a way for me to revert the changes in case _I_ didn't make these changes (malicious change link).

### Malicious change

_In case the e-mail's link is clicked, thus suggesting that the change that was made to the account was a malicious security breach.._

- In case this action is invoked..
  - My account is set up with the old settings (before the malicious change).
  - My account becomes locked.
  - Any and all currently logged in sessions to this account are terminated (logged in users are kicked out).
  - I receive a new e-mail with a one-time security token (link).
  - When I click that link, I get to a page where I can set my new secure password.
  - When the new secure password is set, my account is unlocked and I can login again.
