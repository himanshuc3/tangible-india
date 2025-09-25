import { Fade } from '@progress/kendo-react-animation';

import "./index.scss";

export default function IndiaFlag({
  numOfColumns = 10,
  staggeredDelay = 100,
  billow = 1,
}: {
  numOfColumns?: number;
  staggeredDelay?: number;
  billow?: number;
}) {
  return (
    <div className="flag">
      {Array.from({ length: numOfColumns }).map((_, index) => (
        <div
          key={index}
          className="column"
          style={{
            "--billow": index * billow + "px",
            animationDelay: index * staggeredDelay + "ms",
          }}
        />
      ))}
    </div>
  );
}
