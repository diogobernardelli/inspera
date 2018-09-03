# Inspera Frontend Test
![Mockup Image](https://image.ibb.co/cAbh9e/inspera_image.jpg)

## Install
First you need to install node.js
Then type "npm install":
```bash
$ npm install
```


## Run the server and start developing
```bash
$ gulp
```
The server is running at http://localhost:3000/inspera

## Testing
```bash
$ npm test
```
The test run automatically when changing any js/jsx file.

# Inspera Frontend Assignments

## CSS
<span style="color:green">**✓**</span> Style the navbar to use a Boostrap navbar making it responsive and mobile friendly. The logo should be on the left with the nav items following. The menu items should be expandable on mobile. Just use plain boostrap and don't do any attempts to make it really really pretty.

<span style="color:green">**✓**</span> Center the article and set max width to 600px to avoid getting to long lines.

<span style="color:green">**✓**</span> Make the main header in the text (H1) be font-size 26px, and the headers in the text (H2) be font-size 20px, whenever the screen width is less than 720px.

## Javascript
<span style="color:red">**x**</span> Get the expandable menu on mobile in the navbar working. (**[click here](https://github.com/diogobernardelli/inspera/blob/develop/CHANGELOG.md)** to see all the attempts I've tried)

<span style="color:green">**✓**</span> Rewrite the for loop in js/view/Navbar.jsx to use return a new array using map to iterate over the navBar array.

<span style="color:green">**✓**</span> Change js/model/NavModel.getNavBarItems so that it sorts the items on title.

<span style="color:green">**✓**</span> Find a unit test framework of your liking and add a unit test for the js/model/NavModel.getNavBarItems. Ideally it should run automatically when changing the js/jsx files.

## New Packages and Stacks:

#### JavaScript
| Use | Remark |
| --- | --- |
| Mocha Unit Test | ✓ |
| Should | ✓ |
| Browserify-middleware | ✓ |
| Reactify | ✓ |

#### CSS
| Use | Remark |
| --- | --- |
| SMACSS Structure | ✓ |
| Boostrap | ✓ |