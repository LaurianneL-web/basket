(function () {
    "use strict";
    var panier = [];
    var prixTotal = 0;
    
    var stock_panier = function () {
        "use strict";

        var pommeStock = 0; var poireStock = 0; var bananeStock = 0;

        var Product = function (n, p, r, q) {
            "use strict";
            this.name = n;
            this.price = p;
            this.ref = r;
            this.quantity = q;//function (stock){return stock;};
        };

        var createStock = function (nbr, produtType, price, ref, quantity) {
            "use strict";
            var _tbl = [];
            for(var i = 0; i < nbr; i++){
                var product = new Product (produtType, price, ref, quantity);
//                console.log(product.name + ' = ' + product.quantity);
                _tbl.push(product);
            }
            return _tbl;
        };
        
        var pommeStock_tbl = createStock(50, "Pomme", 1, "Ref0001", pommeStock);
        var poireStock_tbl = createStock(40, "Poire", 1.99, "Ref0002", poireStock);
        var bananeStock_tbl = createStock(20, "Banane", 2, "Ref0003", bananeStock);
        pommeStock = pommeStock_tbl.length;
        poireStock = poireStock_tbl.length;
        bananeStock = bananeStock_tbl.length;
        var pPomme = document.getElementById("Pomme");
        pPomme.innerHTML = "Stock : " + pommeStock;
        var pPoire = document.getElementById("Poire");
        pPoire.innerHTML = "Stock : " + poireStock;
        var pBanane = document.getElementById("Banane");
        pBanane.innerHTML = "Stock : " + bananeStock;

        var addProcucts = function (pAdd) {
            "use strict";
            var p = document.getElementById(pAdd);
            if(pAdd === "Pomme"){
                if(pommeStock == 0){
                    return  console.log(new Error("Rupture de pommes"));
                } else{
                    panier.push(pAdd);
                    pommeStock -= 1;
                    panierList();
                    p.innerHTML = "Stock : " + pommeStock;
                    return console.log(pAdd + " ajouté(e).");
                }
            }
            if(pAdd === "Poire"){
                if(poireStock == 0){
                    return console.log(new Error("Rupture de poires"));
                } else{
                    panier.push(pAdd);
                    poireStock -= 1;
                    panierList();
                    p.innerHTML = "Stock : " + poireStock;
                    return console.log(pAdd + " ajouté(e).");
                }
            }
            if(pAdd === "Banane"){
                if(bananeStock == 0){
                    return console.log(new Error("Rupture de bananes"));
                } else{
                    panier.push(pAdd);
                    bananeStock -= 1;
                    panierList();
                    p.innerHTML = "Stock : " + bananeStock;
                    return console.log(pAdd + " ajouté(e).");
                }
            }
        };
        
        var getNumberProducts = function () {
            "use strict";
            return panier.length;
        };

        
        var btnPom = document.getElementById("btnPom");
        var btnPoi = document.getElementById("btnPoi");
        var btnBan = document.getElementById("btnBan");
        btnPom.addEventListener("click", addProcucts.bind("evt", "Pomme"));
        btnPoi.addEventListener("click", addProcucts.bind("evt", "Poire"));
        btnBan.addEventListener("click", addProcucts.bind("evt", "Banane"));
        
    var panierList = function () {
        "use strict";
        var prixTotalPommes = 0; var prixTotalPoires = 0; var prixTotalBananes = 0;
        var productType = panier.filter(function(elmt, idx, self){
            "use strict";
            return idx == self.indexOf(elmt);
        });
//        console.log(productType)
        var ul = document.getElementById("panier");
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
        productType.forEach(function(elmt){
            "use strict";
            var li = document.createElement("li");
            if(elmt == "Pomme"){
                li.innerHTML = elmt + " | Quantité : " + panier.count(elmt) + " | Prix : " + pommeStock_tbl[0].price + "€";
                prixTotalPommes = panier.count(elmt) * pommeStock_tbl[0].price;
            }
            if(elmt == "Poire"){
                li.innerHTML = elmt + " | Quantité : " + panier.count(elmt) + " | Prix : " + poireStock_tbl[0].price + "€";
                prixTotalPoires = panier.count(elmt) * poireStock_tbl[0].price;
            }
            if(elmt == "Banane"){
                li.innerHTML = elmt + " | Quantité : " + panier.count(elmt) + " | Prix : " + bananeStock_tbl[0].price + "€";
                prixTotalBananes = panier.count(elmt) * bananeStock_tbl[0].price;
            }
            ul.appendChild(li);
            var total = document.getElementById("total");
            prixTotal = prixTotalPommes + prixTotalPoires + prixTotalBananes;
            total.innerHTML = "Nombre d'articles : " + getNumberProducts() + " | Total du panier : " + prixTotal.toFixed(2) + "€";
        });
        return productType;
    };

    };
    
    
    var start = function () {
        stock_panier();
        Array.prototype.count = function(elmt) {
            "use strict";
            var tbl = [];
            for(let i = 0; i < this.length; i++){
                if(this[i] == elmt){
                    tbl.push(elmt);
                }
            }
//            console.log("tbl = " + tbl);
            var nbrElt = tbl.length;
            return nbrElt;
        };
    };
    
    window.addEventListener("DOMContentLoaded", start);
    
}());