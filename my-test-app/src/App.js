// 💡 Break Out Activity 1: Enable POST Request to json-server to add new Cards
//   ❗ Notable files:
//      - App.js

// 💡 Break Out Activity 2: Enable DELETE Request to json-server to remove Cards
//   ❗ Notable files:
//      - App.js
//      - CardList.js
//      - Card.js
//      - Button.js

// 💡 Break Out Activity 3: Enable PATCH Request to json-server to edit Cards
//   ❗ Notable files:
//      - App.js
//      - CardList.js
//      - Card.js
//      - Button.js

// useState Hook Import
import { useState, useEffect } from 'react';

// Import CSS Styles
import './App.css';

// Component Imports
import Header from './components/Header';
import NavBar from './components/NavBar';
import CardList from './components/CardList';
import CardForm from './components/CardForm';
import Card from './components/Card';

function App() {
  // Set "cards" state + setter function
  const [cards, setCards] = useState([]);
  const [addCard, setAddCard] = useState(false);
  const [editCard, setEditCard] = useState(false);

<<<<<<< HEAD
=======
  // 🚧 Add states to manage POST (addCard), DELETE (removeCard), and PATCH (editCard)
  // ❗ Why are these states necessary?
  const [ issueRequest, setIssueRequest ] = useState(false)
  
  // ...
  
>>>>>>> ddd36416aa0afbf3ba22e4989564ab0249042da0
  // Use fetch to retrieve Cards from db.json and
  // set as our initial value for "cards"
  function loadCards() {
    fetch("http://localhost:3001/cards")
      
      // Returns a promise which resolves with the result of parsing the body text as JSON
      // "res.json" parses JSON response into native JavaScript objects
      .then(res => res.json())
      
      // data => JSON data parsed by "res.json()" call
      // We can see "data" logged in our console
      .then(data => {
        console.log("Data fetched!", data);
        setCards(data);
    });
  }

  useEffect(() => {
    console.log("Fetching data...");
    
    // Invoke "loadCards" via useEffect 
    loadCards();

  // ❗ What states will we need to add to our dependencies array and why?
  }, [issueRequest]);

  function handleAddCard(newCard) {
    
    // 🚧 Refactor handleAddCard() to handle POST
    
    fetch("http://localhost:3001/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newCard)
<<<<<<< HEAD
    })
    .then(()=>{
   //  ❗ Remember to invoke loadCards() and toggle "addCard" state after successful fetch  
      loadCards();
      setAddCard(!addCard);
      }
    )

    // Avoid direct state mutation by using the Spread Operator
    const newCardsArray = [...cards, newCard]
    
    // Pass new array to "setState."
    setCards(newCardsArray)
=======
    }).then(

        // Comma is necessary because we are passing loadCards() and setAddCard(!addCard)
        // as arguments to "then"
          
        // State change triggers App component re-render
        // because we added "addCard" to list of 
        // dependencies
        setIssueRequest(!issueRequest)
    );
>>>>>>> ddd36416aa0afbf3ba22e4989564ab0249042da0
  }

  // 🚧 Add function to handle DELETE (handleRemoveCard)
  // ❗ Remember to invoke loadCards() and toggle "removeCard" state after successful fetch
  
  function handleRemoveCard(card) {
<<<<<<< HEAD
     fetch(`http://localhost:3001/cards/${card.id}`, {
       method: "DELETE",
       headers: {
         "Content-Type": "application/json"
     }
    })
    .then(()=> {
      // ❗ Remember to invoke loadCards() and toggle "addCard" state after successful fetch
      loadCards()
      setAddCard(!addCard)
    });
=======
      fetch(`http://localhost:3001/cards/${card.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
      }
      }).then(
        // ❗ Toggle "setRemoveCard" state after successful fetch
        setIssueRequest(!issueRequest)
    );
>>>>>>> ddd36416aa0afbf3ba22e4989564ab0249042da0
  }

  // 🚧 Add function to handle PATCH (handleEditCard)
  // ❗ Remember to toggle "issueRequest" after successful fetch
  
    function handleEditCard(card) {
      fetch(`http://localhost:3001/cards/${card.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          liked: !card.liked
        })
<<<<<<< HEAD
      }).then(()=>{
          //❗ Remember to invoke loadCards() and toggle "editCard" state after successful fetch
          loadCards()
          setEditCard(!editCard)
      })
=======
      }).then(
          // ❗ Toggle "issueRequest" state after successful fetch   
          setIssueRequest(!issueRequest)
     );
>>>>>>> ddd36416aa0afbf3ba22e4989564ab0249042da0
    }

  return (
    <div className="App">
      {/* NavBar Component */}
      <NavBar isLoggedIn/>
      
      {/* Header Component */}
      <Header 
        firstName="Louis" 
        lastName="Medina" 
      />

      <CardForm 
        handleAddCard={handleAddCard}

        cards={cards}
      />

      {/* CardList Component */}
      <CardList 
        cards={cards}

        // 🚧 Pass handleRemoveCard() and handleEditCard() as props
        handleRemoveCard={handleRemoveCard}
        handleEditCard={handleEditCard}
      />
    </div>
  );
}

export default App;