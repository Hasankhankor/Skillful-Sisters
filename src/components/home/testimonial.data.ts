import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Detailed learning materials',
    content:
      'Classes that provide very detailed material in terms of making UI/UX Design, starting from making low and high quality, system designs, using data layout, and creating prototypes and testing.',
    description:
      'This course provides thorough knowledge on designing user interfaces and user experiences, including prototypes and testing methods.',
    user: {
      id: 1,
      name: 'Ahmed Khan',
      professional: 'UI/UX Engineer',
      photo: '1.jpg',
    },
  },
  {
    id: 2,
    title: 'Best Quality Online Course!',
    content:
      'This course helped me develop a deep understanding of both front-end and back-end technologies. The lessons are well-structured and easy to follow, providing hands-on experience in the process of creating professional-grade software.',
    description: 'A high-quality online course that provides comprehensive lessons and learning materials.',
    user: {
      id: 1,
      name: 'Sara Ali',
      professional: 'Software Engineer',
      photo: '2.jpg',
    },
  },
  {
    id: 3,
    title: 'Very complete class',
    content:
      'The course was incredibly thorough, covering all aspects of full-stack development. The assignments helped solidify my understanding, and the projects were particularly valuable in giving real-world context to the concepts.',
    description:
      'A class that offers all the essential elements for mastering full-stack development, covering both front-end and back-end.',
    user: {
      id: 1,
      name: 'Bilal Ahmed',
      professional: 'FullStack Designer',
      photo: '3.jpg',
    },
  },
  {
    id: 4,
    title: 'Great Quality!',
    content:
      'I really enjoyed this course. The instructors were very knowledgeable, and the lessons were delivered in a clear and engaging manner. I gained valuable insights into SEO practices that I could immediately apply in my work.',
    description: 'This course ensures high-quality learning with effective strategies to achieve outstanding results.',
    user: {
      id: 1,
      name: 'Ayesha Khan',
      professional: 'SEO Expert',
      photo: '4.jpg',
    },
  },
  {
    id: 5,
    title: 'Detailed learning materials',
    content:
      'The material provided was detailed and easy to understand. I particularly liked how the course covered the end-to-end process of creating and testing UI/UX designs, from wireframing to usability testing.',
    description:
      'Provides in-depth knowledge for designing UI/UX, creating prototypes, and testing them to ensure the best user experience.',
    user: {
      id: 1,
      name: 'Omar Farooq',
      professional: 'Back-End Developer',
      photo: '5.jpg',
    },
  },
]
