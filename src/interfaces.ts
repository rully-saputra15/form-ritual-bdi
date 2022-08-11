export interface Person {
  name: string;
  placeOfBirth: string;
  dateOfBirth: string;
  citizenship: string;
  religion: string;
  job: string;
  address: string;
  district: string
}

export interface GojukaiForm extends Person{
  gender: string;
  phoneNumber: string;
  status: string;
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

export interface PemberkahanNikahForm {
  husband: Person,
  wife: Person,
  photoProfile: string;
  dateOfMarried: string;
  timeOfMarried: string;
  ceremonyPlace: string;
}
