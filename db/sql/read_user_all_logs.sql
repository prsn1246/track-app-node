SELECT 
 id             AS   "logId"
,user_id        AS   "userId"
,login_time     AS   "loginTime"
,logout_time    AS   "logoutTime"
,hours_worked   AS   "hoursWorked"
FROM user_logins
WHERE user_id = ${userId}