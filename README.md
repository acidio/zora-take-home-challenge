# Zora take home challenge

## My considerations

Within 2 hours (that was asked) I had to compromise on some things, which I believe we could do better:

- Implement tests, unit in the components and e2e on the main page
- As this was a one-page application I didn't bother to create different routes
- The components serve the purpose of the challenge but in a real application, components like input, buttons and so on are much more complex and detailed
- The pagination is very basic, it doesn't show the total pages, where you are and other UX behaviours that would be important
- Validate the input in the query strings, it won't break the app but it's not a nice UX
- Better texts, colors are just the types we have from Unsplash, ideally, I would have an i18n lib with the appropriate texts and translations

What I prioritise in this challenge:

- Keeping the state of the application in the URL so it could be easy to pick up from where you left off and to share
- I'm taking advantage of the basics of Remix (which takes most of the browser behaviour) and Tailwind for styling it
- Make use of Typescript
- Have all the functionalities that were asked
- Make it responsive

I'm happy to discuss more about the challenge.

## Instructions to run

```sh
npm install
npm run dev
```
