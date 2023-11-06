import prismaClient from '../prisma';

interface CreateCustomeProps {
  name: string,
  email: string,
}

export class CreateCustomeService {
  async execute({name, email}: CreateCustomeProps) {

    if (!name || !email) {
      throw new Error('Preencha os campos');
    }

    const customer = await prismaClient.customer.create({
      data: {
        name,
        email,
        status: true
      }
    });

    return customer;
  }
}