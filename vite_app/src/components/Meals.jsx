


// import React, { useState, useEffect } from "react";
// import { TextField, CircularProgress, Grid, Card, CardContent, Typography, CardMedia } from "@mui/material";

// function Meals() {
//   const [meals, setMeals] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
//       .then((response) => response.json())
//       .then((data) => {
//         setMeals(data.meals || []);
//         setLoading(false);
//       });
//   }, []);

//   const filteredMeals = meals.filter((meal) =>
//     meal.strMeal.toLowerCase().includes(search.toLowerCase())
//   );

//   if (loading) return <CircularProgress />;

//   return (
//     <div style={{ padding: 20 }}>
//       <TextField
//         label="Search Meals"
//         variant="outlined"
//         fullWidth
//         onChange={(e) => setSearch(e.target.value)}
//         sx={{ marginBottom: 2 }}
//       />
//       <Grid container spacing={2}>
//         {filteredMeals.map((meal) => (
//           <Grid item xs={12} sm={6} md={4} key={meal.idMeal}>
//             <Card>
         
//               <a href={meal.strYoutube} rel="noopener noreferrer" style={{ textDecoration: "none" }}>
//                 <CardMedia
//                   component="img"
//                   height="200"
//                   image={meal.strMealThumb}
//                   alt={meal.strMeal}
//                   style={{ cursor: "pointer" }}
//                 />
//               </a>
//               <CardContent>
//                 <Typography variant="h6">{meal.strMeal}</Typography>
//                 <Typography variant="body2">{meal.strArea}</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// }

// export default Meals;


// import React, { useState, useEffect } from "react";
// import { TextField, CircularProgress, Grid, Card, CardContent, Typography, CardMedia, Container } from "@mui/material";
// import './Meals.css';


// function Meals() {
//   const [meals, setMeals] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
//       .then((response) => response.json())
//       .then((data) => {
//         setMeals(data.meals || []);
//         setLoading(false);
//       });
//   }, []);

//   const filteredMeals = meals.filter((meal) =>
//     meal.strMeal.toLowerCase().includes(search.toLowerCase())
//   );

//   if (loading) return <CircularProgress size={50} sx={{ display: "block", margin: "auto" }} />;

//   return (
//     <Container maxWidth="lg" sx={{ paddingY: 4 }}>
//       <div style={{ textAlign: "center", marginBottom: "20px" }}>
//         <Typography variant="h4" gutterBottom>
//           Explore Delicious Meals
//         </Typography>
//         <TextField
//           label="Search Meals"
//           variant="outlined"
//           fullWidth
//           onChange={(e) => setSearch(e.target.value)}
//           value={search}
//           sx={{
//             marginBottom: 4,
//             maxWidth: "500px",
//             borderRadius: 2,
//             backgroundColor: "#f4f4f4",
//             margin: "0 auto",
//             padding: "10px 20px",
//             fontSize: "1rem",
//             boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
//           }}
//         />
//       </div>
//       <Grid container spacing={4}>
//         {filteredMeals.map((meal) => (
//           <Grid item xs={12} sm={6} md={4} key={meal.idMeal}>
//             <Card sx={{ boxShadow: 3, borderRadius: 3 }}>
//               <a href={meal.strYoutube} rel="noopener noreferrer" target="_blank" style={{ textDecoration: "none" }}>
//                 <CardMedia
//                   component="img"
//                   height="250"
//                   image={meal.strMealThumb}
//                   alt={meal.strMeal}
//                   sx={{
//                     borderTopLeftRadius: 3,
//                     borderTopRightRadius: 3,
//                     objectFit: "cover",
//                     cursor: "pointer",
//                     transition: "transform 0.3s ease",
//                     "&:hover": {
//                       transform: "scale(1.05)",
//                     },
//                   }}
//                 />
//               </a>
//               <CardContent sx={{ padding: 3 }}>
//                 <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//                   {meal.strMeal}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary" sx={{ fontStyle: "italic" }}>
//                   {meal.strArea}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }

// export default Meals;


// import React, { useState, useEffect } from "react";
// import { TextField, CircularProgress, Grid, Card, CardContent, Typography, CardMedia, Container } from "@mui/material";
// import './Meals.css'; // Ensure to link the external CSS if needed

// function Meals() {
//   const [meals, setMeals] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
//       .then((response) => response.json())
//       .then((data) => {
//         setMeals(data.meals || []);
//         setLoading(false);
//       });
//   }, []);

//   const filteredMeals = meals.filter((meal) =>
//     meal.strMeal.toLowerCase().includes(search.toLowerCase())
//   );

//   if (loading) return <CircularProgress size={50} sx={{ display: "block", margin: "auto", mt: 5 }} />;

//   return (
//     <Container
//       maxWidth="500px"
//       sx={{
//         paddingY: 5,
//         backgroundColor: "#f9f9f9",
//         borderRadius: 4,
//         boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       {/* Header Section */}
//       <div style={{ textAlign: "center", marginBottom: "40px" }}>
//         <Typography
//           variant="h4"
//           gutterBottom
//           sx={{
//             fontWeight: "bold",
//             color: "#333",
//             textTransform: "uppercase",
//             letterSpacing: 1,
//           }}
//         >
//           Explore Delicious Meals
//         </Typography>
//         <TextField
//           label="Search Meals"
//           variant="outlined"
//           fullWidth
//           onChange={(e) => setSearch(e.target.value)}
//           value={search}
//           sx={{
//             maxWidth: "600px",
//             borderRadius: 2,
//             backgroundColor: "#fff",
//             margin: "0 auto",
//             marginTop: 2,
//             boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
//           }}
//         />
//       </div>

//       {/* Meal Cards */}
//       <Grid container spacing={5}>
//         {filteredMeals.map((meal) => (
//           <Grid item xs={12} sm={6} md={4} lg={3} key={meal.idMeal}>
//             <Card
//               sx={{
//                 boxShadow: 3,
//                 borderRadius: 3,
//                 transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                 "&:hover": {
//                   transform: "translateY(-5px)",
//                   boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
//                 },
//               }}
//             >
//               <a href={meal.strYoutube} rel="noopener noreferrer" target="_blank" style={{ textDecoration: "none" }}>
//                 <CardMedia
//                   component="img"
//                   height="250"
//                   image={meal.strMealThumb}
//                   alt={meal.strMeal}
//                   sx={{
//                     borderTopLeftRadius: 3,
//                     borderTopRightRadius: 3,
//                     objectFit: "cover",
//                     cursor: "pointer",
//                     transition: "transform 0.3s ease",
//                     "&:hover": {
//                       transform: "scale(1.05)",
//                     },
//                   }}
//                 />
//               </a>
//               <CardContent
//                 sx={{
//                   textAlign: "center",
//                   padding: 3,
//                 }}
//               >
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     fontWeight: "bold",
//                     color: "#333",
//                   }}
//                 >
//                   {meal.strMeal}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   color="textSecondary"
//                   sx={{
//                     fontStyle: "italic",
//                     marginTop: 1,
//                   }}
//                 >
//                   {meal.strArea}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }

// export default Meals;


// import React, { useState, useEffect } from "react";
// import {
//   TextField,
//   CircularProgress,
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   CardMedia,
//   Container,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material";
// import "./Meals.css";

// function Meals() {
//   const [meals, setMeals] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [selectedMeal, setSelectedMeal] = useState(null); // For modal handling

//   useEffect(() => {
//     fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
//       .then((response) => response.json())
//       .then((data) => {
//         setMeals(data.meals || []);
//         setLoading(false);
//       });
//   }, []);

//   const filteredMeals = meals.filter((meal) =>
//     meal.strMeal.toLowerCase().includes(search.toLowerCase())
//   );

//   if (loading) return <CircularProgress size={50} sx={{ display: "block", margin: "auto", mt: 5 }} />;

//   return (
//     <Container
//       maxWidth="500px"
//       sx={{
//         paddingY: 5,
//         backgroundColor: "#f9f9f9",
//         borderRadius: 4,
//         boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       {/* Header Section */}
//       <div style={{ textAlign: "center", marginBottom: "40px" }}>
//         <Typography
//           variant="h4"
//           gutterBottom
//           sx={{
//             fontWeight: "bold",
//             color: "#333",
//             textTransform: "uppercase",
//             letterSpacing: 1,
//           }}
//         >
//           Explore Delicious Meals
//         </Typography>
//         <TextField
//           label="Search Meals"
//           variant="outlined"
//           fullWidth
//           onChange={(e) => setSearch(e.target.value)}
//           value={search}
//           sx={{
//             maxWidth: "600px",
//             borderRadius: 2,
//             backgroundColor: "#fff",
//             margin: "0 auto",
//             marginTop: 2,
//             boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
//           }}
//         />
//       </div>

//       {/* Meal Cards */}
//       <Grid container spacing={5}>
//         {filteredMeals.map((meal) => (
//           <Grid item xs={12} sm={6} md={4} lg={3} key={meal.idMeal}>
//             <Card
//               sx={{
//                 boxShadow: 3,
//                 borderRadius: 3,
//                 transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                 "&:hover": {
//                   transform: "translateY(-5px)",
//                   boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
//                 },
//               }}
//               onClick={() => setSelectedMeal(meal)} // Open modal with meal details
//             >
//               <CardMedia
//                 component="img"
//                 height="250"
//                 image={meal.strMealThumb}
//                 alt={meal.strMeal}
//                 sx={{
//                   borderTopLeftRadius: 3,
//                   borderTopRightRadius: 3,
//                   objectFit: "cover",
//                   cursor: "pointer",
//                   transition: "transform 0.3s ease",
//                   "&:hover": {
//                     transform: "scale(1.05)",
//                   },
//                 }}
//               />
//               <CardContent
//                 sx={{
//                   textAlign: "center",
//                   padding: 3,
//                 }}
//               >
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     fontWeight: "bold",
//                     color: "#333",
//                   }}
//                 >
//                   {meal.strMeal}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   color="textSecondary"
//                   sx={{
//                     fontStyle: "italic",
//                     marginTop: 1,
//                   }}
//                 >
//                   {meal.strArea}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Meal Details Modal */}
//       {selectedMeal && (
//         <Dialog
//           open={Boolean(selectedMeal)}
//           onClose={() => setSelectedMeal(null)}
//           maxWidth="sm"
//           fullWidth
//         >
//           <DialogTitle>{selectedMeal.strMeal}</DialogTitle>
//           <DialogContent>
//             <CardMedia
//               component="img"
//               height="300"
//               image={selectedMeal.strMealThumb}
//               alt={selectedMeal.strMeal}
//               sx={{ borderRadius: 2, marginBottom: 2 }}
//             />
//             <Typography variant="body1" gutterBottom>
//               <strong>Category:</strong> {selectedMeal.strCategory}
//             </Typography>
//             <Typography variant="body1" gutterBottom>
//               <strong>Area:</strong> {selectedMeal.strArea}
//             </Typography>
//             <Typography variant="body1" gutterBottom>
//               <strong>Instructions:</strong> {selectedMeal.strInstructions}
//             </Typography>
//           </DialogContent>
//           <DialogActions>
//             <Button
//               variant="contained"
//               color="primary"
//               href={selectedMeal.strYoutube}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Watch Recipe Video
//             </Button>
//             <Button onClick={() => setSelectedMeal(null)} color="secondary">
//               Close
//             </Button>
//           </DialogActions>
//         </Dialog>
//       )}
//     </Container>
//   );
// }

// export default Meals;


// import React, { useState, useEffect } from "react";
// import {
//   TextField,
//   CircularProgress,
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   CardMedia,
//   Container,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material";
// import "./Meals.css";

// function Meals() {
//   const [meals, setMeals] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [selectedMeal, setSelectedMeal] = useState(null); // For modal handling

//   useEffect(() => {
//     fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
//       .then((response) => response.json())
//       .then((data) => {
//         setMeals(data.meals || []);
//         setLoading(false);
//       });
//   }, []);

//   const filteredMeals = meals.filter((meal) =>
//     meal.strMeal.toLowerCase().includes(search.toLowerCase())
//   );

//   if (loading) return <CircularProgress size={50} sx={{ display: "block", margin: "auto", mt: 5 }} />;

//   return (
//     <Container
//       maxWidth="500px"
//       sx={{
//         paddingY: 5,
//         backgroundColor: "#f9f9f9",
//         borderRadius: 4,
//         boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       {/* Header Section */}
//       <div style={{ textAlign: "center", marginBottom: "40px" }}>
//         <Typography
//           variant="h4"
//           gutterBottom
//           sx={{
//             fontWeight: "bold",
//             color: "#333",
//             textTransform: "uppercase",
//             letterSpacing: 1,
//           }}
//         >
//           Explore Delicious Meals
//         </Typography>
//         <TextField
//           label="Search Meals"
//           variant="outlined"
//           fullWidth
//           onChange={(e) => setSearch(e.target.value)}
//           value={search}
//           sx={{
//             maxWidth: "600px",
//             borderRadius: 2,
//             backgroundColor: "#fff",
//             margin: "0 auto",
//             marginTop: 2,
//             boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
//           }}
//         />
//       </div>

//       {/* Meal Cards */}
//       <Grid container spacing={5}>
//         {filteredMeals.map((meal) => (
//           <Grid item xs={12} sm={6} md={4} lg={3} key={meal.idMeal}>
//             <Card
//               sx={{
//                 boxShadow: 3,
//                 borderRadius: 3,
//                 transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                 "&:hover": {
//                   transform: "translateY(-5px)",
//                   boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
//                 },
//               }}
//               onClick={() => setSelectedMeal(meal)} // Open modal with meal details
//             >
//               <CardMedia
//                 component="img"
//                 height="250"
//                 image={meal.strMealThumb}
//                 alt={meal.strMeal}
//                 sx={{
//                   borderTopLeftRadius: 3,
//                   borderTopRightRadius: 3,
//                   objectFit: "cover",
//                   cursor: "pointer",
//                   transition: "transform 0.3s ease",
//                   "&:hover": {
//                     transform: "scale(1.05)",
//                   },
//                 }}
//               />
//               <CardContent
//                 sx={{
//                   textAlign: "center",
//                   padding: 3,
//                 }}
//               >
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     fontWeight: "bold",
//                     color: "#333",
//                   }}
//                 >
//                   {meal.strMeal}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   color="textSecondary"
//                   sx={{
//                     fontStyle: "italic",
//                     marginTop: 1,
//                   }}
//                 >
//                   {meal.strArea}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Meal Details Modal */}
//       {selectedMeal && (
//         <Dialog
//           open={Boolean(selectedMeal)}
//           onClose={() => setSelectedMeal(null)}
//           maxWidth="sm"
//           fullWidth
//         >
//           <DialogTitle>{selectedMeal.strMeal}</DialogTitle>
//           <DialogContent>
//             <CardMedia
//               component="img"
//               height="300"
//               image={selectedMeal.strMealThumb}
//               alt={selectedMeal.strMeal}
//               sx={{ borderRadius: 2, marginBottom: 2 }}
//             />
//             <Typography variant="body1" gutterBottom>
//               <strong>Category:</strong> {selectedMeal.strCategory}
//             </Typography>
//             <Typography variant="body1" gutterBottom>
//               <strong>Area:</strong> {selectedMeal.strArea}
//             </Typography>
//             <Typography variant="body1" gutterBottom>
//               <strong>Instructions:</strong> {selectedMeal.strInstructions}
//             </Typography>
//           </DialogContent>
//           <DialogActions>
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={() => (window.location.href = selectedMeal.strYoutube)} // Open video in the same tab
//             >
//               Watch Recipe Video
//             </Button>
//             <Button onClick={() => setSelectedMeal(null)} color="secondary">
//               Close
//             </Button>
//           </DialogActions>
//         </Dialog>
//       )}
//     </Container>
//   );
// }

// export default Meals;


import React, { useState, useEffect } from "react";
import {
  TextField,
  CircularProgress,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Container,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import "./Meals.css";

function Meals() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((response) => response.json())
      .then((data) => {
        setMeals(data.meals || []);
        setLoading(false);
      });
  }, []);

  const filteredMeals = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(search.toLowerCase())
  );

  if (loading)
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <CircularProgress size={50} color="primary" />
        <Typography variant="body1" sx={{ marginTop: "20px", color: "#888" }}>
          Loading delicious meals for you...
        </Typography>
      </div>
    );

  return (
    <div
      style={{
        background: "linear-gradient(to right, #ffecd2, #fcb69f)",
        minHeight: "100vh",
        padding: "20px",
        width:'97.4%'
      }}
    >
      <Container
        maxWidth="20%"
        sx={{
          padding: 5,
          backgroundColor: "#fff",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          marginTop: 5,
        }}
      >
        {/* Header Section */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#333",
              textTransform: "uppercase",
              letterSpacing: 2,
            }}
          >
            Explore Delicious Meals
          </Typography>
          <TextField
            label="Search Meals"
            variant="outlined"
            fullWidth
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            sx={{
              maxWidth: "600px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              margin: "20px auto",
              boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
            }}
          />
        </div>

        {/* Meal Cards */}
        <Grid container spacing={5}>
          {filteredMeals.map((meal) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={meal.idMeal}>
              <Card
                sx={{
                  boxShadow: 5,
                  borderRadius: "15px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 15px 25px rgba(0, 0, 0, 0.3)",
                  },
                }}
                onClick={() => setSelectedMeal(meal)}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={meal.strMealThumb}
                  alt={meal.strMeal}
                  sx={{
                    borderRadius: "15px 15px 0 0",
                    objectFit: "cover",
                  }}
                />
                <CardContent
                  sx={{
                    textAlign: "center",
                    padding: 3,
                    backgroundColor: "#fdfdfd",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "#444",
                    }}
                  >
                    {meal.strMeal}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{
                      fontStyle: "italic",
                      marginTop: 1,
                    }}
                  >
                    {meal.strArea}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Meal Details Modal */}
        {selectedMeal && (
          <Dialog
            open={Boolean(selectedMeal)}
            onClose={() => setSelectedMeal(null)}
            maxWidth="sm"
            fullWidth
          >
            <DialogTitle
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                color: "#444",
                padding: "20px",
                borderBottom: "1px solid #eee",
              }}
            >
              {selectedMeal.strMeal}
            </DialogTitle>
            <DialogContent sx={{ padding: "20px" }}>
              <CardMedia
                component="img"
                height="300"
                image={selectedMeal.strMealThumb}
                alt={selectedMeal.strMeal}
                sx={{
                  borderRadius: "10px",
                  marginBottom: "20px",
                }}
              />
              <Typography variant="body1" gutterBottom>
                <strong>Category:</strong> {selectedMeal.strCategory}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Area:</strong> {selectedMeal.strArea}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Instructions:</strong> {selectedMeal.strInstructions}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button
                variant="contained"
                color="primary"
                onClick={() => (window.location.href = selectedMeal.strYoutube)}
                sx={{ marginRight: "auto" }}
              >
                Watch Recipe Video
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setSelectedMeal(null)}
              >
                Close
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </Container>
    </div>
  );
}

export default Meals;
