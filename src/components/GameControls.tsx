import Keyboard from "./Keyboard";
import { GameControlsProps } from "@/types";

const GameControls = ({
  onAddCharacter,
  onRemoveCharacter,
  onCheckWord,
  onResetGame,
  wordLength,
  currentWordLength,
  isLoading
}: GameControlsProps) => {
  return (
    <div className="flex flex-col items-center gap-1 w-full max-w-3xl z-10 relative">
      <Keyboard
        onCharacterClick={onAddCharacter}
        onBackspaceClick={onRemoveCharacter}
        onEnterClick={onCheckWord}
        onResetGame={onResetGame}
        wordIsFull={currentWordLength === wordLength}
        isLoading={isLoading}
        disableKeys={currentWordLength === wordLength}
        currentWordLength={currentWordLength}
      />
    </div>
  );
};

export default GameControls; 