"use client";


import { Button } from "@/components/ui/button";
import { animate, useMotionValue } from "framer-motion";
import { PauseIcon, PlayIcon, RefreshCcw } from "lucide-react";
import { useEffect, useRef, useState } from "react";

let delay = 250;
let characters = 150;

export default function Home() {
  let [isPlaying, setIsPlaying] = useState(false);
  let [text, setText] = useState("");

  let animatedText = useAnimatedText(text);

  useInterval(
    () => {
      let newText = getNextChars(characters);
      setText((text) => text + newText);
    },
    isPlaying ? delay : null,
  );

  return (
    <div className="relative bg-slate-100 p-8">
      <h2 className="text-2xl font-semibold">Animated Text Using Framer Motion</h2>
      <div className="mt-10 flex items-center justify-between gap-4">
        <div className="flex gap-2">
          <Button
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <>
                <PauseIcon className="size-4" /> Pause
              </>
            ) : (
              <>
                <PlayIcon className="size-4" /> Start
              </>
            )}
          </Button>
          <Button
            onClick={() => {
              setText("");
              setIsPlaying(false);
              position = 0;
            }}
          >
            <RefreshCcw className="size-4" /> Reset
          </Button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <div className="h-[500px] overflow-scroll rounded-lg bg-white p-4 shadow">
            <p className="whitespace-pre-wrap text-gray-700">{text}</p>
          </div>
          <p className="mt-4 text-sm font-medium">text</p>
        </div>
        <div>
          <div className="h-[500px] overflow-scroll rounded-lg bg-white shadow">
            <p className="whitespace-pre-wrap p-4 text-gray-700">
              {animatedText}
            </p>
          </div>
          <p className="mt-4 text-sm font-medium">useAnimatedText(text)</p>
        </div>
      </div>
    </div>
  );
}

let delimiter = "";
function useAnimatedText(text: string) {
  let animatedCursor = useMotionValue(0);
  let [cursor, setCursor] = useState(0);
  let [prevText, setPrevText] = useState(text);
  let [isSameText, setIsSameText] = useState(true);

  if (prevText !== text) {
    setPrevText(text);
    setIsSameText(text.startsWith(prevText));

    if (!text.startsWith(prevText)) {
      setCursor(0);
    }
  }

  useEffect(() => {
    if (!isSameText) {
      animatedCursor.jump(0);
    }

    let controls = animate(animatedCursor, text.split(delimiter).length, {
      duration: 3,
      ease: "easeOut",
      onUpdate(latest) {
        setCursor(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [animatedCursor, isSameText, text]);

  return text.split(delimiter).slice(0, cursor).join(delimiter);
}

const greatGatsbyFull = `In my younger and more vulnerable years my father gave me some advice that I’ve been turning over in my mind ever since.

“Whenever you feel like criticizing anyone,” he told me, “just remember that all the people in this world haven’t had the advantages that you’ve had.”

He didn’t say any more, but we’ve always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that. In consequence, I’m inclined to reserve all judgements, a habit that has opened up many curious natures to me and also made me the victim of not a few veteran bores. The abnormal mind is quick to detect and attach itself to this quality when it appears in a normal person, and so it came about that in college I was unjustly accused of being a politician, because I was privy to the secret griefs of wild, unknown men. Most of the confidences were unsought—frequently I have feigned sleep, preoccupation, or a hostile levity when I realized by some unmistakable sign that an intimate revelation was quivering on the horizon; for the intimate revelations of young men, or at least the terms in which they express them, are usually plagiaristic and marred by obvious suppressions. Reserving judgements is a matter of infinite hope. I am still a little afraid of missing something if I forget that, as my father snobbishly suggested, and I snobbishly repeat, a sense of the fundamental decencies is parcelled out unequally at birth.

And, after boasting this way of my tolerance, I come to the admission that it has a limit. Conduct may be founded on the hard rock or the wet marshes, but after a certain point I don’t care what it’s founded on. When I came back from the East last autumn I felt that I wanted the world to be in uniform and at a sort of moral attention forever; I wanted no more riotous excursions with privileged glimpses into the human heart. Only Gatsby, the man who gives his name to this book, was exempt from my reaction—Gatsby, who represented everything for which I have an unaffected scorn. If personality is an unbroken series of successful gestures, then there was something gorgeous about him, some heightened sensitivity to the promises of life, as if he were related to one of those intricate machines that register earthquakes ten thousand miles away. This responsiveness had nothing to do with that flabby impressionability which is dignified under the name of the “creative temperament”—it was an extraordinary gift for hope, a romantic readiness such as I have never found in any other person and which it is not likely I shall ever find again. No—Gatsby turned out all right at the end; it is what preyed on Gatsby, what foul dust floated in the wake of his dreams that temporarily closed out my interest in the abortive sorrows and short-winded elations of men.

My family have been prominent, well-to-do people in this Middle Western city for three generations. The Carraways are something of a clan, and we have a tradition that we’re descended from the Dukes of Buccleuch, but the actual founder of my line was my grandfather’s brother, who came here in fifty-one, sent a substitute to the Civil War, and started the wholesale hardware business that my father carries on today.

I never saw this great-uncle, but I’m supposed to look like him—with special reference to the rather hard-boiled painting that hangs in father’s office. I graduated from New Haven in 1915, just a quarter of a century after my father, and a little later I participated in that delayed Teutonic migration known as the Great War. I enjoyed the counter-raid so thoroughly that I came back restless. Instead of being the warm centre of the world, the Middle West now seemed like the ragged edge of the universe—so I decided to go East and learn the bond business. Everybody I knew was in the bond business, so I supposed it could support one more single man. All my aunts and uncles talked it over as if they were choosing a prep school for me, and finally said, “Why—ye-es,” with very grave, hesitant faces. Father agreed to finance me for a year, and after various delays I came East, permanently, I thought, in the spring of twenty-two.

The practical thing was to find rooms in the city, but it was a warm season, and I had just left a country of wide lawns and friendly trees, so when a young man at the office suggested that we take a house together in a commuting town, it sounded like a great idea. He found the house, a weather-beaten cardboard bungalow at eighty a month, but at the last minute the firm ordered him to Washington, and I went out to the country alone. I had a dog—at least I had him for a few days until he ran away—and an old Dodge and a Finnish woman, who made my bed and cooked breakfast and muttered Finnish wisdom to herself over the electric stove.

`;

let position = 0;
function getNextChars(n: number) {
  const result = greatGatsbyFull.slice(position, position + n);
  position += n;
  return result;
}

function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void>();

  // Remember the latest callback if it changes.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval and call the callback immediately.
  useEffect(() => {
    if (delay === null) {
      return;
    }

    // Call the callback immediately.
    savedCallback.current?.();

    function tick() {
      savedCallback.current?.();
    }

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}