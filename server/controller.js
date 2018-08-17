module.exports = {

getAll: ( req, res ) => {
    const dbInstance = req.app.set('db');
      dbInstance.getAllQuery()
      .then( payload => res.status(200).json( payload ) )
        .catch( err => {
           res.status(500).send(err);
              console.log('get req err', err)
            });
          },

postNew: ( req, res ) => {
  console.log('hit post req')
  console.log(req.app)
  const dbInstance = req.app.set('db');
  const {userName,password } = req.body;

  dbInstance.postNewQuery([userName, password])
  .then ( payload => res.status(200).json( payload ))
  .catch (err => {
    res.status(500).send(err);
    console.log( err)
  });
},

deleteOne: (req, res, next) => {
    const dbInstance = req.app.set('db');
    const { id } = req.params;

    dbInstance.deleteOne( [id] )
    .then ( payload => {
      res.sendStatus(500).send(err)
      console.log('delete req err ', err);
    });
},

}

