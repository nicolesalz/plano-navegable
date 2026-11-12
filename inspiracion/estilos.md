# Estilos de la casa — Chacabuco 2942

Guía de materiales y estilo por zona. Las imágenes de referencia están en `inspiracion/<zona>/`.
Reglas para todas las zonas:
- No cambiar la distribución ni las medidas del plano (`plano.pdf`).
- Materiales con texturas realistas (escaneos Megascans de `texturas/`, Poly Haven CC0 o generadas por código), sin perder fluidez.
- Texturas escaneadas (`texturas/<carpeta>/`): siempre a la escala real del escaneo ("Scan Area" del `.json` de cada carpeta). Solo se usan los mapas BaseColor, Normal, Roughness y AO (si falta alguno, sin ese), en versión liviana para la web en `texturas/<carpeta>/web/` (se generan con `python3 scripts/preparar-texturas.py`).
- Muebles simples y creíbles; nada de logos ni marcas visibles.

## Base (toda la casa)
Referencias: `base/`, `pisos/`
- Paredes interiores: blanco cálido, mate.
- Carpinterías: todos los marcos de ventanas y puertas-ventana blancos y finos, con vidrio claro.
- Puerta de entrada: marco blanco fino.
- Portón del garage: seccional blanco, de paneles horizontales, con marco blanco fino.
- Escalera: totalmente revestida en madera (pedadas, alzadas y laterales), en el mismo tono que el piso de madera, con baranda metálica negra fina. El bajo escalera queda vacío y abierto: sin paredes, placard ni cerramiento debajo.
- Fachada: revoque liso pintado color crema (cálido, mate); baranda de vidrio en planta alta.
- Reja y portón del frente: planchuelas verticales negras, con enredadera (tipo jazmín) creciendo sobre la parte fija de la reja (sobre la puerta peatonal y el portón corredizo no, porque se mueven).

## Techos
Referencia: `base/techos.jpeg` (de esa imagen, solo los techos; el resto no aplica).
Van por encima de la losa de techo de planta alta: no cambian muros, medidas ni el cielorraso interior (2,60).
- **Volumen principal** (izquierda: dormitorio principal, hall, baños y escritorio; 5,81 x 10,67 m): techo a dos aguas de teja colonial terracota (canales y cobijas, con variación de tono pieza a pieza).
  - Cumbrera de frente a fondo, centrada, con media caña de teja; pendiente de 30° (la cumbrera queda a unos 7,30 m del piso).
  - Hastial (el triángulo) mirando a la calle, en revoque liso crema como la fachada; otro igual al fondo.
  - Alero chico: 25 cm a los costados y 20 cm adelante y atrás, con la cara de abajo en crema.
- **Volumen de la derecha** (habitación 2 y dormitorio chico, sobre el garage): techo plano con parapeto liso de 60 cm, del mismo crema de la fachada, al frente, al costado y al fondo; del lado izquierdo se apoya contra el volumen principal y ahí baja el faldón derecho de teja.

## Pisos
Referencias: `pisos/`, `cocina/`, `texturas/`
- Living, entrada, hall de planta baja, dormitorios, escritorio y hall de planta alta: madera de nogal (Megascans *Walnut Veneer*, `texturas/piso-madera`; escaneo de 1 x 2 m, veta en sentido frente-fondo). No trae mapa AO. La escalera va en la misma madera.
- Cocina: porcelanato claro (blanco cálido o beige suave), mate, placas 60 x 120 con juntas finas.
- Galería del fondo: calcáreo con flores en grises, beige y rosado viejo, estilo antiguo (Megascans *Flower Patterned Tiles*, `texturas/galeria-jardin`; escaneo de 2 x 2 m, baldosas de unos 33 cm).
- Baños: ver cada baño.

## Living + entrada
Referencias: `living/` (`living.jpg`, `entrada.png`, `puerta separadoralivingacocina.jpg`)
- Biblioteca empotrada de piso a techo en color bordó (vino), con estantes abiertos y módulos cerrados abajo.
- Sillón curvo en tonos terracota/óxido, alfombra con dibujo en rosas y crudos, lámpara colgante de papel plisado.
- Living y cocina separados por puertas de vidrio repartido (referencia `living/puerta separadoralivingacocina.jpg`): corredizas, marco verde salvia, paños de vidrio divididos y zócalo ciego abajo. Desde el living se tiene que ver la cocina a través del vidrio.
- Entrada (mud room): mueble recibidor con boiserie de listones verticales blanco cálido, banco empotrado y alacenas altas lisas, ganchos para colgar.
- La pared del living que da al garage descubierto del frente queda ciega, como en el plano (sin ventanal ni puerta corrediza). La ventana del living al jardín delantero queda como ventana.

### Distribución (mirando desde la puerta de entrada)
Estos muebles no están dibujados en `plano.pdf`; se ubican sin cambiar paredes ni medidas.
- **Biblioteca bordó**: contra la pared izquierda del living (la medianera), a lo largo de toda la pared, del frente hasta el muro del hall (4,5 m), 40 cm de fondo. Módulos cerrados abajo (60 cm de alto) y estantes abiertos hasta el techo, en 5 columnas.
- **Tele**: empotrada en la columna del centro de la biblioteca, a la altura de la vista sentado, con estantes arriba.
- **Sillón curvo**: mira hacia la tele, así que al entrar a la casa se lo ve de espaldas. Va en el centro del living con la mesa ratona y la alfombra entre el sillón y la biblioteca; el colgante de papel queda sobre la mesa ratona. Se deja libre el paso de la entrada hacia la escalera y las puertas de vidrio.
- **Puertas corredizas de vidrio**: en el vano corredizo que ya existe entre el living y el hall (2,4 m). Del otro lado del hall está la cocina, que se ve a través del vidrio. Dos hojas: la del lado del hall queda fija a la izquierda y la del lado del living corre por delante (tecla E para abrir o cerrar).
- **Entrada (recibidor)**: ocupa solo la pared angosta que se ve de frente al entrar, que es el lateral de la caja de la escalera (1,01 m de ancho). Banco empotrado con cajones (44 cm de fondo), boiserie con tres ganchos arriba del banco y alacenas altas hasta el techo.
- **Pared larga de la derecha** al entrar (la que da al garage descubierto del frente, donde se estaciona la Volvo): ciega, como en el plano. No lleva ventanal ni puerta corrediza.
- **Ventana al jardín**: la del plano, con antepecho a 90 cm (no es puerta). Afuera, la bordura de plantas sigue debajo.
- **Plantas**: apenas entrás al living no hay ninguna planta. Solo queda la mata frondosa en el rincón entre la biblioteca y la ventana.

## Cocina + galería
Referencias: `cocina/`, `pisos/piso galeria.jpeg`
- Muebles en madera tono miel (roble o nogal claro), veta vertical, frentes lisos con uñeros o perillas chicas.
- Columna de alacenas de piso a techo con horno empotrado negro/grafito y un módulo de estantes abiertos.
- Isla: base verde muy oscuro con un costado de estantes abiertos en madera; colgante lineal negro arriba.
- Mesada clara (cuarcita o mármol crema) con un poco de brillo.
- Bacha de acero bajo mesada **en la isla** (no en la mesada contra la pared), con grifería de acero. En la mesada de la pared va el anafe de inducción negro.
- Ventana de paño fijo (no se abre) de 1,50 x 1,50 m sobre el comedor diario (detrás del banco en L), con marco blanco fino como el resto de las carpinterías.
- Comedor diario: banco tipo bar booth en L con base de madera miel y almohadones de lino beige; mesa rectangular de madera miel; dos sillas de madera; globo opalino colgante sobre la mesa.
- Paredes blanco cálido, sin azulejos. Piso: porcelanato claro (ver Pisos).
- Galería: piso de calcáreos; abertura grande vidriada hacia el patio.
- Garage → galería y patio del fondo: puerta-ventana corrediza de vidrio, del mismo tipo que la de la cocina (marco blanco fino, 2,18 m de vano, la hoja de la derecha fija y la de la izquierda abierta), en lugar de la ventana del plano. Umbral de cemento como el piso del garage. Sin columnas: el techo (losa) de la galería va en voladizo desde el muro del fondo de la casa, sin apoyos visibles.

### Medidas
- La cocina mide **5,40 x 4,20 m** (como dice el plano): 5,38 m de la medianera a la pared del garage y 4,20 m del muro del baño PB al muro del fondo, medidos por dentro.
- Antes medía 5,38 x 4,03 m por dentro: la cota de 4,2 del plano arranca en la cara de afuera del muro del fondo. Para que dé 4,20 por dentro, el muro entre el baño PB y la cocina pasó de 28 a 11 cm (del lado de la cocina). El baño PB, el hall, el garage y la fachada no cambian.

### Distribución (mirando desde el hall hacia la galería)
La columna de alacenas, el módulo de estantes abiertos, la isla y el banco del comedor no están dibujados en `plano.pdf`; se ubican sin cambiar paredes ni medidas.
- **Pared izquierda (medianera)**, del muro del baño hacia el fondo:
  - Bajo mesada con anafe (del muro del baño hasta 2,7 m), en L con la bajo mesada contra el muro del baño.
  - **Módulo de estantes abiertos** (50 cm de ancho): sobre la mesada, desde la mesada hasta el techo, en madera miel, con platos, tazas y libros de cocina.
  - **Columna de alacenas** (1,27 m de ancho, de piso a techo, 62 cm de fondo) en el rincón del fondo, donde el plano marca la heladera: dos módulos con alacenas arriba; el **horno grafito** empotrado a la altura de la mano en el módulo junto a los estantes. Llega hasta el muro del fondo, al lado de la puerta-ventana a la galería.
- **Isla** (1,04 x 1,30 m) en el centro, frente a la mesada de la pared (pasillo de 90 cm): bacha con grifería del lado de la mesada, banquetas del lado del comedor, estantes abiertos en el costado que mira a la galería, colgante lineal negro arriba.
- **Comedor diario** en el rincón del fondo a la derecha (a la derecha de la puerta-ventana a la galería): **banco tipo bar booth en L** de 45 cm de alto y 55 cm de fondo, con respaldo de almohadones hasta 88 cm.
  - Un tramo contra el muro del fondo, debajo de la ventana fija de 1,50 x 1,50 m (de x = 3,30, junto a la puerta-ventana, hasta el rincón; 2,08 m). La ventana (dintel a 2,05 m, alineado con la puerta-ventana; antepecho a 55 cm) queda detrás del banco y los almohadones del respaldo se apoyan contra la parte baja del vidrio.
  - El otro tramo contra la pared del garage (1,00 m más el rincón).
  - **Mesa** rectangular de 1,30 x 0,80 delante del banco, con pie central, y **2 sillas** del lado abierto (el que mira a la isla), de frente a la ventana. Globo opalino colgante sobre la mesa.

### Hall: lavadero
- **Lavadero** al pasar la puerta corrediza de vidrio del living, a la derecha (contra la pared del garage), donde el plano dibuja la mesada con pileta del hall: mueble **cerrado de piso a techo** (2,64 m de largo, 83 cm de fondo) en madera miel, con **dos puertas corredizas** que se cruzan en dos rieles (tecla E, se abre una por vez; arrancan cerradas).
  - Mitad de adelante (lado del living): **lavarropas** de carga frontal bajo una mesada de piedra clara, con **bacha** de loza y grifería de pared de acero; dos estantes arriba con canastos, botellas y toallas.
  - Mitad del fondo (lado de la cocina): **mueble de guardado**, puertas abajo y estantes con canastos de fibra y toallas arriba.

## Dormitorios + escritorio
Referencias: `habitaciones/`
- Dormitorio principal: tonos beige y crudo, tipo vestidor; placard con puertas de paneles de esterilla (rattan) enmarcados en blanco, detrás de un panel de esterilla que hace de respaldo de la cama; cama tapizada beige con almohadones rosa viejo; mesas de luz redondas de madera clara; alfombra cruda.
- Dormitorio chico: dormitorio, en los mismos tonos beige y crudo que el principal; cama tapizada beige con almohadón rosa viejo, mesa de luz redonda de madera clara con velador, placard de esterilla con marco blanco y alfombra cruda.
- Escritorio (el cuartito del fondo que en el plano dice "Depósito"): paredes y estanterías verde oliva; escritorio flotante y estantes del mismo verde; silla de madera curva; lámparas colgantes de vidrio opalino; cortina de lino blanca. Referencia `habitaciones/habitacionchicaescritorio.jpg`.

### Distribución
El panel de esterilla, el mueble de la tele y el escritorio con estantes verdes no están dibujados en `plano.pdf`; se ubican sin cambiar paredes ni medidas.
- **Suite principal**: el dormitorio principal tiene el baño en suite (el de la ducha, Baño PA 1 con su antebaño).
  - Al subir la escalera, la pared que queda de frente (la del dormitorio) sigue un poco más hacia el fondo, y ahí está la **puerta de la suite** (80 cm), corrediza del lado del hall hacia la escalera.
  - Esa pared sigue hasta el antebaño, así que la franja de la izquierda (1,02 m de ancho) queda adentro de la suite como **paso**: une el dormitorio (abertura del rincón) con el antebaño del baño en suite.
  - Entre el paso y el antebaño: **puerta corrediza** que corre embutida dentro del muro (no hay pared libre a los costados).
- **Dormitorio principal**, tipo vestidor (mirando desde la ventana del frente: a la izquierda la medianera, a la derecha el nicho junto a la caja de la escalera):
  - **Placard de esterilla**: el que el plano dibuja en el nicho de la derecha (junto a la caja de la escalera), de piso a techo, con puertas push de marco blanco y tres paños de esterilla cada una. En la pared del fondo no hay placard: queda pintada de beige.
  - **Panel de esterilla** delante del placard, separando la cama del vestidor: 2,50 m de largo (de la ventana hacia el fondo, de z = 5,99 a 8,49), 2,10 m de alto, 6 cm de espesor, marco blanco y paños de esterilla en las dos caras.
  - **Pasillo del vestidor** entre el panel y el placard: 71 cm (mínimo 70). Se entra por los dos costados del panel: por el lado de la ventana (55 cm) y por el lado del fondo (53 cm, junto al muro de la escalera).
  - **Cama** (1,70 x 2,00) con la cabecera contra el panel, centrada con él, mirando a la medianera izquierda. Una mesa de luz redonda de 36 cm a cada lado, contra el panel: velador en la del lado de la ventana y globo opalino colgante en la del fondo, con una plantita.
  - **Mueble con tele** enfrente de la cama, contra la medianera izquierda: mueble bajo de madera clara de 1,30 m x 42 cm, 55 cm de alto, con la tele (55") colgada en la pared arriba. Entre los pies de la cama y el mueble queda 1,06 m.
  - **Alfombra cruda** debajo de los dos tercios de la cama hacia los pies.
  - Paredes en beige suave.
- **Dormitorio chico** = habitación 3 (2,9 x 3,5, al fondo, ventana al patio). Cama y placard quedan donde los marca el plano.
  - **Cama** de una plaza contra la pared de la puerta, con la cabecera bajo la ventana.
  - **Mesa de luz** redonda de madera clara junto a la cabecera, con velador de pantalla de lino.
  - **Placard** (el del plano, junto a la puerta) con puertas de esterilla y marco blanco, como el del principal.
  - **Alfombra cruda** al costado de la cama y **globo opalino** colgante en el centro.
  - Paredes en beige suave.
- **Escritorio** = el cuartito de 1,9 x 2,3 m al fondo del hall de planta alta, entre el baño PA 2 y el dormitorio chico (en el plano, "Depósito"); puerta a la derecha y ventana al patio.
  - **Contra la pared izquierda** (la del baño PA 2), de la puerta hacia el fondo:
    - **Mueble de estantes** (70 cm de ancho, 38 cm de fondo): puertas abajo y estantes abiertos hasta el techo, con libros.
    - **Escritorio flotante** (1,55 m x 55 cm, a 77 cm de alto) hasta el rincón de la ventana, con dos estantes flotantes arriba.
  - **Silla** giratoria de madera curva frente al escritorio; dos colgantes de vidrio opalino arriba, entre el escritorio y los estantes.
  - **Cortina de lino blanca** recogida del lado derecho de la ventana.
  - Paredes en verde oliva.

## Baños
Referencias: `banos/`
- Baño PB (toilette): tonos bordó y terracota; pared de azulejos rectangulares verticales terracota con brillo; paredes y techo pintados bordó; mueble y puerta en madera oscura; inodoro blanco.
- Baño principal (planta alta): pared de ducha con azulejos de semicírculos verde salvia y crudo; resto de paredes crudo; vanitory chico de madera con bacha de apoyo verde; grifería negra; espejo con marco de madera.
- Segundo baño (planta alta): vanitory flotante de nogal oscuro con mesada de mármol claro, dos griferías bronce de pared; espejo grande; paredes blancas; piso de mosaico blanco y negro tipo tejido (basketweave).
- Inodoros: blancos, de pie (referencia `inodoro.jpeg`).

### Distribución
Los artefactos van donde los marca `plano.pdf`; los muebles, revestimientos y luces se ubican sin cambiar paredes ni medidas.
- **Baño PB** (toilette de 2,49 x 0,81; referencias `baño.jpg`, `baño2.jpg`, `baño3.jpg`):
  - **Pared del fondo** (la que se ve al entrar) entera de azulejos terracota verticales 7,5 x 30 con brillo; las otras tres paredes y el techo pintados bordó. Piso: sigue la madera de nogal del hall.
  - **Inodoro** de pie contra la medianera, con un **mueble alto de nogal oscuro** arriba (dos puertas, perillas de bronce).
  - **Vanitory flotante de nogal oscuro** contra la pared derecha (donde el plano marca el lavatorio), con bacha de apoyo rectangular blanca, grifería de pared de bronce, espejo angosto con marco de nogal y un canasto de fibra abajo.
  - **Luces**: dos apliques de globo opalino con brazo de bronce **en la pared del espejo**, uno a cada lado del espejo (no en la pared de azulejos).
  - **Puerta corrediza** de nogal oscuro con tirador de bronce, del lado de adentro (en el plano es corrediza).
- **Baño principal** = Baño PA 2 (1,71 x 2,32, el de la bañera) + su antebaño (Lavatorio Baño PA 2):
  - **Bañera** de 1,70 x 0,73 de pared a pared, donde la marca el plano. La pared de atrás (con la ventana) es la "pared de ducha": azulejos cuadrados de 18 cm con semicírculos verde salvia y crudo, de piso a techo. Ducha de lluvia negra, tres llaves negras y mampara fija de vidrio con perfil negro.
  - **Inodoro y bidet** blancos de pie contra la pared izquierda, como en el plano (el bidet, 15 cm más adentro para dejar paso libre junto a la puerta). Portarrollos y toallero negros.
  - **Antebaño**: vanitory chico (80 cm) de nogal, flotante, con tapa blanca y bacha de apoyo verde salvia, grifería negra de pared, espejo ovalado alargado con marco de madera y toallero negro con toalla beige en el frente del mueble.
  - Paredes crudo; piso de porcelanato beige.
- **Segundo baño = baño en suite** de la habitación principal = Baño PA 1 (1,52 x 2,32, el de la ducha) + su antebaño (Lavatorio Baño PA 1); se entra desde el paso de la suite, no desde el hall:
  - **Ducha** al fondo, donde el plano marca el plato: plato blanco, azulejo blanco 6 x 30 en la pared del fondo y la lateral, ducha de lluvia y llave de bronce, mampara fija (entrada libre del lado izquierdo).
  - **Inodoro y bidet** blancos de pie contra la pared derecha, como en el plano; portarrollos y toallero de bronce.
  - **Antebaño**: vanitory flotante de nogal oscuro contra la pared derecha, en todo el largo (1,13 m), con estante abierto abajo y mesada gruesa de mármol claro con bacha integrada; dos griferías de pared de bronce, zócalo de azulejo blanco, espejo grande sin marco y aplique lineal negro arriba.
  - Paredes blancas; piso de mosaico blanco y negro tipo tejido (basketweave) en el baño y el antebaño.
- **Puertas**: todas las puertas de los baños son corredizas, aunque el plano dibuje alguna de abrir. Corren por delante del muro, hacia el lado donde hay pared libre, y se abren y cierran con E. Las de planta alta son lisas, laqueadas crudo, con tirador negro:
  - Paso de la suite → antebaño del baño en suite: corre embutida dentro del muro, hacia la derecha.
  - Hall → suite principal: del lado del hall, abre hacia la escalera.
  - Antebaño → segundo baño: del lado del baño, abre hacia la derecha.
  - Antebaño → baño principal: del lado del antebaño (del lado del baño chocaría con el bidet), abre hacia la derecha.
  - Hall → antebaño del baño principal: del lado del hall, abre hacia el frente; abierta asoma unos 20 cm más allá del muro, porque ese tramo de pared es más corto que la hoja.

## Exterior
Referencias: `exterior/`, `base/frente de la casa reja.jpeg`
- Jardín delantero: sin pasto. Todo el piso, de la reja a la fachada (incluida la entrada de autos y el camino a la puerta), de baldosas rojas de terracota (Megascans *Red Pavers*, `texturas/galeria-frente`; escaneo de 2 x 2 m, baldosas de unos 22 cm).
  - Canteros (gramíneas altas, hortensias rosas y blancas, flores en tonos rosa y bordó): contra la medianera izquierda (el del costado), y debajo de la ventana del living. Entre el camino de entrada y el auto (a la derecha apenas entrás) **no** va cantero: queda libre, con baldosas. Contra la reja del frente no va cantero.
- Patio trasero: césped amplio (Megascans *Lawn Grass*, `texturas/pasto-jardin`; escaneo de 2 x 2 m), borduras de plantas en los bordes y cerco verde alto contra las medianeras.
- Frente: reja negra de planchuelas con enredadera (ver Base).

### Reja: puerta peatonal y portón corredizo
- **Puerta peatonal** (x = 4,02 a 5,04): hoja de abrir, del mismo diseño que la reja (planchuelas negras, bastidor y dos planchuelas horizontales), con caja de cerradura y picaporte de los dos lados y dos bisagras. Gira sobre el poste de la izquierda y **abre hacia adentro** del jardín (90°).
- **Portón de autos corredizo** (x = 5,62 a 8,30): una sola hoja de 2,74 m del mismo diseño, que **corre por adentro** de la reja (28 cm detrás, para pasar por delante de las columnas de la cochera) sobre un riel negro en el piso, **hacia la izquierda** (a la derecha está la medianera). Abierto queda detrás de la reja fija y de la puerta peatonal. Arriba, junto a la columna de la cochera, una guía negra con dos ruedas sostiene la hoja.
- Como el portón abierto tapa la puerta peatonal desde adentro, **nunca están abiertos los dos**: al abrir uno, el otro se cierra primero.
- Se abren y cierran con **E** (o el botón "Abrir / cerrar" del celular) estando cerca, de los dos lados de la reja.

### Vereda y calle
- **Vereda** de 3 m frente a la reja, con las **mismas baldosas rojas** del jardín delantero (`texturas/galeria-frente`); las juntas siguen de un lado al otro de la reja. Corre a lo largo de toda la cuadra que se ve.
- **Cordón de hormigón** gris claro (15 cm de ancho) y, del lado de la calle, una franja de cordón cuneta de hormigón de 45 cm.
- **Calle de asfalto** gris oscuro con granza, 8 m de ancho y 15 cm más abajo que la vereda, sin líneas pintadas (calle de barrio). Enfrente, el otro cordón y un pedazo de vereda.
- **Árbol de vereda frente a la casa**: un **fresno** (tronco gris derecho de unos 3 m, ramas que abren y copa ovalada de verde claro, de unos 5,5 m de ancho y 7,5 m de alto), frente a la ventana del living (x ≈ 2,2), cerca del cordón, para no tapar la puerta ni el portón.
  - **Cazuela** cuadrada de 90 cm con borde de hormigón y tierra.
- Se puede salir a la vereda y bajar a la calle; unos límites invisibles evitan entrar a los lotes vecinos o irse más allá de este tramo.

### Cochera cubierta (Volvo)
Referencia: `exterior/techo-auto.jpg` (solo el techo y la estructura; el resto no aplica).
- En el jardín delantero, frente al portón del garage, en el hueco entre la pared lateral del living y la medianera derecha: **2,88 x 7,76 m** (de x = 5,52 a 8,40; de la fachada del garage, z = 7,86, **hasta la reja**, z = 0,10). El ancho es todo lo que hay entre la pared y la medianera.
- **Estructura** metálica negra mate: viga perimetral gruesa (tubo de 8 x 22 cm) y 8 vigas transversales (5 x 15 cm) de lado a lado.
  - Del lado de la casa va **amurada a la fachada** del garage (con tres ménsulas de anclaje), a la altura de la losa, por debajo de la ventana de la habitación 2. La viga izquierda también queda contra la pared lateral del living.
  - Del lado de la reja apoya en **2 columnas finas negras** (8 x 8 cm, con planchuela de base), en las esquinas de adelante, justo detrás de la reja, alineadas con los postes del portón de autos de la reja.
- **Techo plano** con pendiente leve (28 cm en 7,76 m, ~3,6 %) hacia la reja, para el desagüe: arriba de la viga a 2,92 m contra la fachada y a 2,64 m junto a la reja (la viga de adelante queda a 2,42 m del piso, por encima de la reja de 2,00 m y su enredadera).
- **Paños alternados** entre las vigas transversales (9 paños): chapa acanalada gris oscuro en los impares (el 1.º contra la fachada y el 9.º junto a la reja) y policarbonato translúcido en los pares (2.º, 4.º, 6.º y 8.º), con la onda a lo largo de la pendiente.
- El policarbonato deja pasar el sol: en el piso de baldosas quedan las sombras de las vigas, y bajo la chapa, sombra.
- No tapa la ventana del living ni la puerta de entrada (quedan a la izquierda de la pared lateral del living), ni la ventana de la habitación 2 (su antepecho está a 3,70 m).
- La **Volvo** queda entera debajo: cola a 50 cm de la fachada y trompa a unos 2,5 m de la reja; sigue corrida a la derecha, con paso del lado de la casa.

## Autos
- Garage (lateral derecho de planta baja): BMW 120i blanco (hatchback compacto), estacionado de frente hacia la calle.
- Afuera, en el jardín delantero frente al portón del garage: Volvo XC60 negra (SUV mediana), bajo la cochera cubierta (ver Exterior).
- Modelos simplificados pero con proporciones y colores fieles; sin logos.

## Interfaz en el celular
- Se activa sola en pantallas táctiles sin mouse (se puede forzar con `?tactil=si` o apagar con `?tactil=no`). En la compu no cambia nada.
- **Vertical**: pantalla oscura a pantalla completa con un celular dibujado que gira y el texto "Girá el celular a horizontal para recorrer la casa".
- **Cartel de inicio**: el mismo de la compu (blanco, esquinas redondeadas) con las instrucciones táctiles y un botón azul grande "Empezar en pantalla completa". En el celular la calidad arranca en **Baja**.
- **Joystick**: círculo blanco translúcido con borde y una bolita blanca, abajo a la izquierda. Aparece donde apoyás el dedo en la mitad izquierda y vuelve a su lugar al soltar.
- **Botones de acción** abajo a la derecha, en columna: píldoras oscuras translúcidas con borde blanco y texto blanco ("Abrir / cerrar", "Hora", "Correr"). "Correr" queda azul mientras está prendido.
- **Arriba a la derecha**: dos botones redondos chicos, pantalla completa (⛶) y pausa (❚❚).
- El botón "Abrir / cerrar" también abre la puerta peatonal y el portón corredizo de la reja.
- Los avisos (por ejemplo "Abriendo el portón") se ven arriba al centro para no tapar los botones.
