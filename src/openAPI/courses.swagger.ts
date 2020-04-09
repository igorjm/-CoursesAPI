export const getCourses = {
  tags: ['Courses'],
  description: 'Returns all courses from the ',
  operationId: 'getCourse',
  responses: {
    '200': {
      description: 'A list of courses.',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              course_title: {
                type: 'string',
                description: 'Course Title',
              },
              course_description: {
                type: 'string',
                description: 'Course Description',
              },
              course_hours: {
                type: 'string',
                description: 'Course Workload',
              },
              course_value: {
                type: 'string',
                description: 'Course Value',
              },
            },
          },
        },
      },
    },
  },
};
