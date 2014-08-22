# Highlights and URL of an entry

Highlights are selected lines or line spans in an entry. URLs needs to be modified on the fly when selecting lines so that the URL always reflects the current state of the entry.

## Acceptance tests

- I can select/highlight one or more lines in my entry.
- When I highlight one or more lines, the URL updates to reflect my highlights.
- When I use the URL with highlights (eg. paste it in the address field of a new window), then the correct page shows including the highlights.
- A URL with highlights isn't too long, but is built up by line spans if possible, and is shortened where possible (eg. `[my link text](entry/gYgsf5R#hl-l2-l7)` would be a highlight of line 2 through line 7).
- I can make highlights of line spans if I select the start line of the highlight then hold down `SHIFT` and click the end line of the highlight.
- I can make multiple, non-consecutive highlights in an entry, if I hold down `CTRL`<sup>*</sup>.
- Non consecutive highlights are represented in the URL as well (eg. `entry/gYgsf5R#hl-l12!hl-l14!hl-l16-l18`. In this example the highlights are separated by an exclamation mark, and would result in a file with highlights on line 12, line 14 and lines 16 through 18.).

---

* To clarify, holding `CTRL` when selecting highlights will _add_ to the existing highlight, in the way that is customary in most softwares where you can select things.
