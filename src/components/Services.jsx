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
  margin-bottom: 10px;
`;
const Heading5 = styled.h4`
  font-size: 21px;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0%;
`;

function Services() {
  return (
    <div className="text-black flex flex-col gap-10 pb-20 px-35">
      <HeadingSecondary className="text-primary text-center mx-auto w-[70%]">
        Medical Billing Services Designed for Maine Providers
      </HeadingSecondary>
      <div className="grid grid-cols-3 gap-5">
        <div className="flex flex-col gap-5 px-5 pt-8 pb-5 rounded-[8px] bg-[#FAF8FC]">
          <img src="/services-icon-1.svg" className="h-[82px] w-[82px]" />
          <Heading5 className="text-primary">
            End-to-End Billing Services
          </Heading5>
          <Para>
            We handle everything from claim submissions to reimbursements—fast,
            accurate, and hassle-free.
          </Para>
        </div>
        <div className="flex flex-col gap-5 px-5 pt-8 pb-5 rounded-[8px] bg-[#FAF8FC]">
          <img src="/services-icon-2.svg" className="h-[82px] w-[82px]" />
          <Heading5 className="text-primary">Denial Management</Heading5>
          <Para>
            Reduce denials by 40% with our predictive analytics and prevention
            strategies.
          </Para>
        </div>
        <div className="flex flex-col gap-5 px-5 pt-8 pb-5 rounded-[8px] bg-[#FAF8FC]">
          <img src="/services-icon-3.svg" className="h-[82px] w-[82px]" />
          <Heading5 className="text-primary">Patient Billing Support</Heading5>
          <Para>
            Clear, compassionate patient communications with multiple payment
            options.
          </Para>
        </div>
        <div className="flex flex-col gap-5 px-5 pt-8 pb-5 rounded-[8px] bg-[#FAF8FC]">
          <img src="/services-icon-4.svg" className="h-[82px] w-[82px]" />
          <Heading5 className="text-primary">Insurance Verification</Heading5>
          <Para>
            Real-time eligibility checks that prevent claim rejections before
            they happen.
          </Para>
        </div>
        <div className="flex flex-col gap-5 px-5 pt-8 pb-5 rounded-[8px] bg-[#FAF8FC]">
          <img src="/services-icon-5.svg" className="h-[82px] w-[82px]" />
          <Heading5 className="text-primary">Customized Reporting</Heading5>
          <Para>
            Detailed insights into your practice finances with actionable
            recommendations.
          </Para>
        </div>
        <div className="flex flex-col gap-5 px-5 pt-8 pb-5 rounded-[8px] bg-[#FAF8FC]">
          <img src="/services-icon-6.svg" className="h-[82px] w-[82px]" />
          <Heading5 className="text-primary">Regulatory Compliance</Heading5>
          <Para>
            Stay current with all Maine and federal healthcare billing rules and
            regulations.
          </Para>
        </div>
      </div>
    </div>
  );
}

export default Services;
