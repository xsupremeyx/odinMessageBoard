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


function getIndex(req, res, next){
    try{
        res.render("index", { title: "Mini Messageboard" ,messages: messages});
    }
    catch(err){
        next(err);
    }
}

module.exports = {
    getIndex,
}