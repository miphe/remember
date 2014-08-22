# Login

Being unauthorized, visiting this application I want to be presented a login form where I may enter my login details and hit a login button.

## Acceptance tests

- When I go to any URL on this app's domain, then I should be redirected to a `/login` area if I'm not already logged in.
- I see a field where I can login using social-network login plugin which is Twitter, for now.
  - If I click one of the social-network login plugin, it will brings me directly to user profile page
- I see a field where I can enter my username.
- I see a field where I can enter my password.
  - When entering my password, the characters I type are obscured.
- There's a submit button saying something like 'Login'.
  - When I click this button, the form is submitted.
  - When I press the `Enter` key, the form is submitted.
  - If the login was _not_ successful, there's no page refresh.
  - If the login was _not_ successful, I see a message explaining to me what went wrong and how I may correct it.
  - If the login was successful, I am redirected to an appropriate page (which page that should be will need to be discussed and decided).
- During the login process, I see an animated symbol indicating that something is going on (loader).
- During the login process, the login form's submit button is disabled.
- During the login process, the login form's submit button _looks_ disabled.
- Once I am logged in I see a button in the UI labeled something like 'Log Out'.
  - When I click this button, my session is destroyed and I am logged out of the application.
  - Upon logging out, I am redirected to the '/login' page described above.