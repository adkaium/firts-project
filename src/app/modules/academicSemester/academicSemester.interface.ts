export type TMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type TAcademicSemseterName = 'Autum' | 'Summar' | 'Fall';

export type TAcademicSemseterCode = '01' | '02' | '03';

export type TAcademicSemseter = {
  name: TAcademicSemseterName;
  code: TAcademicSemseterCode;
  year: string;
  startMonth: TMonths;
  endMonth: TMonths;
};

export type TAcademicSemesterNameCodeMapper = {
  [key: string]: string;
};