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
  const dbInstance = req.app.set('db');
  const {name, address, city, state, zipcode, image_url, mortgage, rent } = req.body;
  dbInstance.postNewQuery([name, address, city, state, zipcode, image_url, mortgage, rent])
  .then ( payload => res.status(200).json( payload ) )
  .catch (err => {
    res.status(500).send(err);
    console.log('post req err ', err)
  });
}

}

