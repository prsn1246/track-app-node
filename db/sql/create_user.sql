INSERT INTO users
(
 full_name
,password
,email_address
,phone_number
,creation_date
,last_updation_date
)
VALUES
(
 ${fullName}                       
,${password}                      
,${emailAddress}                   
,${phoneNumber}                                
,now()                                             
,now()                                    
)
RETURNING  
 full_name                     AS   "fullName"
,email_address                 AS   "emailAddress"
,phone_number                  AS   "phoneNumber"
,creation_date                 AS   "creationDate"