# Little Bee Gardens -- Front End
Little Bee Gardens offers--in conjuction with the <a href="https://github.com/davidglic/beegardenbackend">backend</a>--a platform to publish articles and howtos, and register and manage users. Specifically, it was built to use these tools to raise awareness about pollinators and our impact on them. To accomplish this we encourage users to build their own gardens for bee habitat then register and share them on this platform.

## Features
- Secure sessions using JWT Tokens.
- Backend password hashing for security.
- Built in e-mail verifcation system.
- Module article system allows frontend to load, list, and attractively display whatever articles are listed as visible in backend API without any modification or updates to frontend.
- String to HTML parsing on the frontend  allows simple, flexibile, and robust rendering of article content.
- Public information page generated for each garden along with QR code to make it easy to share and spread awareness.
- User profile page allows user to edit any information or delete account.
- All visible articles listed on one page with thumbnails, descriptions, and links to full article.

## Technology Used
- Frontend written in React/Node.js
- Backend written in Python/DjangoREST Framework
- axios
- dompurify
- react-html-parser
- react-router-dom

#### HTML-Parser Example
The HTML Parser takes strings stored in the database and turns it into react components for rendering.
For example:
<img src="https://i.imgur.com/aMicdY0.png"/>

Renders into:
<img src="https://i.imgur.com/DnTnRdn.png"/>

## Views

#### Landing
<img src="https://i.imgur.com/r138DuJ.png"/>

#### Login 
<img src="https://i.imgur.com/Eb7pKu7.png"/>

#### Article List
<img src="https://i.imgur.com/NkUea8t.png"/>

#### Article
<img src="https://i.imgur.com/S9yedZZ.png"/>

#### Info
<img src="https://i.imgur.com/Yr7scKw.png"/>

## Installation
Download all files.
Run: `npm install` to install dependencies.  
Install backend with instructions on readme.
Change `apiRoute` variable in app.js to your Django server route and port.
Start with: `npm start`