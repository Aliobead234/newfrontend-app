export interface Category {
  id: string;
  name: string;
  image: string;
  type?: "topic" | "root" | "level";
  wordCount?: number;
}

export const categories: Category[] = [
  {
    id: "greetings",
    name: "Greetings",
    image: "https://images.unsplash.com/photo-1719561940725-29801ebd2358?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    type: "topic",
    wordCount: 24,
  },
  {
    id: "food",
    name: "Food",
    image: "https://images.unsplash.com/photo-1746274394124-141a1d1c5af3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    type: "topic",
    wordCount: 38,
  },
  {
    id: "family",
    name: "Family",
    image: "https://images.unsplash.com/photo-1579538506280-84e461ad0077?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    type: "topic",
    wordCount: 18,
  },
  {
    id: "travel",
    name: "Travel",
    image: "https://images.unsplash.com/photo-1663017225895-61cfe42309ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    type: "topic",
    wordCount: 42,
  },
  {
    id: "emotions",
    name: "Emotions",
    image: "https://images.unsplash.com/photo-1706403573619-0efa006b058b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    type: "topic",
    wordCount: 30,
  },
  {
    id: "body",
    name: "Body",
    image: "https://images.unsplash.com/photo-1636892909247-8357a029ce91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    type: "topic",
    wordCount: 26,
  },
  {
    id: "root-ktb",
    name: "ك-ت-ب (write)",
    image: "https://images.unsplash.com/photo-1617975609658-2de247badd36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    type: "root",
    wordCount: 12,
  },
  {
    id: "root-drb",
    name: "د-ر-س (study)",
    image: "https://images.unsplash.com/photo-1583525957866-ea1cdcb4f46a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    type: "root",
    wordCount: 10,
  },
];

export interface Word {
  id: string;
  word: string;
  translation: string;
  definition: string;
  category?: string;
}

export const words: Word[] = [
  { id: "w1", word: "مرحبا", translation: "Hello", definition: "A greeting used when meeting someone", category: "greetings" },
  { id: "w2", word: "شكرًا", translation: "Thank you", definition: "An expression of gratitude", category: "greetings" },
  { id: "w3", word: "نعم", translation: "Yes", definition: "An affirmative response", category: "greetings" },
  { id: "w4", word: "لا", translation: "No", definition: "A negative response", category: "greetings" },
  { id: "w5", word: "ماء", translation: "Water", definition: "A clear liquid essential for life", category: "food" },
  { id: "w6", word: "خبز", translation: "Bread", definition: "A staple food made from flour and water", category: "food" },
  { id: "w7", word: "أب", translation: "Father", definition: "A male parent", category: "family" },
  { id: "w8", word: "أم", translation: "Mother", definition: "A female parent", category: "family" },
  { id: "w9", word: "بيت", translation: "House", definition: "A building for human habitation", category: "travel" },
  { id: "w10", word: "كتاب", translation: "Book", definition: "A written or printed work consisting of pages", category: "travel" },
  { id: "w11", word: "سعيد", translation: "Happy", definition: "Feeling or showing pleasure or contentment", category: "emotions" },
  { id: "w12", word: "حزين", translation: "Sad", definition: "Feeling sorrow or unhappiness", category: "emotions" },
  { id: "w13", word: "جميل", translation: "Beautiful", definition: "Pleasing the senses or mind aesthetically", category: "emotions" },
  { id: "w14", word: "كبير", translation: "Big", definition: "Of considerable size or extent", category: "body" },
  { id: "w15", word: "صغير", translation: "Small", definition: "Of a size that is less than normal", category: "body" },
];
