const express = require('express');
const app = express();
var bodyParser = require('body-parser')
//const Users=require("./model/users");
//const userModel = require('./modules/user');
var pdf = require("pdf-creator-node");
var fs = require("fs");
const path = require('path');
const axios =require('axios');
app.set('view engine', 'ejs');
require('dotenv').config();
const mysql = require("mysql");
var http = require('http');
var url = require('url') ;
const { link } = require('pdfkit');
//declaration of form feilds 
let TotalScore=0;let more50f=0,btw25_50f=0,less25f=0;
var sdate;
var phone,event, pnumber,Score,submission_id,name,birthdate,date,age,gender,email79,theresponses,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28,q29,q30,q31,q32,q33,star1,star2,q34,q35,q36,q37,q38,q39,q40,q41,q42,q43,q44,q45,q46;
app.use(express.json());
app.use( express.static( "public" ) );
var con = mysql.createConnection({
 
  host: '127.0.0.1',
  user: 'test_doctor',
  password: 'kph0110@',
  database: 'test_doctor'
});

// con.connect(function (err) {
//   if (err) {
//       console.log(err);
//       return;
//   }
//   console.log('Connection established');
// });

app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.get('/mha',(req,res)=>
    {
      res.json({message:"hello"});
    });
  var values; //Getting th form response
app.post('/mha/values', (req, res) => {
    // res.sendFile(__dirname + '/index.html');
    // console.log(req.body);
    var values=req.body;
    console.log(values);
     submission_id=values.submission_id,name=values.name.first+" "+values.name.last;event=values.yes;
    birthdate=values.birthdate.year+"-"+values.birthdate.month+"-"+values.birthdate.day;date=values.date.year+"-"+values.date.month+"-"+values.date.day;
   // console.log(date);
    age=values.age,gender=values.gender,email79=values.email79,phone=values.phone.full,pnumber=values.pnumber.full,theresponses=values.theresponses,q1=values.q1,q2=values.q2,q3=values.q3,q4=values.q4,q5=values.q5,q6=values.q6,q7=values.q7,q8=values.q8,q9=values.q9,q10=values.q10,q11=values.q11,q12=values.q12,q13=values.q13,q14=values.q14,q15=values.q15,q16=values.q16,q17=values.q17,q18=values.q18,q19=values.q19,q20=values.q20,q21=values.q21,q22=values.q22,q23=values.q23,q24=values.q24,q25=values.q25,q26=values.q26,q27=values.q27,q28=values.q28,q29=values.q29,q30=values.q30,q31=values.q31,q32=values.q32,q33=values.q33,star1=values.star1,star2=values.star2,q34=values.q34,q35=values.q35,q36=values.q36,q37=values.q37,q38=values.q38,q39=values.q39,q40=values.q40,q41=values.q41,q42=values.q42,q43=values.q43,q44=values.q44,q45=values.q45,q46=values.q46;
     //var userEntry=new userModel({submission_id,name,birthdate,age,gender,email79,theresponses,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28,q29,q30,q31,q32,q33,star1,star2,q34,q35,q36,q37,q38,q39,q40,q41,q42,q43,q44,q45,q46});
     const storage =  axios.get('https://testing.inditech.co.in/mhastore.php', { params: { submission_id,name,birthdate,date,age,gender,email79,theresponses,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28,q29,q30,q31,q32,q33,star1,star2,q34,q35,q36,q37,q38,q39,q40,q41,q42,q43,q44,q45,q46} });
     const test =  axios.get('https://testing.inditech.co.in/mhadb.php', { params: { submission_id} });
   //console.log("data saved");//Data saved to the server
 calculation();

 //createpdf(submission_id,name,age,gender,email79,date,theresponses,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28,q29,q30,q31,q32,q33,star1,star2,q34,q35,q36,q37,q38,q39,q40,q41,q42,q43,q44,q45,q46)
  res.sendFile(__dirname + '/index.html');
//Sending the Thank response after submittion.
     })

app.get('/mha/report/:submissionid', (req, rest) => {
  var pname=name,pinumber=pnumber;
 var k=req.params['submissionid'];
  var fk="he",pname="v",page="2",pgender="fe",pemail79="ff@gmail.com",pday="2",pmonth="3",pyear="2012",ptheresponses="doctor",event="ge";
  var link1 = req.params['submissionid']+'/doctor';
  var link2 = req.params['submissionid']+'/patient';
  axios.get('https://testing.inditech.co.in/mhaget.php', { params: { submission_id: k } })
    .then((res) => {
        console.log(`Status: ${res.status}`);
      //console.log( res.data);
        values= res.data;name=values.name;date=values.date;
        rest.render(__dirname + "/views/main.ejs",{pname:name,date:date,pinumber:pnumber,link1:link1,link2:link2});
    }).catch((err) => {
        console.error(err);
    });
  
  //res.render(__dirname + "/views/template/No/zeroP.ejs",{pname,page,pgender,pemail79,pday,pmonth,pyear,ptheresponses,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28,q29,q30,q31,q32,q33,star1,star2,q34,q35,q36,q37,q38,event,q39,q40,q41,q42,q43,q44,q45,q46})
   //console.log(req.body);
});
app.get('/mha/report/:submissionid/:name', (req, rest) => {
  var values;
  var re=req.params['name'];
  console.log(re);var repo;
  var k= req.params['submissionid'];
  console.log(k);
  // k="5503131576226821035";
 axios.get('https://testing.inditech.co.in/mharet.php', { params: { submission_id: k } })
    .then((res) => {
        console.log(`Status: ${res.status}`);
      //console.log( res.data);
        datae= res.data;
        var f=datae.ace;
        if(re=="patient")
        {repo=datae.reportP;}
        else
         {repo=datae.report; }
        console.log("yes");
        axios.get('https://testing.inditech.co.in/mhaget.php', { params: { submission_id: k } })
        .then((res) => {
            console.log(`Status: ${res.status}`);
         // console.log( res.data);
          values= res.data;
           
            submission_id=values.submission_id,name=values.name;
     birthdate=values.birthdate;
     date=values.date;
     console.log(date);
     age=values.age,gender=values.gender,email79=values.email79,theresponses=values.theresponses,q1=values.q1,q2=values.q2,q3=values.q3,q4=values.q4,q5=values.q5,q6=values.q6,q7=values.q7,q8=values.q8,q9=values.q9,q10=values.q10,q11=values.q11,q12=values.q12,q13=values.q13,q14=values.q14,q15=values.q15,q16=values.q16,q17=values.q17,q18=values.q18,q19=values.q19,q20=values.q20,q21=values.q21,q22=values.q22,q23=values.q23,q24=values.q24,q25=values.q25,q26=values.q26,q27=values.q27,q28=values.q28,q29=values.q29,q30=values.q30,q31=values.q31,q32=values.q32,q33=values.q33,star1=values.star1,star2=values.star2,q34=values.q34,q35=values.q35,q36=values.q36,q37=values.q37,q38=values.q38,q39=values.q39,q40=values.q40,q41=values.q41,q42=values.q42,q43=values.q43,q44=values.q44,q45=values.q45,q46=values.q46;
      //res.sendFile(__dirname + '/'+req.params['submissionid']+'/'+req.params['name']+'/report.pdf');
      var j= path.join("/views/template/",repo);
      rest.render(__dirname + j,{name,age,gender,email79,date,theresponses,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28,q29,q30,q31,q32,q33,star1,star2,q34,q35,q36,q37,q38,q39,q40,q41,q42,q43,q44,q45,q46,f})
       console.log(req.body);
        }).catch((err) => {
            console.error(err);
        });
    }).catch((err) => {
        console.error(err);
    });
   
  
   
 
   
 
});


 
  const woztell= (strin,ph)=>
{ let s=__dirname + '/'+submission_id+'/report.pdf';
  const res =  axios.get('https://testing.inditech.co.in/mhatemp7.php', { params: { recipientId:ph,report:strin} });
  console.log("function ran");
}
let k;
let Rflag,Pflag;
function thepinkflag(){
  let Q=['Seems sad, cries a lot','Is difficult to comfort when crying (hurt or distressed)','Frequent Temper Tantrums'	,'Shyness in facing new experiences'	,'Is easily distracted'	,'Intentionally hurts others (biting, hitting, kicking)'	,'Doesn’t seem to listen to adults talking to him/her'	,'Battles over food and eating'	,'Is irritable, easily annoyed & excessive whining'	,'Resistant to cooperate with adults & is defiant'	,'Breaks things during tantrums'	,'Is easily startled or scared'	,'Not able to share with other children'	,'Has trouble mixing & interacting with other children'	,'Fidgets, can’t sit quietly'	,'Is clingy,doesn’t want to separate from parent'	,'Is very scared of certain things (Dark,needles,insects)'	,'Reacts too emotionally to small things'	,'Sometimes freezes or looks very still when scared'	,'Extremely “rigid” about routines, becoming extremely upset when things are changed'	,'Repeated Nightmares, Night terrors and awakening from sleep'	,'Easily exhausted,listless & Apathetic'	,'Has a hard time paying attention to tasks or activities'	,'Interrupts frequently'	,'Loss of previously attained developmental milestone (toilet training)'	,'Has more picky eating than usual'	,'Has unusual repetitive behaviors (Aggression with a doll,rocking etc)'	,'Might wander off if not supervised'	,'Has a hard time falling asleep & staying asleep'	,'Doesn’t seem to have much fun & less interested in activities'	,'Is too friendly with strangers'	,'Is learning or developing more slowly than other children'	,'Has breath holding,startles,hiccups etc'];
  let v=" ";
  let K=[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28,q29,q30,q31,q32,q33];let c=0;
for (let i = 0; i < K.length; i++) {
  if(K[i]=='Sometimes/Sort-of')
  {v=v+Q[i];
    c=c+1;
    if(c>0)
    v=v+',';
  }
}return v;}
function theScore(){
  
  let K=[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28,q29,q30,q31,q32,q33];let pc=0,pr=0;
for (let i = 0; i < K.length; i++) {
  if(K[i]=='Sometimes/Sort-of')
  {
    pc=pc+1;
  }
  else if(K[i]=="Almost always/Very True")
  {
 pr=pr+1;
  }
  
}

TotalScore=pc+pr;
return TotalScore;
}
function red(val)
{let count=0;
  for(let i=0;i<val.length;i++)
  {
if(val[i]=="Almost always/Very True")
count=count+1;
  }
return count;
}
function pink(val)
{let count=0;
  for(let i=0;i<val.length;i++)
  {
if(val[i]=="Sometimes/Sort-of")
count=count+1;
  }
return count;
}
function yeses(val)
{ let count=0;
  for(let i=0;i<val.length;i++)
  {
if(val[i]=="yes")
count=count+1;
  }
return count;
}
//Diorder
function calScore()
{
  let g=[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28,q29,q30,q31,q32,q33];
  
  Score=theScore();
  console.log(Score);
}
 const  Disoder=(g,t,s,arrayofYesAndNo)=>
{let TFlags,PRiskRate,RRiskRate,MRiskT,TotRisk,DScore,less25=0,btw25_50=0,more50=0,MildRisk,ModRisk,HighRisk,numberYes;
  Rflag=red(g);
  Pflag=pink(g);
  numberYes=yeses(arrayofYesAndNo);
  
  
  TFlags=Rflag+Pflag;

  DScore=Rflag*2+Pflag
  PRiskRate=Pflag/t;
  RRiskRate=Rflag/t;
  PRiskRate=Pflag/t;
  (MRiskT=PRiskRate>50)

  TotRisk=(DScore/(t*2))*100;
if(TotRisk<=25)
{less25=1;less25f=less25f+1}
else if(TotRisk>25 & TotRisk<50)
{btw25_50f=btw25_50f+1;ModRisk=true;}
else
{more50f=more50f+1;HighRisk=true;}
console.log("value of "+ s)
console.log(TFlags,PRiskRate,RRiskRate,MRiskT,TotRisk,DScore)
let re=[DScore,Math.round(TotRisk)];
return re;

}
function theyes(){
let Q=["Experiencing single event, a series of connected traumatic events or chronic enduring stress","	Parental abuse or neglect	","Frequent changes in the caregiver","	Change in immediate environment (Beginning day care, shifting home, parent returning to work, arrival of new sibling)","	Maternal depression or any other mental illness at home","	Physical or sexual abuse","	Divorce",	"Substance abuse",	"Imprisoned Relative"	];
  let v=" ";
  let K=[q38,q39,q40,q41,q42,q43,q44,q45,q46];let c=0;
for (let i = 0; i < K.length; i++) {
  if(K[i]=='Yes')
  {v=v+Q[i];
    c=c+1;
    if(c>0)
    v=v+',';
  }
}return v;}
function finalresults()
{ calScore();
  thepinkflag();
  console.log(more50f,btw25_50f,less25f)
  if(Score>5){
    woztell("https://mha.onrender.com/mha/report/"+submission_id,phone);
  if(more50f>btw25_50f && more50f>less25f)
  { console.log("more50");
  let Sc=ODD[0];
  let f=`ODD : Score ${Sc}  : Risk % - ${ODD[1]} Conduct Disorder : Score - ${conduct[0]} : Risk % - ${conduct[1]} Reactive Attachment Disorder : Score - ${reactive[0]} : Risk % - ${reactive[1]}; Generalised Anxiety : Score - ${general[0]} : Risk % - ${general[1]}; Separation Anxiety Disorder : Score - ${separation[0]} : Risk % - ${separation[1]}; Mood Disorder/Affective Disorder : Score - ${mood[0]} : Risk % - ${mood[1]}; Sleep Bahaviour Disorder : Score - ${sleep[0]} : Risk % - ${sleep[1]}; Eating Behaviour Disorder : Score - ${Eating[0]} : Risk % - ${Eating[1]}; Obsessive Compulsive Disorders : Score -${obsessive[0]} : Risk % - ${obsessive[1]}; Disinhibited social engagement disorder : Score - ${disinhited[0]} : Risk % - ${disinhited[1]}`	;	
  const sub =  axios.get('https://testing.inditech.co.in/mhareport.php', { params: { submission_id:submission_id,report:"Yes/Morethan50D.ejs",reportP:"Yes/Morethan50P.ejs",ace:f} });  
  createpdf('./template/Yes/Morethan50D.html',"doctor",submission_id,name,age,gender,email79,date,theresponses,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28,q29,q30,q31,q32,q33,star1,star2,q34,q35,q36,q37,q38,q39,q40,q41,q42,q43,q44,q45,q46, f)
    createpdf('./template/Yes/Morethan50P.html',"Patient",submission_id,name,age,gender,email79,date,theresponses,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28,q29,q30,q31,q32,q33,star1,star2,q34,q35,q36,q37,q38,q39,q40,q41,q42,q43,q44,q45,q46," ")
  }
  else if(btw25_50f>more50f && btw25_50f>less25f)
  {console.log("btw25_50");
 let f=`ODD : Score ${ODD[0]}  : Risk % - ${ODD[1]} Conduct Disorder : Score - ${conduct[0]} : Risk % - ${conduct[1]} Reactive Attachment Disorder : Score - ${reactive[0]} : Risk % - ${reactive[1]}; Generalised Anxiety : Score - ${general[0]} : Risk % - ${general[1]}; Separation Anxiety Disorder : Score - ${separation[0]} : Risk % - ${separation[1]}; Mood Disorder/Affective Disorder : Score - ${mood[0]} : Risk % - ${mood[1]}; Sleep Bahaviour Disorder : Score - ${sleep[0]} : Risk % - ${sleep[1]}; Eating Behaviour Disorder : Score - ${Eating[0]} : Risk % - ${Eating[1]}; Obsessive Compulsive Disorders : Score -${obsessive[0]} : Risk % - ${obsessive[1]}; Disinhibited social engagement disorder : Score - ${disinhited[0]} : Risk % - ${disinhited[1]}`	;	
 const sub =  axios.get('https://testing.inditech.co.in/mhareport.php', { params: { submission_id:submission_id,report:"Yes/50to25D.ejs",reportP:"Yes/50to25P.ejs",ace:f} });  
 createpdf('./template/Yes/50to25D.html',"doctor",submission_id,name,age,gender,email79,date,theresponses,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28,q29,q30,q31,q32,q33,star1,star2,q34,q35,q36,q37,q38,q39,q40,q41,q42,q43,q44,q45,q46,f)
    createpdf('./template/Yes/50to25P.html',"Patient",submission_id,name,age,gender,email79,date,theresponses,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28,q29,q30,q31,q32,q33,star1,star2,q34,q35,q36,q37,q38,q39,q40,q41,q42,q43,q44,q45,q46," ")
  }
  else if(less25f>more50f && less25f>btw25_50f)
  {console.log("less25");
  let f=`ODD : Score ${ODD[0]}  : Risk % - ${ODD[1]} Conduct Disorder : Score - ${conduct[0]} : Risk % - ${conduct[1]} Reactive Attachment Disorder : Score - ${reactive[0]} : Risk % - ${reactive[1]}; Generalised Anxiety : Score - ${general[0]} : Risk % - ${general[1]}; Separation Anxiety Disorder : Score - ${separation[0]} : Risk % - ${separation[1]}; Mood Disorder/Affective Disorder : Score - ${mood[0]} : Risk % - ${mood[1]}; Sleep Bahaviour Disorder : Score - ${sleep[0]} : Risk % - ${sleep[1]}; Eating Behaviour Disorder : Score - ${Eating[0]} : Risk % - ${Eating[1]}; Obsessive Compulsive Disorders : Score -${obsessive[0]} : Risk % - ${obsessive[1]}; Disinhibited social engagement disorder : Score - ${disinhited[0]} : Risk % - ${disinhited[1]}`	;	
  const sub =  axios.get('https://testing.inditech.co.in/mhareport.php', { params: { submission_id:submission_id,report:"Yes/upto25D.ejs",reportP:"Yes/upto25P.ejs",ace:f} });
   createpdf('./template/Yes/upto25D.html',"doctor",submission_id,name,age,gender,email79,date,theresponses,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28,q29,q30,q31,q32,q33,star1,star2,q34,q35,q36,q37,q38,q39,q40,q41,q42,q43,q44,q45,q46,f)
    createpdf('./template/Yes/upto25D.html',"Patient",submission_id,name,age,gender,email79,date,theresponses,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28,q29,q30,q31,q32,q33,star1,star2,q34,q35,q36,q37,q38,q39,q40,q41,q42,q43,q44,q45,q46," ")
  }
  }
  else
  {
    woztell("https://mha.onrender.com/mha/report/"+submission_id,phone);
    if(Score>=5 && numberYes>0){
      console.log("55ACED");
      let f=theyes();
      const sub =  axios.get('https://testing.inditech.co.in/mhareport.php', { params: { submission_id:submission_id,report:"No/55ACED.ejs",reportP:"No/55ACEP.ejs",ace:f} });
      createpdf('./template/No/55ACED.html',"doctor",submission_id,name,age,gender,email79,date,theresponses,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28,q29,q30,q31,q32,q33,star1,star2,q34,q35,q36,q37,q38,q39,q40,q41,q42,q43,q44,q45,q46,f);
      createpdf('./template/No/55ACEP.html',"Patient",submission_id,name,age,gender,email79,date,theresponses,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28,q29,q30,q31,q32,q33,star1,star2,q34,q35,q36,q37,q38,q39,q40,q41,q42,q43,q44,q45,q46," ");
    }
    else if(Score<=5 && numberYes==0){
      let f=thepinkflag();
      console.log("55NOACED");
      const sub =  axios.get('https://testing.inditech.co.in/mhareport.php', { params: { submission_id:submission_id,report:"No/55NoACED.ejs",reportP:"No/55NoACEP.ejs",ace:f} });
      createpdf('./template/No/55NoACED.html',"doctor",submission_id,name,age,gender,email79,date,theresponses,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28,q29,q30,q31,q32,q33,star1,star2,q34,q35,q36,q37,q38,q39,q40,q41,q42,q43,q44,q45,q46,f);
      createpdf('./template/No/55NoACEP.html',"Patient",submission_id,name,age,gender,email79,date,theresponses,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28,q29,q30,q31,q32,q33,star1,star2,q34,q35,q36,q37,q38,q39,q40,q41,q42,q43,q44,q45,q46," ")
    }
    else if(Score>0 && numberYes==0 ){
      console.log("04NOACED");
      let f=thepinkflag();
      const sub =  axios.get('https://testing.inditech.co.in/mhareport.php', { params: { submission_id:submission_id,report:"No/04NOACED.ejs",reportP:"No/04NOACEP.ejs",ace:f} });
      createpdf('./template/No/04NoACED.html',"doctor",submission_id,name,age,gender,email79,date,theresponses,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28,q29,q30,q31,q32,q33,star1,star2,q34,q35,q36,q37,q38,q39,q40,q41,q42,q43,q44,q45,q46,f);
      createpdf('./template/No/04NoACEP.html',"Patient",submission_id,name,age,gender,email79,date,theresponses,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28,q29,q30,q31,q32,q33,star1,star2,q34,q35,q36,q37,q38,q39,q40,q41,q42,q43,q44,q45,q46," ")
    }
    else if(Score>0 && numberYes>=1){
      console.log("04ACED");
      let f=thepinkflag();
      const sub =  axios.get('https://testing.inditech.co.in/mhareport.php', { params: { submission_id:submission_id,report:"No/04ACED.ejs",reportP:"No/04ACEP.ejs",ace:f} });
      createpdf('./template/No/04ACED.html',"doctor",submission_id,name,age,gender,email79,date,theresponses,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28,q29,q30,q31,q32,q33,star1,star2,q34,q35,q36,q37,q38,q39,q40,q41,q42,q43,q44,q45,q46,f);
      createpdf('./template/No/04ACEP.html',"Patient",submission_id,name,age,gender,email79,date,theresponses,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28,q29,q30,q31,q32,q33,star1,star2,q34,q35,q36,q37,q38,q39,q40,q41,q42,q43,q44,q45,q46," ")
    }
    else 
    {
      console.log("ZERO");
      const sub =  axios.get('https://testing.inditech.co.in/mhareport.php', { params: { submission_id:submission_id,report:"No/zeroD.ejs",reportP:"No/zeroP.ejs",ace:f} });
      createpdf('./template/No/zeroD.html',"doctor",submission_id,name,age,gender,email79,date,theresponses,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28,q29,q30,q31,q32,q33,star1,star2,q34,q35,q36,q37,q38,q39,q40,q41,q42,q43,q44,q45,q46," ");
      createpdf('./template/No/zeroP.html',"Patient",submission_id,name,age,gender,email79,date,theresponses,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28,q29,q30,q31,q32,q33,star1,star2,q34,q35,q36,q37,q38,q39,q40,q41,q42,q43,q44,q45,q46," ");
    }
  }
}


let ODD=[],conduct=[],adjust=[],post=[],reactive=[],general=[],separation=[],depression=[],mood=[],regulatory=[],sleep=[],obsessive=[],disinhited=[],Eating=[];
function calculation(){
 let arrayofYesAndNo=[q38,q39,q40,q41,q42,q43,q44,q45,q46];
   ODD=Disoder([q3,q7,q8,q9,q10,q11],6,"ODD",arrayofYesAndNo);
   conduct=Disoder([q3,q6,q11,q18],4,"conduct",arrayofYesAndNo);
   adjust=Disoder([q3,q4,q8,q10,q13,q14,q16],7,"Adjust",arrayofYesAndNo);
   post=Disoder([q1,q4,q5,q9,q12,q15,q18,q22,q30,q33],10,"Post",arrayofYesAndNo);
   reactive=Disoder([q2,q6,q7,q16,q18,q19,q31,q32],8,"Reactive",arrayofYesAndNo);
   general=Disoder([q4,q12,q15,q16,q17,q21],6,"Gereral",arrayofYesAndNo);
   separation=Disoder([q4,q14,q16],3,"Separation",arrayofYesAndNo);
   depression=Disoder([q1,q2,q18,q23,q30],5,"Depression",arrayofYesAndNo);
   mood=Disoder([q1,q2,q3,q6,q9,q11,q16],7,"Mood",arrayofYesAndNo);
   regulatory=Disoder([q1,q2,q3,q5,q6,q9,q11,q12,q15,q17,q18,q20,q24,q29,q32],15,"Regulatory",arrayofYesAndNo);
   sleep=Disoder([q26,q27],2,"Sleep",arrayofYesAndNo);
   obsessive=Disoder([q20,q27],2,"Obsessive",arrayofYesAndNo);
   Eating=Disoder([q8,q26],2,"Eating",arrayofYesAndNo);
   disinhited=Disoder([q31],1,"Disinhited",arrayofYesAndNo);
  finalresults();

}
 //Creating PDF
function createpdf(report,individual,submission_id,name,age,gender,email79,date,theresponses,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28,q29,q30,q31,q32,q33,star1,star2,q34,q35,q36,q37,q38,q39,q40,q41,q42,q43,q44,q45,q46,f)
 {
  var html = fs.readFileSync(report, "utf8");
  var options = {
    format: "A3",
    orientation: "portrait",
    border: "0mm",
    Image:"/Users/vedantmishra/Desktop/INDItech/logo.png",
    footer: {
      height: "15mm",
    }
    
};
var document = { 
  html: html,
  data: {
   name,age,gender,email79,date,theresponses,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28,q29,q30,q31,q32,q33,star1,star2,q34,q35,q36,q37,q38,q39,q40,q41,q42,q43,q44,q45,q46,f
  },
  path: path.join(submission_id,individual,"./report.pdf"),
  type: "",
};
pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
 }
//  app.get('*', function (req, res) {    
//   const protocol = req.protocol;
//   const host = req.hostname;
//   const url = req.originalUrl;
//   const port = process.env.PORT ;

//   const fullUrl = `${protocol}://${host}:${port}${url}`
  
//   const responseString = `Full URL is: ${fullUrl}`;                       
//   res.send(responseString);  
// })
 
app.listen(process.env.PORT, (req,res) => {
  console.log(res)
  
  console.log('Our express server is up on port 7000' );
 
});

async function getVal(sub)
{ var datae; k="5502755436227612192";
  await axios.get('https://testing.inditech.co.in/mharet.php', { params: { submission_id: k } })
    .then((res) => {
        console.log(`Status: ${res.status}`);
      //console.log( res.data);
        datae= res.data;
        console.log(datae.ace)
    }).catch((err) => {
        console.error(err);
    });
   

  }
 
  //getVal(12);
// server.listen(process.env.PORT, process.env.host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// });
