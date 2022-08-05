let cv= 
    {
       Firstname:"Guruprasath",
       Secondname: "R",
        Email_Id: "viraguruprasath@gmail.com",
         
        
        Educationalqualification:{
            Bachelorofengineering :"Surya group of institution, vikravandi, villupuram, 605652.",
            course : "Automobile engineering - 59%",

            Diploma: "sri venkateswara polytechnic college, arani main rd, next to govt.medical college, adukkampari, 632011",
            Course: "mechanical engineering - 55%",

            sslc: "voorhees higher secondary school, 632001. - 50%",
         },

         Techanicalskill:{

             Softwarestooperate :'AutoCAD,ProE,catiya,Ansys'
         },

          Areaofintrest:
                        { 
                          no1:'Machine Learning',
                          no2:'Hydraulics and Pneumatic',
                          no3:'PLC and CNC Programming',
                          no4: 'Automobile'

                        },

        personalinfo:{
            personaladdress:{
                       street:"Mariyamman koil st",
                        door_no:'08', 
                         area:'kosapet', 
                         city:'vellore', 
                     district:'vellore',
                     Pincode :632001
                    },

                      Gender : 'Male',
                 Nationality : 'Indian',
                       State : 'Tamil nadu',
          Languageknown :'Tamil, English, kannada, Telugu ',   
                     
         }
                 

         }

    
{
    let resumeJSON = JSON.stringify(cv);// object to JSON CONVERSION 
    console.log(resumeJSON);

let resumeobj  =JSON.parse(resumeJSON);
console.log(resumeobj);
 

};