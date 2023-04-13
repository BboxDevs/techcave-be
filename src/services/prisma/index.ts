import { PrismaClient } from '@prisma/client';

import ApplicationStatusService from './applicationStatus';
import RoleService from './role';

class PrismaService {
  #prisma: PrismaClient;
  readonly roles: RoleService;
  readonly applicationStatuses;

  constructor(prisma: PrismaClient) {
    this.#prisma = prisma;
    this.roles = new RoleService(prisma);
    this.applicationStatuses = new ApplicationStatusService(prisma);
  }
}

export default new PrismaService(new PrismaClient());
