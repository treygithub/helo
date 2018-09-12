function getAll ( req, res )  {
    const dbInstance = req.app.set('db');
      dbInstance.getAllQuery()
      .then( payload => res.status(200).json( payload ) )
        .catch( err => {
           res.status(500).send(err);
              console.log('get req err', err)
            });
          };

 function postNew ( req, res ) {
  const {userName,password } = req.body;
  const dbInstance = req.app.set('db');
  // const {userid} = req.session.userid;
  dbInstance.postNewQuery([userName, password])
  .then( payload => {
    res.status(200).json(payload)
    console.log(payload)
  })
  .catch (err => {
    res.status(500).send(err);
  });
};

function loginAuthCheck ( req, res ) {
  const {userName,password } = req.body;
  const userid = req.session.userid;
  const dbInstance = req.app.set('db');
  dbInstance.getUsers([userName]).then(user => {
    console.log(user);
    console.log(req.session.user_id);
    if(user.length) {
      if (password == user[0].password){
        res.status(200).json(user)
      }else  {        
        res.status(200).json({success: false})
      }
    }else {
      res.status(200).json({success: "user not found"})
    }
  })
  .catch (err => {
    res.status(500).send(err);
  });
};

function deleteOne (req, res, next) {
    const dbInstance = req.app.set('db');
    const { id } = req.params;

    dbInstance.deleteOneQuery( [id] )
    .then ( payload => {
      res.sendStatus(200).json(payload)
    })
    .catch(err => {
      res.sendStatus(500).send(err)
    });
};

module.exports={
  postNew,
  loginAuthCheck,
  getAll,
  deleteOne
}