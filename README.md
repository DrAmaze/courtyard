# Courtyard

Courtyard is a web application simulation of Aporeto's newly minted winery and brewery.

## To run application

* Open the compressed file
* Run the command `npm install` in your terminal
* Run the command to start the API: `docker-compose up -d`
* Check the statof the containers: `docker ps`
* Run the command `npm start` in your terminal
* Navigate to `localhost:3000` to find the UI

## Features

### CRUD Operations
Navigate to the Brewery for the opportunity to Create a new beer! See it show up in the list of beers immediately upon creation. By clicking on a specific beer, the user is able to either update the existing beer's name, or (should they choose), remove the beer entirely

### The Winery
Exists in parallel to the Brewery; however, the specifications of the assignment indicated none of the CRUD operations were needed. Feel free to navigate here to peruse the menu!

## Design Decisions to talk about

### State Shape
State shape is quite simple. It features beers, wines, and errors. Sample state shape:

```
{
  beers: {
    drinks: [
      { ID: "1", name: "Westvleteren 12 (XII)" }
      { ID: "2", name: "Rochefort Trappistes 10" }
      { ID: "3", name: "Westvleteren Extra 8" }
    ]
  }
  errors: []
  wines: {
    drinks: [
      { ID: "1", name: "Bin 707 Cabernet Sauvignon" }
      { ID: "2", name: "Caymus Vineyards Cabernet Sauvignon" }
      { ID: "3", name: "Dom Pérignon" }
    ]
  }
}
```

Congruence between the winery and the brewery were key.  I spent a fair amount of time building a state shape that could also include a list of beers the user "consumed"; however, I realized that was out of the scope of this project and scrapped the idea. I think that it is very important to meet the specification requirements, avoiding any additional overhead.

### Typecasting Reducer and Actions
Leveraging TypeScript for this project was enjoyable! The typecasting capabilities available with this language are prominent. The ability to define more grandiose objects like components and state-shape has strong implications for the developer to ensure all outlying states can be accounted for. In this web app, the `Props` and `State` types for each component helped to maintain the structure of the web application:

```
interface Props {
  fetchWines: Function;
  drinks: any[];
}

interface State {
  drinks: any[];
  errorMsg: string;
}

class Winery extends React.Component<Props, State> {
  ...
```

In future projects, I would create an `interface` for each object available in this application (actions, etc.)

### Response Messages
This application features rendering of error messages on invalid HTTP calls. Future iterations of this application will feature more robust error messaging and confirmation messages.

### Creating unique keys
Importing the `uuid` library allowed me to create truly unique keys for each list item available in the list of beers and wines. I also leveraged this tool to create a unique `beer.ID` when user creates a new beer.

### Styling
The styling of this project featured SASS. Had this project been larger in scope, a design library like `Radium ` would have been leveraged. This project features a folder called, `styles` that houses all of the specific stylesheets.  The reset file is found as `index.scss`.

### Testing
This application features tests for actions of beer, wine, and error; as well as tests for the reducers. Unit testing the redux cycle is a strong way to ensure the integrity of data being passed throughout this application. More robust testing for components would ensure this application's integrity. In the future, I would add unit tests for each component, and integration tests for the application as a whole.

## Future Considerations

### Managing Larger Data Sets
Seeing as the data for this project was very limited, there was no need to have background API calls managing data payloads. If the list of beers and wines were a factor of 1000 larger, then it might make sense to have background API calls occur when the user enters the courtyard.  For the scope of this project, doing a `fetchAll` call whenever the user entered either the winery or the brewery was deemed sufficient.
