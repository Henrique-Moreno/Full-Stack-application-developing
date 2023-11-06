import { FastifyReply, FastifyRequest } from 'fastify';
import { CreateCustomeService } from '../services/CreateCustomeService';

export class CreateCustomeController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, email } = request.body as { name: string, email: string };

    const customerService = new CreateCustomeService();

    const customer = await customerService.execute({ name, email });

    reply.send(customer);
  }
}

