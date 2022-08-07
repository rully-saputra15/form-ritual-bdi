export interface GojukaiForm {
  name: string;
  district: string;
  gender: string;
  phoneNumber: string;
  placeOfBirth: string;
  dateOfBirth: string;
  status: string;
  address: string;
  job: string;
  citizenship: string;
  education: string;
  activeFrom: string;
  profilePicture: string;
  anotherMember: Member;
}

export interface Member {
  name: string;
  relationship: string;
  activeFrom: string;
  gojukaiStatus: string;
  gojukaiYear: string;
  okatagiStatus: string;
  okatagiYear: string;
}
