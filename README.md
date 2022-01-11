# pickypicks
Project for SheHacks+VI

Devpost: https://devpost.com/software/pickypicks

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Deployed using Heroku: https://pickypicks.herokuapp.com/

## Inspiration
Our idea started out with a friend talking about how they wanted to try more foods, but always ended up sticking to the ingredients they like. We wanted to create a tool that would help them explore new foods in a fun way, while also using their favourite ingredients to create these dishes.

## What it does
_pickypicks_ is a web application that lets you input up to 3 ingredients and randomly pulls 3 recipes that include at least one of those ingredients, displaying them in cards (just like Grandma's box of recipe cards). The name of the dishes is displayed along with their ingredients, an image, and a URL to the full recipe. By showing users snippets of randomized recipes that include their favourite food items, _pickypicks_ helps people to expand their culinary horizons and try new dishes that they may have cooked otherwise.

## How we built it
We created _pickypicks_ as a React.js web application, using HTML, CSS, and JavaScript. After taking text input for the ingredients that users love, we pulled recipes from a JSON database [Open Recipes](https://github.com/fictivekin/openrecipes). Recipes were selected by querying the database for matching recipes that contained the desired ingredients. To randomize the selected recipes, we placed all of the qualifying recipes in an array, shuffled them, and picked out the first 3 to display in recipe cards.

Before we actually began coding the application, we designed a prototype in Figma to plan out the look of the application's pages and the feel of the UI elements' interactions. We used Canva to create custom graphics for the home page to add a more polished feel. After testing the prototype and deciding on the look, we began working on the actual application.

## Challenges we ran into
The first challenge we ran into was while we were initially setting up the React project. During setup, we discovered that the latest version of the Create React App environment had linting issues. This caused a minor setback when we had to troubleshoot and roll our project back to an earlier version, so we began truly hacking later than expected. Despite this delay, we worked hard to catch up and completed the application on time!

One of the other major challenges we had was when image links pulled from the JSON database were broken. We spent some time discussing how to handle this issue, since we wanted each recipe card to have its own image. After taking the time to research how to handle image errors, we decided to replace any broken images with a default sandwich icon.

In addition, the last step was to deploy our application to be accessed from the domain.com url we purchased, pickypicks.tech. However, we ran into some application errors when deploying our application and due to time restraints, we decided to leave this as a future problem to solve.

## Accomplishments that we're proud of
Overall, we're proud that we completed this project within the time limits without experiencing any major roadblocks! While the project still has some bugs, we were able to finish all of the app's core features. We're also proud that we made the app look more polished and visually appealing, since this is something we didn't pay as much attention to for past hackathon projects.

## What we learned
We learned how to parse and query a database/JSON file from a web application, which was something that neither of us had attempted before. Another big skill we learned was how to build a functioning web app from a Figma prototype, and we learned that creating an early design prototype really streamlines the workflow throughout the rest of the project. We also learned more about React in general.

## What's next for _pickypicks_
In the future, we would love to add another feature that allows users to choose ingredients that they _don't_ like, instead of just ingredients that they love. This feature could select recipes that exclude the specified ingredients. It would also be cool if users could combine this feature with the current ingredients feature, allowing them to find recipes with a combination of ingredients that's more unique to their tastes.

We also thought of adding user accounts to the application so that certain recipes could be "favourited" or saved. If users had their own accounts, they could access a favourite recipes list to refer to in the future, making it easy to keep track of which new recipes they tried and loved the most. Lastly, we would want to make the application more robust and use a more up-to-date database. Currently, some recipes contain broken URLs or images due to the links being old.

Overall, we plan to improve _pickypicks_ so that it can be a real, useable, and fun tool.

## Run Locally!

### `npm install`

Install the dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
