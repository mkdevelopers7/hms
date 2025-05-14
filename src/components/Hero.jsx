import styled from "styled-components";
import Form from "./Form";
import Navigation from "./Navigation";

const Para = styled.p`
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0;
  font-weight: 400;
  color: #000000;
`;

function Hero() {
  return (
    <div className="px-35 flex flex-col items-center h-[75vh] bg-cover bg-center bg-[url('/hero-image.jpg')]  pt-[38px]">
      <Navigation />
      <div className="flex flex-col md:flex-row md:gap-[30px] w-full items-center justify-between ">
        <div className="flex flex-col gap-2 flex-1 min-w-[350px] max-w-[527px] bg-transparent md:pr-[5px]">
          <h1 className="font-[600] text-[36px]/[42px] text-primary max-w-[400px]">
            Take Control of Your Revenue With #1 Medical Billing Services In
            Maine (ME)
          </h1>
          <Para>
            What’s the cost of billing mistakes? Thousands. What’s the solution?
            Us. Maine’s elite medical billing service guarantees every dollar
            you’re owed—no excuses, no delays. Let us make your revenue
            unstoppable.
          </Para>
        </div>
        <div className="w-[565px]">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Hero;
