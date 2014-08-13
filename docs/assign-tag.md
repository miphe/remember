# Assign a tag

Assigning tags to an entry happens in _tagging mode_ ([read about entry modes](entry-modes.md)). All tags are assigned to specific lines or line spans in an entry. This is due to the fact that an entry will most likely contain information about wildly different topics.

## Acceptance tests

_When in tagging mode.._

- I can click on an edge of a line (on the line number) to select that line.
- When I select a line, I see that it's selected somehow (background slightly change?).
- I can select multiple lines.
- When I select lines that follow eachother (consecutive) then the range between them are selected. (line 10-18, instead of 10, 11, 12, 13, 14, 15... 18).
- I can select multiple ranges (eg. 10-18 && 34-38).
- When I have a selection of one line or more, I can assign one or more tags to those lines.
- If the tag I want to use for my selected lines doesn't exist, I can create the tag(s) I need very easily.
  - Tags are _not_ case sensitive (a tag named `node.js` is the same tag as `Node.JS`).
- When tags have been assigned to lines or line ranges, I can see which tags are assigned to those lines/ranges without the UI being cluttered.
