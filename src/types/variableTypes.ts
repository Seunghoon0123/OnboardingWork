export interface ProfessionalSpecInputType {
  //# [의사] 면허 분류 - 일반의, 인턴, 전공의, 전문의
  doctorType?: string;

  //# [의사 - 전공의/전문의] 전공 진료과
  doctorMajor?: string;

  //# [의사 - 전문의] 직책(펠로우, 교수 등)
  doctorPosition?: string;

  //# [의과 대학생]?: 학년(본과 1-4학년, 의전원 2-4학년)
  studentGrade?: string;

  //# [간호사] 직무(임상 간호사/연구간호사(CRC)
  nurseType?: string;

  //# [간호사] 근속 년차
  yearsOfService?: string;

  //# [기타] 직종
  otherJob?: string;
}

export interface basicInfoType {
  userName: string;
  professionalGroup: string;
  belong: string;
  doctorType?: string;
  doctorMajor?: string;
  doctorPosition?: string;
  studentGrade?: string;
  nurseType?: string;
  yearsOfService?: string;
  otherJob?: string;
}
