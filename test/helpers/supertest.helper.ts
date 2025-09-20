import request from 'supertest';
import jwt from 'jsonwebtoken';
import faker from 'faker';
import app from '../../../app';

const JWT_SECRET = process.env.JWT_SECRET || 'test-secret';

export type Role = 'ADMIN' | 'COACH' | 'STUDENT';

export function createToken(userId: string, role: Role) {
  return jwt.sign({ sub: userId, role }, JWT_SECRET, { expiresIn: '1h' });
}

export function fakeCoursePayload(overrides: Partial<any> = {}) {
  return {
    title: faker.lorem.words(3),
    description: faker.lorem.sentences(2),
    price: Number(faker.commerce.price(0, 500, 0)),
    durationWeeks: faker.datatype.number({ min: 1, max: 52 }),
    tags: [faker.lorem.word(), faker.lorem.word()],
    ...overrides,
  };
}

export default request(app);
