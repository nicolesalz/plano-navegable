# Modelos 3D (.glb)

Muebles y plantas reales para la casa, todos de **Poly Haven** (licencia **CC0**: libres, sin atribución obligatoria).
Mientras un modelo no esté en esta carpeta, la página usa una versión hecha por código en el mismo lugar del plano;
cuando está, la reemplaza sola y la escala a las medidas del plano.

## Qué bajar

En cada link: **Download → formato glTF → resolución 1K** (alcanza y pesa poco: es lo que mantiene la web fluida).

| Modelo | Dónde va | Link |
|---|---|---|
| `coffee_table_round_01` | Mesa ratona del living | https://polyhaven.com/a/coffee_table_round_01 |
| `round_wooden_table_01` | Mesa del comedor (cocina) | https://polyhaven.com/a/round_wooden_table_01 |
| `dining_chair_02` | 4 sillas del comedor | https://polyhaven.com/a/dining_chair_02 |
| `bar_chair_round_01` | 2 banquetas de la isla | https://polyhaven.com/a/bar_chair_round_01 |
| `potted_plant_04` | Suculenta en maceta (galería) | https://polyhaven.com/a/potted_plant_04 |
| `potted_plant_01` | Planta del rincón del living y galería | https://polyhaven.com/a/potted_plant_01 |
| `potted_plant_02` | Plantita sobre la mesa ratona | https://polyhaven.com/a/potted_plant_02 |
| `pachira_aquatica_01` | Planta alta del living (junto a la ventana) y planta grande de la galería | https://polyhaven.com/a/pachira_aquatica_01 |
| `calathea_orbifolia_01` | Planta baja de la galería | https://polyhaven.com/a/calathea_orbifolia_01 |

Alternativas que también reconoce, por si alguno de arriba no aparece: `WoodenTable_01` (mesa), `WoodenChair_01` (sillas).
Si un link no abre, buscá el nombre en https://polyhaven.com/models.

No hay modelo para el sillón curvo, las camas, los placares, la cocina ni las lámparas: Poly Haven no tiene
piezas que respeten `inspiracion/estilos.md` (sillón curvo terracota, cama tapizada beige, placar de esterilla…),
así que esas se hacen por código, con bordes redondeados y telas/maderas con relieve.

## Cómo instalarlos

1. Descomprimí cada `.zip` dentro de `models/`, una carpeta por modelo, por ejemplo:
   `models/potted_plant_01/potted_plant_01_1k.gltf` (+ el `.bin` y la carpeta `textures/`).
2. Desde la carpeta del repo, corré:

   ```bash
   node scripts/preparar-modelos.mjs
   ```

   Empaqueta cada modelo en un solo archivo (`models/potted_plant_01.glb`) y actualiza `models/modelos.json`,
   que es la lista que lee la página. Si ya tenés un `.glb`, copialo directo a `models/` y corré el mismo comando.
3. Subí a git los `.glb` y `modelos.json` (las carpetas descomprimidas se pueden borrar).

Si algún modelo aparece mirando para el lado equivocado, se corrige en `index.html` con `MODEL_TURN`
(por ejemplo `MODEL_TURN.dining_chair_02 = Math.PI`).
