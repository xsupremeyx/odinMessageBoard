const db = require("../db/queries");
const { body, validationResult, matchedData } = require("express-validator");
const validateMessage = [
    body("author")
        .trim()
        .isLength({ min: 1, max: 50 }).withMessage("Name must be between 1 and 50 characters")
        .matches(/^[a-zA-Z ]+$/).withMessage("Name must only contain letters and spaces"),
    body("message")
        .trim()
        .isLength({ min: 1, max: 500 }).withMessage("Message must be between 1 and 500 characters"),
];

// helper function
function formatDate(date){
  return date.toLocaleDateString("en-GB", {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: "Asia/Kolkata",
    timeZoneName: "short"
  });
};


async function getIndex(req, res, next){
    try{
      const messages = await db.getAllMessages();
        const formattedMessages = messages.map(m => ({
          ...m, formattedDate: formatDate(m.added), preview: m.text.length > 20 ? m.text.substring(0, m.text.lastIndexOf(' ', 20)) + "..." : m.text
        }));
        res.render("index", { title: "Mini Messageboard" ,messages: formattedMessages});
    }
    catch(err){
        next(err);
    }
}

async function getForm(req, res, next){
    try{
        res.render("form", {
          errors: [],
          data: {},
          title: "New Message",
        });
    }
    catch(err){
        next(err);
    }
}

const createMessage = [
  validateMessage,
  async (req,res,next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).render("form", {
          errors: errors.array(),
          data: req.body,
          title: "New Message",
        });
      }
      const {author, message} = matchedData(req);
      await db.insertMessage(author, message);
      res.redirect("/");
    }
    catch(err){
      err.status = 400; // Bad Request
      next(err);
    }
  }
];

async function getMessage(req, res, next){
  const { id } = req.params;
  try {
    const message = await db.getMessage(id);
    if (!message) {
      throw new Error("Message not found");
    }
    const formattedMessage = {
      ...message,
      formattedDate: formatDate(message.added),
    }
    res.render("messages", { title: "Message Details", message: formattedMessage });
  }
  catch(err){
    err.status = 404; // Not Found
    next(err);
  }
}

module.exports = {
    getIndex,
    getForm,
    createMessage,
    getMessage,
}