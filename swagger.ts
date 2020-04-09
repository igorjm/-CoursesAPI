import { getCourses } from './src/openAPI/courses.swagger';

export const swaggerDocument = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'Course API',
    description: 'API to use in ILOG Frontend Challenge',
    termsOfService: '',
    components: {
      schemas: {},
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'basic',
        },
      },
    },
    contact: {
      name: 'Igor Melo',
      email: 'igor.melo@ilog.com',
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    },
    tags: [
      {
        name: 'Coursesç',
      },
    ],
    paths: {
      '/courses': {
        get: getCourses,
      },
    },
  },
};
