import styled from "styled-components";

const Input = styled.input`
  /* border: 1px solid black; */
  /* width: 50%; */
  padding: 6px 12px;
  background-color: #e8e8e8;
  font-size: 16px;
  /* text-align: center; */
  /* margin-right: 20px; */
`;
function Form() {
  return (
    <form className="bg-white text-gray-700 py-5 px-8 grid grid-cols-2 gap-x-6 md:gap-x-8 gap-y-4 md:gap-y-4">
      <h3 className="text-primary text-[24px] font-semibold tracking-tight mb-2 col-span-2 text-center">
        Book An Appointment
      </h3>
      <Input type="text" placeholder="Choose Provider" />
      <Input type="text" placeholder="Full Name" />
      <Input type="text" placeholder="Phone Number" />
      <Input type="text" placeholder="Email" />
      <button className="bg-primary w-full col-span-2 text-white py-[6px] px-4">
        Get Started
      </button>
    </form>
  );
}

export default Form;
