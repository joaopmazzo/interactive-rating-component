import * as ToggleGroup from "@radix-ui/react-toggle-group";

interface RateButtonProps {
  value: string;
  textContent: string;
}

export function RateButton({ value, textContent }: RateButtonProps) {
  return (
    <ToggleGroup.Item
      value={value}
      className="bg-[#262f38] rounded-full w-11 h-11 
      text-[#949ba5] 
      hover:bg-[#7c8898] hover:text-[#feffff]
      radix-state-on:bg-[#fc7613] radix-state-on:text-[#feffff]"
    >
      {textContent}
    </ToggleGroup.Item>
  );
}
