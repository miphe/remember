Remember
====

Goals:

- encourage firehose-style communication within a remote team, so that people are aware of what others are working on.
- take notes about things as they happen, without interrupting your flow.
- a searchable knowledge-base.

<a name="HighLevelUsage"></a>
High level usage
----

### Writing

- as you are working on something, start typing about what you're doing.
- as you type an autosuggest gives you feedback on previous topics, so that you can easily continue writing about a topic from before.

### Reading

- when you view an old entry, you also see a list of suggestions for "related items".
- if you see one of the suggestions and agree that the 2 items are related, you can link them.
- when you are reading an old item and want to add new information, you can either write a new entry (which immediately becomes linked) or edit the old entry (if there is something incorrect there).

### Searching

- to search for things you type in the search field and related items appear.

How to contribute
----

### Discuss the requirements

We are starting with the overview of behaviour described [High level usage](#HighLevelUsage). If something there is not clear, open an Issue with your question.

### Write an acceptance test

Write an [acceptance test](https://github.com/x-team/standards/blob/master/end-user-tests/README.md) that demonstrates the expected behaviour from the user's point of view. Add it to `./docs` and submit a pull-request so we can confirm that it describes the expectations accurately.

### Implement

- let us know which acceptance test (from `./docs`) you are implementing. You can choose to work on whichever you like.
- when you have something that meets the acceptance test, send a pull-request.
- ideally you will be able to include test scripts that automate some or all of the acceptance test.

Tech
----

- node.js
- elasticsearch

### Libraries

- http://npmjs.org/package/tape
- https://www.npmjs.org/package/wd
- https://www.npmjs.org/package/browserify

See also
----

- [thoughts on keeping a work jornal](https://github.com/joshwnj/words/blob/master/work-journal.md)
