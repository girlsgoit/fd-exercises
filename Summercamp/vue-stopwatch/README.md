# vue-stopwatch

Având HTML-ul dat, scrie un program care, la click pe start va
porni un stopwatch ce va afișa progresul în miliseconds, seconds
și minutes. La click pe pause, va opri progresul. La click pe
reset, va opri progresul și îl va aduce la 0.

Planul de lucru:
1. Crează metode pentru start, pause și reset cu un console.log
2. Leagă metodele create de butonul corespunzător
3. Crează câte un prop în data pentru numărul total de milisecunde
   și id-ul intervalului
4. În metodele de pause și reset, oprește intervalul și setează
   numărul total de
5. În metoda start, pornește un interval și incrementează numărul
   total de milisecunde
6. În computed data, folosind numărul totale de milisecunde, formatează
   și afișează progresul în minute, secunde și milisecunde


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
