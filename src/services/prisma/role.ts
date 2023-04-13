import { Prisma, PrismaClient } from '@prisma/client';

export default class RoleService {
  #role: Prisma.RoleDelegate<
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >;
  constructor(prisma: PrismaClient) {
    this.#role = prisma.role;
  }

  async getRoles() {
    return await this.#role.findMany();
  }
}
