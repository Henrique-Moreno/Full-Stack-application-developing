import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

import { CreateCustomeController } from './controller/CreateCustomeController';
import { ListCustomersController } from './controller/ListCustomersController';
import { DeleteCustomerController } from './controller/DeleteCustomerController';

export async function routes(fastify: FastifyInstance) {

  fastify.post('/customer', async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateCustomeController().handle(request, reply);
  });

  fastify.get('/customers', async (request: FastifyRequest, reply: FastifyReply) => {
    return new ListCustomersController().handle(request, reply);
  });

  fastify.delete('/customer', async (request: FastifyRequest, reply: FastifyReply) => {
    return new DeleteCustomerController().handle(request, reply);
  });
}