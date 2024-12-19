


// import React, { useState, useEffect } from "react";
// import { TextField, CircularProgress, Grid, Card, CardContent, Typography, CardMedia } from "@mui/material";
// import './Cocktails.css'

// function Cocktails() {
//   const [cocktails, setCocktails] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     // Corrected the URL to include "https://"
//     fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
//       .then((response) => response.json())
//       .then((data) => {
//         // Ensure you handle the possibility of no drinks being returned
//         setCocktails(data.drinks || []);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching cocktail data:", error);
//         setLoading(false);
//       });
//   }, []);

//   const filteredCocktails = cocktails.filter((drink) =>
//     drink.strDrink.toLowerCase().includes(search.toLowerCase())
//   );

//   if (loading) return <CircularProgress />;

//   return (
//     <div style={{ padding: 20 }}>
//       <TextField
//         label="Search Cocktails"
//         variant="outlined"
//         fullWidth
//         onChange={(e) => setSearch(e.target.value)}
//         sx={{ marginBottom: 2 }}
//       />
//       <Grid container spacing={2}>
//         {filteredCocktails.length === 0 && search ? (
//           <Typography variant="h6" color="error" align="center" sx={{ width: "100%" }}>
//             No cocktails found for "{search}"
//           </Typography>
//         ) : (
//           filteredCocktails.map((drink) => (
//             <Grid item xs={12} sm={6} md={4} key={drink.idDrink}>
//               <Card>
//                 {drink.strDrinkThumb && (
//                   <CardMedia
//                     component="img"
//                     height="200"
//                     image={drink.strDrinkThumb}
//                     alt={drink.strDrink}
//                   />
//                 )}
//                 <CardContent>
//                   <Typography variant="h6">{drink.strDrink}</Typography>
//                   <Typography variant="body2">{drink.strCategory}</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))
//         )}
//       </Grid>
//     </div>
//   );
// }

// export default Cocktails;





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
// } from "@mui/material";
// import "./Cocktails.css";

// function Cocktails() {
//   const [cocktails, setCocktails] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
//       .then((response) => response.json())
//       .then((data) => {
//         setCocktails(data.drinks || []);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching cocktail data:", error);
//         setLoading(false);
//       });
//   }, []);

//   const filteredCocktails = cocktails.filter((drink) =>
//     drink.strDrink.toLowerCase().includes(search.toLowerCase())
//   );

//   if (loading)
//     return (
//       <div
//         style={{
//           textAlign: "center",
//           marginTop: "20%",
//           fontSize: "20px",
//         }}
//       >
//         <CircularProgress color="secondary" />
//         <Typography variant="body1" sx={{ marginTop: 2, color: "#555" }}>
//           Loading cocktails...
//         </Typography>
//       </div>
//     );

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "linear-gradient(to bottom, #ffecd2, #fcb69f)",
//         padding: "20px",
//       }}
//     >
//       <Container
//         maxWidth="lg"
//         sx={{
//           backgroundColor: "#fff",
//           borderRadius: "20px",
//           padding: "40px",
//           boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
//           marginTop: "40px",
//         }}
//       >
//         {/* Search Bar */}
//         <div style={{ textAlign: "center", marginBottom: "40px" }}>
//           <Typography
//             variant="h4"
//             sx={{
//               fontWeight: "bold",
//               color: "#333",
//               textTransform: "uppercase",
//               letterSpacing: 1,
//             }}
//           >
//             Find Your Favorite Cocktail
//           </Typography>
//           <TextField
//             label="Search Cocktails"
//             variant="outlined"
//             fullWidth
//             onChange={(e) => setSearch(e.target.value)}
//             value={search}
//             sx={{
//               maxWidth: "600px",
//               marginTop: "20px",
//               marginBottom: "20px",
//               boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
//               backgroundColor: "#fff",
//               borderRadius: "10px",
//             }}
//           />
//         </div>

//         {/* Cocktail Cards */}
//         <Grid container spacing={4}>
//           {filteredCocktails.length === 0 && search ? (
//             <Typography
//               variant="h6"
//               color="error"
//               align="center"
//               sx={{ width: "100%", fontWeight: "bold", marginTop: 5 }}
//             >
//               No cocktails found for "{search}"
//             </Typography>
//           ) : (
//             filteredCocktails.map((drink) => (
//               <Grid item xs={12} sm={6} md={4} key={drink.idDrink}>
//                 <Card
//                   sx={{
//                     boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
//                     borderRadius: "15px",
//                     transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                     "&:hover": {
//                       transform: "scale(1.05)",
//                       boxShadow: "0px 15px 30px rgba(0,0,0,0.3)",
//                     },
//                   }}
//                 >
//                   {drink.strDrinkThumb && (
//                     <CardMedia
//                       component="img"
//                       height="200"
//                       image={drink.strDrinkThumb}
//                       alt={drink.strDrink}
//                       sx={{
//                         borderRadius: "15px 15px 0 0",
//                         objectFit: "cover",
//                         transition: "transform 0.3s ease",
//                         "&:hover": {
//                           transform: "scale(1.1)",
//                         },
//                       }}
//                     />
//                   )}
//                   <CardContent
//                     sx={{
//                       textAlign: "center",
//                       padding: 2,
//                       backgroundColor: "#fdfdfd",
//                     }}
//                   >
//                     <Typography
//                       variant="h6"
//                       sx={{
//                         fontWeight: "bold",
//                         color: "#444",
//                         fontSize: "1.1rem",
//                       }}
//                     >
//                       {drink.strDrink}
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       sx={{
//                         fontStyle: "italic",
//                         color: "#888",
//                         marginTop: 1,
//                       }}
//                     >
//                       {drink.strCategory}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))
//           )}
//         </Grid>
//       </Container>
//     </div>
//   );
// }

// export default Cocktails;


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
} from "@mui/material";
import './Cocktails.css';

function Cocktails() {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then((response) => response.json())
      .then((data) => {
        setCocktails(data.drinks || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching cocktail data:", error);
        setLoading(false);
      });
  }, []);

  const filteredCocktails = cocktails.filter((drink) =>
    drink.strDrink.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <CircularProgress sx={{ display: "block", margin: "auto", marginTop: 5 }} />;

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(to right, #fcb69f, #ffecd2)", padding: "40px" }}>
      <Container maxWidth="50vw" sx={{ padding: "40px", backgroundColor: "#fff", borderRadius: 4, boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
        {/* Search Bar */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "#333", textTransform: "uppercase", letterSpacing: 1 }}>
            Find Your Favorite Cocktail
          </Typography>
          <TextField
            label="Search Cocktails"
            variant="outlined"
            fullWidth
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            sx={{
              maxWidth: "600px",
              marginTop: "20px",
              marginBottom: "20px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          />
        </div>

        {/* Cocktail Cards */}
        <Grid container spacing={4}>
          {filteredCocktails.length === 0 && search ? (
            <Typography variant="h6" color="error" align="center" sx={{ width: "100%", fontWeight: "bold", marginTop: 5 }}>
              No cocktails found for "{search}"
            </Typography>
          ) : (
            filteredCocktails.map((drink) => (
              <Grid item xs={12} sm={6} md={4} key={drink.idDrink}>
                <Card sx={{
                  boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
                  borderRadius: "15px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 10px 25px rgba(0,0,0,0.3)",
                  },
                }}>
                  {drink.strDrinkThumb && (
                    <CardMedia
                      component="img"
                      height="200"
                      image={drink.strDrinkThumb}
                      alt={drink.strDrink}
                      sx={{
                        borderRadius: "15px 15px 0 0",
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.1)",
                        },
                      }}
                    />
                  )}
                  <CardContent sx={{
                    textAlign: "center",
                    padding: "16px",
                    backgroundColor: "#f9f9f9",
                  }}>
                    <Typography variant="h6" sx={{
                      fontWeight: "bold",
                      color: "#333",
                      fontSize: "1.1rem",
                    }}>
                      {drink.strDrink}
                    </Typography>
                    <Typography variant="body2" sx={{
                      fontStyle: "italic",
                      color: "#888",
                      marginTop: "8px",
                    }}>
                      {drink.strCategory}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default Cocktails;



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
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
// } from "@mui/material";
// import "./Cocktails.css"; // Custom CSS file for additional styling

// function Cocktails() {
//   const [cocktails, setCocktails] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [selectedCocktail, setSelectedCocktail] = useState(null); // State for modal

//   useEffect(() => {
//     fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
//       .then((response) => response.json())
//       .then((data) => {
//         setCocktails(data.drinks || []);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching cocktail data:", error);
//         setLoading(false);
//       });
//   }, []);

//   const filteredCocktails = cocktails.filter((drink) =>
//     drink.strDrink.toLowerCase().includes(search.toLowerCase())
//   );

//   if (loading)
//     return <CircularProgress size={50} sx={{ display: "block", margin: "auto", mt: 5 }} />;

//   return (
//     <Container maxWidth="lg" className="cocktails-container">
//       {/* Header Section */}
//       <div className="cocktails-header">
//         <Typography variant="h4" gutterBottom>
//           Explore Delicious Cocktails
//         </Typography>
//         <TextField
//           label="Search Cocktails"
//           variant="outlined"
//           fullWidth
//           onChange={(e) => setSearch(e.target.value)}
//           value={search}
//           className="search-input"
//         />
//       </div>

//       {/* Cocktail Cards */}
//       <Grid container spacing={4}>
//         {filteredCocktails.length === 0 && search ? (
//           <Typography
//             variant="h6"
//             color="error"
//             align="center"
//             sx={{ width: "100%", marginTop: 4 }}
//           >
//             No cocktails found for "{search}"
//           </Typography>
//         ) : (
//           filteredCocktails.map((drink) => (
//             <Grid item xs={12} sm={6} md={4} key={drink.idDrink}>
//               <Card
//                 className="cocktail-card"
//                 onClick={() => setSelectedCocktail(drink)} // Open modal on click
//               >
//                 {drink.strDrinkThumb && (
//                   <CardMedia
//                     component="img"
//                     height="250"
//                     image={drink.strDrinkThumb}
//                     alt={drink.strDrink}
//                     className="cocktail-image"
//                   />
//                 )}
//                 <CardContent className="card-content">
//                   <Typography variant="h6" className="cocktail-title">
//                     {drink.strDrink}
//                   </Typography>
//                   <Typography variant="body2" className="cocktail-category">
//                     {drink.strCategory}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))
//         )}
//       </Grid>

//       {/* Modal for Cocktail Details */}
//       {selectedCocktail && (
//         <Dialog
//           open={Boolean(selectedCocktail)}
//           onClose={() => setSelectedCocktail(null)}
//           maxWidth="sm"
//           fullWidth
//         >
//           <DialogTitle>{selectedCocktail.strDrink}</DialogTitle>
//           <DialogContent>
//             <CardMedia
//               component="img"
//               height="300"
//               image={selectedCocktail.strDrinkThumb}
//               alt={selectedCocktail.strDrink}
//               className="modal-image"
//             />
//             <Typography variant="body1" gutterBottom>
//               <strong>Category:</strong> {selectedCocktail.strCategory}
//             </Typography>
//             <Typography variant="body1" gutterBottom>
//               <strong>Glass:</strong> {selectedCocktail.strGlass}
//             </Typography>
//             <Typography variant="body1" gutterBottom>
//               <strong>Instructions:</strong> {selectedCocktail.strInstructions}
//             </Typography>
//             <Typography variant="body1" gutterBottom>
//               <strong>Ingredients:</strong>
//             </Typography>
//             <ul>
//               {Object.keys(selectedCocktail)
//                 .filter((key) => key.startsWith("strIngredient") && selectedCocktail[key])
//                 .map((key, index) => (
//                   <li key={index}>{selectedCocktail[key]}</li>
//                 ))}
//             </ul>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={() => setSelectedCocktail(null)} color="secondary">
//               Close
//             </Button>
//           </DialogActions>
//         </Dialog>
//       )}
//     </Container>
//   );
// }

// export default Cocktails;


