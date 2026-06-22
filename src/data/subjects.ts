import { Subject } from "../types";

export const mockSubjects: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description:
      "A foundational course covering core programming concepts, algorithms, and problem-solving using Python.",
    createdAt: "2024-01-15T09:00:00Z",
  },
  {
    id: 2,
    code: "MATH201",
    name: "Calculus II",
    department: "Mathematics",
    description:
      "Continuation of Calculus I, exploring integral techniques, sequences, series, and introductory multivariable calculus.",
    createdAt: "2024-01-15T09:00:00Z",
  },
  {
    id: 3,
    code: "PHYS110",
    name: "Physics: Mechanics and Thermodynamics",
    department: "Physics",
    description:
      "An introductory course covering classical mechanics, Newton's laws, energy, momentum, and the fundamentals of thermodynamics.",
    createdAt: "2024-01-15T09:00:00Z",
  },
];
