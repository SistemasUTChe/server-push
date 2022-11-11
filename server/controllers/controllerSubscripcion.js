exports.createSubscripcion = (req, res, next) => {
    const content = req.body.content;
   
    // create a new Post instance
    const subscripcion = new Subscripcion({
      content: content
    });
   
    // save the instance to the database
    subscripcion
    .save()
    .then(subscripcionSaved => {
      res.status(201).json({
        message: 'Subscripcion almacena correctamente',
        post: subscripcionSaved
      });
    })
    .catch(err => console.log('err', err));
  }

  exports.getSubscripciones = (req, res, next) => {
    // return array of existing posts
    Subscripcion.find().then(foundSubscripciones => {
      res.json({
        message: "Todas las subscripciones",
        posts: foundSubscripciones
      });
    });
  }