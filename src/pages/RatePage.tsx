import { useState } from "react";
import { Link } from "react-router-dom";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

import StarImg from "../assets/icon-star.svg";

import { RateButton } from "../components/RateButton";

export function RatePage() {
  const [rate, setRate] = useState<string>();

  return (
    <main
      className="bg-[#1e252f] py-7 px-6 w-[352px]
      fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      flex flex-col gap-4
      rounded-3xl
      shadow-xl"
    >
      <span className="bg-[#262f38] rounded-full overflow-hidden max-w-fit">
        <img src={StarImg} alt="Star image" className="p-2 w-10" />
      </span>
      <h1 className="text-2xl text-[#feffff] font-bold">How did we do?</h1>
      <p className="text-[#949ba5] text-sm">
        Please let us know we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form>
        <ToggleGroup.Root
          type="single"
          aria-label="rate 1 to 5"
          className="flex items-center justify-between"
          onValueChange={(value) => setRate(value)}
        >
          <RateButton value="1" textContent="1" />
          <RateButton value="2" textContent="2" />
          <RateButton value="3" textContent="3" />
          <RateButton value="4" textContent="4" />
          <RateButton value="5" textContent="5" />
        </ToggleGroup.Root>
        <Link to={rate ? "/greetings" : "/"} state={{ rate }}>
          <div
            className="bg-[#fc7613] w-full p-2 mt-6 rounded-3xl
            flex justify-center items-center
          text-[#feffff] font-bold
          hover:bg-[#ffffff] hover:text-[#fc7613] hover:cursor-pointer"
          >
            SUBMIT
          </div>
        </Link>
      </form>
    </main>
  );
}
