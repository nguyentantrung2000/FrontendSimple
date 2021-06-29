const body = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;
const userController = require("../server/controller/user-controller");
const user = new userController();
const cors = require("cors");
app.use(cors());
app.use(body.json());

// app.use(body.json());
app.use(express.json());
app.listen(port, () => {
    console.log(`App is running on ${port} `);
});

///Teacher

app.post("/createUser", async (req, res) => {
    const { email, id, name, photoURL, lecture, studentList } = req.body;
    console.log(email, id, name, photoURL)
    try {
        let result = await user.addUser(
            email,
            id,
            name,
            photoURL,
            gender = "Khong co",
            dob = "Khong co",
            lecture,
            studentList
        );
        res.send("Tạo user thành công");

    } catch (err) {
        res.send("Không thể tạo user");
        // console.log(err);
    }
});
app.get("/getAllUser", async (req, res) => {
    let result = await user.getAllUser();
    res.send(result);
});

app.put("/updateUser", async (req, res) => {
    const { email, name, lecture, gender } = req.body;
    try {
        let result = await user.updateUser( email, name, lecture, gender);
    } catch {
        console.log("Khong the cap nhat");
    }


});
app.delete("/deleteUser", async (req,res)=>{
    const {email} = req.body;
    try{
        let result = await user.deleteUser(email);
    }catch{
        console.log("khong the xoa")
    }
})