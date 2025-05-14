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
const Heading4 = styled.h4`
  font-size: 22px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0%;
`;

function RevenueCycle() {
  return (
    <div className="flex gap-10 py-20 px-35">
      <div className="w-[50%] bg-[#FAF8FC] px-8 py-10 rounded-[8px]">
        <Heading4 className="text-primary mb-12 pl-2">
          Before vs After implementing HMS
        </Heading4>
        <div className="text-black flex gap-5 items-center justify-center">
          {/* Before */}
          <div className="flex-1 shadow-card max-w-[245px] flex flex-col px-5 pt-7 pb-10 bg-white rounded-[8px]">
            <Heading4 className="text-center mt-3 mb-6 text-primary">
              Before
            </Heading4>
            <p className="border-b-[2px] border-[rgba(0,0,0,0.07)] py-2 flex items-center justify-between">
              <span className="font-[400] text-[14px]/[26px] tracking-normal">
                Denied Claims
              </span>
              <span className="font-[600] text-[13px]/[26px] tracking-normal text-[#ef4136] pt-1">
                28%
              </span>
            </p>
            <p className="border-b-[2px] border-[rgba(0,0,0,0.07)] py-2 flex items-center justify-between">
              <span className="font-[400] text-[14px]/[26px] tracking-normal">
                Days in A/R
              </span>
              <span className="font-[600] text-[13px]/[26px] tracking-normal text-[#ef4136] pt-1">
                45 Days
              </span>
            </p>
            <p className="border-b-[2px] border-[rgba(0,0,0,0.07)] py-2 flex items-center justify-between">
              <span className="font-[400] text-[14px]/[26px] tracking-normal">
                Staff Overtime
              </span>
              <span className="font-[600] text-[13px]/[26px] tracking-normal text-[#ef4136] pt-1">
                12 hrs/week
              </span>
            </p>
            <p className="border-b-[2px] border-[rgba(0,0,0,0.07)] py-2 flex items-center justify-between">
              <span className="font-[400] text-[14px]/[26px] tracking-normal">
                Revenue Loss
              </span>
              <span className="font-[600] text-[13px]/[26px] tracking-normal text-[#ef4136] pt-1">
                $150K annually
              </span>
            </p>
          </div>

          {/* After */}
          <div className="flex-1 shadow-card max-w-[245px] flex flex-col px-5 pt-7 pb-10 bg-white rounded-[8px]">
            <Heading4 className="text-center mt-3 mb-6 text-primary">
              After
            </Heading4>
            <p className="border-b-[2px] border-[rgba(0,0,0,0.07)] py-2 flex items-center justify-between">
              <span className="font-[400] text-[14px]/[26px] tracking-normal">
                Denied Claims
              </span>
              <span className="font-[600] text-[13px]/[26px] tracking-normal text-[#54AC39] pt-1">
                2%
              </span>
            </p>
            <p className="border-b-[2px] border-[rgba(0,0,0,0.07)] py-2 flex items-center justify-between">
              <span className="font-[400] text-[14px]/[26px] tracking-normal">
                Days in A/R
              </span>
              <span className="font-[600] text-[13px]/[26px] tracking-normal text-[#54AC39] pt-1">
                25 Days
              </span>
            </p>
            <p className="border-b-[2px] border-[rgba(0,0,0,0.07)] py-2 flex items-center justify-between">
              <span className="font-[400] text-[14px]/[26px] tracking-normal">
                Staff Overtime
              </span>
              <span className="font-[600] text-[13px]/[26px] tracking-normal text-[#54AC39] pt-1">
                1 hrs/week
              </span>
            </p>
            <p className="border-b-[2px] border-[rgba(0,0,0,0.07)] py-2 flex items-center justify-between">
              <span className="font-[400] text-[14px]/[26px] tracking-normal">
                Revenue Loss
              </span>
              <span className="font-[600] text-[13px]/[26px] tracking-normal text-[#54AC39] pt-1">
                $185K annually
              </span>
            </p>
          </div>
        </div>
        <button className="bg-linear-to-r from-[#5A2E7E] to-[#8963B0] shadow-button rounded-[8px] py-[19px] w-[512px] mx-auto text-[16px]/[26px] font-[600] flex items-center mt-5 justify-center gap-2">
          <span>
            <img src="/growth-icon.png" />
          </span>
          <span>Total Impact: +$335K Per year</span>
        </button>
      </div>
      <div className="w-[50%]">
        <HeadingSecondary className="text-primary mb-8">
          It’s Time to Reset How Maine Hospitals Approach Revenue Cycle
          Management
        </HeadingSecondary>
        <Para>
          Hospitals in Maine are losing millions every year to outdated systems
          and inefficiencies. Denial rates climb, cash flow slows, and staff
          burnout increases—all because the traditional approach to revenue
          cycle management is broken. It’s time for something better.
        </Para>
        <Para>
          Our advanced RCM solution transforms chaos into clarity. Predictive
          analytics, automation, and expert oversight ensure fewer denials,
          faster reimbursements, and untapped revenue recovered seamlessly. It’s
          not just an upgrade—it’s a reset for your entire system.
        </Para>
        <Para>
          The future of your hospital depends on a revenue cycle that works for
          you, not against you. Stop reacting to problems and start driving
          predictable, sustainable growth. The reset starts now.
        </Para>
      </div>
    </div>
  );
}

export default RevenueCycle;
