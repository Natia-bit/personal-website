"use client";
import React, { useState, useEffect, useRef } from "react";
import Bug from "@/components/common/Bug";
import styles from "./page.module.css";
import SectionCard from "@/components/common/SectionCard";

const GRID_SIZE = 8;
const DIFFICULTY_SETTINGS = {
  easy: { spawnRate: 1500, label: "Easy", totalBugsToAppear: 15 },
  medium: { spawnRate: 1300, label: "Medium", totalBugsToAppear: 20 },
  hard: { spawnRate: 1200, label: "Hard", totalBugsToAppear: 30 },
};

export default function EasterEgg() {
  const [bugsFound, setBugsFound] = useState(0);
  const [bugsAppeared, setBugsAppeared] = useState(0);
  const [bugsMissed, setBugsMissed] = useState(0);
  const [totalBugsToAppear, setTotalBugsToAppear] = useState(0);
  const [currentSpawnRate, setCurrentSpawnRate] = useState(0);

  const [activeBugIndex, setActiveBugIndex] = useState(-1);
  const [bugRotation, setBugRotation] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);
  const [isGamePaused, setIsGamePaused] = useState(false);
  const [message, setMessage] = useState("Choose a difficulty to begin!");
  const [difficulty, setDifficulty] = useState("medium");

  const totalBugsRef = useRef(0);
  const spawnRateRef = useRef(0);

  const bugWasWhackedRef = useRef(false);
  const gameIntervalRef = useRef(null);

  const spawnBugs = (spawnRate, totalBugs) => {
    gameIntervalRef.current = setInterval(() => {
      bugWasWhackedRef.current = false;
      setActiveBugIndex(Math.floor(Math.random() * (GRID_SIZE * GRID_SIZE)));
      setBugRotation(Math.floor(Math.random() * 360));
      setBugsAppeared((prev) => {
        const newCount = prev + 1;

        if (newCount >= totalBugs) {
          clearInterval(gameIntervalRef.current);
          setTimeout(() => endGame(), spawnRate);
        }

        return newCount;
      });

      const bugTimeout = setTimeout(() => {
        setActiveBugIndex(-1);
        if (!bugWasWhackedRef.current) {
          setBugsMissed((prev) => prev + 1);
        }
      }, spawnRate - 100);
    }, spawnRate);
  };

  const startGame = (selectedDifficulty) => {
    setBugsFound(0);
    setBugsAppeared(0);
    setBugsMissed(0);
    setIsGameActive(true);
    setIsGamePaused(false);
    setMessage("");
    setActiveBugIndex(-1);
    setDifficulty(selectedDifficulty);

    const newTotalBugs =
      DIFFICULTY_SETTINGS[selectedDifficulty].totalBugsToAppear;
    const newSpawnRate = DIFFICULTY_SETTINGS[selectedDifficulty].spawnRate;

    setTotalBugsToAppear(newTotalBugs);
    setCurrentSpawnRate(newSpawnRate);

    totalBugsRef.current = newTotalBugs;
    spawnRateRef.current = newSpawnRate;

    spawnBugs(newSpawnRate, newTotalBugs);
  };

  const pauseGame = () => {
    clearInterval(gameIntervalRef.current);
    setIsGamePaused(true);
    setMessage("Game Paused");
  };

  const resumeGame = () => {
    setIsGamePaused(false);
    setMessage("");
    spawnBugs(currentSpawnRate, totalBugsToAppear);
  };

  const endGame = () => {
    setIsGameActive(false);
    setIsGamePaused(false);
    clearInterval(gameIntervalRef.current);
    setActiveBugIndex(-1);

    const missed = totalBugsRef.current - bugsFound;
    setMessage(`Choose a difficulty to begin!`);
  };

  const whackBug = (index) => {
    if (isGameActive && !isGamePaused && index === activeBugIndex) {
      setBugsFound((prev) => prev + 1);
      bugWasWhackedRef.current = true;
      setActiveBugIndex(-1);
    }
  };

  useEffect(() => {
    return () => {
      clearInterval(gameIntervalRef.current);
    };
  }, []);

  return (
    <div>
      <h1 className={styles.header}>De-bugging</h1>
      <SectionCard
        title="Code Bugs: A Galactic Misadventure"
        className={styles.gameContainer}
      >
        <div className={styles.description}>
          <p>
            Imagine, dear visitor, a bug in the code — not the creepy-crawly
            kind you&apos;d shoo away with a slipper, but a mischievous gremlin
            lurking in the digital tapestry of this very website. These are the
            tiny hiccups in the grand cosmic program, as if the universe&apos;s
            Great Coder, distracted by a particularly potent Pan-Galactic Gargle
            Blaster, typed a comma instead of a full stop. The result? A button
            that winks out of existence, a page that decides to dance the
            Macarena instead of loading, or a game that insists two plus two is
            a fish. These bugs are the universe&apos;s way of giggling at its
            own cleverness, reminding us that even the slickest websites, like
            spaceships, sometimes veer off course into a black hole of “whoops”.
          </p>
          <p>
            In this little Easter egg, you&apos;ll whack these digital rascals
            in a game. Each bug you squash is a tiny victory over chaos, a nod
            to the tireless software engineers who debug the universe one line
            at a time. So, grab your virtual towel, tap those bugs, and enjoy
            the absurdity—because in the grand code of life, a bug or two just
            means the universe is still having a laugh.
          </p>
        </div>

        <div className={styles.mainContainer}>
          <div className={styles.theGame}>
            <div
              className={`${styles.gridContainer} ${
                isGameActive && !isGamePaused ? "" : styles.gridCellDisabled
              }`}
              style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}
            >
              {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => (
                <div
                  key={index}
                  className={styles.gridCell}
                  onClick={() => whackBug(index)}
                >
                  {activeBugIndex === index && (
                    <div
                      className={styles.bugBounceIn}
                      style={{ transform: `rotate(${bugRotation}deg)` }}
                    >
                      <Bug width={40} height={40} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.panel}>
            <div className={styles.gameState}>
              {!isGameActive ? (
                <div>
                  <p>{message}</p>
                  <div className={styles.difficultyButtons}>
                    {Object.keys(DIFFICULTY_SETTINGS).map((key) => (
                      <button
                        key={key}
                        onClick={() => startGame(key)}
                        className={styles.button}
                      >
                        {DIFFICULTY_SETTINGS[key].label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <p>{isGamePaused ? "Game Paused" : "Whack the bugs!"}</p>
                  <div>
                    <button
                      onClick={isGamePaused ? resumeGame : pauseGame}
                      className={`${styles.button} ${styles.buttonPause}`}
                    >
                      {isGamePaused ? "Resume" : "Pause"}
                    </button>
                    <button
                      onClick={endGame}
                      className={`${styles.button} ${styles.buttonEnd}`}
                    >
                      End Game
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div>
              <div className={styles.scoreContainer}>
                <div className={`${styles.scoreCard} ${styles.bugsFound}`}>
                  <span className={styles.score}> {bugsFound}</span>
                  <p>Bugs Whacked</p>
                </div>

                <div className={`${styles.scoreCard} ${styles.bugsMissed}`}>
                  <span className={styles.score}> {bugsMissed}</span>
                  <p>Bugs Missed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 
        <div className={styles.gamePanel}>
          <div className={styles.scoreBoard}>
            <div className={styles.scoreText}>
              Bugs Whacked:
              <span className={styles.scoreFound}> {bugsFound}</span>
            </div>
            <div className={styles.scoreText}>
              Bugs Missed:
              <span className={styles.scoreMissed}> {bugsMissed}</span>
            </div>
          </div>

          <div>
            {!isGameActive ? (
              <div className={styles.messageSection}>
                <p className={styles.messageText}>{message}</p>
                <div className={styles.buttonGroup}>
                  {Object.keys(DIFFICULTY_SETTINGS).map((key) => (
                    <button
                      key={key}
                      onClick={() => startGame(key)}
                      className={`${styles.button} ${
                        styles[
                          `button${key.charAt(0).toUpperCase() + key.slice(1)}`
                        ]
                      } ${difficulty === key ? styles.buttonSelected : ""}`}
                    >
                      {DIFFICULTY_SETTINGS[key].label}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className={styles.messageSection}>
                <p className={styles.messageText}>
                  {isGamePaused ? "Game Paused" : "Whack the bugs!"}
                </p>
                <div className={styles.buttonGroup}>
                  <button
                    onClick={isGamePaused ? resumeGame : pauseGame}
                    className={`${styles.button} ${styles.buttonPause}`}
                  >
                    {isGamePaused ? "Resume" : "Pause"}
                  </button>
                  <button
                    onClick={endGame}
                    className={`${styles.button} ${styles.buttonEnd}`}
                  >
                    End Game
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className={styles.test}>
            <div
              className={`${styles.gridContainer} ${
                isGameActive && !isGamePaused ? "" : styles.gridCellDisabled
              }`}
              style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}
            >
              {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => (
                <div
                  key={index}
                  className={styles.gridCell}
                  onClick={() => whackBug(index)}
                >
                  {activeBugIndex === index && (
                    <div
                      className={styles.bugBounceIn}
                      style={{ transform: `rotate(${bugRotation}deg)` }}
                    >
                      <Bug width={40} height={40} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </SectionCard>
    </div>
  );
}
