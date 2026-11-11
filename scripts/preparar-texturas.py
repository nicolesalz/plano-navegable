# Prepara las texturas Megascans de texturas/ para la web.
#
#   python3 scripts/preparar-texturas.py        (necesita Pillow: pip install Pillow)
#
# Cada subcarpeta de texturas/ trae los mapas de un escaneo (…_2K_BaseColor.jpg, …_Normal.jpg, …) y su .json
# de Megascans. Para cada una:
# 1. Toma solo BaseColor, Normal, Roughness y AO (si alguno no está, sigue sin ese).
# 2. Los achica a la mitad (2K → 1K: unos 500 px por metro, de sobra para un piso) y los guarda como JPG
#    progresivo liviano, sin metadatos, en texturas/<carpeta>/web/<mapa>.jpg (basecolor, normal, roughness, ao).
#    Roughness y AO van en escala de grises; el Normal con más calidad para que el relieve no se ensucie.
# 3. Escribe texturas/texturas.json con, por carpeta: la medida real del escaneo en metros (de "Scan Area"
#    del .json: ancho x alto de la imagen), el color promedio y los mapas que hay. La página usa esa medida
#    para que la textura tenga su tamaño real.
# Los originales no se tocan.
import json, sys
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent / 'texturas'
MAPS = {'BaseColor': 'basecolor', 'Normal': 'normal', 'Roughness': 'roughness', 'AO': 'ao'}
QUALITY = {'basecolor': 82, 'normal': 90, 'roughness': 80, 'ao': 80}
SCALE = 0.5

manifest = {}
for folder in sorted(p for p in ROOT.iterdir() if p.is_dir()):
    jsons = list(folder.glob('*.json'))
    if not jsons:
        continue
    meta = json.loads(jsons[0].read_text(encoding='utf-8'))
    area = next((m['value'] for m in meta.get('meta', []) if m.get('key') == 'scanArea'), None)
    if not area:
        sys.exit(f'{folder.name}: el .json no trae "Scan Area"')
    w, h = (float(v) for v in area.lower().replace('m', '').split('x'))
    out = folder / 'web'
    out.mkdir(exist_ok=True)
    found = []
    for suffix, name in MAPS.items():
        src = next((p for p in folder.glob(f'*_{suffix}.*') if p.suffix.lower() in ('.jpg', '.jpeg', '.png')), None)
        if not src:
            print(f'{folder.name}: no hay {suffix}, sigue sin ese mapa')
            continue
        img = Image.open(src)
        img = img.convert('RGB') if name in ('basecolor', 'normal') else img.convert('RGB').getchannel('R')
        img = img.resize((round(img.width * SCALE), round(img.height * SCALE)), Image.LANCZOS)
        dst = out / f'{name}.jpg'
        img.save(dst, 'JPEG', quality=QUALITY[name], optimize=True, progressive=True)
        found.append(name)
        print(f'{folder.name}/web/{name}.jpg  {img.width}x{img.height}  {dst.stat().st_size // 1024} KB')
    manifest[folder.name] = {
        'nombre': meta.get('name'),
        'medida': [w, h],
        'color': meta.get('averageColor') if meta.get('averageColor') not in (None, '#000000') else None,
        'mapas': found,
    }

(ROOT / 'texturas.json').write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')
print('texturas/texturas.json listo')
