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

  ${(props) => props.theme.flexRowSet.center}
  padding: 8px 16px;

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

  ${(props) => props.theme.flexRowSet.center}
  margin-top: 16px;
  padding: 8px 16px;

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

  ${(props) => props.theme.flexRowSet.center}
  margin-top: 16px;
  padding: 8px 16px;

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

  ${(props) => props.theme.flexRowSet.center}
  margin-top: 16px;
  padding: 8px 16px;

  /* Gray/50 */

  background: #f6f8f9;
  /* Gray/50 */

  border: 1.5px solid #f6f8f9;
  border-radius: 12px;
`;

const SelectContainer = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Select = styled.select`
  /* 텍스트가 표시됩니다 */
  background: transparent;
  appearance: none;
  border: 0 none;
  width: 456px;

  ${(props) => props.theme.fontSet.pretendard}
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */

  /* Gray/300 */

  color: #cbcbcb;
`;

const Label = styled.label`
  /* 라벨 */

  width: 456px;

  font-family: 'Pretendard';
  font-style: 'normal';
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  color: #757575;
`;

const DropdownIcon = styled.div`
  ${(props) => props.theme.flexRowSet.center}
`;
