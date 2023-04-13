import { Prisma, PrismaClient } from '@prisma/client';

export default class ApplicationStatusService {
  #applicationStatus: Prisma.ApplicationStatusDelegate<
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >;
  constructor(prisma: PrismaClient) {
    this.#applicationStatus = prisma.applicationStatus;
  }

  async getStatuses() {
    return await this.#applicationStatus.findMany();
  }
}
