import request from './helpers/supertest.helper';
import { createToken, fakeCoursePayload } from './helpers/supertest.helper';

describe('Course module', () => {
  let courseId: string;

  it('COACH can create a course', async () => {
    const token = createToken('coach1', 'COACH');
    const payload = fakeCoursePayload();
    const res = await request.post('/courses').set('Authorization', `Bearer ${token}`).send(payload).expect(201);
    expect(res.body.title).toBe(payload.title);
    courseId = res.body.id;
  });

  it('returns all courses', async () => {
    const res = await request.get('/courses').expect(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('returns 400 on invalid course', async () => {
    const token = createToken('coach1', 'COACH');
    const res = await request.post('/courses').set('Authorization', `Bearer ${token}`).send({}).expect(400);
    expect(res.body).toHaveProperty('errors');
  });
});
