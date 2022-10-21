// Création d'une nouvelle collection stockant les joueurs ayant joué au moins X (par ex : 3) matchs, 
// avec pour chaque joueur la moyenne de ses notes

var minMatch = 3;
var nomCollection = "match_3"

db.matchs.aggregate([
    {
        $project:
        {
            joueurs: 
            {
                $concatArrays: [
                    "$joueurs domicile",
                    "$joueurs exterieur"
                ]
            }
        }
    },
    {
        $unwind: "$joueurs"
    },
    {
        $project:
        {
            nom: "$joueurs.nom",
            prenom: "$joueurs.prenom",
            note: "$joueurs.note"
        }
    },
    {
        $group:
        {
            _id: {nom: "$nom", prenom: "$prenom"},
            noteMoyenne: {$avg: "$note"},
            numberMatch: {$sum: 1} 
        }
    },
    {
        $match:
        {
            numberMatch: {$gte: minMatch}
        }
    }, 
    {
        $project:
        {
            Nom: "$_id.nom",
            Prenom: "$_id.prenom",
            Moyenne: "$noteMoyenne"
        }
    },
    {
        $out:
        {
            db: "teams", coll: nomCollection
        }
    }
])