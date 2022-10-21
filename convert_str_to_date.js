 db.joueurs.updateMany(
    {
       "date de naissance":{
          "$type":"string"
       }
    },
    [
       {
          "$set":{
             "date de naissance":{
                "$dateFromString":{
                   "dateString":"$date de naissance",
                   "format":"%d/%m/%Y"
                }
             }
          }
       }
    ]
 )