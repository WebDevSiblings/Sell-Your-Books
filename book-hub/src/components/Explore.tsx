import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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

export default function Explore() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Title
        </Typography>
        <Typography variant="h5" component="div">
          {obj.title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Subject
        </Typography>
        <Typography variant="h5" component="div">
          {obj.subject}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Grade
        </Typography>
        <Typography variant="h5" component="div">
          {obj.grade}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Price
        </Typography>
        <Typography variant="h5" component="div">
          {obj.price}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Short Description
        </Typography>
        <Typography variant="h5" component="div">
          {obj.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
      </CardActions>
    </Card>
  );
}
