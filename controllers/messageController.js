const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

// helper function
function formatDate(date){
  return date.toLocaleDateString("en-GB", {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};


function getIndex(req, res, next){
    try{
        const formattedMessages = messages.map(m => ({
          ...m, formattedDate: formatDate(m.added)
        }));
        res.render("index", { title: "Mini Messageboard" ,messages: formattedMessages});
    }
    catch(err){
        next(err);
    }
}

function getForm(req, res, next){
    try{
        res.render("form");
    }
    catch(err){
        next(err);
    }
}

function createMessage(req,res,next){
  const { author, message } = req.body;
  try {
    if (!author || !message) {
      throw new Error("Author and message are required");
    }
    const newMessage = {
      text: message,
      user: author,
      added: new Date()
    };
    messages.push(newMessage);
    res.redirect("/");
  }
  catch(err){
    err.status = 400; // Bad Request
    next(err);
  }
}

function getMessage(req, res, next){
  const { id } = req.params;
  try {
    const message = messages[id];
    if (!message) {
      throw new Error("Message not found");
    }
    const formattedMessage = {
      ...message,
      formattedDate: formatDate(message.added)
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