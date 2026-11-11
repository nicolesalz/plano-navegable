// Prepara los modelos 3D de la carpeta models/ para la web (sin instalar nada: solo Node).
//
//   node scripts/preparar-modelos.mjs
//
// 1. Busca archivos .gltf dentro de models/ (por ejemplo lo que viene en el .zip de Poly Haven:
//    models/potted_plant_01/potted_plant_01_1k.gltf + .bin + textures/) y empaqueta cada uno,
//    con sus texturas, en un solo archivo models/<nombre>.glb (sin el sufijo _1k, _2k…).
// 2. Escribe models/modelos.json con la lista de todos los .glb que hay en models/.
//    La página solo carga los modelos que figuran en esa lista.
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname, basename, extname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const MODELS = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'models');
const MIME = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.ktx2': 'image/ktx2' };
const pad4 = (n) => (4 - (n % 4)) % 4;

function findGltf(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...findGltf(p));
    else if (extname(name).toLowerCase() === '.gltf') out.push(p);
  }
  return out;
}

function readUri(uri, base) {
  if (uri.startsWith('data:')) return Buffer.from(uri.slice(uri.indexOf(',') + 1), 'base64');
  return readFileSync(join(base, decodeURIComponent(uri)));
}

function packGlb(gltfPath) {
  const base = dirname(gltfPath), json = JSON.parse(readFileSync(gltfPath, 'utf8'));
  const chunks = [];
  let length = 0;
  const append = (buf) => { const offset = length; chunks.push(buf, Buffer.alloc(pad4(buf.length))); length += buf.length + pad4(buf.length); return offset; };
  // Todos los buffers en uno solo
  const offsets = (json.buffers ?? []).map(b => append(readUri(b.uri, base)));
  for (const bv of json.bufferViews ?? []) { bv.byteOffset = (bv.byteOffset ?? 0) + offsets[bv.buffer]; bv.buffer = 0; }
  json.bufferViews ??= [];
  // Imágenes adentro del binario
  for (const img of json.images ?? []) {
    if (!img.uri) continue;
    const data = readUri(img.uri, base);
    img.mimeType ??= MIME[extname(img.uri.split('?')[0]).toLowerCase()] ?? 'image/jpeg';
    img.bufferView = json.bufferViews.push({ buffer: 0, byteOffset: append(data), byteLength: data.length }) - 1;
    delete img.uri;
  }
  const bin = Buffer.concat(chunks);
  json.buffers = [{ byteLength: bin.length }];
  let text = Buffer.from(JSON.stringify(json));
  text = Buffer.concat([text, Buffer.alloc(pad4(text.length), 0x20)]);
  const header = Buffer.alloc(12), jh = Buffer.alloc(8), bh = Buffer.alloc(8);
  header.writeUInt32LE(0x46546c67, 0); header.writeUInt32LE(2, 4); header.writeUInt32LE(12 + 8 + text.length + 8 + bin.length, 8);
  jh.writeUInt32LE(text.length, 0); jh.writeUInt32LE(0x4e4f534a, 4);
  bh.writeUInt32LE(bin.length, 0); bh.writeUInt32LE(0x004e4942, 4);
  return Buffer.concat([header, jh, text, bh, bin]);
}

if (!existsSync(MODELS)) { console.error('No existe la carpeta models/'); process.exit(1); }
for (const g of findGltf(MODELS)) {
  const id = basename(g, extname(g)).replace(/_\d+k$/i, '');
  const out = join(MODELS, `${id}.glb`);
  const glb = packGlb(g);
  writeFileSync(out, glb);
  console.log(`✔ ${id}.glb  (${(glb.length / 1048576).toFixed(1)} MB)`);
}
const modelos = readdirSync(MODELS).filter(f => f.toLowerCase().endsWith('.glb')).map(f => f.slice(0, -4)).sort();
writeFileSync(join(MODELS, 'modelos.json'), JSON.stringify({ modelos }, null, 2) + '\n');
console.log(`models/modelos.json: ${modelos.length} modelo(s) → ${modelos.join(', ') || '(ninguno)'}`);
