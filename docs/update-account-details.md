# Update account details

When I click an icon/symbol/link (something like a setting symbol or account symbol) I am taken to a page where I can update my account's settings.

_Account settings include:_

- Username *
- E-mail address *
- Account password *

_* => fields are deemed 'critical'._

## Acceptance tests

- When on my account details page, I see a form where I can update all fields.
- When updating critical details (atm. all details are critical) I need to confirm my identity by entering my current password.
- When updating my password, I need to write the password twice to confirm that I wrote it correctly (two different fields).
- When working with passwords, the characters I enter in a password field are obscured.

### Danger Zone

- There is a secluded area called the _'Danger Zone'_ where irreversable account actions are handled.
- In the danger zone, I can push a button to delete my account. If I push this button I should be prombted by a confirmation prompt asking if I really want to delete my account. If I confirm, the account should be flagged (which is another story, [namely this one](delete-my-account.md)).
