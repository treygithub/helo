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
  dbInstance.postNewQuery([userName, password])
  .then( payload => {
    console.log(req.session);
    res.status(200).json(payload)
    console.log(payload)
  })
  .catch (err => {
    res.status(500).send(err);
  });
};

function loginAuthCheck ( req, res ) {
  const {userName,password } = req.body;
  const dbInstance = req.app.set('db');
  dbInstance.getUsers([userName]).then(user => {
    (req.session.username = user[0].username),
    (req.session.userid = user[0].user_id);
    (req.session.profilePic = user[0].profilepic);
    console.log(user);
    console.log(req.session);
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

function sessionid (req, res, next) {
  res.status(200).send({
    username: req.session.username,
    userid: req.session.user_id,
    profilePic:req.session.profilepic
  });
};

function logout  (req, res)  {
  req.session.destroy;
};

////////////////////////////////////////////////////////////// 
////                      Post api below                 ////
////////////////////////////////////////////////////////////

const getPostUser = (req, res) => {
  const db = req.app.get("db");
  let user_id = req.session.userid;
console.log("HITHITHITHITHITHTHITITIHTHITHIT", user_id)
  db.postUser([user_id])
    .then(response => {
      console.log(response)
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

const update = (req, res) => {
  console.log("hi im req.params ", req.params);
  let { postid } = req.params;
  let { post } = req.body;

  const db = req.app.get("db");
  db.updatePost([postid, post])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

const postByUserID = (req, res) => {
  let user_id = req.session.userid;
  let { post, title } = req.body;
  console.log("this is the id",user_id);
  const db = req.app.get("db");
  db.postNewPost([title,post,user_id])
    .then(response => {
      console.log("this is response",response);
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

const OnePostMatchParamsKid = (req, res, next) => {
  let { id } = req.params;
  console.log("hit one crud component")
  const db = req.app.get("db");
    db.getOnePost([id])
      .then(response => {
        res.status(200).send(response);
        console.log("this is your response fam! ",response)
      })
      .catch(err => res.status(500).send(err));
  }


const deletePost = (req, res) => {
  let { id } = req.query;
  const deleteID = parseInt(id);
  const db = req.app.get("db");
  db.deleteOneOuery([deleteID])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

module.exports={
  postNew,
  loginAuthCheck,
  getAll,
  logout,
  sessionid,
  deletePost,
  postByUserID,
  update,
  getPostUser,
  OnePostMatchParamsKid
}