import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const RecipeReviewCard = ({ recipe }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  // Parse values and remove units
  const parseValue = (value) => {
    return parseFloat(value.replace(/[^\d.-]/g, ''));
  };

  // Check if data is available
  const dataAvailable = recipe.fat && recipe.carbs && recipe.protein;

  const data = dataAvailable ? [
    { name: 'Fat', value: parseValue(recipe.fat) },
    { name: 'Carbs', value: parseValue(recipe.carbs) },
    { name: 'Protein', value: parseValue(recipe.protein) },
  ] : [];

  const COLORS = ['#FFBB28', '#FF8042', '#0088FE'];

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {recipe.label[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Typography
            variant="h6"
            sx={{
              height: '3.1em', // Fixed height to ensure consistency
              lineHeight: '1em', // Ensure text is centered
            }}
          >
            {recipe.label}
          </Typography>
        }
        subheader={
          <Typography
            variant="body2"
            sx={{
              height: 'em', // Fixed height to ensure consistency
              lineHeight: '1em', // Ensure text is centered
            }}
          >
            {`Cuisine Type: ${recipe.cuisineType.join(', ')}`}
          </Typography>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={recipe.image}
        alt={recipe.label}
      />
      
      <CardActions disableSpacing>
      <IconButton
          aria-label="add to favorites"
          onClick={handleFavoriteClick}
          sx={{ color: isFavorite ? red[500] : 'inherit' }}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <strong>Ingredients:</strong>
        </Typography>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <strong>Allergic Information:</strong> {recipe.allergies.join(', ')}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Cooking Time:</strong> {recipe.cookingTime} minutes
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Meal Type:</strong> {recipe.mealType}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Calories:</strong> {recipe.calories} kcal
          </Typography>
          {dataAvailable ? (
            <PieChart width={300} height={300}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          ) : (
            <Typography variant="body2" color="text.secondary">
              Loading chart data...
            </Typography>
          )}
          <Typography paragraph>
            {/* Include more detailed recipe method here if available */}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default RecipeReviewCard;
