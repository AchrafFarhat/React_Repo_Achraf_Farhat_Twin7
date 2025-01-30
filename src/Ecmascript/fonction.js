// Fonction de recherche par ID
export const searchById = (array, id) => {
    return array.find(item => item.id === id) || null; // Trouver l'objet avec l'ID correspondant
  };
  