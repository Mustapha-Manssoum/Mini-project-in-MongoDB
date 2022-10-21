// get players age using their birthday
var ageMax = 25;
var posteJoueur = "Milieu";
db.joueurs.aggregate([
    { $addFields:
        {
        age: { $dateDiff: { startDate: "$date de naissance", endDate: "$$NOW", unit: "year" } }
        }
    },
    { $match:
        {
            age: {$lte: ageMax},
            poste: posteJoueur
        }
    },
    { $group:
        {
            _id: "$nom", age: {$first: "$age"}
        }
    }
  ])
