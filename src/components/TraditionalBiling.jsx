import styled from "styled-components";

const HeadingSecondary = styled.h2`
  font-weight: 600;
  font-size: 40px;
  letter-spacing: 0;
  line-height: 110%;
`;
const Para = styled.p`
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0;
  font-weight: 400;
  color: #000000;
  margin-bottom: 10px;
`;

function TraditionalBiling() {
  return (
    <div className="text-black flex flex-col gap-10 pb-20 px-35">
      <HeadingSecondary className="text-primary text-center mx-auto w-[70%]">
        Why Traditional Billing is Failing & What We’re Doing About It
      </HeadingSecondary>

      <div className="rounded-[8px] shadow-card pb-7">
        <div className="grid gap-x-7 grid-cols-[1fr_2fr_2fr] bg-[#FAF8FC] h-[93px] items-center justify-start px-5">
          <p className="text-[24px]/[100%] text-primary font-[600] tracking-normal">
            Feature
          </p>
          <p className="text-[24px]/[100%] text-primary font-[600] tracking-normal">
            Traditional Billing
          </p>
          <p className="text-[24px]/[100%] text-primary font-[600] tracking-normal">
            HMS AI-Powered Billing
          </p>
        </div>
        <div className="grid gap-x-7 grid-cols-[1fr_2fr_2fr] items-center justify-between border-b-[2px] border-[rgba(0,0,0,0.07)] h-[110px] mx-5">
          <p className="text-[22px]/[100%] font-[400] tracking-normal">
            Claim Review Process
          </p>
          <p className="flex gap-3 items-center text-[22px]/[110%] font-[400] tracking-normal pr-[15%]">
            <span>
              <img src="/cross.svg" className="h-[35px] w-[35px]" />
            </span>
            Manual claim reviews leading to high error rates
          </p>
          <p className="flex gap-3 items-center text-[22px]/[110%] font-[400] tracking-normal pr-[15%]">
            <span>
              <img src="/check.png" height="35px" width="35px" />
            </span>
            Predictive claim analysis with 98% accuracy rate
          </p>
        </div>
        <div className="grid gap-x-7 grid-cols-[1fr_2fr_2fr] items-center justify-between border-b-[2px] border-[rgba(0,0,0,0.07)] h-[110px] mx-5">
          <p className="text-[22px]/[100%] font-[400] tracking-normal">
            Denial Management
          </p>
          <p className="flex gap-3 items-center text-[22px]/[110%] font-[400] tracking-normal pr-[15%]">
            <span>
              <img src="/cross.svg" className="h-[35px] w-[35px]" />
            </span>
            Reactive denial management causing revenue leaks
          </p>
          <p className="flex gap-3 items-center text-[22px]/[110%] font-[400] tracking-normal pr-[15%]">
            <span>
              <img src="/check.png" height="35px" width="35px" />
            </span>
            Automated denial prevention with AI prediction
          </p>
        </div>
        <div className="grid gap-x-7 grid-cols-[1fr_2fr_2fr] items-center justify-between h-[110px] mx-5">
          <p className="text-[22px]/[100%] font-[400] tracking-normal">
            Financial Visibility
          </p>
          <p className="flex gap-3 items-center text-[22px]/[110%] font-[400] tracking-normal pr-[15%]">
            <span>
              <img src="/cross.svg" className="h-[35px] w-[35px]" />
            </span>
            Lack of transparency leading to unpredictable cashflow
          </p>
          <p className="flex gap-3 items-center text-[22px]/[110%] font-[400] tracking-normal pr-[15%]">
            <span>
              <img src="/check.png" height="35px" width="35px" />
            </span>
            Real-time reporting and revenue forecasting
          </p>
        </div>
      </div>
    </div>
  );
}

export default TraditionalBiling;
