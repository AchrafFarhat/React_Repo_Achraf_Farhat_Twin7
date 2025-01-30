import React from "react";
import { findLongestWord, countOccurrences, calculateTotal, Tab } from "./problems.js";
import { searchById } from "./fonction.js";

const Test = () => {
  // Problème 1
  const words = ["apple", "banana", "strawberry", "watermelon"];
  const longestWordResult = findLongestWord(words);

  // Problème 2
  const inputArray = [
    ["apple", "banana"],
    ["apple", "orange"],
    ["banana", "apple"],
  ];
  const occurrencesResult = countOccurrences(inputArray);

  // Problème 3
  const grades = [30, 45, 60, 70, 20];
  const totalResult = calculateTotal(grades);

  // Problème 4
  const searchResult = searchById(Tab, 2);
  const searchNullResult = searchById(Tab, 999);

  return (
    <div>
      <h1>Résultats des Tests</h1>
      <h2>Problème 1</h2>
      <p>Mot le plus long : {JSON.stringify(longestWordResult)}</p>

      <h2>Problème 2</h2>
      <p>Occurrences : {JSON.stringify(occurrencesResult)}</p>

      <h2>Problème 3</h2>
      <p>Total des notes : {totalResult}</p>

      <h2>Problème 4</h2>
      <p>Recherche ID 2 : {JSON.stringify(searchResult)}</p>
      <p>Recherche ID 999 : {JSON.stringify(searchNullResult)}</p>
    </div>
  );
};

export default Test;
