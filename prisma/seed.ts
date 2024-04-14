import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        email: 'alice@prisma.com',
        password: 'password',
        provider: 'local',
        firstName: 'Alice',
        lastName: 'Prisma',
        role: 'user',
      },
      {
        email: 'bob@prisma.com',
        password: 'password',
        provider: 'local',
        firstName: 'Bob',
        lastName: 'Prisma',
        role: 'user',
      },
    ],
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
