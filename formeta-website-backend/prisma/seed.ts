import { PrismaClient } from '../src/generated/prisma';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Limpiar datos existentes
  await prisma.contact.deleteMany();
  await prisma.user.deleteMany();

  // Crear usuarios iniciales
  const adminPassword = await bcrypt.hash('admin123', 10);
  const userPassword = await bcrypt.hash('user123', 10);

  const admin = await prisma.user.create({
    data: {
      email: 'admin@formeta.es',
      name: 'Administrador',
      password: adminPassword,
      role: 'ADMIN',
    },
  });

  const user = await prisma.user.create({
    data: {
      email: 'user@formeta.es',
      name: 'Usuario Normal',
      password: userPassword,
      role: 'USER',
    },
  });

  console.log('✅ Admin user created:', { id: admin.id, email: admin.email, role: admin.role });
  console.log('✅ Regular user created:', { id: user.id, email: user.email, role: user.role });

  // Crear algunos contactos de ejemplo
  const contacts = await prisma.contact.createMany({
    data: [
      {
        name: 'Juan Pérez',
        email: 'juan@empresa.com',
        company: 'Empresa Demo',
        position: 'CEO',
        service: 'verifactu',
        message: 'Necesitamos implementar VeriFactu urgentemente',
        gdprConsent: true,
        priority: 'urgent',
      },
      {
        name: 'María García',
        email: 'maria@tech.com',
        company: 'Tech Solutions',
        position: 'CTO',
        service: 'ia-local',
        message: 'Interesados en soluciones de IA local',
        gdprConsent: true,
        priority: 'normal',
      },
      {
        name: 'Carlos López',
        email: 'carlos@startup.com',
        company: 'Startup ABC',
        position: 'Founder',
        service: 'web-development',
        message: 'Necesitamos desarrollar nuestra plataforma web',
        gdprConsent: true,
        priority: 'normal',
      },
    ],
  });

  console.log(`✅ ${contacts.count} sample contacts created`);
  console.log('🎉 Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
