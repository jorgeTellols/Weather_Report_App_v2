# Weather Report app v2

This is an upgraded version of the weather app I made previously.

You can check it here: https://github.com/jorgeTellols/WeatherReport_Techincal_Test

## What's new? (From a user's perspective)

All the original funcionalities are still here + some new things:

- You can now check the full weather forecast of any of the displayed days (by clicking the "+" button).
- You can choose between light and dark mode.
- Added support to phones and tablets, now you can visualize the app in this type of devices.

## What's new? (From a technical perspective)

- Introduced Typescript to make everything more robust via strong typing.
- Introduced SCSS as the style language. Used mixins to simplify some parts of the code to follow the DRY principle (especially in the responsive design aspect). I also used variables to change the theme dinamically and nesting to make everything more readable.
- Tried to follow clean code principles (I tried to get as close to the SOLID principles as I could). Also tried to follow some pattern designs like "Observer" and "Facade"
- Made custom hooks for every component that needed logic. I did this to separate UI and logic and follow good practices.
- Used JEST and the library [@react/testing-library](https://github.com/testing-library/react-testing-library) to test my hooks and detect issues.
- Followed the AirBNB style guide. Managed to use ESlint to format the code under these principle (despite having some issues with version).

## Technologies used

- NodeJS
- Vite
- React 
- TypeScript
- SCSS
- Jest
- ESlint

## How do I navigate through the files?

This is a single page site, so eveything has its root on App.tsx. You can reach anything from there.

I separated the components in folders. Some like "widgets" refers to complex components while other like "components" are more simple. There are also folders like "views", "layout" or "modals" that I used to give some structure to the whole thing. There are also folders dedicated to "models" and "services". 

In a component's folder you will find anything related to it (the stylesheet, the logic, the tests, etc...). Every picture I used can be found in the folder "/public/assets" and the translation files and some other utilities can be found in the "utils" folder.



