## 01-static

```sh
cd 01-static
python3 -m http.server 8080
```

Open `http://localhost:8080`

## 02-ssr

```sh
cd 02-ssr
php -S localhost:8080
```

Open `http://localhost:8080/index.php`

## 03-ajax

```sh
cd 03-ajax
php -S localhost:8080
```

Open `http://localhost:8080/index.php`

## 04-spa

```sh
cd 04-spa
npm install
npm run dev
```

Open `http://localhost:5173`

## 05-pwa

```sh
cd 05-pwa
npm install
npm run build && npx http-server dist
```

Open `http://localhost:8080`

## 06-jamstack

To serve the built `public` folder:

```sh
cd 06-jamstack/public
python3 -m http.server 8080
```

Open `http://localhost:8080`


