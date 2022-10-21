// Afficher tous les noms des équipes
db.équipes.find({}, {nom: 1})

// Afficher le nom d'une équipe spécifique
db.équipes.find({nom: "FC Barcelone"}, {nom: 1})