# Hermon Data — site institucional (1 página) com QR Code

Este é um site estático (HTML/CSS/JS) com visual "imponente" e cartões de contato com QR code (WhatsApp, LinkedIn e e-mail).

## 1) Personalizar links (essencial)
Abra `index.html` e edite os atributos dentro de `#contactGrid`:

- `data-whatsapp="https://wa.me/55DDDNUMERO?..."`
- `data-linkedin="https://www.linkedin.com/company/.../"`
- `data-email="mailto:contato@...?"`

> Dica: o WhatsApp usa o formato **55 + DDD + número** (sem espaços).

## 2) Atualizar os QR codes (opcional, recomendado)
Os QR codes atuais são *placeholders* e ficam em `assets/qr-*.png`.

Se você tiver Python instalado, rode:

```bash
python generate_qr.py
```

Isso recria:
- assets/qr-whatsapp.png
- assets/qr-linkedin.png
- assets/qr-email.png

## 3) Publicar de graça (opções)
Você pode hospedar **gratuitamente** (site estático) em:
- GitHub Pages
- Cloudflare Pages
- Netlify
- Vercel

Em todos, basta subir os arquivos do projeto (incluindo `assets/`).

## 4) Domínio próprio
Para ficar profissional, você pode apontar seu domínio (ex.: hermondata.com.br) para a hospedagem escolhida. Normalmente o custo é só do domínio.

---

Se quiser, você pode adicionar:
- seção "Cases"
- formulário (via serviço externo)
- integração com Google Analytics / Tag Manager
