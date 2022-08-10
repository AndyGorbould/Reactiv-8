# Reactiv-8

A React based quiz

---

<h1>R<sub>E</sub>A<sup>C</sup>T<sub>I</sub>V<sup>8</sup></h1>
<img src="https://thumbs.gfycat.com/AcclaimedFarflungGoose-size_restricted.gif" width="350">

I'm borrowing the name from 👽 [Altern 8](https://www.discogs.com/artist/12846-Altern-8) 👽 _because they rock!_

---

# Things I need to understand

- how to create a _React_ project `npx create-react-app name-of-app`
- understanding _components_ [this will help](https://reactjs.org/docs/getting-started.html)
- functional components & props
- React [states & lifecylces](https://reactjs.org/docs/state-and-lifecycle.html#using-state-correctly)
- Hooks in React, [this will help](https://reactjs.org/docs/hooks-intro.html)

<img src="https://www.wikihow.com/images/thumb/7/72/Throw-a-Hook-Punch-Step-17.jpg/aid57007-v4-1200px-Throw-a-Hook-Punch-Step-17.jpg" alt="hooks" width="200"/>

---

# Must have requirements

- A trivia style quiz
- Settings (subject, difficulty, amount of questions, ...)
- Score / Report card

## Extras

- Go wild
- Make it super mobile friendly
- Deploy it online
- Keep high scores of your players
- Connect with Node and Socket.io to make it multiplayer!

- #### Can I, as a final extra make all of the questions related to 90s rave & culture???

  - Audio snippets could be added as questions
  - Images could be questions
  - This would require my own API to work with, but with enough time I can see this being very achievable, & I think Mark Archer would enjoy the tribute!

  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQLx_pD0KJUfxoETn_X6pa3s5AwseAsY_0kA&usqp=CAU" alt="90s Rave Crew">

---

## Steps taken

- Created the app with `npx create-react-app reactiv-8` _cd_ to reactiv-8 then `npm start`
- in public/index.html the boilerplate already provides `<div id="root"></div>` this is a good place to start!
- my first 'test' is to change the index.html <p> element, this worked successfully. (learn to crawl first, then walk)
- now I'll generate some components: Header, Navigation, Footer, GameWindow. Maybe more will be needed but this should be good to begin with `npx generate-react-cli component Header` etc.
- CLI gave a few options, I'll link the screenshot later..
- Once the components are created, they need to be imported like: `import Header from "./components/Header/Header";` this goes at the beginning of the App.js (this could change, like the Russian Doll approach, if the component is only used INSIDE of header, it should be imported there for example). The exports are auto-generated with the CLI
- inside of App.js, the <Header /> tag needs to be called to display this component, inside of Header.js <Nav /> needs to be called (& imported of course) & so on & so form & all that jazz.
- in Main.js try to fetch using the coaches' code, this didn't work for me so I tried a few googlys & found something that gave me a positive result! (see Async/Fetch for more details) I'm trying to push these to an array in the Main.js, then I believe I should be able to jump to a new question when the players have answered each round (this may change soon, depends on how I manage to make the game 'work')

## Problems encountered

- I
- will
- add
- lots
- to
- this
- later
- 😈
- Uncaught (in promise) - I didn't write anything to catch any errors yet
- TypeError: Cannot read properties of undefined (reading 'incorrect_answers')
- I think these are due to lack of hooks/states, look up 'making api call react hooks'

---

## Notes

- when writing HTML inside of React, `className="smthng"` is used as opposed to the usual `class="smthng"`, because class is already reserved for JS Class. Keep an eye open for more cases like this!
- JSX (JavaScript eXtensible Markup Language) is often used in place of JS files, these files make HTML insertion more readable & efficient
- _Props = Properties._ A function or class should never modify the props `<i need to add a code example!!>`
- ***
- for the 'choose answer' buttons, an 'if' statement is needed for the question type, eg. `if type="multiple" display correct_answer + each of incorrect_answers; else if type="boolean" display True/False` but remember to do this in real code lolz
- the answers need to be randomized, so the correct_answer button isn't always the first one (otherwise it's a very easy game when the player figures that out!)
- the con.log is mostly working, but there seems to be some problems on the DOM, this might be

# Everything starts with a ROOT

<img src="https://www.vibconferences.be/sites/default/files/styles/event_slider_detail/public/2021-12/bean%20root_GPhase_larger.jpg?itok=rM6rEswE" alt="root" width="200">

```jsx
<div id="root"></div>;
//this is a 'root' in HTML that we've already created

const root = ReactDOM.createRoot(document.getElementById("root"));
//this is how you'd create a root in JS

const element = <h1>Hello, world</h1>;
root.render(element);
//this is how you would render the H1 element _inside_ of the DOM root
```

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd52I-c85SXhitEEJ75i7y_7PfQujbIWRbOA&usqp=CAU" alt="dom" width="200">

---

# Generate Components

To generate a new component with the CLI `npx generate-react-cli component ExampleName` _PascalCase can be used for components_

---

# Async/Fetch

The first result I can con.log is displayed like this:

> category: "Mythology"
> correct_answer: "Apollo"
> difficulty: "easy"
> incorrect_answers: (3) ['Demeter', 'Zeus', 'Athena']
> question: "Who was the only god from Greece who did not get a name change in Rome?"
> type: "multiple"

These results are randomized due to how this particular API is configured (I think, plz review this statement!!)

---

# Working on another machine??? => the idiot-proof solution is right here!

If you're working on a React project on multiple machines, the 'node_modules' directory won't be uploaded to GitHub; because it's not uploading these dependancies to your reep, they can get big! 287,9 MB for my project currently! So to counter this, when you clone/fork a reep you'll not be able to run the project on the new machine. Sucks eh? But there's a very easy method to rectify this: `npm install` while in the project root dir, this checks out which dependencies are in the project's package.json & installs these node-modules as required!

---

### All images are copyright of their respective owners & no copyright infringement is intended; if you are the owner of any images used in this repository & would like me to remove it, please contact me immediately & I'll get it sorted as quickly as possible :)

<img src="https://i0.wp.com/thefestivals.uk/wp-content/uploads/2020/12/41325EFC-AB60-4162-A5F4-FC5CA60CE3B0.jpg?resize=750%2C479&ssl=1" width="600">
