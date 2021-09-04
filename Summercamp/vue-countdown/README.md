# vue-countdown

Scrie un program, care la click pe butonul start, va începe un
countdown folosind valoarea introdusă în input în secunde,
începutul countdown-ului. La click pe butonul stop, countdown-ul
trebuie să se oprească și progressul să indice 0.
În timpul progress-ului, el trebuie să fie afișat în pagină
cu indicatoare pentru minute și secunde.
Starea countdown-ului, paused sau running, la fel trebuie să fie
afișată la ecran.

Planul de lucru:
1. Salvează valoarea introdusă în input în component data
2. Crează metode pentru start și stop cu un console.log
3. Apelează metodele create pentru butoane la click event
4. Păstrează în data un prop pentru id-ul intervalului
5. La start, pornește un interval și salvează id-ul
6. La stop, oprește intervalul și resetează id-ul
7. În dependență de valoaera id-ul păstrată în data,
   afișează la ecran starea de Stopped sau Running
8. La start, păstrează secundele din input în alt data, iar cea
   ce este legată de input îi dai '' ca la ecran să nu fie nici o valoarea în input
9. În computed data, păstrează și afișează la ecran valorile formatate
   pentru secunde și minute
   

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
