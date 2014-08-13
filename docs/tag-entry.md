# Tagging an entry

When writing an entry, there's no need for line numbers but when the entry has been finished the author should be able to add tags to the content. The tags should be added to specific lines in the markdown version of the entry (not the compiled html).

One way to do this is to have several [modes](entry-modes.md) when working with an entry.

- Writing mode
- Tagging mode
- Viewing mode

When in writing mode, there are no line numbers and no distractions - just a page to write markdown.
When in tagging mode, the writing field is not editsble, line numbers appear in the edge of the entry. Each line should be selectable for tagging.
When in viewing mode, there are no line numbers and no editable field and no markdown - just good looking compiled HTML.

## Acceptance tests

_When writing/editing/updating and entry in markdown.._

- I can add tags to specific lines of that entry.
- I can see the entry's line numbers on the edge of the entry
