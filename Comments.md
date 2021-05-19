This project was done on nights with limited time due to high work load.

Front End

State management

State management was done using redux toolkit, a bit of an overkill but I wanted
to show it's implementation. In an real life project of such small size,
I would not use redux just local states.

UI Components
I used material UI as my framework and used styled components for my styling.
The app is responsive across all devices. The goal was to be minimal and effective.
Given more time I could focus on some details, like adding a tooltip on the cards
for additional info, decorate the date a bit better etc

Testing
Basic testing was done in the app using jest and react-testing-library

Back End

This was the place I spend a great bit of my time learning the way to create the
endpoints needed, I think it would be best to put them all under /api/{endpoint}
rather than /{endpoint}.
I tried to add the middleware needed and break down the mvc as best as I could.
The error handling leaves a lot to be desired, the json api
specification combined with this being something new led to some difficulties. Given
more time I would like to get a better grip on the error handling and do it in a clean,
centralized way and refactor the 415 error. In other notes, little upgrafes like passing
the mongoDB credentials as enviromental variables and create a custom pagination
using the recommended json api links.

Testing
Basic testing was done in the app using jest
