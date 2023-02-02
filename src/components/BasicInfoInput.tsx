import { basicInfoType } from '@/types/variableTypes';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const inputContainerBorder = `
  border: 1.5px solid #f6f8f9;
  border-radius: 12px;
`;

interface PropsTypes {
  setBasicInfo: React.Dispatch<React.SetStateAction<basicInfoType>>;
}

const professionalGroupSlections = [
  { value: '', label: '선택 해주세요.', disabled: true },
  { value: 'doctor', label: '의사' },
  { value: 'student', label: '의과 대학생' },
  { value: 'nurse', label: '간호사' },
  { value: 'etc', label: '기타' },
];

const proffesionType = {
  doctor: [
    { value: '', label: '선택 해주세요.', disabled: true },
    { value: 'general', label: '일반의' },
    { value: 'intern', label: '인턴' },
    { value: 'resident', label: '전공의' },
    { value: 'specialist', label: '전문의' },
  ],
  student: [
    { value: '', label: '선택 해주세요.', disabled: true },
    { value: 'mainCourse1', label: '본과 1학년' },
    { value: 'mainCourse2', label: '본과 2학년' },
    { value: 'mainCourse3', label: '본과 3학년' },
    { value: 'mainCourse4', label: '본과 4학년' },
    { value: 'meidcalScool1', label: '의전원 1학년' },
    { value: 'meidcalScool2', label: '의전원 2학년' },
    { value: 'meidcalScool3', label: '의전원 3학년' },
    { value: 'meidcalScool4', label: '의전원 4학년' },
  ],
  nurse: [
    { value: '', label: '선택 해주세요.', disabled: true },
    { value: 'clinicalNurse', label: '임상 간호사' },
    { value: 'studyNurse', label: '연구 간호사' },
  ],
};

const BasicInfoInput = ({ setBasicInfo }: PropsTypes) => {
  const {
    register,
    formState: { errors },
    setValue,
    getValues,
    watch,
  } = useForm<basicInfoType>();

  const [values, setValues] = useState(getValues());

  useEffect(() => {
    setBasicInfo(getValues());
  }, [values]);

  const setInfo = () => {
    setValues(getValues());
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <UserNameContainer>
        <SelectContainer>
          <Label htmlFor="userName">이름</Label>
          <Input
            placeholder="이름을 입력해주세요."
            {...register('userName', { required: true })}
            value={watch('userName') || ''}
            onChange={(e) => {
              setValue('userName', e.target.value);
              setInfo();
            }}
          />
        </SelectContainer>
      </UserNameContainer>

      <ProfessionalGroupConainer>
        <SelectContainer>
          <Label htmlFor="professionalGroup">직군</Label>
          <Select
            id="professionalGroup"
            {...register('professionalGroup', { required: true })}
            onChange={(e) => {
              setValue('doctorType', '');
              setValue('professionalGroup', e.target.value);
              setInfo();
            }}
            value={watch('professionalGroup')}
          >
            {professionalGroupSlections.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </SelectContainer>
        <DropdownIcon>
          <Image className="DropdownImg" src="/DropdownIcon.svg" width={10.67} height={5.83} alt="v" />
        </DropdownIcon>
      </ProfessionalGroupConainer>

      <BelongContainer>
        <SelectContainer>
          <Label htmlFor="belong">소속</Label>
          <Input
            placeholder="소속을 입력해주세요."
            {...register('belong', { required: true })}
            value={watch('belong') || ''}
            onChange={(e) => {
              setValue('belong', e.target.value);
              setInfo();
            }}
          />
        </SelectContainer>
      </BelongContainer>

      {getValues().professionalGroup === 'doctor' ? (
        <LicenseDivisionContainer>
          <SelectContainer>
            <Label htmlFor="doctorType">면허 분류</Label>
            <Select
              id="doctorType"
              {...register('doctorType', { required: true })}
              onChange={(e) => {
                setValue('doctorType', e.target.value);
                setInfo();
              }}
              value={watch('doctorType')}
            >
              {proffesionType.doctor.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </SelectContainer>
          <DropdownIcon>
            <Image className="DropdownImg" src="/DropdownIcon.svg" width={10.67} height={5.83} alt="v" />
          </DropdownIcon>
        </LicenseDivisionContainer>
      ) : (
        ''
      )}

      {getValues().doctorType === 'resident' || getValues().doctorType === 'specialist' ? (
        <BelongContainer>
          <SelectContainer>
            <Label htmlFor="doctorMajor">전공 진료과</Label>
            <Input
              placeholder="전공 진료과를 입력해주세요."
              {...register('doctorMajor', { required: true })}
              value={watch('doctorMajor') || ''}
              onChange={(e) => {
                setValue('doctorMajor', e.target.value);
                setInfo();
              }}
            />
          </SelectContainer>
        </BelongContainer>
      ) : (
        ''
      )}

      {getValues().doctorType === 'specialist' ? (
        <BelongContainer>
          <SelectContainer>
            <Label htmlFor="doctorPosition">직책</Label>
            <Input
              placeholder="직책을 입력해주세요."
              {...register('doctorPosition', { required: true })}
              value={watch('doctorPosition') || ''}
              onChange={(e) => {
                setValue('doctorPosition', e.target.value);
                setInfo();
              }}
            />
          </SelectContainer>
        </BelongContainer>
      ) : (
        ''
      )}

      {getValues().professionalGroup === 'student' ? (
        <LicenseDivisionContainer>
          <SelectContainer>
            <Label htmlFor="doctorType">학년</Label>
            <Select
              id="doctorType"
              {...register('doctorType', { required: true })}
              onChange={(e) => {
                setValue('doctorType', e.target.value);
                setInfo();
              }}
              value={watch('doctorType')}
            >
              {proffesionType.student.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </SelectContainer>
          <DropdownIcon>
            <Image className="DropdownImg" src="/DropdownIcon.svg" width={10.67} height={5.83} alt="v" />
          </DropdownIcon>
        </LicenseDivisionContainer>
      ) : (
        ''
      )}

      {getValues().professionalGroup === 'nurse' ? (
        <LicenseDivisionContainer>
          <SelectContainer>
            <Label htmlFor="nurseType">면허 분류</Label>
            <Select
              id="nurseType"
              {...register('nurseType', { required: true })}
              onChange={(e) => {
                setValue('nurseType', e.target.value);
                setInfo();
              }}
              value={watch('nurseType')}
            >
              {proffesionType.nurse.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </SelectContainer>
          <DropdownIcon>
            <Image className="DropdownImg" src="/DropdownIcon.svg" width={10.67} height={5.83} alt="v" />
          </DropdownIcon>
        </LicenseDivisionContainer>
      ) : (
        ''
      )}

      {getValues().professionalGroup === 'nurse' ? (
        <BelongContainer>
          <SelectContainer>
            <Label htmlFor="yearsOfService">근속 년차</Label>
            <Input
              placeholder="근속 년차를 입력해주세요."
              {...register('yearsOfService', { required: true })}
              value={watch('yearsOfService') || ''}
              onChange={(e) => {
                setValue('yearsOfService', e.target.value);
                setInfo();
              }}
            />
          </SelectContainer>
        </BelongContainer>
      ) : (
        ''
      )}

      {getValues().professionalGroup === 'etc' ? (
        <BelongContainer>
          <SelectContainer>
            <Label htmlFor="otherJob">직종</Label>
            <Input
              placeholder="직종을 입력해주세요."
              {...register('otherJob', { required: true })}
              value={watch('otherJob') || ''}
              onChange={(e) => {
                setValue('otherJob', e.target.value);
                setInfo();
              }}
            />
          </SelectContainer>
        </BelongContainer>
      ) : (
        ''
      )}

      {errors.professionalGroup && errors.belong && errors.doctorType && errors.userName && <p>This field is required</p>}
    </form>
  );
};

export default BasicInfoInput;

const ProfessionalGroupConainer = styled.div`
  /* Auto layout */
  ${(props) => props.theme.flexRowSet.spaceBetween}
  ${(props) =>
    `
      @media (min-width: ${props.theme.browserWidthSize.bigWindow}) {
        margin-top: 16px;
      }
      @media (min-width: ${props.theme.browserWidthSize.middleWindow}) and (max-width: ${props.theme.browserWidthSize.bigWindow}) {
        margin-top: 16px;
      }
      @media (max-width: ${props.theme.browserWidthSize.middleWindow}) {
        margin-top: 12px;
    }
    `}
  padding: 8px 16px;

  /* Gray/50 */

  background: #f6f8f9;
  /* Gray/50 */

  ${inputContainerBorder}
`;

const BelongContainer = styled.div`
  /* InputWithLabel/L/IconTrailing */

  /* Auto layout */

  ${(props) => props.theme.flexRowSet.spaceBetween}
  ${(props) =>
    `
      @media (min-width: ${props.theme.browserWidthSize.bigWindow}) {
        margin-top: 16px;
      }
      @media (min-width: ${props.theme.browserWidthSize.middleWindow}) and (max-width: ${props.theme.browserWidthSize.bigWindow}) {
        margin-top: 16px;
      }
      @media (max-width: ${props.theme.browserWidthSize.middleWindow}) {
        margin-top: 12px;
    }
    `}
  padding: 8px 16px;

  /* Gray/50 */

  background: #f6f8f9;
  /* Gray/50 */

  ${inputContainerBorder}
`;

const LicenseDivisionContainer = styled.div`
  /* InputWithLabel/L/IconTrailing */

  /* Auto layout */

  ${(props) => props.theme.flexRowSet.spaceBetween}
  ${(props) =>
    `
      @media (min-width: ${props.theme.browserWidthSize.bigWindow}) {
        margin-top: 16px;
      }
      @media (min-width: ${props.theme.browserWidthSize.middleWindow}) and (max-width: ${props.theme.browserWidthSize.bigWindow}) {
        margin-top: 16px;
      }
      @media (max-width: ${props.theme.browserWidthSize.middleWindow}) {
        margin-top: 12px;
    }
    `}
  padding: 8px 16px;

  /* Gray/50 */

  background: #f6f8f9;
  /* Gray/50 */

  ${inputContainerBorder}
`;

const UserNameContainer = styled.div`
  /* InputWithLabel/L/IconTrailing */

  /* Auto layout */

  ${(props) => props.theme.flexRowSet.spaceBetween}
  margin-top: 16px;
  padding: 8px 16px;

  /* Gray/50 */

  background: #f6f8f9;
  /* Gray/50 */

  ${inputContainerBorder}
`;

const SelectContainer = styled.div`
  /* Auto layout */
  ${(props) =>
    props.theme.flexCustomSet({
      flexDirection: 'column',
      justifyContent: '',
      alignItems: 'flex-start',
    })}
`;

const Input = styled.input`
  /* 텍스트가 표시됩니다 */
  background: transparent;
  appearance: none;
  border: 0 none;
  padding: 0;
  width: 200%;

  ${(props) => props.theme.fontSet.pretendard}
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */

  /* Gray/300 */
  ::placeholder {
    color: #cbcbcb;
  }
  &:focus {
    color: black;
    outline: none;
  }
`;

const Select = styled.select`
  /* 텍스트가 표시됩니다 */
  background: transparent;
  appearance: none;
  border: 0 none;

  ${(props) => props.theme.fontSet.pretendard}
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */

  /* Gray/300 */
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: red;
  }
`;

const Label = styled.label`
  /* 라벨 */

  font-family: 'Pretendard';
  font-style: 'normal';
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  color: #757575;
`;

const DropdownIcon = styled.div`
  ${(props) => props.theme.flexRowSet.center}
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
