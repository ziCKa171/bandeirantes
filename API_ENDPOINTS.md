# 📡 Documentação da API

## Base URL
```
http://localhost:5000/api
```

## Autenticação
Todos os endpoints (exceto login/registro) requerem token JWT no header:
```
Authorization: Bearer {token}
```

## Endpoints

### Auth
```
POST /auth/registro
POST /auth/login
GET  /auth/verificar
```

### Pedidos
```
POST   /pedidos              # Criar pedido
GET    /pedidos              # Listar pedidos
GET    /pedidos/:id          # Ver pedido
PUT    /pedidos/:id/status   # Atualizar status
DELETE /pedidos/:id          # Cancelar
```

### Entregas
```
GET  /entregas              # Listar
GET  /entregas/:id          # Ver
POST /entregas/:id/gps      # Atualizar GPS
POST /entregas/:id/confirmar# Confirmar
```

### Usuários
```
GET  /usuarios/perfil       # Ver perfil
PUT  /usuarios/perfil       # Atualizar
```

---

**Versão**: 1.0.0