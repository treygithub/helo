module.exports = {
getAll: ( req, res ) => {
    const dbInstance = req.app.set('db');
      dbInstance.fetchAll()
      .then( payload2 => res.status(200).json( payload2 ) )
        .catch( err => {
           res.status(500).send(err);
              console.log(err)
            });
          }

}
