# parcelTest

ParcelTest

# step 1 init the package.json file

`npm init -y `

# setp 2 install the parcel library

`npm i -D parcel`

-D for the dev dependencies not for the prod.

# step 3. Get the entry point for parcel like html, js ,css

create index.html, styles.css and app.js --- you can name anything to the file but ensure you have html, css and JS file. Note ensure that when you use the script in the index.html the script type should be module

# step 4. run the comman to dev build the app

`npx parcel index.html`

npx for the execute on instant. Note, here the index.html is the entry point, you can have other too. On successful execution the pacel will run the app on certain port localhost://1234 like this. You can check it on terminal to know the exact port.

# step 5. Next you can install react library followed by react-dom and other

`npm i react react-dom`

This will install the react and react-dom library used to run the react app.

# step 6 config the react and react-dom on your JS file

```jsx
import React from "react";
import ReactDOM from "react-dom/client"; // note as per new changes ReactDOM should be imported from react-dom/client

const App = () => {
  return (
    <>
      <h1>Simple Test App</h1>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
// This root should be in index.html where we will display our App Component
```

# step 7 generate the production build

```json
{
  "name": "parceltest",
  "version": "1.0.0",
  "description": "ParcelTest",
  "main": "index.js",
  "source": "./index.html",
  "scripts": {
    "start": "parcel",
    "build": "parcel build"
  }
}
```

Note: You must first remove the "main":"" from the package.json. Post this you can run below command to generate the production build

`npx parcel build index.html`

# Different way to run dev build and prod build using CLI

following below method to run the dev build and prod

1. provide the source which is nothing but the entry file
2. provide command under script section on package.json

```json
{
  "name": "parceltest",
  "version": "1.0.0",
  "description": "ParcelTest",
  "main": "index.js",
  "source": "./index.html",
  "scripts": {
    "start": "parcel",
    "build": "parcel build"
  }
}
```

```powershell
npm run start
npm run build
```
