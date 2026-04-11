# Mini Message Board

A simple message board web app built with Node.js, Express, and EJS — part of [The Odin Project](https://www.theodinproject.com/) Node.js curriculum.


**Live demo:** [odin-messageboard-z96l.onrender.com](https://odin-messageboard-z96l.onrender.com/)
Note: live demo will take time on first load due to Render's free tier cold start, but subsequent loads should be faster.

---

## Features

- Post messages with a username and message text
- View all messages on the home page
- Click any card to open the full message detail page
- Responsive layout — works on mobile, tablet, and desktop
- Dark mode UI with Fira Code font

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express
- **Templating:** EJS
- **Styling:** Plain CSS (custom properties, CSS Grid, CSS FlexBox, Responsive Design for viewports)
- **Architecture:** MVC — routes, controllers, views separated (no models yet)

## Project Structure

```
package.json
README.md
app.js
routes/
  indexRouter.js
  newRouter.js
  messagesRouter.js
controllers/
  messageController.js
views/
  index.ejs
  form.ejs
  messages.ejs
  partials/
    header.ejs
    navbar.ejs
    footer.ejs
public/
  styles.css
  images/
```

## Running Locally

cd into a desired project directory location and run:

```bash
git clone https://github.com/your-username/odinMessageBoard.git
cd odinMessageBoard
npm install
npm run dev
```

App runs at `http://localhost:3000`

> **Note:** Messages are stored in memory and reset on server restart. No database is used.