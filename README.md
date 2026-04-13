# Mini Message Board

A simple message board web app built with Node.js, Express, and EJS — part of [The Odin Project](https://www.theodinproject.com/) Node.js curriculum.

**Live demo:** [odin-messageboard-z96l.onrender.com](https://odin-messageboard-z96l.onrender.com/)
> Note: may take ~60s to load due to Render free tier cold start.

---

## Features

- Post messages with a username and message text
- View all messages on the home page
- Click any card to open the full message detail page
- Server-side form validation with express-validator
- Data persistence via PostgreSQL — messages survive server restarts
- Responsive layout — works on mobile, tablet, and desktop
- Dark mode UI with Fira Code font

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express
- **Templating:** EJS
- **Styling:** Plain CSS (custom properties, CSS Grid, Flexbox, responsive design)
- **Database:** PostgreSQL via `pg`
- **Validation:** express-validator
- **Architecture:** MVC

## Project Structure

```
app.js
routes/
  indexRouter.js
  newRouter.js
  messagesRouter.js
controllers/
  messageController.js
db/
  pool.js
  queries.js
  populatedb.js
views/
  index.ejs
  form.ejs
  messages.ejs
  error.ejs
  partials/
    header.ejs
    navbar.ejs
    footer.ejs
    error.ejs
public/
  styles.css
  images/
```

## Running Locally

```bash
git clone https://github.com/xsupremeyx/odin-NodeViews.git
cd odin-NodeViews
npm install
```

Create a `.env` file based on `.env.example` and fill in your local PostgreSQL credentials.

Create the database, then seed it:

```bash
psql -U youruser -c "CREATE DATABASE messageboard;"
npm run populate
```

Start the dev server:

```bash
npm run dev
```

App runs at `http://localhost:3000`
