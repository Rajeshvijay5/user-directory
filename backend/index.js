const express = require('express');
const app = express();
const {user} = require("./db");
const mongoose = require("mongoose");
const cors = require("cors");
// let { _id } = useParams();


app.use(express.json());
app.use(cors());

app.get("/", async function(req,res){
    const users = await user.find({});
    console.log(users);

    res.json({
        users
    })

})

app.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      const user1 = await user.findById(id);
  
      return res.status(200).json(user1);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });



// const newUser = new user({
//     Name: "Rohan",
//     Age: 23,
//     Gender: "Male",
//     City: "Hydearbad",
//     State: "Tamilnadu"
//   });

//   newUser.save()
//   .then(user => {
//     console.log("User inserted successfully:", user);
//   })
//   .catch(error => {
//     console.error("Error inserting user:", error);
//   });






const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});