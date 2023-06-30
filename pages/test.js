// pages/dictionary.js
import { useEffect, useState } from 'react';
import firebase from 'firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { store } from '../backend/firebase';

const Dictionary = () => {
  const [newWord, setNewWord] = useState('');
  const [articleTitle, setArticleTitle] = useState([{ type: '', meaning: '' }]);
  const wordsRef = store.collection('articles');
  const [words] = useCollectionData(wordsRef, { idField: 'id' });

  const handleAddWord = async (e) => {
    e.preventDefault();

    if (newWord.trim() === '') {
      return;
    }

    try {
      await wordsRef.add({
        word: newWord,
        articleTitle,
      });

      setNewWord('');
      setArticleTitle([{ type: '', meaning: '' }]);
    } catch (error) {
      console.error('Error adding word: ', error);
    }
  };

  const handleMeaningChange = (index, e) => {
    const updatedMeanings = [...articleTitle];
    updatedMeanings[index][e.target.name] = e.target.value;
    setArticleTitle(updatedMeanings);
  };

  const addMeaning = () => {
    setArticleTitle([...articleTitle, { type: '', meaning: '' }]);
  };

  const removeMeaning = (index) => {
    const updatedMeanings = [...articleTitle];
    updatedMeanings.splice(index, 1);
    setArticleTitle(updatedMeanings);
  };

  return (
    <div>
      <h1>Dictionary</h1>
      <form onSubmit={handleAddWord}>
        <input
          type="text"
          value={newWord}
          onChange={(e) => setNewWord(e.target.value)}
        />
        <h3>Meanings</h3>
        {articleTitle.map((meaning, index) => (
          <div key={index}>
            <input
              type="text"
              name="type"
              placeholder="Type"
              value={meaning.type}
              onChange={(e) => handleMeaningChange(index, e)}
            />
            <input
              type="text"
              name="meaning"
              placeholder="Meaning"
              value={meaning.meaning}
              onChange={(e) => handleMeaningChange(index, e)}
            />
            <button type="button" onClick={() => removeMeaning(index)}>
              Remove Meaning
            </button>
          </div>
        ))}
        <button type="button" onClick={addMeaning}>
          Add Meaning
        </button>
        <button type="submit">Add Word</button>
      </form>
      <ul>
        {words &&
          words.map((word) => (
            <li key={word.id}>
              {word.word}
              <ul>
                {word.articleTitle.map((meaning, index) => (
                  <li key={index}>
                    {meaning.type}: {meaning.meaning}
                  </li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Dictionary;
