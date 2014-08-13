# Listing entries

While logged in, visiting the main page of the app should show me a list of the recent notes added by me, or others. With the ability to filter them by different criteria.

## Acceptance tests

- Visiting the root homepage, while logged in, should show me a list of notes
- Notes should be listed in descending order
- Notes written by me should be highlighted in visible color
- Hashtags inside notes should be clickable, and highlighted as such
- Each note should note creation date
- Each note should note the author name in visible color, and it should be clickable
- Each note should show how many users liked it, and/or pinned it
- Clicking a note should allow me to view the note details page

### Real-time view, pagination
- List of notes should be auto refreshed every 1 minute
- I should be able to use keyboard arrows to navigate around notes, up and down, for the current page, right and left for pagination
- There should be an indicator of how many notes are there in the system, and how much are showing on the page, start and end note numbers.

### Filtering and sorting
- I should be able to filter notes, by writing in text fields on the top of note list table/wrapper, by either of:
    + title
    + author
    + tag
    + creation date
- I should be able to use autocomplete on either of the following fields
    + author
    + tag
- I should be able to filter notes by my own preferences, ie:
    + favored notes
    + /five'd notes
- i should be able to sort notes by
    + title
    + date
    + author
    + creation date
    + popularity ( number of /fives )
