const messages = [
    {
        text: "Click any card! Welcome to Mini Messageboard, click any card to read the full message.",
        user: "Yash",
        added: new Date()
    },
    {
        text: "    How to post! Click 'New Message' in the navbar. Fill in your name and message, then hit Submit!",
        user: "Yash",
        added: new Date()
    },
    {
        text: "   Example Title!  The first 20 characters become your preview title on the board — so make them count!",
        user: "Example User",
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
    minute: '2-digit',
    timeZone: "Asia/Kolkata",
    timeZoneName: "short"
  });
};


function getIndex(req, res, next){
    try{
        const formattedMessages = messages.map(m => ({
          ...m, formattedDate: formatDate(m.added), preview: m.text.length > 20 ? m.text.substring(0, m.text.lastIndexOf(' ', 20)) + "..." : m.text
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