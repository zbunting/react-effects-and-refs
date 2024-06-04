import { useState } from "react";
import Card from "./Card";

const BASE_DECK_API_URL = "https://deckofcardsapi.com/api/deck/";
const SHUFFLED_DECK_RES = "new/shuffle/?deck_count=1";

/** Component for a deck of cards
 *
 * Props: none
 *
 * State:
 * - deckId: string
 * - cards: array of
 *
 * App -> Deck -> Card
 */

function Deck() {
  const [deckId, setDeckId] = useState(null);
  const [cards, setCards] = useState([]);

  async function fetchDeckId() {
    const response = await fetch(`${BASE_DECK_API_URL}${SHUFFLED_DECK_RES}`);
    const data = await response.json();
    setDeckId(data.deck_id);
  }

  async function drawCard(numOfcards = 1) {
    const count = numOfcards;
    const response = await fetch(`${BASE_DECK_API_URL}draw/?count=${count}`);
    const data = await response.json();

    setCards((currentCards) => [...currentCards, ...data.cards]);
  } // TODO: ask about possibly storing the last cards in its own state

  if (deckId === null) {
    fetchDeckId();
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div>
        {cards.map((card) => (
          <Card imageUrl={card.image} key={card.code} />
        ))}
      </div>
      <div>
        <button onClick={drawCard}>Draw</button>
      </div>
    </div>
  );
}

export default Deck;
