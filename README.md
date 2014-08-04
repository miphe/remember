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

Work Journal
----

- how do you keep track of all the things you do while working on a project?
- sometimes you are faced with a bug and you think _"I'm sure we fixed this once before, I wish I could remember what we did last time.."_?
- this is especially important when working in a remote team, because you may not have the option of interrupting your teammates and asking them.
- so we know that people should take notes and document what they're doing, but a problem here is that we often don't know what information will be relevant or useful until later.
- the solution we are proposing is to record as much as possible, and discover the relevant parts later.
- however there is tension: you musn't sacrifice your own train-of-thought in order to take notes.
- our challenge is to provide a frictionless way to take notes so that you can do it without thinking too much or interrupting yourself.
- the part of your brain that critiques and categorizes is a flow-killer. We can't engage this part of the brain while taking notes.
- this has a couple of implications:
 - write in a "journal" style. This means you're writing to yourself, not to your teammates. You never have to consider _"will they find this relevant or useful?"_ and you don't have to engage the critical mind.
 - you shouldn't have to think about which file to write in, what tags to use, or how to format it. Just write. All of those things can be done later.
- keeping a journal does take a bit of practice, but after a little while it becomes second nature. And if done right, it will free up your brain to stay "in the flow" while also providing clues for yourself and others to retrace your steps later on.

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
