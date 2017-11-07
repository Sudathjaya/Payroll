var express= require('express');
var pg = require('pg');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//make pg connection
var connection = process.env.DATABASE_URL || 'postgres://postgres:123@localhost:5432/Phoenix_ERP';

const client = new pg.Client(connection);


client.connect(function(error){
    if(!!error){
        console.log('error');
    }else{
        console.log('connected');
    }
});




// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(bodyParser.json());







//get data from item table
app.get('/PoItems',function(req,resp){
    //about mysql
    client.query("select * from purchesing_order", function(error, rows, fields){
        //callback
         if(!!error){
             console.log('error in the quary');
         }else{
             //phase the database
             console.log('sucsessfull log to quary \n ');
              console.log(rows);
              resp.send(rows.rows);
         }
    });
});

//get data from payment table
app.get('/Detail',function(req,resp){
    //about mysql
    client.query("select * from paymentsofemployees", function(error, rows, fields){
        //callback
         if(!!error){
             console.log('error in the quary');
         }else{
             //phase the database
             console.log('sucsessfull log to quary \n ');
              console.log(rows);
              resp.send(rows.rows);
         }
    });
});

//get data from deduction table
app.get('/Deduction',function(req,resp){
    //about mysql
    client.query("select * from deductions", function(error, rows, fields){
        //callback
         if(!!error){
             console.log('error in the quary');
         }else{
             //phase the database
             console.log('sucsessfull log to quary \n ');
              console.log(rows.rows);
              resp.send(rows.rows);
         }
    });
});

app.post('/addOredit',function(req,res){
var post=req.body;
console.log(post);
//console.log(post.did,post.dtype,post.amount);
client.query(" INSERT INTO deductions VALUES ('"+post.did+"','"+post.dtype+"','"+post.amount+"')",function (error)
{
if (error){
console.log("error");
}
else{
 console.log('success insert');
 res.json("ok");
}
    
});
});

         








//get data from allowances table
app.get('/Allowance',function(req,resp){
    //about mysql
    client.query("select * from allowances", function(error, rows, fields){
        //callback
         if(!!error){
             console.log('error in the quary');
         }else{
             //phase the database
             console.log('sucsessfull log to quary \n ');
              console.log(rows);
              resp.send(rows.rows);
         }
    });
});


  app.post('/addallowance',function(req,res){
    var post=req.body;
    console.log(post);
    console.log(post.aid,post.atype,post.amount);
    client.query("INSERT INTO allowances VALUES ('"+post.aid+"','"+post.atype+"','"+post.amount+"')",function (error)
    {
        if (error){
         console.log("error");
        }
        else{
        console.log('success insert');
         res.json("ok");
            }
    
    });
      });



app.post('/deleteRow',function(req,res){
    var obj=req.body;
    console.log(obj);
    //console.log(post.did,post.dtype,post.amount);

    client.query(" DELETE FROM deductions WHERE did= '"+obj.did+"' "   , function (error)
    {
        if (error){
         console.log("error");
        }
        else{
        console.log('success delete');
        res.json("ok");
            }
    
    });
  
      });

   app.post('/a_deleteRow',function(req,res){
    var obj=req.body;
    console.log(obj);
    //console.log(post.did,post.dtype,post.amount);

    client.query(" DELETE FROM allowances WHERE aid= '"+obj.aid+"' "   , function (error)
    {
        if (error){
         console.log("error");
        }
        else{
        console.log('success delete');
        res.json("ok");
            }
    
    });
  
      });

   
   app.post('/updatdedu',function(req,res){
    var obj2=req.body;
    console.log(obj2);
    //console.log(post.did,post.dtype,post.amount);

    client.query(" UPDATE  deductions Set dtype='"+obj2.dtype+"',amount='"+obj2.amount+"' WHERE did= '"+obj2.did+"' "   , function (error)
    {
        if (error){
         console.log("error");
        }
        else{
        console.log('success update');
        res.json("ok");
            }
    
    });
  
      });      


   app.post('/updateallowa',function(req,res){
    var obj2=req.body;
    console.log(obj2);
    //console.log(obj2.aid,obj2.atype,obj2.amount);

    client.query(" UPDATE  allowances Set atype='"+obj2.atype+"',amount='"+obj2.amount+"' WHERE aid= '"+obj2.aid+"' "   , function (error)
    {
        if (error){
         console.log("error");
        }
        else{
        console.log('success update');
        res.json("ok");
            }
    
    });
  
      });

      //get data from deduction table
app.get('/getpayments',function(req,resp){
    //about mysql
    client.query("select * from payments_view", function(error, rows, fields){
        //callback
         if(!!error){
             console.log('error in the quary');
         }else{
             //phase the database
             console.log('sucsessfull log to quary \n ');
              console.log(rows.rows);
              resp.send(rows.rows);
         }
    });
});      
   

      /* app.post('/updatep_btype',function(req,res){
    var obj2=req.body;
    console.log(obj2);
    //console.log(obj2.aid,obj2.atype,obj2.amount);

    client.query("UPDATE employee Set bank_code='"+obj2.bank_type+"' WHERE p_emp_id= '"+obj2.emp_id+"' "   , function (error)
    {
        if (error){
         console.log(error)
        }
        else{
        console.log('success update');
        res.json("ok");
            }
    
    });
  
      });   */


//get data from E/Desig/Dept table
app.get('/empl',function(req,resp){
//about mysql
client.query("select * from employee as e,designation as d,department dep,emp_bank_details as eban WHERE e.designation_id=d.designation_id and e.dept_id=dep.dept_id and e.bank_code=eban.bank_code ", function(error, rows, fields){
 //callback
if(!!error){
console.log('error in the quary');
}else{
 //phase the database
console.log('sucsessfull log to quary \n ');
console.log(rows);
resp.send(rows.rows);
         }
    });
});


//get data from E/Deduc/em an deduc table
app.get('/empl3',function(req,resp){
//about mysql
client.query("select * from employee as e,emp_deduction ed,deductions ded WHERE  e.emp_id=ed.emp_deduct_id and ded.did=ed.deduct_id ", function(error, rows, fields){
 //callback
if(!!error){
console.log('error in the quary');
}else{
 //phase the database
console.log('sucsessfull log to quary \n ');
console.log(rows);
resp.send(rows.rows);
         }
    });
});


//get data from E/Allow/Em and allow table

app.get('/empl4',function(req,resp){
//about mysql
client.query("select * from employee as e,emp_allowance al,allowances allo WHERE  e.emp_id=al.emp_all_id and allo.aid=al.all_id ", function(error, rows, fields){
 //callback
if(!!error){
console.log('error in the quary');
}else{
 //phase the database
console.log('sucsessfull log to quary \n ');
console.log(rows);
resp.send(rows.rows);
         }
    });
});

///get data from emplyee table to deduction enterin  tabale
//get data from item table
app.get('/empdeduct',function(req,resp){
 client.query("select * from employee ", function(error, rows, fields){
//callback
if(!!error){
console.log('error in the quary');
 }else{
//phase the database
console.log('sucsessfull log to quary \n ');
 console.log(rows);
resp.send(rows.rows);
         }
    });
});
app.get('/empallow1',function(req,resp){
//about mysql
client.query("select * from employee ", function(error, rows, fields){
        //callback
if(!!error){
console.log('error in the quary');
}else{
//phase the database
console.log('sucsessfull log to quary \n ');
console.log(rows);
resp.send(rows.rows);
         }
    });
});


///get data from deduction table to deduction enterin  tabale
//get data from item table
app.get('/empdeduct1',function(req,resp){
    //about mysql
    client.query("select * from deductions ", function(error, rows, fields){
        //callback
         if(!!error){
             console.log('error in the quary');
         }else{
             //phase the database
             console.log('sucsessfull log to quary \n ');
              console.log(rows);
              resp.send(rows.rows);
         }
    });
});
//get data from allowance table toemploye allowance insert table
app.get('/getallow1',function(req,resp){
    //about mysql
    client.query("select * from allowances ", function(error, rows, fields){
        //callback
         if(!!error){
             console.log('error in the quary');
         }else{
             //phase the database
             console.log('sucsessfull log to quary \n ');
              console.log(rows);
              resp.send(rows.rows);
         }
    });
});

  app.post('/senddata',function(req,res){
    var newd=req.body;
    console.log(newd);
    
    client.query("INSERT INTO emp_deduction VALUES ('"+newd.eid+"','"+newd.did+"','"+newd.d_amount+"')",function (error)
    {
        
        if (error){
         console.log("error");
        }
        else{
        console.log('success insert');
         res.json("ok");
            }
    
    });
      });

       app.post('/senddata1',function(req,res){
    var newd=req.body;
    console.log(newd);
    
    client.query("INSERT INTO emp_allowance(emp_all_id,all_id,a_amount) VALUES ('"+newd.eid+"','"+newd.aid+"','"+newd.a_amount+"')",function (error)
    {
        
        if (error){
         console.log(error);
        }
        else{
        console.log('success insert');
         res.json("ok");
            }
    
    });
      });



//get data from Employee deduction ,emp_deduction table
app.get('/viewempdeduction',function(req,resp){
//about mysql
client.query("select * from employee as e,deductions d,emp_deduction empd WHERE e.emp_id=empd.emp_deduct_id and empd.deduct_id=d.did ", function(error, rows, fields){
 //callback
if(!!error){
console.log('error in the quary');
}else{
 //phase the database
console.log('sucsessfull log to quary \n ');
console.log(rows);
resp.send(rows.rows);
         }
    });
});


//udate emp deduction table

   app.post('/updatdeduemp',function(req,res){
    var obj2=req.body;
    console.log(obj2);
    //console.log(post.did,post.dtype,post.amount);

    client.query(" UPDATE  emp_deduction Set d_amount='"+obj2.d_amount+"' WHERE emp_deduct_id= '"+obj2.emp_id+"' "   , function (error)
    {
        if (error){
         console.log("error");
        }
        else{
        console.log('success update');
        res.json("ok");
            }
    
    });
  
      }); 

//delete row from emp deduction

      app.post('/deleteRowemp',function(req,res){
    var obj=req.body;
    console.log(obj);
    //console.log(post.did,post.dtype,post.amount);

    client.query(" DELETE FROM emp_deduction WHERE emp_deduct_id= '"+obj.emp_id+"' "   , function (error)
    {
        if (error){
         console.log("error");
        }
        else{
        console.log('success delete');
        res.json("ok");
            }
    
    });
  
      });

      //get data from Employee allowance ,emp_deduction table
app.get('/getempallowancebyname',function(req,resp){
//about mysql
client.query("select * from employee  e,allowances a,emp_allowance empal WHERE e.emp_id=empal.emp_all_id and empal.all_id=a.aid ", function(error, rows, fields){
 //callback
if(!!error){
console.log('error in the quary');
}else{
 //phase the database
console.log('sucsessfull log to quary \n ');
console.log(rows);
resp.send(rows.rows);
         }
    });
});

//update cmp Aloowance table
   app.post('/updatallowemp',function(req,res){
    var obj2=req.body;
    console.log(obj2);
    //console.log(post.did,post.dtype,post.amount);

    client.query(" UPDATE  emp_allowance Set a_amount='"+obj2.a_amount+"' WHERE emp_all_id= '"+obj2.emp_id+"' "   , function (error)
    {
        if (error){
         console.log("error");
        }
        else{
        console.log('success update');
        res.json("ok");
            }
    
    });
  
      }); 

      //delete row from emp Allowance

      app.post('/deleterowempallow',function(req,res){
    var obj4=req.body;
    console.log(obj4);
    //console.log(post.did,post.dtype,post.amount);

    client.query(" DELETE FROM emp_allowance WHERE emp_all_id= '"+obj4.emp_id+"' "   , function (error)
    {
        if (error){
         console.log("error");
        }
        else{
        console.log('success delete');
        res.json("ok");
            }
    
    });
  
      });

//get data from E/Allow/Em and allow table

app.get('/attendance',function(req,resp){
//about mysql
client.query("select * from attendance", function(error, rows, fields){
 //callback
if(!!error){
console.log('error in the quary');
}else{
 //phase the database
console.log('sucsessfull log to quary \n ');
//console.log(rows);
resp.send(rows.rows);
         }
    });
});
//get data from designation and employee for OT scale

app.get('/attendac3',function(req,resp){
//about mysql
client.query("select e.emp_id,d.ot_per_hour from employee e,designation d WHERE e.designation_id=d.designation_id; ", function(error, rows, fields){
 //callback
if(!!error){
console.log('error in the quary');
}else{
 //phase the database
console.log('sucsessfull log to quary \n ');
//console.log(rows);
resp.send(rows.rows);
         }
    });
});

//get data from attendance distnic dates
//get data from attendace by grup of employee
app.get('/attendac2',function(req,resp){
//about mysql
client.query("select count(DISTINCT attend_date) from  attendance,ranges_of_dates WHERE attend_date BETWEEN '2017-03-01' and '2017-03-31' ", function(error, rows, fields){
 //callback
if(!!error){
console.log('error in the quary');
}else{
 //phase the database
console.log('sucsessfull log to quary \n ');
//console.log(rows);
resp.send(rows.rows);
         }
    });
});
//get data from E/Allow/Em and allow table
//get data from etf
app.get('/getleave',function(req,resp){
//about mysql
client.query("select * FROM leave l,request_leave r WHERE l.leave_id=r.leave_id ", function(error, rows, fields){
 //callback
if(!!error){
console.log('error in the quary');
}else{
 //phase the database
console.log('sucsessfull log to quary \n ');

resp.send(rows.rows);
         }
    });
});


app.get('/getMonth',function(req,resp){
//about mysql
client.query("select * FROM ranges_of_dates", function(error, rows, fields){
 //callback
if(!!error){
console.log('error in the quary');
}else{
 //phase the database
console.log('sucsessfull log to quary \n ');

resp.send(rows.rows);
         }
    });
});
app.get('/getranges',function(req,resp){
//about mysql
client.query("SELECT * from attendance where attendance_id in(select max(attendance_id) from attendance)  ", function(error, rows, fields){
 //callback
if(!!error){
console.log('error in the quary');
}else{
 //phase the database
console.log('sucsessfull log to quary \n ');

resp.send(rows.rows);
         }
    });
});

/*
//get data from allowance table toemploye allowance insert table
app.get('/getpastpayments',function(req,resp){
    //about mysql
    client.query("select * from reports_of_payments ", function(error, rows, fields){
        //callback
         if(!!error){
             console.log('error in the quary');
         }else{
             //phase the database
             console.log('sucsessfull log to quary \n ');
              console.log(rows);
              resp.send(rows.rows);
         }
    });
});*/
//get data from allowance table toemploye allowance insert table
app.get('/getpastpaymentsmonth',function(req,resp){
    //about mysql
    client.query("select * from ranges_of_dates ", function(error, rows, fields){
        //callback
         if(!!error){
             console.log('error in the quary');
         }else{
             //phase the database
             console.log('sucsessfull log to quary \n ');
              console.log(rows);
              resp.send(rows.rows);
         }
    });
});


app.get('/getdataofpastpayments',function(req,resp){
    //about mysql
    client.query("select * from payments_view_past_details", function(error, rows, fields){
        //callback
         if(!!error){
             console.log('error in the quary');
         }else{
             //phase the database
             console.log('sucsessfull log to quary \n ');
              console.log(rows.rows);
              resp.send(rows.rows);
         }
    });
});

//check date of month
app.get('/getcorectdateofpayment',function(req,resp){
    //about mysql
    client.query("select * from rep_of_p_more_detls rep,employee e,department d,designation de WHERE e.emp_id=rep.emp_id and d.dept_id=e.dept_id and e.designation_id=de.designation_id ;", function(error, rows, fields){
        //callback
         if(!!error){
             console.log('error in the quary');
         }else{
             //phase the database
             console.log('sucsessfull log to quary \n ');
              console.log(rows.rows);
              resp.send(rows.rows);
         }
    });
});


//insert data  to more details
      app.post('/insertmordetails',function(req,res){
    var newd=req.body;
    console.log(newd);
    console.log("okkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
    client.query("INSERT INTO rep_of_p_more_detls(emp_id, ot, bonus, leave, total_amount, traveling, medical, house_rent, entertainment, union_charges, loan_installment, date_of_payment,epf,basic)VALUES ( '"+newd.emp_id+"', '"+newd.ot+"', '"+newd.bonus+"', '"+newd.leave+"', '"+newd.total_amount+"', '"+newd.traveling+"', '"+newd.medical+"', '"+newd.house_rent+"', '"+newd.entertainment+"', '"+newd.union_charges+"', '"+newd.loan_installment+"', '"+newd.date_of_payment+"', '"+newd.epf+"', '"+newd.basic+"'); "
,function (error)
    {
        
        if (error){
         console.log(error);
        }
        else{
        console.log('success insert');
         res.json("ok");
            }
    
    });
      });


//insert data  to more details
      app.post('/insertmordetails2',function(req,res){
    var newd1=req.body;
     console.log("okkkkkkk");
    console.log(newd1);
    console.log("okkkkkkkkk");
    client.query( " INSERT INTO reports_of_payments(emp_id,designation_id,dept_id,bank_code,date_of_payment,total_amount, by_paid)VALUES ( '"+newd1.emp_id+"', '"+newd1.designation_id+"', '"+newd1.dept_id+"', '"+newd1.bank_code+"', '"+newd1.date_of_payment+"', '"+newd1.total_amount+"', '"+newd1.by_paid+"') ",function (error)
    {
        
        if (error){
         console.log(error);
        }
        else{
        console.log('success insertttt');
         res.json("ok");
            }
    
    });
      });
//get data from E/Allow/Em and allow table

app.get('/empl45',function(req,resp){
//about mysql
client.query("select * from  emp_allowance", function(error, rows, fields){
 //callback
if(!!error){
console.log('error in the quary');
}else{
 //phase the database
console.log('sucsessfull log to quary \n ');
console.log(rows);
resp.send(rows.rows);
         }
    });
});


app.get('/empl456',function(req,resp){
//about mysql
client.query("select * from  emp_deduction", function(error, rows, fields){
 //callback
if(!!error){
console.log('error in the quary');
}else{
 //phase the database
console.log('sucsessfull log to quary \n ');
console.log(rows);
resp.send(rows.rows);
         }
    });
});





app.listen(3000);


