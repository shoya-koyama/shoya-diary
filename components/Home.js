import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore";

const ClientSideComponent = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(collection(db, 'articles'));
      const articlesData = [];
      querySnapshot.forEach((doc) => {
        articlesData.push({
          id: doc.id,
          ...doc.data()
        });
      });
      setArticles(articlesData);
    })();
  }, []);

  return (
    <div>
      {articles.map(article => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ClientSideComponent;
