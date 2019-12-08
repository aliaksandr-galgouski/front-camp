const News = require("../models/news");

const findNewsById = id => News.filter(n => n._id == id)[0];

exports.getAllNews = (request, response, next) => {
  response.status(200).json({ result: News });
};

exports.getNewsById = (request, response, next) => {
  const result = findNewsById(request.params.id);  
  if(result)
    response.status(200).json({ result: result });
  else 
    next({ status: 404, message: `News with id '${request.params.id}' not found`});
}

let counter = 0;
exports.createNews = (request, response, next) => { 
  const news = {
    _id: --counter,
    title: request.body.title,
    content: request.body.content
  };

  News.push(news);
  
  response.status(201)
    .set("Location", `./api/news/${news._id}`)
    .send();
}
exports.updateNews = (request, response, next) => {
  const news = findNewsById(request.params.id);
  if(news){
    news.title = request.body.title;
    news.content = request.body.content;

    response.status(204).send();
  }
  else 
  next({ status: 404, message: `News with id '${request.params.id}' not found`});
};

exports.removeNews = (request, response, next) => {
  const news = findNewsById(request.params.id);
  if(news){
    News.splice( News.indexOf(news), 1);
    response.status(204).send();
  }
  else
    next({ status: 404, message: `News with id '${request.params.id}' not found`});
};
