# Create an entry

Creating, saving and editing an entry should all happen without page refresh.

## Acceptance tests

- There is a form always available above the fold where I can enter details
to my new entry.
- The field is automatically focused whenever i type 'n' while not in a text input

### Entry form

*Story field*

- There should be a field with several lines where I can write the body of my entry.
- Typing a hashtag should present me with an autocomplete widget of available tags, or let me write a new one
- I should be able to use Markdown formatting language to format my content
- Hitting 'enter' should _not_ save the entry, but should give me a new line instead.
- Hitting 'shift+enter' should save the entry

### Submitting entry

- There is a submit button saying 'Close Entry' below form.
- Clicking the button saves the entry in a database.
- When the save is being processed, I can realize that by seeing an animated symbol suggesting that something is going on (loader).
- When save is complete and successful, all fields are cleared and a new fresh form to be shown to me.
- When save is complete and successful, a message shows saying something like 'Save complete', so I know all is well.
- If the save is not successful, I don't lose my entry, it's still in the form.
- If the save is not successful, I see a message explaining what happened and what I can do to successfully save the entry (validation and message handling).
- If I become impatient and click the submit buttom several times quickly, then several entry versions are _not_ saved, just one is saved and the button doesn't do anything during the time when the entry is being processed.
- During the time when the entry save is being processed, the submit button looks deactivated.

### Entry meta

- The date and time when an entry was created is saved to the entry.
  - The user who created the entry is saved.
- The date and time when an entry was updated is saved to the entry.
  - The user who made the change is saved.

### Wireframe
![Wireframe of Create new entry page]
(http://s9.postimg.org/wv0ui1mrj/create_new_entry.png)
