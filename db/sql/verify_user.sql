SELECT 
full_name       AS "fullName"
,user_id        AS  "userId"
,email_address  AS "emailAddress"
,phone_number   AS "phoneAddress"
 FROM users
 WHERE email_address = ${emailAddress}
  AND password = ${password}