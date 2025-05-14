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
const Label = styled.label`
  color: #696969;
  font-size: 14px;
  line-height: 26px;
  font-weight: 500;
`;
const Input = styled.input`
  color: #959595;
  font-size: 15px;
  line-height: 26px;
  font-weight: 500;
  background-color: #f9fafc;
  border-radius: 8px;
  height: 64px;
  width: 100%;
  padding-left: 87px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

function Revenue() {
  return (
    <div className="flex gap-20 px-35 py-20">
      <div className="flex flex-col gap-4 flex-1">
        <HeadingSecondary className="text-primary">
          98% of Our Claims Are Paid on the First Submission. Can Yours Say the
          Same?"
        </HeadingSecondary>
        <Para>
          Every rejected claim is lost time, money, and opportunity. Did you
          know that billing errors and denials cost healthcare providers in
          Maine thousands every single month? With our industry-leading 98%
          first-pass approval rate, we don’t just help you get paid—we help you
          get paid faster.
        </Para>
        <Para>
          What’s our secret? Precision and expertise. We analyze every claim
          with cutting-edge tools and a team of billing specialists who know the
          system inside out. The result? Nearly every claim we submit gets
          approved the first time, eliminating errors, delays, and the
          frustration of denials.
        </Para>
        <Para>
          Providers across Maine are seeing the difference this makes—not just
          in their revenue but in their daily operations. No more chaos, no more
          uncertainty. Just reliable, efficient billing that lets you focus on
          your patients. Are you ready to experience it for yourself?
        </Para>
      </div>

      {/* Revenue Calculator Section */}
      <div className="flex-1 py-10 px-10 rounded-[10px] shadow-subtle">
        <div className="flex gap-5 flex-col">
          <h3 className="flex items-center gap-5 text-black text-[28px]/[26px] font-[600] tracking-normal mb-3">
            <span className="h-[55px] w-[55px] rounded-[5px] bg-gray-200 flex p-[10px]">
              <img src="/calculator-icon.png" />
            </span>
            Revenue Loss Calculator
          </h3>
          <form className="w-full flex flex-col gap-3">
            <div className="flex flex-col items-start gap-1 relative">
              <Label>Practice Size</Label>
              <Input type="text" placeholder="Small (1-3 Provider)" />
              <span className="h-[35px] w-[35px] bg-gray-200 flex  items-center p-[5px] rounded-[5px] absolute bottom-[15px] left-[20px]">
                <img src="/briefcase-icon.png" />
              </span>
            </div>
            <div className="flex flex-col items-start gap-1 relative">
              <Label>Average Denial Rate</Label>
              <Input type="text" placeholder="Less than 5%" />
              <span className="h-[35px] w-[35px] bg-gray-200 flex  items-center p-[5px] rounded-[5px] absolute bottom-[15px] left-[20px]">
                <img src="/pie-chart-icon.png" />
              </span>
            </div>
            <div className="flex flex-col items-start gap-1 relative">
              <Label>Monthly Revenue Loss</Label>
              <Input type="text" placeholder="e.g, 5000" />
              <span className="h-[35px] w-[35px] bg-gray-200 flex  items-center p-[5px] rounded-[5px] absolute bottom-[15px] left-[20px]">
                <img src="/dollar-icon.png" />
              </span>
            </div>
            <button className="bg-linear-to-r from-[#5A2E7E] to-[#8963B0] shadow-button rounded-[8px] py-[19px] px-[128px] text-[16px]/[26px] font-[600] flex items-center justify-center gap-2 mt-5">
              <span>
                <img src="/growth-icon.png" />
              </span>
              <span>Calculate Annual Loss</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Revenue;
