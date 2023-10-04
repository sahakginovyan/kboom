This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Setup instructions.

First, install all dependencies:


```bash
npm i
```

Then, run the development server:

```bash
npm run dev
```

Node and npm versions

```
Node: v16.20.0
Npm: 8.19.4
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Explanation of design decisions and trade-offs made.

This project is built with a focus on responsiveness,
ensuring a seamless user experience across various devices and screen sizes. 
I've adopted the REM (Root EM) unit in our CSS, 
allowing for a responsive web application.
To achieve this, I've included a media query in general.css for the HTML tag, 
making our app adapt gracefully to different screen dimensions.

In addition to responsive design,
we've leveraged the power of icon fonts using the [IcoMoon](https://icomoon.io/app/#/select) application.
By converting our icons to fonts, I've gained a more elegant and efficient way to manage icons within our application. 
This approach simplifies icon management and ensures that only the necessary icons are included in our project.

Lastly, all CSS in this project is written using CSS modules, 
enabling scoped styles and reducing the chances of style conflicts. 
This modular approach to styling helps maintain a clean and maintainable codebase.

## Any additional libraries or tools used.

In the development of this project, I've kept our toolset minimal and efficient. 
The only additional library I've utilized is Axios,
a popular JavaScript library for making HTTP requests. 
Axios simplifies data fetching and handling API requests in our React and Next.js application.

Other than Axios, I've primarily relied on core technologies such as React, HTML, and CSS. 

This streamlined approach to library and tool selection ensures a lightweight and maintainable codebase,
making it easier to manage and extend the project in the future.

---

#### Thanks for your attention, looking forward for your feedback :)