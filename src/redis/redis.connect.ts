// src/redisClient.js
import { createClient } from 'redis';
import type { IRedisDB } from './types.js';

// ---

// Crear cliente
const redis = createClient({
  socket: {
    host: '127.0.0.1', // Dirección del servidor Redis
    port: 6379         // Puerto por defecto
  },
  // password: 'tu_password_opcional', // Solo si tu Redis tiene auth
});

// Manejo de eventos
redis.on('connect', () => {
  console.log('🔌 Connecting Redis...');
});

redis.on('ready', () => {
  console.log('✅ Conneted to Redis');
});

redis.on('error', (err) => {
  console.error('❌ Redis connection error:', err);
});

redis.on('end', () => {
  console.log('👋 Conexión cerrada con Redis.');
});

// Conectar
export async function redisConnect() {
  if (!redis.isOpen) await redis.connect();
  return redis as IRedisDB;
}
