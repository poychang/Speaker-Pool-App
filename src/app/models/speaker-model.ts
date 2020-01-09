class Speaker {
  headPicture: string;
  name: string;
  subtitle: string;
  domain: Domain[];
  introduction: string;
  experience: string[];
  remarks: string;
}

class Domain {
  name: string;
  isPrimary: boolean;
}
