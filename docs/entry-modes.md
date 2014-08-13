# Entry modes

When working with an entry there are three modes, all with different purposes.

- Writing mode
- Tagging mode
- Viewing mode

## Writing mode

This is the default mode where an author lands when attempting to create a new entry. When in writing mode one may write markdown openly in a text area without any distractions.

## Tagging mode

Tagging mode can be used for an entry that is saved/closed. The main differences between writing mode and tagging mode is that one may not _write_ new content for an entry while in tagging mode. The purpose of tagging mode is to assign tags to lines in the entry, that's why the tagging mode view needs to render the markdown version (not compiled HTML) and line numbers on the edge.

Each line should be selectable, is should be possible to select several lines/line spans at a time. One may then assign a tag to the lines that was selected.

This should not be handled in writing mode because writing mode should be a place of solitude where you're not tempted to linger for too long - just write.

## Viewing mode

This is pretty self explanatory - while in this mode one sees the compiled HTML version of the entry and may not tag or write/edit the entry.

## Acceptance tests

- I can swap between the three modes.
- When I have unsaved content in my entry, trying to swap to tag/view mode from write mode prompts me with a warning that there is unsaved content that may be lost. In this prompt I should have the option to "Save and go to tag/view mode" or "Cancel and keep writing content in write mode" or "Discard my changes and switch to tag/view mode".

### Writing mode

- When creating a new entry, this is the default mode.
- I can write markdown.

### Tagging mode

- I see markdown code in this view.
- I can not edit the markdown.
- Each line has line number on the edge.
- I can [assign a tag](assign-tag.md) to one or several lines or line spans.

### Viewing mode ([View entry story](view-entry.md))

- I can not edit the entry.
- I see regular compiled HTML, not markdown.
- I don't see line numbers.
