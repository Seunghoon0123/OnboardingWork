import { basicInfoType } from '@/types/variableTypes';

export const getSpecData = (basicInfo: basicInfoType) => {
  let specData;

  if (basicInfo.professionalGroup === 'doctor') {
    specData = {
      doctorType: basicInfo.doctorType,
      doctorMajor: basicInfo.doctorMajor,
      doctorPosition: basicInfo.doctorPosition,
    };
  }
  if (basicInfo.professionalGroup === 'student') {
    specData = {
      studentGrade: basicInfo.studentGrade,
    };
  }
  if (basicInfo.professionalGroup === 'nurse') {
    specData = {
      nurseType: basicInfo.nurseType,
      yearsOfService: basicInfo.yearsOfService,
    };
  }
  if (basicInfo.professionalGroup === 'etc') {
    specData = {
      otherJob: basicInfo.otherJob,
    };
  }

  return specData;
};
