# Go Look at a Tree

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Walkthrough](#walkthrough)
* [Contributors](#contributors)
* [Technologies](#technologies)

## Description

 - This was a group project assigned by [Turing School of Software and Design](www.turing.edu).  We were given 10 days to complete an application utilizing an entirely new technology (or in our case, multiple technologies). Our group built a full-stack application from scratch, learning PostrgreSQL, Knex, and Express to build our first API, which we deployed to Heroku.

 - Our Turing instructors often encourage us to take a break from learning to code and "go look at a tree" to decompress, so we decided to honor that advice *while* learning to code.

### Deploy Link

http://golookatatree.surge.sh/

### Frontend Repo

https://github.com/kendallha/go-look-at-a-tree

### API Deploy Link

https://go-look-at-a-tree-api.herokuapp.com/api/v1/trees

### Backend Repo

https://github.com/kendallha/go-look-at-a-tree-api

### Notable features

 - Built using React framework
 - Use of Router to enable user to navigate using back and forward browser controls.
 - API built using PostgreSQL, Knex, Express, and Node.js
 - Deployed API to Heroku
 - Frontend tested with Cypress acceptance testing including the use of stubbed fetch data and happy/sad paths
 - Utilized responsive design for mobile, tablet or desktop viewing
 - 100% Lighthouse accessibility score


## Installation
1. Clone down this [repo](https://github.com/kendallha/go-look-at-a-tree)
2. `cd` into project directory
3. Run `npm i` to install all project dependencies
4. Run `npm start` to begin the server
5. Application should open in default browser window (if not, navigate to http://localhost:3000)


## Walkthrough

### Home Page
  - When the application loads, a randomly chosen tree is displayed. To view another randomly chosen tree, click "Get a Tree".


Desktop

<img src="https://media.giphy.com/media/UfnQbDQY7zAOfMQB9c/giphy.gif" width="400">


Mobile

<img src="https://media.giphy.com/media/etjDoP9KDILY2io1gr/giphy.gif" width="400">


Clicking on "Add a Tree" brings users to a new page with a form to add a tree of their choosing.

<img src="https://media.giphy.com/media/YekhfBSeOEmszgxdmp/giphy.gif" width="400">


An error is displayed if the user does not completely fill out the form

<img src="https://media.giphy.com/media/ZsRzq3pbDd7USew5qc/giphy.gif" width="400">


A confirmation message is displayed after a user successfully adds a new tree

<img src="https://media.giphy.com/media/dDMX06YuheYOiWB0yB/giphy.gif" width="400">

## Learning Goals

- Learn a completely new technology- in our case how to build a backend using PostgreSQL, Knex, Express, and Node.js.
- Better understand our learning styles and how we can improve our ability to learn technologies independently.

## Contributors
<table>
    <tr>
        <td><a href="https://github.com/errabun">Riley Martin</td>
         <td><a href="https://github.com/zachjjohns">Zach Johnson</td>
        <td><a href="https://github.com/kendallha">Kendall Haworth</td>
    </tr>
    <tr>
      <td><img src="https://avatars.githubusercontent.com/u/76501236?s=460&u=56de3268b98bd73447d785601176518e3cd0141c&v=4" alt="R. Martin" width="125" height="auto" /></td>
      <td><img src="https://avatars.githubusercontent.com/u/76700555?v=4" alt="Z. Johnson" width="125" height="auto" /></td>
      <td><img src="https://avatars.githubusercontent.com/u/25498241?v=4" alt="K. Haworth" width="125" height="auto" /></td>
    </tr>
</table>

## Technologies
<table>
  <tr>
    <td><img src="https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png" alt="react" width="100" height="auto" /></td>
    <td><img src="https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png" alt="javascript" width="100" height="auto" /></td>
    <td><img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" alt="html" width="100" height="auto" /></td>
    <td><img src="https://www.pinclipart.com/picdir/middle/175-1759459_eng-a-med-kamel-frameworks-css-css-logo.png" alt="css" width="100" height="auto" /></td>
  </tr>
  <tr>
    <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY5B8GMClLqIJ2RObCTxzObLFKRYbg7fIKlCaZIOqnQhglC9o5DXT7Eg5YWNTnIidoHD4&usqp=CAU" alt="react" width="100" height="auto" /></td>
    <td><img src="https://bs-uploads.toptal.io/blackfish-uploads/components/skill_page/content/logo_file/logo/195562/express_js-161052138fa79136c0474521906b55e2.png" alt="react" width="100" height="auto" /></td>
    <td><img src="https://img.favpng.com/16/11/19/node-js-javascript-web-application-express-js-computer-software-png-favpng-cYmJvJyBDcTNbLdSRdNAceLyW.jpg" alt="react" width="100" height="auto" /></td>
    <td><img src="https://img.stackshare.io/service/3376/knex.png" alt="react" width="100" height="auto" /></td>
  </tr>
</table>
