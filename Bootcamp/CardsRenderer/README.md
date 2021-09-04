# Cards Renderer

Parcurge matricea cu obiecte și afișează conținutul

Poți utiliza următoarele metode:

`document.createElement(tagName)` - crează elementul HTML specificat
de tagName sau un HTMLUnknownElement dacă tagName nu este recunoscut

**Element.append(...nodesOrDOMStrings)** - inserează un set de obiecte
Node sau obiecte DOMString (pentru text) după ultimul copil al elementului.

```js
let let div = document.createElement("div");
let p = document.createElement("p");
div.append("Text", p);
```

`Element.prepend(...nodesOrDOMStrings)` - inserează un set de obiecte Node
sau obiecte DOMString (pentru text) înaintea primului copil al elementului.

```js
let let div = document.createElement("div");
let p = document.createElement("p");
div.prepend("Text", p);

let p = document.createElement("p");
document.body.appendChild(p);
```

`element.classList.add(className)` - adaugă clasa specificată în
lista de clase a elementului

`element.classList.remove(className)` - șterge clasa specificată
din lista de clase a elementului
