# 📚 GUIA COMPLETO - App Bandeirantes

## 🎯 Índice
1. [Download](#download)
2. [Instalação](#instalação)
3. [Como Usar](#como-usar)
4. [Estrutura](#estrutura)
5. [API](#api)
6. [Troubleshooting](#troubleshooting)

---

## 📥 Download

### Opção 1: ZIP (Recomendado para Iniciantes)
```
https://github.com/ziCKa171/bandeirantes/archive/refs/heads/main.zip
```
1. Baixe o arquivo ZIP
2. Descompacte em uma pasta
3. Abra a pasta "bandeirantes"
4. Siga para a instalação

### Opção 2: Git Clone (Recomendado para Devs)
```bash
git clone https://github.com/ziCKa171/bandeirantes.git
cd bandeirantes
```

### Opção 3: GitHub Desktop
1. Abra https://github.com/ziCKa171/bandeirantes
2. Clique em "Code" → "Open with GitHub Desktop"
3. Clone para sua máquina

---

## 🛠️ Instalação

### Pré-requisitos
- Node.js 16+ ([Download](https://nodejs.org))
- Git ([Download](https://git-scm.com))
- Expo CLI: `npm install -g expo-cli`

### Setup Rápido (3 minutos)

```bash
# 1. Entre na pasta mobile
cd mobile

# 2. Instale dependências
npm install

# 3. Inicie o app
npx expo start

# 4. Escaneie o QR code com seu celular
```

### Setup Completo (Desenvolvimento)

**Terminal 1 - Backend**
```bash
cd backend
npm install
cp .env.example .env
# Edite .env com suas configurações
npm run dev
# Acesso: http://localhost:5000
```

**Terminal 2 - Mobile**
```bash
cd mobile
npm install
npx expo start
# Escaneie o QR code
```

**Terminal 3 - Admin**
```bash
cd admin-dashboard
npm install
npm start
# Acesso: http://localhost:3000
```

---

## 📱 Como Usar

### App Mobile (Cliente)

1. **Faça Login**
   - Email: cliente@bandeirantes.com
   - Senha: 123456

2. **Faça um Pedido**
   - Clique em "Novo Pedido"
   - Selecione Água ou Gás
   - Defina quantidade
   - Escolha método de pagamento
   - Confirme

3. **Acompanhe a Entrega**
   - Vá para "Rastreamento"
   - Veja o motorista em tempo real
   - Receba notificações

### Admin Dashboard

1. **Acesse**
   - URL: http://localhost:3000
   - Email: admin@bandeirantes.com
   - Senha: admin123

2. **Gerencias Pedidos**
   - Veja todos os pedidos
   - Confirme ou rejeite
   - Atribua motoristas

3. **Analise Vendas**
   - Gráficos de receita
   - Clientes mais ativos
   - Produtos mais vendidos

---

## 🏗️ Estrutura

```
bandeirantes/
├── mobile/                    # App React Native
│   ├── App.js
│   ├── package.json
│   └── screens/
│       ├── auth/
│       ├── home/
│       ├── pedidos/
│       └── rastreamento/
│
├── backend/                   # Servidor Node.js
│   ├── server.js
│   ├── package.json
│   ├── models/
│   │   ├── Usuario.js
│   │   ├── Pedido.js
│   │   └── Entrega.js
│   └── routes/
│       ├── auth.js
│       └── pedidos.js
│
├── admin-dashboard/           # Dashboard React
│   ├── package.json
│   └── src/
│       └── pages/
│           └── Dashboard.js
│
└── docs/
    ├── REGRAS_NEGOCIO.md
    └── ACESSO_LINKS.md
```

---

## 🌐 API

### Autenticação
```
POST /api/auth/registro
POST /api/auth/login
GET  /api/auth/verificar
```

### Pedidos
```
POST   /api/pedidos              # Criar
GET    /api/pedidos              # Listar
GET    /api/pedidos/:id          # Detalhes
PUT    /api/pedidos/:id/status   # Atualizar
DELETE /api/pedidos/:id          # Cancelar
```

### Entregas
```
GET  /api/entregas              # Listar
GET  /api/entregas/:id          # Detalhes
POST /api/entregas/:id/gps      # Atualizar GPS
```

---

## 🆘 Troubleshooting

### Problema: Porta 5000 em uso
**Solução**:
```bash
PORT=5001 npm run dev
```

### Problema: Dependências não instaladas
**Solução**:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Problema: QR code não aparece
**Solução**:
```bash
npx expo start --tunnel
```

### Problema: MongoDB não conecta
**Solução**:
1. Instale MongoDB localmente ou
2. Use MongoDB Atlas (nuvem)
3. Configure a URL em `.env`

### Problema: Erro de CORS
**Solução**: Verifique se o backend está rodando em http://localhost:5000

---

## 📞 Suporte

- **GitHub Issues**: https://github.com/ziCKa171/bandeirantes/issues
- **Discussões**: https://github.com/ziCKa171/bandeirantes/discussions
- **Email**: Adicione seu email aqui

---

## ✅ Checklist Final

- [ ] Node.js 16+ instalado
- [ ] Git instalado
- [ ] Repositório clonado
- [ ] npm install executado
- [ ] Backend iniciado (npm run dev)
- [ ] Mobile iniciado (npx expo start)
- [ ] QR code escaneado
- [ ] App abrindo no celular
- [ ] Login funciona
- [ ] Pode fazer pedido

---

**Desenvolvido com ❤️ para Bandeirantes**