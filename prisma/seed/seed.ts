import { PrismaClient } from '@prisma/client';

import { applicationStatusList, roles } from './constants';

const prisma = new PrismaClient();

(async () => {
  const rolesToInsert = roles.map((role) => ({ role }));
  const applicationStatusListToInsert = applicationStatusList.map((status) => ({
    status,
  }));

  await prisma.role.createMany({ data: rolesToInsert });
  await prisma.applicationStatus.createMany({
    data: applicationStatusListToInsert,
  });
})()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
