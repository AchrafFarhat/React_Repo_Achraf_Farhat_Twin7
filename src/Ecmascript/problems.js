// Problème 1 : Trouver le mot le plus long
export const findLongestWord = (wordsArray) => {
    let [words] = [wordsArray]; // Déstructuration du tableau
    let wordObjects = words.map(word => ({ word, length: word.length })); // Créer un tableau d'objets
  
    return wordObjects.reduce((longest, current) =>
      current.length > longest.length ? current : longest
    ); // Trouver l'objet avec la plus grande propriété "length"
  };
  
  console.log(findLongestWord(["apple", "banana", "watermelon", "strawberry"]));
  // Output : { word: 'strawberry', length: 10 }
  
  // ------------------------------------------------------
  
  // Problème 2 : Compter les occurrences d'éléments distincts
  export const countOccurrences = (array) => {
    return array
      .flat() // Aplatir le tableau
      .reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1; // Compter les occurrences
        return acc;
      }, {});
  };
  
  console.log(
    countOccurrences([
      ["apple", "banana"],
      ["apple", "orange"],
      ["banana", "apple"],
    ])
  );
  // Output : { apple: 3, banana: 2, orange: 1 }
  
  // ------------------------------------------------------
  
  // Problème 3 : Calculer le total des notes avec bonus
  export const calculateTotal = (grades) => {
    return grades
      .map(grade => (grade < 50 ? grade + 15 : grade)) // Ajouter un bonus
      .filter(grade => grade > 50) // Filtrer les notes > 50
      .reduce((total, grade) => total + grade, 0); // Calculer la somme
  };
  
  console.log(calculateTotal([30, 45, 60, 70, 20]));
  // Output : 185
  
  // ------------------------------------------------------
  
  // Problème 4 : Création et manipulation de tableau d'objets
  let lastID = 0; // Variable globale pour l'ID
  
  export const Tab = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
  ];
  
  // Ajouter une propriété ID à chaque objet
  Tab.forEach(item => {
    item.id = ++lastID;
  });
  
  // Ajouter de nouvelles entrées
  Tab.push({ name: "Charlie", age: 35, id: ++lastID });
  Tab.unshift({ name: "Diana", age: 28, id: ++lastID });
  
  console.log(Tab);
  // Output : Tableau d'objets avec IDs
  