# Syntax highlighting in entries

When writing an entry, I probably will need to add some code snippets in there every now and then. I need to have syntax highlighting then.

## Acceptance tests

_When writing an entry with Markdown, I can write a code block as shown below._

    ```
    def something(*args)
      data = { :key => 'value' }
      return data
    end
    ```

_When writing a code block, I can choose which code language is highlighted, as shown below._

    ```ruby
    def meth(ary)
      return ary.map { |ar| ar * 5 }
    end
    ```

[These highlights are available.](https://highlightjs.org/static/test.html)
