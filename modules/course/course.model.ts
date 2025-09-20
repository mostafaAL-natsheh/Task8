export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  durationWeeks: number;
  tags?: string[];
}
