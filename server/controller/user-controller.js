const firebase = require("../database");
const User = require("../models/user")
const user = new User();
const firestore = firebase.firestore();
class userController {
    async addUser(
        email,
        id,
        name,
        photoURL,
        gender,
        dob,
        lecture,
        studentList
        //mess
    ) {
        try {
            const doc = await firestore.collection("Users").doc(email).get();
            if (doc.exists) {
            } else {
                let result = await firestore.collection("Users").doc(email).set({
                    email: email,
                    id: id,
                    name: name,
                    photoURL: photoURL,
                    gender: gender,
                    dob: dob,
                    lecture: lecture,
                    studentList: studentList,
                });
                return result;
            }

        } catch (error) {
            console.log(error);
        }
    }
    async getAllUser() {
        try {
            let userList = [];
            await firestore.collection("Users").get().then(data => {
                data.forEach(doc => {
                    const user = new User(
                        doc.id,
                        doc.data().email,
                        doc.data().name,
                        doc.data().gender,
                        doc.data().dob,
                        doc.data().lectue,
                    )
                    userList.push(user);
                });

            })
            return userList;

        } catch (err) {
            console.log("error");
        }
    }
    async updateUser(email, name, lecture, gender) {
        try {
            await firestore.collection("Users").doc(email).update({
                name: name,
                lecture: lecture,
                gender: gender
            });
        } catch {
            console.log(err);
        }

    }
    async deleteUser(email) {
        try {
            console.log("hahaha")
            await firestore.collection("Users").doc(email).delete()
        } catch {
            console.log(err);
        }
    }

}
module.exports = userController;