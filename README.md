# plano-navegable
Quiero crear esta web para tener un plano navegable en 3D de mi futura casa

## Cómo usarlo
Abrí `index.html` publicado con GitHub Pages (Settings → Pages → *Deploy from a branch* → elegir la rama y la carpeta `/ (root)`).
Clic para entrar · WASD o flechas para caminar · Shift para correr · mouse para mirar · T para cambiar la hora del día · E (cerca del portón del garage, de la puerta de vidrio del living, de las puertas corredizas del lavadero del hall o de las de los baños) para abrirlos o cerrarlos · Esc para salir.
Las medidas y el plano están en `index.html` (sección 1), sacadas de `plano.pdf`.
En el cartel de inicio se elige la **calidad** (Baja · Media · Alta). *Baja* apaga la oclusión ambiental y baja la resolución, para notebooks lentas; también se puede forzar con `index.html?calidad=baja`. Si la compu no llega a ~30 cuadros por segundo, la calidad baja sola.
**Muebles, plantas y lámparas**: los modelos 3D reales (Poly Haven, CC0) van en `models/` como `.glb`; ver `models/README.md` para la lista, los links y cómo instalarlos (`node scripts/preparar-modelos.mjs`). Lo que no tiene modelo se arma por código con bordes redondeados y texturas con relieve. Las lámparas tienen luz real; en calidad *Alta* además proyectan sombras.
**Hora del día**: botones Mañana · Mediodía · Tarde en el cartel de inicio, o la tecla **T** mientras recorrés (también `index.html?hora=tarde`). El sol se calcula para Buenos Aires con la casa orientada como en la realidad: frente al SE y costado del garage al NE. A la mañana pega en el frente, al mediodía en el costado del garage y a la tarde en el patio y la galería. Las horas y la estación (`TIMES`, `SEASON_DECL`) están en `index.html`, sección 2.
**Pisos escaneados** (Megascans): cada carpeta de `texturas/` trae los mapas originales y su `.json` con la medida real. La página usa versiones livianas en `texturas/<carpeta>/web/` y la lista `texturas/texturas.json`; si cambiás o agregás una textura, regeneralas con `python3 scripts/preparar-texturas.py` (necesita Pillow).
