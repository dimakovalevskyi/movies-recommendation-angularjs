# movies-recomendation-angularjs
Simple Movies Recomendation App based on Angular.js

## How to install

To install locally:
```shell
npm i
```

Build files once:
```shell
npm start
```

Build and watch and run local server:
```shell
npm run dev
```

Deploy current `dist` folder to GitHub Pages:
```shell
npm run deploy
```

## Notes

Deployed to GitHub Pages [here](https://dimakovalevskyi.github.io/movies-recommendation-angularjs/)

If you want to see loader UI component, you will need to use Throttling in Network DevTools **before first recommendation**. I cache content of `db.json` after first load so loader appears only during first request.
