# User Registration

User are able to create a new user account by either fill-up the information details manually, or by using social-plugin which for now using Twitter.

## Acceptance tests

- Navigate to the signup/user registration page
  - User need to fill-in email address.
  - System will check whether email address is still available (eg. e-mail is not already registered) (all done in ajax-way):
    - If email address is NOT available, warning message appear to show that user need to provide another email address.
    - If email address is available, notification message appear to show that email address is available (realtime validation).
  - User need to fill-in the password.
  - System will check for the level of password security while typing the password
    - The level of secureness will have 3 options: Too-Weak (not valid), OK, Strong.
  - User need to fill-in the same password one more time.
  - User need to click 'Sign-up' button once all done.
  - The warning message will appear after user click 'Sign-up' button with these scenarios:
    - Email is not valid.
    - Email is not available.
    - Both Password and Re-type password is not match.
- User is redirected to a page explaining that he should have received an e-mail.
- User information saved
  - User information will be saved to a database
  - Passwords will saved encrypted and securily
- User need to click the confirmation link from the email, which sets the user to verified and logs him in and takes him to the applications main page.
- User will received email about successful registration.
