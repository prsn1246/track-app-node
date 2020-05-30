INSERT INTO user_logins
(
 user_id
,login_time
,logout_time
,hours_worked
,creation_date
,last_updation_date
)
VALUES
(
 ${userId}
,${loginTime}                       
,${logoutTime}                      
,${hoursWorked}                   
,now()                                             
,now()                                    
)