interface Props {
  title: string;
  subject: string | number;
  grade: number | string;
  price: number | string;
  description: string;
}

const obj: Props = {
  title: "Example Title",
  subject: "Example Subject",
  grade: 10,
  price: 19.99,
  description: "Example Description",
};

const Card = () => {
  return <div>Card</div>;
};

export default Card;
