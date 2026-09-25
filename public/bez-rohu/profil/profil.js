/* Sekce LinkedIn profil: kombo banner + profilovka v maketě profilu, 20 profilovek v malých kartách. Obrázky vedle v /profil/. */
(function(){
  var root = document.getElementById('pf'); if (!root) return;
  var B = (document.currentScript && document.currentScript.src || '').replace(/profil\.js.*$/, '') || '/bez-rohu/profil/';
  var DL = '<svg viewBox="0 0 24 24"><path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19.5h14"/></svg>';
  var P = [['chybejici-roh','Chybějící roh'],['odpadly-roh','Odpadlý roh'],['zlata-stopa','Zlatá stopa'],['rozriznuty-portret','Rozříznutý portrét'],
    ['zlaty-prstenec','Zlatý prstenec'],['prstenec-s-napisem','Prstenec s nápisem'],['portret-v-obalce','Portrét v obálce'],['rez-za-hlavou','ŘEŽ za hlavou'],
    ['hacek','Háček'],['zlata-orizka','Zlatá ořízka'],['mramor','Mramor'],['pod-cepeli','Pod čepelí'],['duoton','Duotón'],['negativ','Negativ'],
    ['devitiuhelnik','Devítiúhelník'],['autor-s-knihou','Autor s knihou'],['napul-kniha','Napůl kniha'],['podpis','Podpis'],['makro','Makro'],['paprsek','Paprsek']];
  var BN = [['b3','blizi-se-rez','Blíží se ŘEŽ'],['b1','rez-se-blizi','Řez se blíží'],['b2','cepel-je-nahore','Čepel je nahoře']];
  function cis(i){ return String(i + 1).padStart(2, '0'); }
  function nahled(i){ return B + 'p' + cis(i) + '-nahled.jpg'; }
  function png(i){ return B + 'rez-profilovka-' + cis(i) + '-' + P[i][0] + '.png'; }
  var akt = 12, ban = 0;

  root.innerHTML =
    '<div class="pf-horni">' +
      '<div class="pf-scena"><div class="pf-karta" aria-label="Maketa profilu na LinkedInu">' +
        '<div class="pf-banner" id="pfBanner">' + BN.map(function(b, j){ return '<img src="' + B + b[0] + '-nahled.jpg" alt="Banner ' + b[2] + '"' + (j ? ' loading="lazy"' : ' class="on"') + '>'; }).join('') + '</div>' +
        '<div class="pf-telo"><div class="pf-ava"><img id="pfAva" alt=""></div><div class="pf-jmeno">Jan Řezáč</div>' +
          '<i class="pf-sk" style="width:64%"></i><i class="pf-sk" style="width:40%"></i><div class="pf-tlac"><i class="pf-pil plna"></i><i class="pf-pil"></i></div></div>' +
        '<div class="pf-feed">' +
          '<div class="pf-radek"><div class="pf-mava m48"><img alt=""></div><div><b>Jan Řezáč</b><i class="pf-sk" style="width:70%"></i><i class="pf-sk" style="width:46%"></i></div></div>' +
          '<div class="pf-radek"><div class="pf-mava m32"><img alt=""></div><div class="pf-bublina"><b>Jan Řezáč</b><i class="pf-sk" style="width:88%"></i></div></div>' +
        '</div>' +
      '</div></div>' +
      '<div class="pf-ctrl">' +
        '<ul class="pf-bannery" id="pfBan">' + BN.map(function(b, j){ return '<li><button type="button" aria-label="Banner ' + b[2] + '"' + (j ? '' : ' class="on"') + '><img src="' + B + b[0] + '-nahled.jpg" alt=""></button></li>'; }).join('') + '</ul>' +
        '<div class="fmt" id="pfRez"><button type="button" data-r="svetly" class="on">Světlý</button><button type="button" data-r="tmavy">Tmavý</button></div>' +
        '<div class="pf-akt"><span class="c" id="pfCis"></span><span id="pfNazev"></span></div>' +
        '<div class="pf-stahy">' +
          '<a class="stah" id="pfStahP" href="#" download>' + DL + 'Profilovka<small>PNG 800 × 800</small></a>' +
          '<a class="stah" id="pfStahB" href="#" download>' + DL + 'Banner<small>PNG 1584 × 396</small></a>' +
          '<a class="stah" href="' + B + 'rez-linkedin-profil.zip" download>' + DL + 'Vše<small>ZIP</small></a>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div class="pf-mrizka" id="pfMrizka"></div>';

  var mr = document.getElementById('pfMrizka');
  P.forEach(function(p, i){
    var d = document.createElement('div');
    d.className = 'pf-mini'; d.tabIndex = 0; d.setAttribute('role', 'button'); d.setAttribute('aria-label', 'Profilovka ' + cis(i) + ' ' + p[1]);
    d.innerHTML = '<div class="pf-mkarta"><img class="pf-mb" src="' + B + BN[0][0] + '-nahled.jpg" alt="" loading="lazy">' +
      '<div class="pf-mtelo"><div class="pf-mini-ava"><img src="' + nahled(i) + '" alt="" loading="lazy" decoding="async"></div><span class="pf-mjm">Jan Řezáč</span><i class="pf-sk" style="width:76%"></i><i class="pf-pil"></i></div></div>' +
      '<div class="pf-pop"><b>' + cis(i) + '</b>' + p[1] + '</div>' +
      '<a class="dl" href="' + png(i) + '" download aria-label="Stáhnout profilovku ' + cis(i) + '">' + DL + '</a>';
    d.addEventListener('click', function(e){ if (!e.target.closest('.dl')) vyber(i, true); });
    d.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); vyber(i, true); } });
    mr.appendChild(d);
  });
  var mini = mr.querySelectorAll('.pf-mini'), karta = root.querySelector('.pf-karta');

  function vyber(i, posun){
    akt = i;
    root.querySelectorAll('#pfAva, .pf-mava img').forEach(function(im){ im.src = nahled(i); im.alt = 'Profilovka ' + P[i][1]; });
    mini.forEach(function(m, j){ m.classList.toggle('on', j === i); });
    document.getElementById('pfCis').textContent = cis(i);
    document.getElementById('pfNazev').textContent = P[i][1];
    var s = document.getElementById('pfStahP'); s.href = png(i); s.setAttribute('download', png(i).split('/').pop());
    if (posun){ var r = karta.getBoundingClientRect(); if (r.top < 70 || r.bottom > innerHeight) karta.scrollIntoView({behavior: 'smooth', block: 'center'}); }
  }
  function banner(j){
    ban = j;
    document.querySelectorAll('#pfBanner img').forEach(function(im, k){ im.classList.toggle('on', k === j); });
    document.querySelectorAll('#pfBan button').forEach(function(b, k){ b.classList.toggle('on', k === j); });
    mr.querySelectorAll('.pf-mb').forEach(function(im){ im.src = B + BN[j][0] + '-nahled.jpg'; });
    var s = document.getElementById('pfStahB'), u = B + 'rez-linkedin-banner-' + BN[j][0] + '-' + BN[j][1] + '.png'; s.href = u; s.setAttribute('download', u.split('/').pop());
  }
  document.querySelectorAll('#pfBan button').forEach(function(b, j){ b.onclick = function(){ banner(j); }; });
  document.querySelectorAll('#pfRez button').forEach(function(b){ b.onclick = function(){
    root.dataset.rezim = b.dataset.r; document.querySelectorAll('#pfRez button').forEach(function(x){ x.classList.toggle('on', x === b); }); }; });
  vyber(akt, false); banner(0);

  // náběh karet po jedné
  if ('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(z){ z.forEach(function(e){ if (e.isIntersecting){ var k = [].indexOf.call(mini, e.target);
      e.target.style.transitionDelay = (k % 5) * 70 + 'ms'; e.target.classList.add('je'); io.unobserve(e.target); } }); }, {threshold: .1});
    mini.forEach(function(m){ io.observe(m); });
  } else mini.forEach(function(m){ m.classList.add('je'); });
})();
