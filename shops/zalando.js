// Loop5, open manually all the labels, then
var a = []; b = document.querySelectorAll('.loop-item a h2')
for (var i = 0; i < b.length; ++i) { a.push(b[i].innerText) }
res = JSON.stringify(a)

// Peek & Cloppenburg
var a = []; b = document.querySelectorAll('.char ul li')
for (var i = 0; i < b.length; ++i) { a.push(b[i].innerText) }
res = JSON.stringify(a)

// Görtz
var a = []; b = document.querySelectorAll('.brands-glossary-items ul li')
for (var i = 0; i < b.length; ++i) { a.push(b[i].innerText) }
res = JSON.stringify(a)

// Henschel
var a = []; b = document.querySelectorAll('.markenfinder_table > tbody > tr > td > p')
for (var i = 0; i < b.length; ++i) { a.push(b[i].innerText) }
res = JSON.stringify(a)

// Galeria Kaufhof
var a = []; b = document.querySelectorAll('.se-brands__link:not(.se-brands__link--invisible)')
for (var i = 0; i < b.length; ++i) { a.push(b[i].innerText) }
res = JSON.stringify(a)



// Zalando, open all labels, then
var a = []; b = document.querySelectorAll('.brandBlock li a');
for (var i = 0; i < b.length; ++i) { a.push(b[i].getAttribute('title')) }
res = JSON.stringify(a)
