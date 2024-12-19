



import React, { useState, useEffect } from "react";
import { TextField, CircularProgress, Grid, Card, CardContent, Typography, CardMedia, Button, Box } from "@mui/material";

function Potter() {
  const [characters, setCharacters] = useState([]);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("characters"); // To toggle between characters and books

  // Fetch characters data
  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters") // Free replacement for the closed Potter API
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data || []);
        setLoading(false);
      });
  }, []);

  // Fetch books data (you can replace this with an actual books API or mock data)
  useEffect(() => {
    setBooks([
      { name: "Harry Potter and the Philosopher's Stone", description: "The first book in the Harry Potter series." },
      { name: "Harry Potter and the Chamber of Secrets", description: "The second book in the Harry Potter series." },
      { name: "Harry Potter and the Prisoner of Azkaban", description: "The third book in the Harry Potter series." },
      { name: "Harry Potter and the Goblet of Fire", description: "The fourth book in the Harry Potter series." },
      { name: "Harry Potter and the Order of the Phoenix", description: "The fifth book in the Harry Potter series." },
      { name: "Harry Potter and the Half-Blood Prince", description: "The sixth book in the Harry Potter series." },
      { name: "Harry Potter and the Deathly Hallows", description: "The final book in the Harry Potter series." }
    ]);
  }, []);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <CircularProgress />;

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom style={{ textAlign: "center" }}>
        Harry Potter Information
      </Typography>

      {/* Toggle Buttons for Characters or Books */}
      <Box display="flex" justifyContent="center" mb={2}>
        <Button
          variant={selectedCategory === "characters" ? "contained" : "outlined"}
          color="primary"
          onClick={() => setSelectedCategory("characters")}
          sx={{ marginRight: 2 }}
        >
          Characters
        </Button>
        <Button
          variant={selectedCategory === "books" ? "contained" : "outlined"}
          color="primary"
          onClick={() => setSelectedCategory("books")}
        >
          Books
        </Button>
      </Box>

      {/* Search Bar */}
      {selectedCategory === "characters" && (
        <TextField
          label="Search Characters"
          variant="outlined"
          fullWidth
          onChange={(e) => setSearch(e.target.value)}
          sx={{ marginBottom: 3 }}
        />
      )}

      {selectedCategory === "books" && (
        <TextField
          label="Search Books"
          variant="outlined"
          fullWidth
          onChange={(e) => setSearch(e.target.value)}
          sx={{ marginBottom: 3 }}
        />
      )}

      {/* Show either Characters or Books */}
      {selectedCategory === "characters" ? (
        <Grid container spacing={3}>
          {filteredCharacters.map((character) => (
            <Grid item xs={12} sm={6} md={4} key={character.name}>
              <Card style={{ height: "100%" }}>
                {/* Character Image */}
                <CardMedia
                  component="img"
                  height="300"
                  image={character.image || "https://via.placeholder.com/300"} // Default placeholder for missing images
                  alt={character.name}
                  style={{ objectFit: "cover" }}
                />
                {/* Character Information */}
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {character.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>House:</strong> {character.house || "Unknown"}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Actor:</strong> {character.actor || "Unknown"}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Gender:</strong> {character.gender || "Unknown"}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        // Display Books Information
        <Grid container spacing={3}>
          {filteredBooks.map((book, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card style={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {book.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Description:</strong> {book.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default Potter;

