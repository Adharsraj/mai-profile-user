declare interface TestRunProps {
  type?: "title" | "greeting";
  title: string;
  subtext: string;
}

interface HeroProps {
  title: {
    line1?: string;
    line2?: string;
    line3?: string;
  };
  desc: string;
  image: {
    src: string;
    alt: string;
  };
  button?:{
    one:string;
    two:string;
  };
}
