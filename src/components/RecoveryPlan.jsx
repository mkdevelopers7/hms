import styled from "styled-components";

const HeadingSecondary = styled.h2`
  font-weight: 600;
  font-size: 40px;
  letter-spacing: 0;
  line-height: 100%;
  color: #000000;
`;
const Para = styled.p`
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0;
  font-weight: 400;
  color: #000000;
  margin-bottom: 10px;
`;

function RecoveryPlan() {
  return (
    <div className="bg-[#FAF8FC] flex flex-col items-center gap-3 pt-12 pb-15">
      <HeadingSecondary className="pb-6">
        Ready to Recover Your Lost Revenue?
      </HeadingSecondary>
      <Para className="text-center">
        Click below for a free, custom revenue recovery plan tailored to your
        practice’s needs.
        <br /> Don’t let another dollar slip away.
      </Para>
      <button className="bg-linear-to-r from-[#5A2E7E] to-[#8963B0] shadow-button rounded-[8px] py-[19px] px-[100px] text-[16px]/[26px] font-[600] flex items-center justify-center gap-2">
        <span>
          <img src="/shield-icon.png" />
        </span>
        <span>Get Your Free Recovery Plan Now</span>
      </button>
    </div>
  );
}

export default RecoveryPlan;
