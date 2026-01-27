//ex1
function tableaufor(tab) {
    for (let i = 0; i < tab.length; i++) {
        console.log(tab[i]);
        
        
    }
    
}

//ex2
function tableauwhile(tab) {
    var i=0
    while (i<tab.length) {
        console.log(tab[i]);
        i++
        
        
    }
    
}
//ex3
function somme(tab) {
    var res=0
    for (var i = 0; i < tab.length; i++) {
        res=res+tab[i]
        
    }
    return res
}
//ex4
function sommeUnsUrDeuxx(tab) {
    var res=0
    for (var i = 0; i < tab.length; i=i+2) {
        res=res+tab[i]
        
    }
    return res
    
}
//ex5
function sommeSepuisIndex(tab,index) {
    var res=0
    for (var i = index; i < tab.length; i++) {
        res=res+tab[i]
        
    }
    return res
    
}
//ex6
function sommejusquaIndex(tab,index) {
    var res=0
    for (var i = 0; i < tab[index]; i++) {
        res=res+tab[i]
        
    }
    return res
    
}
//ex7
function soustractionInverse(tab) {
    var resultat=tab.length - 1
    for (var i =tab.length - 2; i > 0; i--) {
        resultat=resultat-tab[i]
        
    }
    return resultat
}

//ex8
function produit(tab) {
    var resut=1
    for (var i = 0; i < tab.length; i++) {
        resut=resut*tab[i]
        
    }
    return resut
}

//ex 9
function moyenne(tab) {
    var resultat=0
  for (let i = 0; i < tab.length; i++) {
    resultat =resultat+ tab[i]
  }
  return resultat/tab.length
    
}
//ex 10
function carre(tab) {
    var puiss=1
    for (var i = 0; i < tab.length; i++) {
        tab[i]=tab[i]*puiss
        puiss=puiss+1
        
        
    }
    return tab
    
}
//ex 11
function estTableau(v) {
  return Array.isArray(v);
}
