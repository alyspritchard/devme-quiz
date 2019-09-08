# Quiz

---

## Rules

- If you get stuck on one for more than 15 minutes, try a different one and come back to it later.
- Feel free to vent any frustration with competitive duck herding.

---

## React

*Use `npm init react-app` to make a new React app called `quiz` for the following challenges.*

Add the Bootstrap CSS file and try to use Bootstrap styling where appropriate.

## Questions

- Create a component `<Multiplier x={ 5 } y={ 7 } />` that takes two props, `x` and `y`, and outputs their product (i.e. x × y) in a `<p>`.

- Create a component `<EvenClicks>` that displays "Even" if it's been clicked an even number of times and "Odd" if it's been clicked an odd number of times.

- Create a component `<CountBy step={ 5 }>` that takes a `step` prop. It should display a number (starting at 0) inside a `<p>`. Every time it is clicked the number should go up by `step`.

- Create a component `<HideMe>Blah blah blah</HideMe>` that uses `children` to accept some content. When the component is clicked the content should be hidden.

- Create a component `<MinimumLength length={ 30 }>` that contains an `<input>`. The user should see a warning, "Too short!", unless they have entered at least `length` characters.


## ReactRouter

- Visiting `/even-clicks` shows `<EvenClicks>`

- Visiting `/hide-me` shows `<HideMe>`

- Visiting `/count-by/5` shows `<CountBy>` with the step value set to 5 (it should work for any value in the URL)

- Visiting `/minimum/20` shows `<MinimumLength>` with the minimum length set to 20 (it should work for any value in the URL)

- Visiting `/multiplier/20/30` uses `<Multiplier>` and displays the result of 20×30 (it should work for any values in the URL)


## Tricksy

Create a component `<Posts>` that consists of a list of items that have a title and some text. Underneath the list of items should be a `<Form>` component that has a "Title" and "Text" input and a "Submit" button.

- You should only be able to submit the form if all the inputs have something typed in them.
- When the form is submitted it should add a new item to the list of posts.
- When the form is submitted the form fields should become blank
- The inputs should be controlled by the `<Form>` component and only pass their values up to `<Posts>` when the `<form>`'s `onSubmit` event handler is fired.
- If there are no posts it should say "No posts"
- Feel free to make other components if it makes sense to do so
- Make it so that `<Posts>` is visible if you visit the root route (i.e. `/`)