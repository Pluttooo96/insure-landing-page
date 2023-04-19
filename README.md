# Frontend Mentor - Insure landing page solution

This is a solution to the [Insure landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/insure-landing-page-uTU68JV8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: https://github.com/Pluttooo96/insure-landing-page
- Live Site URL: https://github.com/Pluttooo96/insure-landing-page

## My process

### Built with

- Semantic HTML5 markup
- CSS 
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/)

### What I done

That was my first fully completed landing page. I tried to create few of them before, but never end any of them. First problem of this app was creating fully responsive navbar in mobile version. Im not entirely with my solution, but it was easiest to implement. 

The second problem was making the background. I made two approach. First that came to my mind was to make it in CSS. The downside of this was the fact that I had to put the images of background in src folder, which made everything little bit messy. Also positioning of this background element was pretty complicated. Then I tried to make some use of hooks. I used useState to make two states of this app mobile or not mobile. Then I used ternary operator to decide if div with background is going to be visible or not. I think it was better solution. The downsides of this solutions were fact that app has to make more renders than with CSS option and code is not that clear to read. 


### Continued development

The most important thing to do is making a button component. There is a lot of places where is would use this comp, so It's better to make new component than repeating the same code in 3 components. It would make code also less complicated to read. Also some "improvements" in CSS would be nice.

Thing to improve is of course the behaviour of the image of family. Nothing better is coming to my mind for now to make this better. Also the naming of the some classes sometimes might be confusing.

**
