import app from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
  console.log(`📡 Salud del servidor: http://localhost:${PORT}/api/health`);
  console.log(`🔧 Entorno: ${process.env.NODE_ENV || 'development'}`);
});
