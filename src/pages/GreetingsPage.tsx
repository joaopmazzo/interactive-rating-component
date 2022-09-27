import { useLocation } from "react-router-dom";

import RatedImg from "../assets/illustration-thank-you.svg";

export function GreetingsPage() {
  const location = useLocation();
  const { rate } = location.state;

  return (
    <main
      className="bg-[#1e252f] py-7 px-6 w-80
      fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      flex flex-col items-center justify-center gap-4
      rounded-3xl
      shadow-xl"
    >
      <img src={RatedImg} alt="Thank you illustration" />
      <span className="bg-[#262f38] rounded-full text-[#fc7613] py-1 px-4">
        You selected {rate} out of 5
      </span>
      <h1 className="text-2xl text-[#feffff] font-bold">Thank you!</h1>
      <p className="text-[#949ba5] text-center">
        We appreciate you taking time to give a rating. If you ever need more
        support, don't hesitate to get in touch!
      </p>
    </main>
  );
}
