# Remember
_Goals:_

- Encourage firehose-style communication within a remote team, so that people are aware of what others are working on.
- Take notes about things as they happen, without interrupting your flow.
- A searchable knowledge-base.

<a name="HighLevelUsage"></a>
## High level usage
_Initial application behavior / <abbr title="Minimum Viable Product">MVP</abbr>_

### Writing entries
- As you are working on something, start typing about what you're doing.
- When you change work-topic, close your entry and start writing on a new entry.

### Reading / viewing entries 
- When you view an old entry, you also see a list of suggestions for "related items".
- If you see one of the suggestions and agree that the 2 items are related, you can link them.
- When you are reading an existing entry
  - you may choose to edit that entry
  - you may choose to create a new entry linked to the current entry

### Searching for / listing entries
- To search for things you type in the search field and results appear in a list.
- In the search results list you can choose which entry to view.
- In the search results list you can choose _Create related entry_.
- In the search results list you can choose _Edit entry_

### Registering, Editing users
- Register new user
- Edit own user details

## How to contribute
_For the initial release, only [high level usage](#HighLevelUsage) functionality should be addressed. If you have any questions about how the application aims to work (if anything is unclear), please open a new issue and request a clarification._

1. Write an acceptance test
  - Write an [acceptance test](https://github.com/x-team/standards/blob/master/end-user-tests/README.md) that demonstrates the expected behavior from the user's point of view. Add it to [/docs](/docs) and submit a pull-request so we can confirm that it describes the expectations accurately.
2. Implement
  - Choose a User Story in [the docs directory](/docs)
  - When you have some work that meets the acceptance test, send a pull-request.
  - For code that sensibly can be tested, you should include automated unit tests ([angular client test examples](/client/test)).

## Technologies
_For full list please see [package.json](/package.json)_

- Node.js
- AngularJS
- Elastic Search
- Mocha/Sinon/Chai

## See also
- [Thoughts on keeping a work journal](https://github.com/joshwnj/words/blob/master/work-journal.md)
