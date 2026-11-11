# plano-navegable
Quiero crear esta web para tener un plano navegable en 3D de mi futura casa

## Cómo usarlo
Abrí `index.html` publicado con GitHub Pages (Settings → Pages → *Deploy from a branch* → elegir la rama y la carpeta `/ (root)`).
Clic para entrar · WASD o flechas para caminar · Shift para correr · mouse para mirar · Esc para salir.
Las medidas y el plano están en `index.html` (sección 1), sacadas de `plano.pdf`.
En el cartel de inicio se elige la **calidad** (Baja · Media · Alta). *Baja* apaga la oclusión ambiental y baja la resolución, para notebooks lentas; también se puede forzar con `index.html?calidad=baja`. Si la compu no llega a ~30 cuadros por segundo, la calidad baja sola.
La posición del sol (y por lo tanto por qué ventanas entra) se cambia con `SUN` en `index.html` (sección 2).
