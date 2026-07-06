# 🚀 Guia de Deployment

## Publicar o App em Produção

### 1. App Store (iOS)

```bash
# Build para iOS
cd mobile
eas build --platform ios

# Submeter para App Store
eas submit --platform ios
```

### 2. Google Play (Android)

```bash
# Build para Android
cd mobile
eas build --platform android

# Submeter para Google Play
eas submit --platform android
```

### 3. Backend em Servidor

```bash
# Deploy no Heroku
cd backend
heroku create bandeirantes-api
git push heroku main

# Ou no DigitalOcean/AWS
# Configure as variáveis de ambiente
# Execute: npm run dev
```

### 4. Admin Dashboard

```bash
# Build para produção
cd admin-dashboard
npm run build

# Deploy no Vercel/Netlify/GitHub Pages
```

---

**Status**: Pronto para produção