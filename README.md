# plano-navegable
Quiero crear esta web para tener un plano navegable en 3D de mi futura casa

## Cómo usarlo
Abrí `index.html` publicado con GitHub Pages (Settings → Pages → *Deploy from a branch* → elegir la rama y la carpeta `/ (root)`).
Clic para entrar · WASD o flechas para caminar · Shift para correr · mouse para mirar · T para cambiar la hora del día · E (cerca del portón del garage) para abrirlo o cerrarlo · Esc para salir.
Las medidas y el plano están en `index.html` (sección 1), sacadas de `plano.pdf`.
En el cartel de inicio se elige la **calidad** (Baja · Media · Alta). *Baja* apaga la oclusión ambiental y baja la resolución, para notebooks lentas; también se puede forzar con `index.html?calidad=baja`. Si la compu no llega a ~30 cuadros por segundo, la calidad baja sola.
**Hora del día**: botones Mañana · Mediodía · Tarde en el cartel de inicio, o la tecla **T** mientras recorrés (también `index.html?hora=tarde`). El sol se calcula para Buenos Aires con la casa orientada como en la realidad: frente al SE y costado del garage al NE. A la mañana pega en el frente, al mediodía en el costado del garage y a la tarde en el patio y la galería. Las horas y la estación (`TIMES`, `SEASON_DECL`) están en `index.html`, sección 2.
