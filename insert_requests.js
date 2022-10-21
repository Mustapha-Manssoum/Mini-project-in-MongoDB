// Insertion d'une seule équipes : 
db.équipes.insertOne(
    {
        "nom": "AC Milan",
        "couleurs": ["Rouge", "Noire"],
        "stade": "Stade San Siro",
        "effectifs": [
          "Pepe Reina",
          "Ciprian Tatarusanu",
          "Mike Maignan",
          "Antonio Mirante",
          "Raoul Bellanova",
          "Davide Calabria",
          "Fodé Ballo-Touré",
          "Theo Hernandez",
          "Sergino Dest",
          "Fikayo Tomori",
          "Simon Kjaer",
          "Alessandro Florenzi",
          "Matteo Gabbia",
          "Ismael Bennacer",
          "Brahim Diaz",
          "Yacine Zinedine Adli",
          "Sandro Tonali",
          "Tiémoué Bakayoko",
          "Rafael Leao",
          "Rade Krunic",
          "Alexis Saelemaekers",
          "Charles De Ketelaere",
          "Olivier Giroud",
          "Zlatan Ibrahimovic",
          "Ante Rebic",
          "Marko Lazetic",
          "Divock Origi"
        ]
      }
    
)

// Insertion de plusieurs équipes :
db.équipes.insertMany(
    [
        {
            "nom": "AC Milan",
            "couleurs": ["Rouge", "Noire"],
            "stade": "Stade San Siro",
            "effectifs": [
              "Pepe Reina",
              "Ciprian Tatarusanu",
              "Mike Maignan",
              "Antonio Mirante",
              "Raoul Bellanova",
              "Davide Calabria",
              "Fodé Ballo-Touré",
              "Theo Hernandez",
              "Sergino Dest",
              "Fikayo Tomori",
              "Simon Kjaer",
              "Alessandro Florenzi",
              "Matteo Gabbia",
              "Ismael Bennacer",
              "Brahim Diaz",
              "Yacine Zinedine Adli",
              "Sandro Tonali",
              "Tiémoué Bakayoko",
              "Rafael Leao",
              "Rade Krunic",
              "Alexis Saelemaekers",
              "Charles De Ketelaere",
              "Olivier Giroud",
              "Zlatan Ibrahimovic",
              "Ante Rebic",
              "Marko Lazetic",
              "Divock Origi"
            ]
          },
          {
            "nom": "FC Barcelone",
            "couleurs": [
                "Rouge",
                "Bleu",
                "Marron"
            ],
            "stade": "Spotify Camp Nou",
            "effectifs": [
                "Marc-André ter Stegen",
                "Iñaki Peña",
                "Héctor Bellerín",
                "Gérard Piqué",
                "Ronald Araújo",
                "Andreas Christensen",
                "Alonso Marcos",
                "Jordi Alba",
                "Jules Kounde",
                "Eric García",
                "Sergio Busquets",
                "Pedro González López",
                "Franck Kessie",
                "Sergi Roberto",
                "Frenkie de Jong",
                "Pablo Martin Páez Gavira",
                "Ousmane Dembélé",
                "Robert Lewandowski",
                "Ansu Fati",
                "Ferran Torres",
                "Memphis Depay",
                "Raphael Dias Belloli"
            ]
        }
    ]
)

// Idem pour l'insertion des joueurs et de matchs 