The Flashcard Project is a React-based application for creating decks of flashcards for studying.

The home page displays a list of available decks to browse, as well as a button to create a new deck.

Clicking the Create Deck button brings the user to a form with inputs for a deck title and deck description.
Once information is entered and the user clicks 'Submit' the user will be brought to the deck overview screen for the newly created deck.
Otherwise, clicking cancel will return the user to the home page.

The deck overview screen shows the deck card, containing the deck title and description, as well as options to edit the deck, study the deck, add flashcards to the deck, or delete the deck.

Clicking 'Edit' will bring the user to the deck edit form, which is the same as the deck create form, but the title and description will already be in the inputs.
Clicking 'Submit' will update the deck information based on changes the user makes.

Clicking the 'Study' button will start the flashcard process explained later.

Clicking 'Add Cards' will bring the user to the Add Cards form, which contains inputs for the front text (the question) and back text (the answer).
After clicking 'Save' a new card will be created and added to the displayed deck, containing the information added to the inputs.
The inputs will then be cleared, allowing the user to create more cards.
When the user is done adding cards, clicking 'Done' will return the user to the deck overview page. Note: Clicking 'Done' will not create a card, so information in the inputs will be lost.

The deck overview also displays a list of cards in the deck, showing the front and back text in two columns, as well as an edit button and delete button.

The edit button brings the user to the edit card form, which is the same as the add card form, however, clicking 'Submit' will save changes to the current card, and return the user to the deck overview screen.
Clicking 'Cancel' will also bring the user back to the deck overview screen, but without saving changes to the card.

Clicking on the red delete card button will prompt the user to make sure they want to delete the card.
If the user confirms, the card will be deleted from the deck.

The flashcard display screen, accessed by clicking 'Study' on the home page or deck overview, will display the flashcards in order, first showing the front of the card.
When the user clicks 'Flip', it will display the back of the card.
When displaying the back of the flashcard, the 'Next' button will also be visible, allowing the user to go to the front side of the next flashcard in the deck.
After clicking 'Next' on the final card in the deck, the user will be asked if they want to start over.
Confirming to start over will return the user to the front of the first flashcard.
Not confirming will return the user to the home page.

If a deck has less than three flashcards, instead of displaying the flashcards, the user will receive a message stating that a deck must have at least three flashcards to study, as well as proving a button to add flashcards to the active deck.
