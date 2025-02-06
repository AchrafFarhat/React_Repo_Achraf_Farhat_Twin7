import { useState } from "react";

export default function NotesManager({ initialNotes = [] }) {
  const [notes, setNotes] = useState(initialNotes);
  const [newNote, setNewNote] = useState("");

  const addNote = () => {
    const noteValue = parseFloat(newNote);
    if (!isNaN(noteValue) && noteValue >= 0 && noteValue <= 20) {
      setNotes([...notes, noteValue]);
      setNewNote("");
    } else {
      alert("Veuillez entrer une note valide entre 0 et 20.");
    }
  };

  const removeNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const average = notes.length
    ? (notes.reduce((sum, note) => sum + note, 0) / notes.length).toFixed(2)
    : "N/A";

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg w-96 mx-auto">
      <h2 className="text-xl font-bold mb-4">Gestionnaire de Notes</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="number"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="Ajouter une note (0-20)"
        />
        <button onClick={addNote} className="bg-blue-500 text-white p-2 rounded">
          Ajouter
        </button>
      </div>
      <ul className="mb-4">
        {notes.map((note, index) => (
          <li key={index} className="flex justify-between p-2 bg-gray-100 rounded mb-2">
            {note}
            <button
              onClick={() => removeNote(index)}
              className="text-red-500 hover:text-red-700"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
      <p className="font-bold">Moyenne: {average}</p>
    </div>
  );
}


