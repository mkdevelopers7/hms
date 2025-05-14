import styled from "styled-components";

const HeadingSecondary = styled.h2`
  font-weight: 600;
  font-size: 40px;
  letter-spacing: 0;
  line-height: 110%;
`;
const Para = styled.p`
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0;
  font-weight: 400;
  color: #000000;
`;
const Para2 = styled.p`
  font-size: 17px;
  line-height: 26px;
  letter-spacing: 0;
  font-weight: 400;
  color: #fff;
`;
const Heading5 = styled.h4`
  font-size: 21px;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0%;
`;

function ChooseHMS() {
  return (
    <div className="text-black grid grid-cols-2 gap-8 pt-15 pb-10 px-35 bg-[#FAF8FC]">
      <div className="flex-1 px-10 flex flex-col gap-10">
        <HeadingSecondary className="text-primary">
          Choose HMS, Because Results Speak Louder Than Promises
        </HeadingSecondary>
        <Para className="flex flex-col gap-6">
          <span>
            You don’t need another sales pitch—you need results you can see and
            feel."
          </span>
          <span>
            "The truth is, most billing systems weren’t built to handle the
            speed and complexity of modern healthcare. Denials, delays, and
            errors are just symptoms of an outdated process. But we’ve built
            something better—an RCM solution that doesn’t just fix the symptoms
            but solves the problem entirely."
          </span>
        </Para>
        <div>
          <div className="flex gap-5 py-5 pb-5 rounded-[8px] bg-[#FAF8FC]">
            <img src="/automation.png" className="h-[50px] w-[50px]" />
            <div className="flex flex-col gap-3">
              <Heading5 className="text-primary">Smart Automation</Heading5>
              <Para>
                AI-powered tools that eliminate human error and speed up claim
                processing.
              </Para>
            </div>
          </div>
          <div className="flex gap-5 py-5 pb-5 rounded-[8px] bg-[#FAF8FC]">
            <img src="/analysis.png" className="h-[50px] w-[50px]" />
            <div className="flex flex-col gap-3">
              <Heading5 className="text-primary">Predictive Analytics</Heading5>
              <Para>
                Insights that prevent denials before they even happen.
              </Para>
            </div>
          </div>
          <div className="flex gap-5 py-5 pb-5 rounded-[8px] bg-[#FAF8FC]">
            <img src="/fast.svg" className="h-[50px] w-[50px]" />
            <div className="flex flex-col gap-3">
              <Heading5 className="text-primary">Integrated Solutions</Heading5>
              <Para>
                Seamless integration with your systems for maximum efficiency.
              </Para>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-8 bg-white rounded-[8px] shadow-card px-7 py-8">
        <div className="flex flex-col gap-5 px-5 pt-8 pb-5 rounded-[8px] bg-[#5A2E7E]">
          <img src="/rate.png" className="h-[70px] w-[70px]" />
          <Heading5 className="text-white">98% First-Pass Rate</Heading5>
          <Para2 className="text-white">
            Our clients see 98% of claims paid on first submission, well above
            industry average.
          </Para2>
        </div>
        <div className="flex flex-col gap-5 px-5 pt-8 pb-5 rounded-[8px] bg-[#5A2E7E]">
          <img src="/rate.png" className="h-[70px] w-[70px]" />
          <Heading5 className="text-white">98% First-Pass Rate</Heading5>
          <Para2 className="text-white">
            Our clients see 98% of claims paid on first submission, well above
            industry average.
          </Para2>
        </div>
        <div className="flex flex-col gap-5 px-5 pt-8 pb-5 rounded-[8px] bg-[#5A2E7E]">
          <img src="/rate.png" className="h-[70px] w-[70px]" />
          <Heading5 className="text-white">98% First-Pass Rate</Heading5>
          <Para2 className="text-white">
            Our clients see 98% of claims paid on first submission, well above
            industry average.
          </Para2>
        </div>
      </div>
      <p className="col-span-2 text-center text-[17px]/[26px] text-primary w-[70%] mx-auto mt-3 italic">
        This isn’t just about improving your billing—it’s about transforming
        your entire revenue process. Let’s build a system that grows with you,
        not against you.
      </p>
    </div>
  );
}

export default ChooseHMS;
