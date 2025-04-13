export interface Guide {
  id: number;
  name: string;
  language: string;
  speciality  : string;
  experience: string;
  averageRating: string;
  availability: string;
  contact: string;
  photo?: string; // base64 string
  toString(): string;
}

// Implement the toString method




