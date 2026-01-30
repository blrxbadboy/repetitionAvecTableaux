//ex1
function tableaufor(tab) {
    for (let i = 0; i < tab.length; i++) {
        console.log(tab[i]);


    }

}

//ex2
function tableauwhile(tab) {
    var i = 0
    while (i < tab.length) {
        console.log(tab[i]);
        i++


    }

}
//ex3
function somme(tab) {
    var res = 0
    for (var i = 0; i < tab.length; i++) {
        res = res + tab[i]

    }
    return res
}
//ex4
function sommeUnsUrDeuxx(tab) {
    var res = 0
    for (var i = 0; i < tab.length; i = i + 2) {
        res = res + tab[i]

    }
    return res

}
//ex5
function sommeSepuisIndex(tab, index) {
    var res = 0
    for (var i = index; i < tab.length; i++) {
        res = res + tab[i]

    }
    return res

}
//ex6
function sommejusquaIndex(tab, index) {
    var res = 0
    for (var i = 0; i < tab[index]; i++) {
        res = res + tab[i]

    }
    return res

}
//ex7
function soustractionInverse(tab) {
    var resultat = tab.length - 1
    for (var i = tab.length - 2; i > 0; i--) {
        resultat = resultat - tab[i]

    }
    return resultat
}

//ex8
function produit(tab) {
    var resut = 1
    for (var i = 0; i < tab.length; i++) {
        resut = resut * tab[i]

    }
    return resut
}

//ex 9
function moyenne(tab) {
    var resultat = 0
    for (let i = 0; i < tab.length; i++) {
        resultat = resultat + tab[i]
    }
    return resultat / tab.length

}
//ex 10
function carre(tab) {
    for (var i = 0; i < tab.length; i++) {
        tab[i] = tab[i] * tab[i]
        puiss = puiss + 1


    }
    return tab

}
//ex 11
function estTableau(v) {
    return Array.isArray(v);
}
//ex 12
function minimum(tab) {
    var min = tab[0]
    for (var i = 1; i < tab.length; i++) {
        if (min > tab[i]) {
            min = tab[i]

        }


    }
    return min

}
//ex 13
function maximum(tab) {
    var max = tab[0]
    for (var i = 1; i < tab.length; i++) {
        if (max < tab[i]) {
            max = tab[i]

        }


    }
    return max

}
//ex 14
function chainepluscourte(tab) {
    var min = tab[0]
    for (var i = 1; i < tab.length; i++) {
        if (min.length > tab[i].length) {
            min = tab[i]

        }


    }
    return min

}
//ex 15
function chainepluslong(tab) {
    var max = tab[0]
    for (var i = 1; i < tab.length; i++) {
        if (max.length < tab[i].length) {
            max = tab[i]

        }


    }
    return max

}
//ex16
function pluslonguepluscourte(tab) {
    var min = tab[0]
    var max = tab[0]
    for (var i = 1; i < tab.length; i++) {
        if (min.length > tab[i].length) {
            min = tab[i]

        }


    } for (var j = 1; j < tab.length; j++) {
        if (max.length < tab[j].length) {
            max = tab[j]

        }


    }
    console.log(min, max);//b return ma habtch tkhdm


}
//ex17
function minimumMaximum(tab) {
    var min = tab[0]
    var max = tab[0]
    for (var i = 1; i < tab; i++) {
        if (min > tab[i]) {
            min = tab[i]

        }


    } for (var j = 1; j < tab; j++) {
        if (max < tab[j]) {
            max = tab[j]

        }


    }
    console.log(min, max);//b return ma habtch tkhdm


}
//ex 18
function multiple(tab, n) {
    for (var i = 0; i < tab.length; i++) {
        tab[i] = tab[i] * n

    }
    return tab
}
//ex 19
function multIndex(tab) {
    for (var i = 0; i < i.length; i++) {
        tab[i] = tab[i] * i

    }
    return tab

}
//ex 20
function longueurs(tab) {
  var nt = []
  for (var i = 0; i < tab.length; i++) {
    nt.push(tab[i].length);
  }

  return nt;
}
//ex 21
function totalCaracteres(tab) {
  var somme = 0;

  for (var i = 0; i < tab.length; i++) {
    somme += tab[i].length;
  }

  return somme;
}
//ex 22
function filtrerMotsPairs(tab) {
  var nt = [];

  for (var i = 0; i < tab.length; i++) {
    if (tab[i].length % 2 === 0) {
      nt.push(tab[i]);
    }
  }
  return nt;
}
//ex 23

function supprimerDernierDeChaque(tab) {
  for (var i = 0; i < tab.length; i++) {
    tab[i].pop();
  }
  return tab;
}
//ex 24
function ajouterDernierAChaque(tab, e) {
  for (var i = 0; i < tab.length; i++) {
    tab[i].push(e);
  }

  return tab;
}
//ex 25
function sommeTableaux(tab) {
  var res = 0;
  for (var i = 0; i < tab.length; i++) {
  
}}
