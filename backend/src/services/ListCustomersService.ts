import prismaClient from '@/prisma';

export class ListCustomersService {
  async execute() {
    const customer = await prismaClient.customer.findMany();

    return customer;
  }
}