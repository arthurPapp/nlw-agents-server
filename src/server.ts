import { fastify } from 'fastify';
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider
} from 'fastify-type-provider-zod';
import { fastifyCors } from '@fastify/cors';
import { env } from './env.ts';
import { getRoomsRoute } from './http/routes/get-rooms.ts';
import { createRoomRoute } from './http/routes/create-room.ts';
import { getRoomsQuestionsRoute } from './http/routes/get-rooms-questions.ts';
import { createQuestionRoute } from './http/routes/create-questions.ts';

const app = fastify().withTypeProvider<ZodTypeProvider>();

// app.register(fastifyCors, {
//   origin: 'http://localhost:5173',
// })

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get('/health-check', () => {
  return 'OK';
})

app.register(getRoomsRoute);
app.register(getRoomsQuestionsRoute);
app.register(createRoomRoute);
app.register(createQuestionRoute);

app.listen({ port: env.PORT })