import { Button } from "@progress/kendo-react-buttons";
import { Card } from "@progress/kendo-react-layout";
import type { Fact } from "@shared/schema";
import { getCategoryColor } from "@/lib/utils";
import Slider from "@ant-design/react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  arrows: false,
  slidesToScroll: 1,
  autoplaySpeed: 5000,
  autoplay: true,
};

const CATEGORY_RING_COLOR = {
  achievement: "border border-2 border-chart-2",
  satirical: "border border-2 border-destructive",
  historical: "border border-2 border-primary",
  statistical: "border border-2 border-chart-3",
  cultural: "border border-2 border-chart-5",
  meme: "border border-2 border-chart-4",
  default: "border border-2 border-secondary",
};

interface NumberDisplayProps {
  fact: Fact;
}

function formatNumber(currentNumber: number) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(currentNumber);
}

export default function NumberDisplay({ fact }: NumberDisplayProps) {
  const categoryStyles = getCategoryColor(fact.category);
  console.log(fact.description);
  return (
    <Card
      className={`shadcn-card rounded-xl bg-card border-card-border text-card-foreground shadow-sm p-6 space-y-4 hover-elevate transition-all duration-200 ${
        CATEGORY_RING_COLOR[fact.category]
      }`}
    >
      <div className="flex items-center justify-between">
        <div
          className={`text-6xl font-bold font-mono flex items-base ${
            getCategoryColor(fact.category).textColorClassName
          }`}
          data-testid={`text-number-${fact.id}`}
        >
          <span className="text-xl mt-1">#</span>
          <span>{fact.number === 1947 ? 1947 : formatNumber(fact.number)}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button className={`${getCategoryColor(fact.category).classNames}`}>
            {fact.category}
          </Button>
        </div>
      </div>

      <div className="border-t pt-4 space-y-2">
        <h3
          className={`text-3xl font-semibold mb-2 ${
            getCategoryColor(fact.category).textColorClassName
          }`}
          data-testid={`text-title-${fact.id}`}
        >
          {fact.title}
        </h3>

        <div
          className={`text-xl mx-20 p-3 border rounded-md bg-secondary font-medium my-3 description-container`}
        >
          {!Array.isArray(fact.description) ? (
            <p
              data-testid={`text-description-${fact.id}`}
              dangerouslySetInnerHTML={{ __html: fact.description }}
            />
          ) : (
            <div>
              <Slider {...settings}>
                {fact.description.map((d) => (
                  <div dangerouslySetInnerHTML={{ __html: d }}></div>
                ))}
              </Slider>
            </div>
          )}
        </div>
      </div>

      {fact.source ? (
        <div
          className={`flex items-center gap-2 pt-2 border-t ${categoryStyles.textColorClassName}`}
        >
          {fact.source.map(({ name, url }, index) => (
            <a
              href={url}
              target="_blank"
              className="p-0 h-auto text-sm hover-elevate reference-link p-1"
              data-testid={`button-source-${fact.id}`}
            >
              {name}
            </a>
          ))}
        </div>
      ) : null}
    </Card>
  );
}
