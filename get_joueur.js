// Afficher tous noms des joueurs
db.joueurs.find({}, {nom: 1})

// Afficher le nom d'un joueur spécifique
db.joueurs.find({nom: "Messi"}, {prenom: 1, nom: 1})

