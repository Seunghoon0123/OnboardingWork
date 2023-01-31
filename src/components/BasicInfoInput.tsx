import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

interface FormValues {
  jobgroup: string;
  belong1: string;
  belong2: string;
  belong3: string;
}

const options = [
  { value: 'default', label: '텍스트가 표시됩니다.' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const BasicInfoInput = () => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useForm<FormValues>();

  return (
    <form>
      <JobGroupConainer>
        <SelectContainer>
          <Label htmlFor="jobgroup">직군</Label>
          <Select
            id="jobgroup"
            {...register('jobgroup', { required: true })}
            onChange={(event) => {
              setValue('jobgroup', event.target.value);
            }}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </SelectContainer>
        <DropdownIcon>
          <Image className="DropdownImg" src="/DropdownIcon.svg" width={10.67} height={5.83} alt="v" />
        </DropdownIcon>
      </JobGroupConainer>

      <Belong1Container>
        <SelectContainer>
          <Label htmlFor="jobgroup">소속</Label>
          <Select
            id="jobgroup"
            {...register('jobgroup', { required: true })}
            onChange={(event) => {
              setValue('jobgroup', event.target.value);
            }}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </SelectContainer>
        <DropdownIcon>
          <Image className="DropdownImg" src="/DropdownIcon.svg" width={10.67} height={5.83} alt="v" />
        </DropdownIcon>
      </Belong1Container>

      <Belong2Container>
        <SelectContainer>
          <Label htmlFor="jobgroup">소속</Label>
          <Select
            id="jobgroup"
            {...register('jobgroup', { required: true })}
            onChange={(event) => {
              setValue('jobgroup', event.target.value);
            }}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </SelectContainer>
        <DropdownIcon>
          <Image className="DropdownImg" src="/DropdownIcon.svg" width={10.67} height={5.83} alt="v" />
        </DropdownIcon>
      </Belong2Container>

      <Belong3Container>
        <SelectContainer>
          <Label htmlFor="jobgroup">소속</Label>
          <Select
            id="jobgroup"
            {...register('jobgroup', { required: true })}
            onChange={(event) => {
              setValue('jobgroup', event.target.value);
            }}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </SelectContainer>
        <DropdownIcon>
          <Image className="DropdownImg" src="/DropdownIcon.svg" width={10.67} height={5.83} alt="v" />
        </DropdownIcon>
      </Belong3Container>

      {errors.jobgroup && errors.belong1 && errors.belong2 && errors.belong3 && <p>This field is required</p>}
    </form>
  );
};

export default BasicInfoInput;

const JobGroupConainer = styled.div`
  /* ${(props) => {
    return `
    @media screen and (max-width: ${props.theme.contentWidthSize.bigWindow}) {
      width: ${props.theme.contentWidthSize.bigWindow};
    }
    @media screen and (max-width: ${props.theme.contentWidthSize.middleWindow}) {
      width: ${props.theme.contentWidthSize.middleWindow};
    }
    @media screen and (max-width: ${props.theme.contentWidthSize.smallWindow}) {
      width: ${props.theme.contentWidthSize.smallWindow};
    }
    `;
  }} */
  /* InputWithLabel/L/IconTrailing */

  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;

  position: absolute;
  width: 512px;
  height: 52px;
  left: 464px;
  top: 364px;

  /* Gray/50 */

  background: #f6f8f9;
  /* Gray/50 */

  border: 1.5px solid #f6f8f9;
  border-radius: 12px;
`;

const Belong1Container = styled.div`
  /* InputWithLabel/L/IconTrailing */

  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;

  position: absolute;
  width: 512px;
  height: 52px;
  left: 464px;
  top: 432px;

  /* Gray/50 */

  background: #f6f8f9;
  /* Gray/50 */

  border: 1.5px solid #f6f8f9;
  border-radius: 12px;
`;

const Belong2Container = styled.div`
  /* InputWithLabel/L/IconTrailing */

  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;

  position: absolute;
  width: 512px;
  height: 52px;
  left: 464px;
  top: 500px;

  /* Gray/50 */

  background: #f6f8f9;
  /* Gray/50 */

  border: 1.5px solid #f6f8f9;
  border-radius: 12px;
`;

const Belong3Container = styled.div`
  /* InputWithLabel/L/IconTrailing */

  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;

  position: absolute;
  width: 512px;
  height: 52px;
  left: 464px;
  top: 568px;

  /* Gray/50 */

  background: #f6f8f9;
  /* Gray/50 */

  border: 1.5px solid #f6f8f9;
  border-radius: 12px;
`;

const SelectContainer = styled.div`
  /* Frame 2282 */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 456px;
  height: 36px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 1;
`;

const Select = styled.select`
  /* 텍스트가 표시됩니다 */
  background: transparent;
  appearance: none;
  border: 0 none;
  width: 456px;
  height: 20px;

  /* Label/M/500 */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */

  /* Gray/300 */

  color: #cbcbcb;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

const Label = styled.label`
  /* 라벨 */

  width: 456px;
  height: 16px;

  /* Label/XS/500 */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */

  /* Gray / 500 */

  color: #757575;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const DropdownIcon = styled.div`
  position: relative;
  /* Icon/Chevron.Down */

  width: 16px;
  height: 16px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;

  img {
    position: absolute;
    left: 16.67%;
    right: 16.67%;
    top: 34.38%;
    bottom: 29.17%;
    /* Gray / 500 */
  }
`;
