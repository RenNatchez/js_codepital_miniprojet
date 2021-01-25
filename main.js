                    // Les lieux

let rue = []
let salleATtente = {
    nom: `salle d'attente`,
    lieu: [],
}

let pharmacie = {
    nom: 'pharmacie',
    lieu: [],
}
let cimetière = {
    nom: 'cimetière',
    lieu: [],
}

                    // Class des personnes 

class malades {
    constructor(nom, maladie, argent, poche, etatSante, traitement, lieu) {
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etatSante = etatSante;
        this.traitement = traitement;
        this.lieu = lieu;
        this.goTo = (a, b) => {
            b.lieu.push(a)
            a.lieu = b.nom
            console.log(`${a.nom} entre dans la ${a.lieu}`)
            rue.splice(0, 1)
        }
        this.takeCare = (x) => {
                if (x.traitement == "ctrl+maj+f") {
                    var medoc = 60
                    console.log(`Le traitement de ${x.nom} coût ${medoc}€`)
                    let z = this.argent - medoc
                    this.argent = z
                } else if (x.traitement == "saveOnFocusChange") {
                    var medoc = 100
                    console.log(`Le traitement de ${x.nom} coût ${medoc}€`)
                    let z = this.argent - medoc
                    this.argent = z                    
                } else if (x.traitement == "CheckLinkRelation") {
                    var medoc = 35
                    console.log(`Le traitement de ${x.nom} coût ${medoc}€`)
                    let z = this.argent - medoc
                    this.argent = z
                } else if (x.traitement == "Ventoline") {
                    var medoc = 40
                    console.log(`Le traitement de ${x.nom} coût ${medoc}€`)
                    let z = this.argent - medoc
                    this.argent = z
                } else if (x.traitement == "f12+doc") {
                    var medoc = 20
                    console.log(`Le traitement de ${x.nom} coût ${medoc}€`)
                    let z = this.argent - medoc
                    this.argent = z
                }
            },
            this.paye = (z) => {
                let num = Math.sign(this.argent)
                if (num == 1) {
                    console.log(`${z.nom} a assez d'argent pour payer le traitement, il est donc soigné`)
                } else {
                    console.log(`${z.nom} n'a pas assez d'argent pour payer le traitement`)
                    cimetière.lieu.push(z)
                    z.lieu = cimetière.nom
                    console.log(`${z.nom} est mort il est donc au ${z.lieu}`)

                }
            }
    }
}

let personage0 = new malades('Marcus', 'mal indenté', 100, [], 'malade', null)
let personage1 = new malades('Optimus', 'unsave', 200, [], 'malade', null)
let personage2 = new malades('Sangoku', '404', 80, [], 'malade', null)
let personage3 = new malades('DarthVader', 'azmatique', 110, [], 'malade', null)
let personage4 = new malades('Semicolon', 'syntaxError', 60, [], 'malade', null)

                    // ajout des personnes dans un tableau "rue"

rue.push(personage0, personage1, personage2, personage3, personage4)

                    // objet du Docteur 

let doctor = {
    nom: 'docteur',
    argent: 50,
    cabinet: {
        nom: 'cabinet',
        lieu: [],
    },
    diagnostique(x) {
        if (x.maladie == "mal indenté") {
            console.log(`la maladie de ${x.nom} est mal indenté`)
            x.traitement = `ctrl+maj+f`
            console.log(`le ${this.nom} préscrit a ${x.nom} : ${x.traitement}`)
        } else if (x.maladie == "unsave") {
            console.log(`la maladie de ${x.nom} est unsave`)
            x.traitement = `saveOnFocusChange`
            console.log(`le ${this.nom} préscrit a ${x.nom} : ${x.traitement}`)
        } else if (x.maladie == "404") {
            console.log(`la maladie de ${x.nom} est 404`)
            x.traitement = `CheckLinkRelation`
            console.log(`le ${this.nom} préscrit a ${x.nom} : ${x.traitement}`)
        } else if (x.maladie == "azmatique") {
            console.log(`la maladie de ${x.nom} est mal azmatique`)
            x.traitement = `Ventoline`
            console.log(`le ${this.nom} préscrit a ${x.nom} : ${x.traitement}`)
        } else if (x.maladie == "syntaxError") {
            console.log(`la maladie de ${x.nom} est mal syntaxError`)
            x.traitement = `f12+doc`
            console.log(`le ${this.nom} préscrit a ${x.nom} : ${x.traitement}`)
        }
    },
    patienTIn(x) {
        doctor.cabinet.lieu.push(x);
        x.lieu = doctor.cabinet.nom;
        console.log(`le ${this.nom} fait rentrer ${x.nom} dans le ${x.lieu}`)
        salleATtente.lieu.splice(0, 1)
    },
    patientOut(x) {
        let c = x.argent - 50
        x.argent = c
        console.log(`${x.nom} paye le docteur`)
        console.log(`Il reste a ${x.nom} ${x.argent}`)
        console.log(`${x.nom} quite le ${x.lieu}`)
        rue.push(x)
        doctor.cabinet.lieu.splice(0, 1)
    },
}

console.log(`Il est 8h le ${doctor.nom} ouvre son ${doctor.cabinet.nom} mais il y a encore ${salleATtente.lieu.length} patient dans la ${salleATtente.nom}`)
console.log(`_________________________________`)

// faire rentrer dans la salle d'attentes

for (let i = 0; i < 5; i++) {
    rue[0].goTo(rue[0], salleATtente)
}
rue = []

                    // Boucle sur le recit d'un patient

console.log(`_________________________________`)
console.log(`le ${doctor.nom} va voir dans sa ${salleATtente.nom}, il y trouve ${salleATtente.lieu.length} patients`)
console.log(`_________________________________`)
for (let i = 0; i < 5; i++) {
    doctor.patienTIn(salleATtente.lieu[0])
    doctor.diagnostique(doctor.cabinet.lieu[0])
    doctor.patientOut(doctor.cabinet.lieu[0])
    rue[0].goTo(rue[0], pharmacie)
    pharmacie.lieu[0].takeCare(pharmacie.lieu[0])
    pharmacie.lieu[0].paye(pharmacie.lieu[0])
    pharmacie.lieu.splice(0, 1)
    console.log(`_________________________________`)
    console.log(`le ${doctor.nom} va voir dans sa ${salleATtente.nom}, il y trouve ${salleATtente.lieu.length} patients`)
    console.log(`_________________________________`)
}

