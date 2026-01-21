"""Gera QR codes a partir dos links definidos em index.html (data-* do #contactGrid).

Uso:
  python generate_qr.py

Requisitos:
  pip install qrcode[pil]
"""

from __future__ import annotations
import re
from pathlib import Path

try:
    import qrcode
except Exception as e:
    raise SystemExit("Dependência ausente. Instale com: pip install qrcode[pil]") from e

ROOT = Path(__file__).resolve().parent
INDEX = ROOT / "index.html"
ASSETS = ROOT / "assets"

html = INDEX.read_text(encoding="utf-8")

def get_attr(name: str) -> str:
    m = re.search(rf'data-{name}="([^"]+)"', html)
    if not m:
        raise ValueError(f"Não encontrei data-{name} em index.html")
    return m.group(1)

data = {
    "whatsapp": get_attr("whatsapp"),
    "linkedin": get_attr("linkedin"),
    "email": get_attr("email"),
}

ASSETS.mkdir(exist_ok=True)

for k, v in data.items():
    img = qrcode.make(v)
    out = ASSETS / f"qr-{k}.png"
    img.save(out)
    print("OK:", out)
