# Git course slides published using Quarto
This is my first experience using the publishing platform Quarto to produce a presentation
in [revealjs](https://revealjs.com/)

Currently the main document is:
[Git_course.qmd](./Git_course.qmd)

## How to run

You need to install [Quarto cli](https://quarto.org/) in your system.


Then all you need to do is to type:

```
quarto preview Git_course.qmd
```

This will show a preview of your slides that changes as you type.

For static generation:

```
quarto render --help
```

will give you all the information you need to produce an output in the desired format.
