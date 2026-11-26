export const mockRecipes = [
  {
    id: 1,
    recipeUrl: '/recipe/1',
    imgSrc: '/tomato-pasta.jpg',
    altText: 'poza reteta',
    recipeTitle: 'Roasted tomato & basil pasta',
    recipeText:
      'Sweet, blistered tomatoes, a handful of basil and your favorite pasta. A simple bowl of comfort, ready in half an hour.',
    recipeAuthor: 'Maya Chen',
    recipePrepTime: '10 mins',
    recipeCookingTime: '30 mins',
    recipeServings: '2 servings',
    recipeCategories: ['Vegetarian', 'Easy'],
    recipeIngredients: [
      { id: 1, quantity: 200, quantityType: 'g', quantityName: 'rigatoni' },
      { id: 2, quantity: 400, quantityType: 'g', quantityName: 'tomatoes' },
      { id: 3, quantity: 2, quantityType: 'tbsp', quantityName: 'oil' },
      { id: 4, quantity: 1 / 2, quantityType: 'tsp', quantityName: 'salt' },
      { id: 5, quantity: 1 / 4, quantityType: 'tsp', quantityName: 'pepper' },
      { id: 6, quantity: 2, quantityType: '', quantityName: 'garlic cloves' },
    ],
    recipeInstructionSteps: [
      {
        id: 1,
        instructionHeading: 'Roast tomatoes',
        instruction:
          'Heat the oven to 200°C. Toss tomatoes, garlic and olive oil in a baking dish. Roast for 20 minutes until soft and blistered.',
      },
      {
        id: 2,
        instructionHeading: 'Cook the pasta',
        instruction:
          'Bring a large pot of salted water to a boil. Cook rigatoni according to the pack, about 10 minutes. Reserve 100 ml pasta water, then drain.',
      },
      {
        id: 3,
        instructionHeading: 'Bring it together',
        instruction:
          'Crush the roasted tomatoes with a fork. Toss with the pasta and a splash of reserved water until glossy. Season with salt and pepper.',
      },
      {
        id: 4,
        instructionHeading: 'Finish & enjoy',
        instruction:
          'Tear over the basil and add grated parmesan. Divide between two bowls and serve while warm.',
      },
    ],
  },
  {
    id: 2,
    recipeUrl: '/recipe/2',
    imgSrc: '/poza-hero.jpg',
    altText: 'Shrimp salad with fresh vegetables',
    recipeTitle: 'Shrimp Salad',
    recipeText:
      'Juicy garlic shrimp, crisp lettuce, creamy avocado and fresh cherry tomatoes, tossed in a light lemon dressing. A fresh and delicious meal ready in just 20 minutes.',
    recipeAuthor: 'Maya Chen',
    recipePrepTime: '10 mins',
    recipeCookingTime: '10 mins',
    recipeServings: '2 servings',
    recipeCategories: ['Seafood', 'Healthy', 'Easy'],
    recipeIngredients: [
      {
        id: 1,
        quantity: 200,
        quantityType: 'g',
        quantityName: 'peeled shrimp',
      },
      { id: 2, quantity: 100, quantityType: 'g', quantityName: 'lettuce' },
      {
        id: 3,
        quantity: 150,
        quantityType: 'g',
        quantityName: 'cherry tomatoes',
      },
      { id: 4, quantity: 1, quantityType: '', quantityName: 'avocado' },
      { id: 5, quantity: 1, quantityType: '', quantityName: 'garlic clove' },
      { id: 6, quantity: 2, quantityType: 'tbsp', quantityName: 'olive oil' },
      { id: 7, quantity: 1, quantityType: '', quantityName: 'lemon' },
      { id: 8, quantity: 1, quantityType: 'pinch', quantityName: 'salt' },
      {
        id: 9,
        quantity: 1,
        quantityType: 'pinch',
        quantityName: 'black pepper',
      },
    ],
    recipeInstructionSteps: [
      {
        id: 1,
        instructionHeading: 'Prepare the shrimp',
        instruction:
          'Pat the shrimp dry with a paper towel. Season with salt, pepper and minced garlic.',
      },
      {
        id: 2,
        instructionHeading: 'Cook the shrimp',
        instruction:
          'Heat one tablespoon of olive oil in a pan over medium heat. Cook the shrimp for 2–3 minutes on each side until pink and fully cooked.',
      },
      {
        id: 3,
        instructionHeading: 'Prepare the vegetables',
        instruction:
          'Wash and chop the lettuce. Cut the cherry tomatoes in half and slice the avocado.',
      },
      {
        id: 4,
        instructionHeading: 'Make the dressing',
        instruction:
          'In a small bowl, mix the remaining olive oil with fresh lemon juice, salt and pepper.',
      },
      {
        id: 5,
        instructionHeading: 'Assemble the salad',
        instruction:
          'Place the lettuce, tomatoes and avocado in a large bowl. Add the cooked shrimp and drizzle with the lemon dressing. Toss gently and serve fresh.',
      },
    ],
  },
  {
    id: 3,
    recipeUrl: '/recipe/3',
    imgSrc: '/mushroom-pasta.jpg',
    altText: 'Creamy mushroom pasta in a bowl',
    recipeTitle: 'Creamy Mushroom Pasta',
    recipeText:
      'Tender mushrooms, garlic and silky cream sauce come together with your favourite pasta. A comforting and flavourful dinner that is easy to make in just 25 minutes.',
    recipeAuthor: 'Maya Chen',
    recipePrepTime: '10 mins',
    recipeCookingTime: '15 mins',
    recipeServings: '2 servings',
    recipeCategories: ['Vegetarian', 'Comfort Food', 'Easy'],
    recipeIngredients: [
      {
        id: 1,
        quantity: 200,
        quantityType: 'g',
        quantityName: 'fettuccine pasta',
      },
      { id: 2, quantity: 200, quantityType: 'g', quantityName: 'mushrooms' },
      { id: 3, quantity: 150, quantityType: 'ml', quantityName: 'heavy cream' },
      { id: 4, quantity: 2, quantityType: '', quantityName: 'garlic cloves' },
      { id: 5, quantity: 1, quantityType: 'tbsp', quantityName: 'butter' },
      { id: 6, quantity: 2, quantityType: 'tbsp', quantityName: 'olive oil' },
      {
        id: 7,
        quantity: 30,
        quantityType: 'g',
        quantityName: 'grated parmesan',
      },
      { id: 8, quantity: 1, quantityType: 'pinch', quantityName: 'salt' },
      {
        id: 9,
        quantity: 1,
        quantityType: 'pinch',
        quantityName: 'black pepper',
      },
      {
        id: 10,
        quantity: 1,
        quantityType: 'tbsp',
        quantityName: 'fresh parsley',
      },
    ],
    recipeInstructionSteps: [
      {
        id: 1,
        instructionHeading: 'Cook the pasta',
        instruction:
          'Bring a large pot of salted water to a boil. Cook the fettuccine according to the package instructions until al dente. Reserve a little pasta water before draining.',
      },
      {
        id: 2,
        instructionHeading: 'Prepare the mushrooms',
        instruction:
          'Clean and slice the mushrooms. Heat olive oil and butter in a large pan over medium heat. Add the mushrooms and cook for 5–6 minutes until golden.',
      },
      {
        id: 3,
        instructionHeading: 'Make the creamy sauce',
        instruction:
          'Add the minced garlic to the mushrooms and cook for another minute. Pour in the heavy cream, season with salt and pepper, and stir gently.',
      },
      {
        id: 4,
        instructionHeading: 'Combine with pasta',
        instruction:
          'Add the cooked pasta to the pan. Mix everything together until the pasta is coated in the creamy mushroom sauce. Add a splash of reserved pasta water if needed.',
      },
      {
        id: 5,
        instructionHeading: 'Finish & enjoy',
        instruction:
          'Stir in the grated parmesan and sprinkle with fresh parsley. Serve immediately while warm.',
      },
    ],
  },
];
