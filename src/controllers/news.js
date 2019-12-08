const News = require("../models/news");

exports.getAllNews = (request, response, next) => {
  return News.find({})
    .then(news => {
      response.status(200).json({ result: news });
    })
    .catch(error => next(error)); 
};

exports.getNewsById = (request, response, next) => {
  return News.findOne({ _id: request.params.id })
    .then(news => {
      response.status(200).json({ result: news });
    })
    .catch(error => next(error));  
}

exports.createNews = (request, response, next) => { 
  const news = {
    title: request.body.title,
    content: request.body.content
  };

  return new News(news)
  .save()
  .then(news => {
    response.status(201)
      .set("Location", `./api/news/${news._id}`)
      .send();
  })
  .catch(error => next(error));
}
exports.updateNews = (request, response, next) => {
  const news = {
    title: request.body.title,
    content: request.body.content
  };

  return News.findOneAndUpdate({ _id: request.params.id }, { $set: news }, { new: true })
  .then(news => {
    response.status(204).send();
  })
  .catch(error => next(error));  
};

exports.removeNews = (request, response, next) => {
  return News.findOneAndDelete({ _id: request.params.id })
  .then(news => {
    response.status(204).send();
  })
  .catch(error => next(error));
};
