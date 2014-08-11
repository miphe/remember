# User Registration
  User are able to create a new user account by either fill-up the information details manually, or by using social-plugin login that provided by 3 major social network: Facebook, Twitter and Google+

## Acceptance tests

- Navigate to the signup/user registration page
- User need to login by either these 2 ways below:
  - Filling up all the information manually:
    - User need to fill-in prefered username.
    - System will check whether username is still available (all done in ajax-way):
      - If username is NOT available, warning message appear to show that user need to provide another username.
      - If username is available, notification message appear to show that user name is available.
    - User need to fill-in email address.
    - System will check whether email address is still available (all done in ajax-way):
      - If email address is NOT available, warning message appear to show that user need to provide another email address.
      - If email address is available, notification message appear to show that email address is available.
    - User need to fill-in the password.
    - System will check for the level of secureness while typing the password (all done in ajax-way)
      - The level of secureness will have 3 options: Weak, OK, Strong.
    - User need to fill-in the same password one more time.
    - User need to click 'Sign-up' button once all done.
    - The warning message will appear after user click 'Sign-up' button with these scenarios:
      - Username is not available.
      - Email is not valid.
      - Email is not available.
      - Both Password and Re-type password is not match.
  - Login by either social-login button: Facebook, Twitter and Google+:
    - If user click Facebook login button, he will redirected to Facebook page (or Facebook popup window page) to confirm with 
    all the permission.
    - Once that done, he will redirect directly to user profile page.
    - If user click Twitter login button, he will redirected to Twitter page (or Twitter popup window page) to confirm with 
    all the permission.
    - Once that done, he will redirect directly to user profile page.
    - If user click Google+ login button, he will redirected to Google+ page (or Google+ popup window page) to confirm with 
    all the permission.
    - Once that done, he will redirect directly to user profile page.
- User expected to be redirected to user profile page.
- User received email with a confirmation link on it.
- User need to click the confirmation link from the email, which redirected to the succesfull user registration page.
- User will received email about successful registration.

