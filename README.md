# Tennis Refactoring Kata

You can find out more about this exercise and where it comes from in [this YouTube video](https://youtu.be/XifUs1FhWRc). There are also some Guided Learning Hour videos that include demos of me solving parts of it.

* [Refactoring: What you need to know](https://youtu.be/K7xSsNpeM8I) - includes demo of TennisGame3 in C#
* [Refactoring Skills: Extract Function](https://youtu.be/lOAktlPd8uk) - includes demo of TennisGame6 in C#

# The Scenario

Imagine you work for a consultancy company, and one of your colleagues has been doing some work for the Tennis Society. The contract is for 10 hours billable work, and your colleague has spent 8.5 hours working on it. Unfortunately he has now fallen ill. He says he has completed the work, and the tests all pass. Your boss has asked you to take over from him. She wants you to spend an hour or so on the code so she can bill the client for the full 10 hours. She instructs you to tidy up the code a little and perhaps make some notes so you can give your colleague some feedback on his chosen design. You should also prepare to talk to your boss about the value of this refactoring work, over and above the extra billable hours.

There are several versions of this refactoring kata, each with their own design smells and challenges. I suggest you start with the first one, with the class "TennisGame1". The test suite provided is fairly comprehensive, and fast to run. You should not need to change the tests, only run them often as you refactor.

There is a deliberate error in several of the implementations - the player names are hard-coded to "player1" and "player2". After you refactor, you may want to fix this problem and add suitable test cases to prove your fix works.

If you like this Kata, you may be interested in [my books](https://leanpub.com/u/emilybache) and website [SammanCoaching.org](https://sammancoaching.org)

## Kata Description

Here is a description of the problem this code is designed to solve: [Tennis Kata](https://sammancoaching.org/kata_descriptions/tennis.html).

## Questions to discuss afterwards

* How did it feel to work with such fast, comprehensive tests?
* Did you make mistakes while refactoring that were caught by the tests?
* If you used a tool to record your test runs, review it. Could you have taken smaller steps? Made fewer refactoring mistakes?
* Did you ever make any refactoring mistakes and then back out your changes? How did it feel to throw away code?
* What would you say to your colleague if they had written this code?
* What would you say to your boss about the value of this refactoring work? Was there more reason to do it over and above the extra billable hour or so?

## Code Reading Practice
Test your code reading skills.

* Get a notebook and write the names of any [code smells](https://sammancoaching.org/reference/code_smells/index.html) you want to practice spotting as headings.
* Open all the code urls in a browser in different tabs (see the README in each language version for these).
* Start your stopwatch.
* Look at each tab in turn and scroll through the code.
* Name any code smells you notice and note down on your notebook which variant number had that smell.
* Stop the timer when you've looked at all the code.

Compare notes with others who have done the same exercise - did you find the smells in the same places? Was anyone faster and more accurate than most? Why do you think that is? Discuss how to get better at code reading.

### Opening the code urls quickly and conveniently
There are browser plugins that will open a list of urls in different tabs, search for "Open Multiple URLs" in your brower's extensions or add-ons marketplace. Or you could hold down 'Alt' (Windows/Linux) or 'Cmd' (Mac) while clicking on each url in turn.
