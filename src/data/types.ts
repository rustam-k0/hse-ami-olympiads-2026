export type BenefitType = "BVI" | "100_POINTS";
export type Exam = "информатика" | "математика" | "русский язык";

export type BenefitRule = {
  type: BenefitType;
  creditedSubject: Exam;
  eligibleStatus: "WINNER" | "WINNER_OR_PRIZEWINNER";
};

export type OlympiadStage = {
  id: string;
  type: "registration" | "qualification" | "final" | "results";
  title: string;
  startDate?: string;
  endDate?: string;
  format?: "online" | "offline" | "hybrid";
  location?: string;
  sourceUrl?: string;
};

export type DataSource = {
  title: string;
  url: string;
  checkedAt: string;
};

export type OlympiadProfile = {
  id: string;
  profile: string;
  olympiadSubject: string;
  confirmationExam: Exam;
  confirmationThreshold: number;
  benefits: BenefitRule[];
  resultClass: 11;
};

export type Olympiad = {
  id: string;
  name: string;
  profiles: OlympiadProfile[];
  officialUrl?: string;
  organizer?: string;
  scheduleAcademicYear?: "2026/27";
  scheduleStatus?: "PUBLISHED" | "NO_CONFIRMED_DATES";
  scheduleNote?: string;
  sources?: DataSource[];
  federalLevel?: 1 | 2 | 3;
  registrationStart?: string;
  registrationEnd?: string;
  stages?: OlympiadStage[];
};
