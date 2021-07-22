# TarkovBulletChart

Currently hosted here: https://tarkov-bullet-chart.herokuapp.com/

This is a project that I developed for my own use. The data is not mine, credits to the people maintaining escapefromtarkov.fandom https://escapefromtarkov.fandom.com/wiki/Ballistics

The idea that behind the project:

I wanted to host this on Heroku, and Heroku does not provide persistent storage.
I could easily take that data and paste it into JSON file and host it that way, but I wanted the data to be easily copy pastable from the wiki.
The easiest solution I thought of was to actually host the data on Google Sheets (Which allowed me to easily paste in the data and make updates over time) and then expose google sheets via a JSON API. (Tutorial here: https://www.freecodecamp.org/news/cjn-google-sheets-as-json-endpoint/)

The project was built with Angular, theme is using Bootstrap and Font Awesome.

Some of the features that this has over the table on the wiki:
- It's easier to navigate (Don't need to scroll endlessly to get to the chart)
- The data layout is exactly what I need 
- Allows users to start typing to filter the ammo type they're looking for (Don't need to hit CTRL + F or hit my search box)
- Allows users to easily clear the search value
- Retains the same styling as the table from the wiki for Armor Pen (The background colors are dependent on the values)
- Dark mode exclusively for late night gaming

The table itself is written quite generically, it will handle more rows, but columns will require extra manipulation as the headers need to be updated on the app.

Future Updates:
- Allow users to filter by Armor Penetration values (i.e. I only want to see ammo that can penetrate >3 of armor Level 1)
- Add the search filter value to the URL so users can share/bookmark it 
- Improve Styling

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
