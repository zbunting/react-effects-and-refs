import { useState } from "react";

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

  async function fetchDeckId() {
    const response = await fetch(`${BASE_DECK_API_URL}${SHUFFLED_DECK_RES}`);
    const dataFromApi = await response.json();
    setDeckId(dataFromApi.deck_id);
  }

  if (deckId === null) {
    fetchDeckId();
    return <p>Loading...</p>;
  }

  return (

  );
}

export default Deck;