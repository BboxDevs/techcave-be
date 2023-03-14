import PrismaService from '@/services/prisma';

export const welcome = () => {
  return { message: 'Welcome to TECHCAVE' };
};

export const roles = async () => {
  return await PrismaService.roles.getRoles();
};

export const applicationStatuses = async () => {
  return await PrismaService.applicationStatuses.getStatuses();
};
