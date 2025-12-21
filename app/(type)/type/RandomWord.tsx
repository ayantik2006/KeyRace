"use client";

import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Roboto_Mono } from "next/font/google";
import { Input } from "@/components/ui/input";

export const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto-mono",
});

function RandomWord() {
  const [words, setWords] = useState("");
  const [wordsNumber, setWordsNumber] = useState(30);
  const [caretPos, setCaretPos] = useState(-1);
  const hiddenInputRef = useRef<HTMLInputElement>(null);
  const [isWrong, setIsWrong] = useState<boolean[]>([]);
  const [charsPos, setCharsPos] = useState<number[][]>([[]]);
  const charsRef = useRef<HTMLSpanElement[]>([]);
  const caretRef = useRef<HTMLDivElement>(null);
  const [caretLeft, setCaretLeft] = useState(0);
  const [caretTop, setCaretTop] = useState(0);
  const containerRef = useRef(null);
  const [startTime, setStartTime] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);
  const [wrongCharsNum, setWrongCharsNum] = useState(0);
  const wordsBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    wordsBoxRef.current?.focus();
    setCaretPos(-1);
    setStartTime(0);
    setTimeTaken(0);
    setWrongCharsNum(0);
    axios
      .get("/api/words", {
        params: { wordsNumber: wordsNumber },
      })
      .then((res) => {
        setWords(res.data.words);
        setIsWrong(new Array(res.data.words.split("").length).fill(false));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [wordsNumber]);

  useEffect(() => {
    charsRef.current.map((char, index) => {
      const rect = char.getBoundingClientRect();
      const temp = [rect.left, rect.top];
      const tempCharPos = charsPos;
      tempCharPos.push(temp);
      setCharsPos(tempCharPos);
      if (index == 1) {
        setCaretLeft(temp[0] - 33);
        setCaretTop(temp[1]);
      }
    });
  }, [words]);

  return (
    <div
      className="flex flex-col items-center gap-10 w-full px-10"
      ref={containerRef}
    >
      {timeTaken == 0 && (
        <div className="bg-[#4d4b4b] p-5 mt-[-6rem] rounded-lg w-fit flex flex-col gap-2 shadow-[5px_5px_0_4px]">
          <label
            className={`font-semibold text-neutral-300 ${robotoMono.className}`}
          >
            Number of words
          </label>
          <Input
            type="number"
            className="no-spinner text-neutral-400"
            defaultValue={wordsNumber}
            onChange={(e) => {
              setWordsNumber(Number(e.currentTarget.value));
            }}
          />
        </div>
      )}

      {timeTaken == 0 && (
        <div
          className={`text-3xl text-[#f3af817a] w-full max-w-6l h-[15rem] overflow-auto leading-[3rem] words-scrollbar ${robotoMono.className} outline-none cursor-default select-none caret-transparen bg-neutral-800 px-10 py-5 rounded-lg`}
          ref={wordsBoxRef}
          onClick={() => {
            hiddenInputRef.current?.focus();
          }}
        >
          <input
            type="text"
            className="opacity-0 pointer-events-none absolute"
            ref={hiddenInputRef}
            onKeyDown={(e) => {
              if (e.key === "Backspace") {
                if (caretPos !== -1) setCaretPos((p) => p - 1);
                const isWrongCpy = isWrong;
                isWrongCpy[caretPos] = false;
                setIsWrong(isWrongCpy);
                if (caretPos == 0) {
                  setCaretLeft(charsPos[1][0] - 15);
                  setCaretTop(charsPos[1][1]);
                  return;
                }
                if (caretPos == -1) return;
                setCaretLeft(charsPos[caretPos][0]);
                setCaretTop(charsPos[caretPos][1]);
                return;
              }

              if (caretPos == -1) setStartTime(new Date().getTime() / 1000);
              if (caretPos == words.split("").length - 2) {
                const timeTaken =
                  (new Date().getTime() / 1000 - startTime) / 60;
                setTimeTaken(timeTaken);
              }

              setCaretPos((p) => p + 1);

              setCaretLeft(charsPos[caretPos + 2][0]);
              setCaretTop(charsPos[caretPos + 2][1]);

              if (e.key !== words.charAt(caretPos + 1)) {
                const isWrongCpy = isWrong;
                isWrongCpy[caretPos + 1] = true;
                setIsWrong(isWrongCpy);
                setWrongCharsNum((w) => ++w);
              }
            }}
          />
          <div
            className="bg-orange-500 w-1 h-10 animate-caret-blink duration-100 "
            ref={caretRef}
            style={{
              position: "absolute",
              left: String(caretLeft + 15) + "px",
              top: String(caretTop) + "px",
            }}
          ></div>

          {words.split("").map((char, index) => {
            const charColor = index > caretPos ? "" : "#FF6500";

            return (
              <span
                key={index}
                className={`${
                  isWrong[index] ? "text-red-600" : ""
                } text-[${charColor}]`}
                ref={(ele) => {
                  if (ele) charsRef.current[index] = ele;
                }}
              >
                {char}
              </span>
            );
          })}
        </div>
      )}

      {timeTaken==0 && <div className="text-neutral-500">
        Click on the text to start
      </div>}

      {timeTaken !== 0 && (
        <div
          className={`text-white flex flex-col flex-wrap gap-5 items-center ${robotoMono.className}`}
        >
          <div className="items-center">
            Number of Words: {words.split(" ").length}
          </div>
          <div className="flex flex-col items-center gap-2 p-10 bg-[#68625e] rounded-lg shadow-[5px_5px_0_2px_black]">
            <h1 className="text-5xl">WPM</h1>
            <h2 className="text-3xl text-[#ffbc90]">
              {Math.floor(words.split("").length / (5 * timeTaken))}
            </h2>
          </div>
          <div className="flex flex-col items-center gap-2 p-10 bg-[#68625e] rounded-lg shadow-[5px_5px_0_2px_black]">
            <h1 className="text-5xl">Accuracy</h1>
            <h2 className="text-3xl text-[#ffbc90]">
              {Math.round(((words.length-wrongCharsNum)/(words.length))*100)} %
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default RandomWord;
