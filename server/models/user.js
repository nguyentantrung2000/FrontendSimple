class User{
    constructor(id,name,photoURL,gender,dob,lecture,studentList){
        this.id = id;
        this.name= name;
        this.photoURL= photoURL;
        this.gender = gender;
        this.dob = dob;
        this.lecture=lecture;
        this.studentList = studentList;
    }
}

module.exports = User;