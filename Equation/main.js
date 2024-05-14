
var btn = document.getElementById('btn');
var affichage = document.getElementById('affichage');
var a1 = document.getElementById('a');
var b1 = document.getElementById('b');
var c1 = document.getElementById('c');

btn.addEventListener('click', function() {
 
    var delta;
    var a = a1.value;
    var b = b1.value;
    var c = c1.value;
    // delta = around(2, 0.5888)
    // alert(delta)
    if (a != "" && b != "" && c != "" && a != 0 && b != 0 && c != 0) {
        delta = Math.pow(b, 2) - (4 * a * c);
        var div = document.createElement('div');
        affichage.appendChild(div)
        var p = document.createElement('p');
        div.appendChild(p);
        if (delta > 0) {
            var x1;
            var x2;
            var racine = Math.sqrt(delta);
            x1 = (-(b) - Math.sqrt(delta)) / (2 * a);
            x2 = (-(b) + Math.sqrt(delta)) / (2 * a);
            if (a == -1 && b > 1 && c >= 1) {
                p.innerHTML = `Eq : -x² + ${b}x + ${c} = 0 <br><i>∆ = b² - 4ac</i> <br>
                ∆ = (${b})² - 4(${a})(${c}) <br>  ∆ = ${delta} <br> ∆ > 0 <br> 
                <i>x' = <span class="ligne">-b - √∆</span> <br> <span class="bas">2a<span> </i><br>
                x' = <span class="ligne">-(${b}) - (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                <i>x" = <span class="ligne">-b + √∆</span> <br> <span class="bas">2a<span> </i><br> 
                x" = <span class="ligne">-(${b}) + (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                x' = ${x1.toFixed(2)} <br> x" = ${x2.toFixed(2)}<br><br>
                <b>S = { ${x1.toFixed(2)}; ${x2.toFixed(2)} }</b>`;
            } else if (a == -1 && b == 1 && c >= 1) {
                p.innerHTML = `Eq : -x² + x + ${c} = 0 <br><i>∆ = b² - 4ac</i> <br>
                ∆ = (${b})² - 4(${a})(${c}) <br>  ∆ = ${delta} <br> ∆ > 0 <br> 
                <i>x' = <span class="ligne">-b - √∆</span> <br> <span class="bas">2a<span> </i><br>
                x' = <span class="ligne">-(${b}) - (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                <i>x" = <span class="ligne">-b + √∆</span> <br> <span class="bas">2a<span> </i><br> 
                x" = <span class="ligne">-(${b}) + (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                x' = ${x1.toFixed(2)} <br> x" = ${x2.toFixed(2)}<br><br>
                <b>S = { ${x1.toFixed(2)}; ${x2.toFixed(2)} }</b>`;
            } else if (a == 1 && b > 1 && c >= 1) {
                p.innerHTML = `Eq : x² + ${b}x + ${c} = 0 <br><i>∆ = b² - 4ac</i> <br>
                ∆ = (${b})² - 4(${a})(${c}) <br>  ∆ = ${delta} <br> ∆ > 0 <br> 
                <i>x' = <span class="ligne">-b - √∆</span> <br> <span class="bas">2a<span> </i><br>
                x' = <span class="ligne">-(${b}) - (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                <i>x" = <span class="ligne">-b + √∆</span> <br> <span class="bas">2a<span> </i><br> 
                x" = <span class="ligne">-(${b}) + (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                x' = ${x1.toFixed(2)} <br> x" = ${x2.toFixed(2)}<br><br>
                <b>S = { ${x1.toFixed(2)}; ${x2.toFixed(2)} }</b>`;
            } else if (a == 1 && b < -1 && c >= 1) {
                p.innerHTML = `Eq : x² ${b}x + ${c} = 0 <br><i>∆ = b² - 4ac</i> <br>
                ∆ = (${b})² - 4(${a})(${c}) <br>  ∆ = ${delta} <br> ∆ > 0 <br> 
                <i>x' = <span class="ligne">-b - √∆</span> <br> <span class="bas">2a<span> </i><br>
                x' = <span class="ligne">-(${b}) - (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                <i>x" = <span class="ligne">-b + √∆</span> <br> <span class="bas">2a<span> </i><br> 
                x" = <span class="ligne">-(${b}) + (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                x' = ${x1.toFixed(2)} <br> x" = ${x2.toFixed(2)}<br><br>
                <b>S = { ${x1.toFixed(2)}; ${x2.toFixed(2)} }</b>`;
            } else if (a == 1 && b == 1 && c > 1) {
                p.innerHTML = `Eq : -x² + x + ${c} = 0 <br><i>∆ = b² - 4ac</i> <br>
                ∆ = (${b})² - 4(${a})(${c}) <br>  ∆ = ${delta} <br> ∆ > 0 <br> 
                <i>x' = <span class="ligne">-b - √∆</span> <br> <span class="bas">2a<span> </i><br>
                x' = <span class="ligne">-(${b}) - (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                <i>x" = <span class="ligne">-b + √∆</span> <br> <span class="bas">2a<span> </i><br> 
                x" = <span class="ligne">-(${b}) + (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                x' = ${x1.toFixed(2)} <br> x" = ${x2.toFixed(2)}<br><br>
                <b>S = { ${x1.toFixed(2)}; ${x2.toFixed(2)} }</b>`;
            } else if (a < 1 && b == 1 && c > 1) {
                p.innerHTML = `Eq : ${a}x² + x + ${c} = 0 <br><i>∆ = b² - 4ac</i> <br>
                ∆ = (${b})² - 4(${a})(${c}) <br>  ∆ = ${delta} <br> ∆ > 0 <br> 
                <i>x' = <span class="ligne">-b - √∆</span> <br> <span class="bas">2a<span> </i><br>
                x' = <span class="ligne">-(${b}) - (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                <i>x" = <span class="ligne">-b + √∆</span> <br> <span class="bas">2a<span> </i><br> 
                x" = <span class="ligne">-(${b}) + (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                x' = ${x1.toFixed(2)} <br> x" = ${x2.toFixed(2)}<br><br>
                <b>S = { ${x1.toFixed(2)}; ${x2.toFixed(2)} }</b>`;
            } else if (a == 1 && b < -1 && c < -1) {
                p.innerHTML = `Eq : x² ${b}x ${c} = 0 <br><i>∆ = b² - 4ac</i> <br>
                ∆ = (${b})² - 4(${a})(${c}) <br>  ∆ = ${delta} <br> ∆ > 0 <br> 
                <i>x' = <span class="ligne">-b - √∆</span> <br> <span class="bas">2a<span> </i><br>
                x' = <span class="ligne">-(${b}) - (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                <i>x" = <span class="ligne">-b + √∆</span> <br> <span class="bas">2a<span> </i><br> 
                x" = <span class="ligne">-(${b}) + (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                x' = ${x1.toFixed(2)} <br> x" = ${x2.toFixed(2)}<br><br>
                <b>S = { ${x1.toFixed(2)}; ${x2.toFixed(2)} }</b>`;
            } else if (a > 1 && b == 1 && c < -1) {
                p.innerHTML = `Eq : ${a}x² + x ${c} = 0 <br><i>∆ = b² - 4ac</i> <br>
                ∆ = (${b})² - 4(${a})(${c}) <br>  ∆ = ${delta} <br> ∆ > 0 <br> 
                <i>x' = <span class="ligne">-b - √∆</span> <br> <span class="bas">2a<span> </i><br>
                x' = <span class="ligne">-(${b}) - (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                <i>x" = <span class="ligne">-b + √∆</span> <br> <span class="bas">2a<span> </i><br> 
                x" = <span class="ligne">-(${b}) + (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                x' = ${x1.toFixed(2)} <br> x" = ${x2.toFixed(2)}<br><br>
                <b>S = { ${x1.toFixed(2)}; ${x2.toFixed(2)} }</b>`;
            } else if ((a > 1 && b > 1 && c <= -1) || (a < -1 && b > 1 && c <= -1)) {
                p.innerHTML = `Eq : ${a}x² + ${b}x ${c} = 0 <br><i>∆ = b² - 4ac</i> <br>
                ∆ = (${b})² - 4(${a})(${c}) <br>  ∆ = ${delta} <br> ∆ > 0 <br> 
                <i>x' = <span class="ligne">-b - √∆</span> <br> <span class="bas">2a<span> </i><br>
                x' = <span class="ligne">-(${b}) - (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                <i>x" = <span class="ligne">-b + √∆</span> <br> <span class="bas">2a<span> </i><br> 
                x" = <span class="ligne">-(${b}) + (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                x' = ${x1.toFixed(2)} <br> x" = ${x2.toFixed(2)}<br><br>
                <b>S = { ${x1.toFixed(2)}; ${x2.toFixed(2)} }</b>`;
            } else if ((a > 1 && b > 1 && c >= 1) || (a < -1 && b > 1 && c >= 1)) {
                p.innerHTML = `Eq : ${a}x² + ${b}x + ${c} = 0 <br><i>∆ = b² - 4ac</i> <br>
                ∆ = (${b})² - 4(${a})(${c}) <br>  ∆ = ${delta} <br> ∆ > 0 <br> 
                <i>x' = <span class="ligne">-b - √∆</span> <br> <span class="bas">2a<span> </i><br>
                x' = <span class="ligne">-(${b}) - (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                <i>x" = <span class="ligne">-b + √∆</span> <br> <span class="bas">2a<span> </i><br> 
                x" = <span class="ligne">-(${b}) + (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                x' = ${x1.toFixed(2)} <br> x" = ${x2.toFixed(2)}<br><br>
                <b>S = { ${x1.toFixed(2)}; ${x2.toFixed(2)} }</b>`;
            } else if ((a > 1 && b < -1 && c >= 1) || (a < -1 && b < -1 && c >= 1)) {
                p.innerHTML = `Eq : ${a}x² ${b}x + ${c} = 0 <br><i>∆ = b² - 4ac</i> <br>
                ∆ = (${b})² - 4(${a})(${c}) <br>  ∆ = ${delta} <br> ∆ > 0 <br> 
                <i>x' = <span class="ligne">-b - √∆</span> <br> <span class="bas">2a<span> </i><br>
                x' = <span class="ligne">-(${b}) - (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                <i>x" = <span class="ligne">-b + √∆</span> <br> <span class="bas">2a<span> </i><br> 
                x" = <span class="ligne">-(${b}) + (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                x' = ${x1.toFixed(2)} <br> x" = ${x2.toFixed(2)}<br><br>
                <b>S = { ${x1.toFixed(2)}; ${x2.toFixed(2)} }</b>`;
            } else if (a == -1 && b < -1 && c >= 1) {
                p.innerHTML = `Eq : -x² ${b}x + ${c} = 0 <br><i>∆ = b² - 4ac</i> <br>
                ∆ = (${b})² - 4(${a})(${c}) <br>  ∆ = ${delta} <br> ∆ > 0 <br> 
                <i>x' = <span class="ligne">-b - √∆</span> <br> <span class="bas">2a<span> </i><br>
                x' = <span class="ligne">-(${b}) - (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                <i>x" = <span class="ligne">-b + √∆</span> <br> <span class="bas">2a<span> </i><br> 
                x" = <span class="ligne">-(${b}) + (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                x' = ${x1.toFixed(2)} <br> x" = ${x2.toFixed(2)}<br><br>
                <b>S = { ${x1.toFixed(2)}; ${x2.toFixed(2)} }</b>`;
            } else if (a == -1 && b < -1 && c <= -1) {
                p.innerHTML = `Eq : -x² ${b}x ${c} = 0 <br><i>∆ = b² - 4ac</i> <br>
                ∆ = (${b})² - 4(${a})(${c}) <br>  ∆ = ${delta} <br> ∆ > 0 <br> 
                <i>x' = <span class="ligne">-b - √∆</span> <br> <span class="bas">2a<span> </i><br>
                x' = <span class="ligne">-(${b}) - (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                <i>x" = <span class="ligne">-b + √∆</span> <br> <span class="bas">2a<span> </i><br> 
                x" = <span class="ligne">-(${b}) + (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                x' = ${x1.toFixed(2)} <br> x" = ${x2.toFixed(2)}<br><br>
                <b>S = { ${x1.toFixed(2)}; ${x2.toFixed(2)} }</b>`;
            } else if (a == -1 && b > 1 && c <= -1) {
                p.innerHTML = `Eq : -x² + ${b}x ${c} = 0 <br><i>∆ = b² - 4ac</i> <br>
                ∆ = (${b})² - 4(${a})(${c}) <br>  ∆ = ${delta} <br> ∆ > 0 <br> 
                <i>x' = <span class="ligne">-b - √∆</span> <br> <span class="bas">2a<span> </i><br>
                x' = <span class="ligne">-(${b}) - (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                <i>x" = <span class="ligne">-b + √∆</span> <br> <span class="bas">2a<span> </i><br> 
                x" = <span class="ligne">-(${b}) + (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                x' = ${x1.toFixed(2)} <br> x" = ${x2.toFixed(2)}<br><br>
                <b>S = { ${x1.toFixed(2)}; ${x2.toFixed(2)} }</b>`;
            } else if ((a < -1 && b <= -1 && c <= -1) || (a > 1 && b <= -1 && c <= -1)) {
                p.innerHTML = `Eq : ${a}x² ${b}x ${c} = 0 <br><i>∆ = b² - 4ac</i> <br>
                ∆ = (${b})² - 4(${a})(${c}) <br>  ∆ = ${delta} <br> ∆ > 0 <br> 
                <i>x' = <span class="ligne">-b - √∆</span> <br> <span class="bas">2a<span> </i><br>
                x' = <span class="ligne">-(${b}) - (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                <i>x" = <span class="ligne">-b + √∆</span> <br> <span class="bas">2a<span> </i><br> 
                x" = <span class="ligne">-(${b}) + (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                x' = ${x1.toFixed(2)} <br> x" = ${x2.toFixed(2)}<br><br>
                <b>S = { ${x1.toFixed(2)}; ${x2.toFixed(2)} }</b>`;
            }  else if (a < -1 && b == -1 && c >= 1) {
                p.innerHTML = `Eq : ${a}x² - x + ${c} = 0 <br><i>∆ = b² - 4ac</i> <br>
                ∆ = (${b})² - 4(${a})(${c}) <br>  ∆ = ${delta} <br> ∆ > 0 <br> 
                <i>x' = <span class="ligne">-b - √∆</span> <br> <span class="bas">2a<span> </i><br>
                x' = <span class="ligne">-(${b}) - (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                <i>x" = <span class="ligne">-b + √∆</span> <br> <span class="bas">2a<span> </i><br> 
                x" = <span class="ligne">-(${b}) + (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                x' = ${x1.toFixed(2)} <br> x" = ${x2.toFixed(2)}<br><br>
                <b>S = { ${x1.toFixed(2)}; ${x2.toFixed(2)} }</b>`;
            } else if (a == 1 && b > 1 && c <= -1) {
                p.innerHTML = `Eq : x² +${b}x ${c} = 0 <br><i>∆ = b² - 4ac</i> <br>
                ∆ = (${b})² - 4(${a})(${c}) <br>  ∆ = ${delta} <br> ∆ > 0 <br> 
                <i>x' = <span class="ligne">-b - √∆</span> <br> <span class="bas">2a<span> </i><br>
                x' = <span class="ligne">-(${b}) - (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                <i>x" = <span class="ligne">-b + √∆</span> <br> <span class="bas">2a<span> </i><br> 
                x" = <span class="ligne">-(${b}) + (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                x' = ${x1.toFixed(2)} <br> x" = ${x2.toFixed(2)}<br><br>
                <b>S = { ${x1.toFixed(2)}; ${x2.toFixed(2)} }</b>`;
            } else if (a == -1 && b == -1 && c >= 1) {
                p.innerHTML = `Eq : -x² - x + ${c} = 0 <br><i>∆ = b² - 4ac</i> <br>
                ∆ = (${b})² - 4(${a})(${c}) <br>  ∆ = ${delta} <br> ∆ > 0 <br> 
                <i>x' = <span class="ligne">-b - √∆</span> <br> <span class="bas">2a<span> </i><br>
                x' = <span class="ligne">-(${b}) - (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                <i>x" = <span class="ligne">-b + √∆</span> <br> <span class="bas">2a<span> </i><br> 
                x" = <span class="ligne">-(${b}) + (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                x' = ${x1.toFixed(2)} <br> x" = ${x2.toFixed(2)}<br><br>
                <b>S = { ${x1.toFixed(2)}; ${x2.toFixed(2)} }</b>`;
            } else if (a == 1 && b == -1 && c >= 1) {
                p.innerHTML = `Eq : x² - x + ${c} = 0 <br><i>∆ = b² - 4ac</i> <br>
                ∆ = (${b})² - 4(${a})(${c}) <br>  ∆ = ${delta} <br> ∆ > 0 <br> 
                <i>x' = <span class="ligne">-b - √∆</span> <br> <span class="bas">2a<span> </i><br>
                x' = <span class="ligne">-(${b}) - (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                <i>x" = <span class="ligne">-b + √∆</span> <br> <span class="bas">2a<span> </i><br> 
                x" = <span class="ligne">-(${b}) + (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                x' = ${x1.toFixed(2)} <br> x" = ${x2.toFixed(2)}<br><br>
                <b>S = { ${x1.toFixed(2)}; ${x2.toFixed(2)} }</b>`;
            } else {
                p.innerHTML = `Eq : ${a}x² + (${b})x + (${c}) = 0 <br><i>∆ = b² - 4ac</i> <br>
                ∆ = (${b})² - 4(${a})(${c}) <br>  ∆ = ${delta} <br> ∆ > 0 <br> 
                <i>x' = <span class="ligne">-b - √∆</span> <br> <span class="bas">2a<span> </i><br>
                x' = <span class="ligne">-(${b}) - (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                <i>x" = <span class="ligne">-b + √∆</span> <br> <span class="bas">2a<span> </i><br> 
                x" = <span class="ligne">-(${b}) + (${racine.toFixed(2)})</span> <br> <span class="bas">2(${a})<span> <br>
                x' = ${x1.toFixed(2)} <br> x" = ${x2.toFixed(2)}<br><br>
                <b>S = { ${x1.toFixed(2)}; ${x2.toFixed(2)} }</b>`;
            }
            
        } else if (delta < 0) {
            if (a == 1 && b == 1 && c >= 1) {
                p.innerHTML = `Eq : x² + x + ${c} = 0 <br><i>∆ = b² - 4ac</i> <br> ∆ = (${b})² - 4(${a})(${c}) <br> ∆ = ${delta} <br> ∆ < 0 <br> <br>L'équation n'a pas de solution <br><br> <b>S = 0</b>`;
            } else if (a > 1 && b == 1 && c >= 1) {
                p.innerHTML = `Eq : ${a}x² + x + ${c} = 0 <br><i>∆ = b² - 4ac</i> <br> ∆ = (${b})² - 4(${a})(${c}) <br> ∆ = ${delta} <br> ∆ < 0 <br> <br>L'équation n'a pas de solution <br><br> <b>S = 0</b>`;
            } else if (a == 1 && b > 1 && c >= 1) {
                p.innerHTML = `Eq : x² + ${b}x + ${c} = 0 <br><i>∆ = b² - 4ac</i> <br> ∆ = (${b})² - 4(${a})(${c}) <br> ∆ = ${delta} <br> ∆ < 0 <br> <br>L'équation n'a pas de solution <br><br> <b>S = 0</b>`;
            } else if (a > 1 && b > 1 && c >= 1) {
                p.innerHTML = `Eq : ${a}x² + ${b}x + ${c} = 0 <br><i>∆ = b² - 4ac</i> <br> ∆ = (${b})² - 4(${a})(${c}) <br> ∆ = ${delta} <br> ∆ < 0 <br> <br>L'équation n'a pas de solution <br><br> <b>S = 0</b>`;
            } else if (a < -1 && b == 1 && c <= -1) {
                p.innerHTML = `Eq : ${a}x² + x ${c} = 0 <br><i>∆ = b² - 4ac</i> <br> ∆ = (${b})² - 4(${a})(${c}) <br> ∆ = ${delta} <br> ∆ < 0 <br> <br>L'équation n'a pas de solution <br><br> <b>S = 0</b>`;
            } else if (a == -1 && b == 1 && c <= -1) {
                p.innerHTML = `Eq : -x² + x ${c} = 0 <br><i>∆ = b² - 4ac</i> <br> ∆ = (${b})² - 4(${a})(${c}) <br> ∆ = ${delta} <br> ∆ < 0 <br> <br>L'équation n'a pas de solution <br><br> <b>S = 0</b>`;
            } else if (a < -1 && b == -1 && c <= -1) {
                p.innerHTML = `Eq : ${a}x² - x ${c} = 0 <br><i>∆ = b² - 4ac</i> <br> ∆ = (${b})² - 4(${a})(${c}) <br> ∆ = ${delta} <br> ∆ < 0 <br> <br>L'équation n'a pas de solution <br><br> <b>S = 0</b>`;
            } else if (a < -1 && b < -1 && c <= -1) {
                p.innerHTML = `Eq : ${a}x² ${b}x ${c} = 0 <br><i>∆ = b² - 4ac</i> <br> ∆ = (${b})² - 4(${a})(${c}) <br> ∆ = ${delta} <br> ∆ < 0 <br> <br>L'équation n'a pas de solution <br><br> <b>S = 0</b>`;
            }else if (a > 1 && b < -1 && c >= 1) {
                p.innerHTML = `Eq : ${a}x² ${b}x + ${c} = 0 <br><i>∆ = b² - 4ac</i> <br> ∆ = (${b})² - 4(${a})(${c}) <br> ∆ = ${delta} <br> ∆ < 0 <br> <br>L'équation n'a pas de solution <br><br> <b>S = 0</b>`;
            } else if (a == -1 && b < -1 && c <= -1) {
                p.innerHTML = `Eq : -x² ${b}x ${c} = 0 <br><i>∆ = b² - 4ac</i> <br> ∆ = (${b})² - 4(${a})(${c}) <br> ∆ = ${delta} <br> ∆ < 0 <br> <br>L'équation n'a pas de solution <br><br> <b>S = 0</b>`;
            } else if (a == -1 && b == -1 && c <= -1) {
                p.innerHTML = `Eq : -x² - x ${c} = 0 <br><i>∆ = b² - 4ac</i> <br> ∆ = (${b})² - 4(${a})(${c}) <br> ∆ = ${delta} <br> ∆ < 0 <br> <br>L'équation n'a pas de solution <br><br> <b>S = 0</b>`;
            } else if (a < -1 && b > 1 && c <= -1) {
                p.innerHTML = `Eq : ${a}x² + ${b}x ${c} = 0 <br><i>∆ = b² - 4ac</i> <br> ∆ = (${b})² - 4(${a})(${c}) <br> ∆ = ${delta} <br> ∆ < 0 <br> <br>L'équation n'a pas de solution <br><br> <b>S = 0</b>`;
            } else if (a == 1 && b == -1 && c >= 1) {
                p.innerHTML = `Eq : x² - x + ${c} = 0 <br><i>∆ = b² - 4ac</i> <br> ∆ = (${b})² - 4(${a})(${c}) <br> ∆ = ${delta} <br> ∆ < 0 <br> <br>L'équation n'a pas de solution <br><br> <b>S = 0</b>`;
            } else if (a > 1 && b == -1 && c >= 1) {
                p.innerHTML = `Eq : ${a}x² - x + ${c} = 0 <br><i>∆ = b² - 4ac</i> <br> ∆ = (${b})² - 4(${a})(${c}) <br> ∆ = ${delta} <br> ∆ < 0 <br> <br>L'équation n'a pas de solution <br><br> <b>S = 0</b>`;
            } else {    
                p.innerHTML = `Eq : ${a}x² + (${b})x + (${c}) = 0 <br><i>∆ = b² - 4ac</i> <br> ∆ = (${b})² - 4(${a})(${c}) <br> ∆ = ${delta} <br> ∆ < 0 <br> <br>L'équation n'a pas de solution <br><br> <b>S = 0</b>`;
            }
        } else if (delta == 0) {
            var x = -(b)/(2 * a)
            if (a == 1 && b == 1 && c == 1) {
                p.innerHTML = `Eq : x² + x + 1 = 0 <br><i>∆ = b² - 4ac</i> <br> ∆ = (${b})² - 4(${a})(${c}) <br> ∆ = ${delta} <br> ∆ = 0 <br><br>
                L'équation a une solution double <br><br>
                <i>x' = x" = <span class="ligne">-b</span> <br> <span class="bas">2a<span></i><br>
                x' = x" = <span class="ligne">-(${b})</span> <br> <span class="bas">2(${a})<span><br>
                x' = x" = ${x}<br><br>
                <b>S = { ${x.toFixed(2)} }</b>`;  
            } else if (a == -1 && b > 1 && c >= 1) {
                p.innerHTML = `Eq : -x² + ${b}x + ${c} = 0 <br><i>∆ = b² - 4ac</i> <br> ∆ = (${b})² - 4(${a})(${c}) <br> ∆ = ${delta} <br> ∆ = 0 <br><br>
                L'équation a une solution double <br><br>
                <i>x' = x" = <span class="ligne">-b</span> <br> <span class="bas">2a<span></i><br>
                x' = x" = <span class="ligne">-(${b})</span> <br> <span class="bas">2(${a})<span><br>
                x' = x" = ${x.toFixed(2)}<br><br>
                <b>S = { ${x.toFixed(2)} }</b>`; 
            } else if (a == -1 && b == 1 && c >= 1) {
                p.innerHTML = `Eq : -x² + x + ${c} = 0 <br><i>∆ = b² - 4ac</i> <br> ∆ = (${b})² - 4(${a})(${c}) <br> ∆ = ${delta} <br> ∆ = 0 <br><br>
                L'équation a une solution double <br><br>
                <i>x' = x" = <span class="ligne">-b</span> <br> <span class="bas">2a<span></i><br>
                x' = x" = <span class="ligne">-(${b})</span> <br> <span class="bas">2(${a})<span><br>
                x' = x" = ${x.toFixed(2)}<br><br>
                <b>S = { ${x.toFixed(2)} }</b>`; 
            } else if (a == 1 && b > 1 && c >= 1) {
                p.innerHTML = `Eq : x² + ${b}x + ${c} = 0 <br><i>∆ = b² - 4ac</i> <br> ∆ = (${b})² - 4(${a})(${c}) <br> ∆ = ${delta} <br> ∆ = 0 <br><br>
                L'équation a une solution double <br><br>
                <i>x' = x" = <span class="ligne">-b</span> <br> <span class="bas">2a<span></i><br>
                x' = x" = <span class="ligne">-(${b})</span> <br> <span class="bas">2(${a})<span><br>
                x' = x" = ${x.toFixed(2)}<br><br>
                <b>S = { ${x.toFixed(2)} }</b>`; 
            } else if (a == 1 && b == 1 && c > 1) {
                p.innerHTML = `Eq : x² + x + ${c} = 0 <br><i>∆ = b² - 4ac</i> <br> ∆ = (${b})² - 4(${a})(${c}) <br> ∆ = ${delta} <br> ∆ = 0 <br><br>
                L'équation a une solution double <br><br>
                <i>x' = x" = <span class="ligne">-b</span> <br> <span class="bas">2a<span></i><br>
                x' = x" = <span class="ligne">-(${b})</span> <br> <span class="bas">2(${a})<span><br>
                x' = x" = ${x.toFixed(2)}<br><br>
                <b>S = { ${x.toFixed(2)} }</b>`;
            } else if (a < 1 && b == 1 && c > 1) {
                p.innerHTML = `Eq : ${a}x² + x + ${c} = 0 <br><i>∆ = b² - 4ac</i> <br> ∆ = (${b})² - 4(${a})(${c}) <br> ∆ = ${delta} <br> ∆ = 0 <br><br>
                L'équation a une solution double <br><br>
                <i>x' = x" = <span class="ligne">-b</span> <br> <span class="bas">2a<span></i><br>
                x' = x" = <span class="ligne">-(${b})</span> <br> <span class="bas">2(${a})<span><br>
                x' = x" = ${x.toFixed(2)}<br><br>
                <b>S = { ${x.toFixed(2)} }</b>`; 
            } else if (a == 1 && b < -1 && c <= -1) {
                p.innerHTML = `Eq : x² ${b}x ${c} = 0 <br><i>∆ = b² - 4ac</i> <br> ∆ = (${b})² - 4(${a})(${c}) <br> ∆ = ${delta} <br> ∆ = 0 <br><br>
                L'équation a une solution double <br><br>
                <i>x' = x" = <span class="ligne">-b</span> <br> <span class="bas">2a<span></i><br>
                x' = x" = <span class="ligne">-(${b})</span> <br> <span class="bas">2(${a})<span><br>
                x' = x" = ${x.toFixed(2)}<br><br>
                <b>S = { ${x.toFixed(2)} }</b>`;
            } else if (a > 1 && b == 1 && c <= -1) {
                p.innerHTML = `Eq : ${a}x² + x ${c} = 0 <br><i>∆ = b² - 4ac</i> <br> ∆ = (${b})² - 4(${a})(${c}) <br> ∆ = ${delta} <br> ∆ = 0 <br><br>
                L'équation a une solution double <br><br>
                <i>x' = x" = <span class="ligne">-b</span> <br> <span class="bas">2a<span></i><br>
                x' = x" = <span class="ligne">-(${b})</span> <br> <span class="bas">2(${a})<span><br>
                x' = x" = ${x.toFixed(2)}<br><br>
                <b>S = { ${x.toFixed(2)} }</b>`; 
            } else if ((a > 1 && b > 1 && c >= 1) || (a <= -1 && b > 1 && c >= 1))  {
                p.innerHTML = `Eq : ${a}x² + ${b}x + ${c} = 0 <br><i>∆ = b² - 4ac</i> <br> ∆ = (${b})² - 4(${a})(${c}) <br> ∆ = ${delta} <br> ∆ = 0 <br><br>
                L'équation a une solution double <br><br>
                <i>x' = x" = <span class="ligne">-b</span> <br> <span class="bas">2a<span></i><br>
                x' = x" = <span class="ligne">-(${b})</span> <br> <span class="bas">2(${a})<span><br>
                x' = x" = ${x.toFixed(2)}<br><br>
                <b>S = { ${x.toFixed(2)} }</b>`;
            } else if ((a > 1 && b <= -1 && c >= 1) || (a <= -1 && b <= -1 && c >= 1)) {
                p.innerHTML = `Eq : ${a}x² ${b}x + ${c} = 0 <br><i>∆ = b² - 4ac</i> <br> ∆ = (${b})² - 4(${a})(${c}) <br> ∆ = ${delta} <br> ∆ = 0 <br><br>
                L'équation a une solution double <br><br>
                <i>x' = x" = <span class="ligne">-b</span> <br> <span class="bas">2a<span></i><br>
                x' = x" = <span class="ligne">-(${b})</span> <br> <span class="bas">2(${a})<span><br>
                x' = x" = ${x.toFixed(2)}<br><br>
                <b>S = { ${x.toFixed(2)} }</b>`;
            } else if (a == -1 && b < -1 && c >= 1) {
                p.innerHTML = `Eq : -x² ${b}x + ${c} = 0 <br><i>∆ = b² - 4ac</i> <br> ∆ = (${b})² - 4(${a})(${c}) <br> ∆ = ${delta} <br> ∆ = 0 <br><br>
                L'équation a une solution double <br><br>
                <i>x' = x" = <span class="ligne">-b</span> <br> <span class="bas">2a<span></i><br>
                x' = x" = <span class="ligne">-(${b})</span> <br> <span class="bas">2(${a})<span><br>
                x' = x" = ${x.toFixed(2)}<br><br>
                <b>S = { ${x.toFixed(2)} }</b>`;
            } else if (a == -1 && b < -1 && c <= -1) {
                p.innerHTML = `Eq : -x² ${b}x ${c} = 0 <br><i>∆ = b² - 4ac</i> <br> ∆ = (${b})² - 4(${a})(${c}) <br> ∆ = ${delta} <br> ∆ = 0 <br><br>
                L'équation a une solution double <br><br>
                <i>x' = x" = <span class="ligne">-b</span> <br> <span class="bas">2a<span></i><br>
                x' = x" = <span class="ligne">-(${b})</span> <br> <span class="bas">2(${a})<span><br>
                x' = x" = ${x.toFixed(2)}<br><br>
                <b>S = { ${x.toFixed(2)} }</b>`;
            } else if (a == -1 && b > 1 && c <= -1) {
                p.innerHTML = `Eq : -x² + ${b}x ${c} = 0 <br><i>∆ = b² - 4ac</i> <br> ∆ = (${b})² - 4(${a})(${c}) <br> ∆ = ${delta} <br> ∆ = 0 <br><br>
                L'équation a une solution double <br><br>
                <i>x' = x" = <span class="ligne">-b</span> <br> <span class="bas">2a<span></i><br>
                x' = x" = <span class="ligne">-(${b})</span> <br> <span class="bas">2(${a})<span><br>
                x' = x" = ${x.toFixed(2)}<br><br>
                <b>S = { ${x.toFixed(2)} }</b>`;
            } else if ((a < -1 && b > 1 && c <= -1) || (a > 1 && b > 1 && c <= -1)) {
                p.innerHTML = `Eq : ${a}x² + ${b}x ${c} = 0 <br><i>∆ = b² - 4ac</i> <br> ∆ = (${b})² - 4(${a})(${c}) <br> ∆ = ${delta} <br> ∆ = 0 <br><br>
                L'équation a une solution double <br><br>
                <i>x' = x" = <span class="ligne">-b</span> <br> <span class="bas">2a<span></i><br>
                x' = x" = <span class="ligne">-(${b})</span> <br> <span class="bas">2(${a})<span><br>
                x' = x" = ${x.toFixed(2)}<br><br>
                <b>S = { ${x.toFixed(2)} }</b>`;
            } else if ((a < -1 && b < -1 && c <= -1) || (a > 1 && b < -1 && c < -1)) {
                p.innerHTML = `Eq : ${a}x² ${b}x ${c} = 0 <br><i>∆ = b² - 4ac</i> <br> ∆ = (${b})² - 4(${a})(${c}) <br> ∆ = ${delta} <br> ∆ = 0 <br><br>
                L'équation a une solution double <br><br>
                <i>x' = x" = <span class="ligne">-b</span> <br> <span class="bas">2a<span></i><br>
                x' = x" = <span class="ligne">-(${b})</span> <br> <span class="bas">2(${a})<span><br>
                x' = x" = ${x.toFixed(2)}<br><br>
                <b>S = { ${x.toFixed(2)} }</b>`; 
            } else {
                p.innerHTML = `Eq : ${a}x² + (${b})x + (${c}) = 0 <br><i>∆ = b² - 4ac</i> <br> ∆ = (${b})² - 4(${a})(${c}) <br> ∆ = ${delta} <br> ∆ = 0 <br><br>
                L'équation a une solution double <br><br>
                <i>x' = x" = <span class="ligne">-b</span> <br> <span class="bas">2a<span></i><br>
                x' = x" = <span class="ligne">-(${b})</span> <br> <span class="bas">2(${a})<span><br>
                x' = x" = ${x.toFixed(2)}<br><br>
                <b>S = { ${x.toFixed(2)} }</b>`;
            }
        }
    }
});