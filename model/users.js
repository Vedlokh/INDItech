const mongoose=require('mongoose');
const userScheme=new mongoose.Schema({
   _id:mongoose.Schema.ObjectId,
    Fname:String,
    Lname:String,
    Feedback:String,
    Description:String,
    Email:String
})
module.exports=mongoose.model('Users',userScheme)

// submission_id`, `name`, `birthdate`, `age`, `gender`, `email79`, `theresponses`, `q1`, `q2`, `q3`, `q4`, `q5`, `q6`, `q7`, `q8`, `q9`, `10`, `q11`, `q12`, `q13`, `q14`, `q15`, `q16`, `q17`, `q18`, `q19`, `q20`, `q21`, `q22`, `q23`, `q24`, `q25`, `q26`, `q27`, `q28`, `q29`, `q30`, `q31`, `q32`, `q33`, `star1`, `star2`, `q34`, `q35`, `q36`, `q37`, `q38`, `q39`, `q40`, `q41`, `q42`, `q43`, `q44`, `q45`, `q46`
// $submission_id=$_GET['submission_id'];
// $name=$_GET['name'];
// $birthdate=$_GET['birthdate'];
// $age=$_GET['age'];
// $gender=$_GET['gender'];
// $email79=$_GET['email79'];
// $theresponses=$_GET['theresponses'];
// $q1=$_GET['q1'];
// $q2=$_GET['q2'];
// $q3=$_GET['q3'];
// $q4=$_GET['q4'];
// $q5=$_GET['q5'];
// $q6=$_GET['q6'];
// $q7=$_GET['q7'];
// $q8=$_GET['q8'];
// $q9=$_GET['q9'];
// $q10=$_GET['q10'];
// $q11=$_GET['q11'];
// $q12=$_GET['q12'];
// $q13=$_GET['q13'];
// $q14=$_GET['q14'];
// $q15=$_GET['q15'];
// $q16=$_GET['q16'];
// $q17=$_GET['q17'];
// $q18=$_GET['q18'];
// $q19=$_GET['q19'];
// $q20=$_GET['q20'];
// $q21=$_GET['q21'];
// $q22=$_GET['q22'];
// $q23=$_GET['q23'];
// $q24=$_GET['q24'];
// $q25=$_GET['q25'];
// $q26=$_GET['q26'];
// $q27=$_GET['q27'];
// $q28=$_GET['q28'];
// $q29=$_GET['q29'];
// $q30=$_GET['q30'];
// $q31=$_GET['q31'];
// $q32=$_GET['q32'];
// $q33=$_GET['q33'];
// $star1=$_GET['star1'];
// $star2=$_GET['star2'];
// $q34=$_GET['q34'];
// $q35=$_GET['q35'];
// $q36=$_GET['q36'];

// $q37=$_GET['q37'];
// $q38=$_GET['q38'];
// $q39=$_GET['q39'];
// $q40=$_GET['q40'];
// $q41=$_GET['q41'];
// $q42=$_GET['q42'];
// $q43=$_GET['q43'];
// $q44=$_GET['q44'];
// $q45=$_GET['q45'];
// $q4=$_GET['q4'];
// $recipientId=$_GET['recipientId'];



$submission_id, $name, $birthdate, $age, $gender, $email79, $theresponses,$q1, $q2, $q3, $q4, $q5, $q6, $q7, $q8, $q9, $q10, $q11, $q12, $q13, $q14, $q15, $q16, $q17, $q18, $q19, $q20, $q21, $q22, $q23, $q24, $q25, $q26, $q27, $q28, $q29, $q30, $q31, $q32, $q33, $star1, $star2, $q34, $q35, $q36, $q37, $q38, $q39, $q40, $q41, $q42, $q43, $q44, $q45, $q46