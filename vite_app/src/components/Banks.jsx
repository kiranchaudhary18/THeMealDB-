


// import React, { useState, useEffect } from "react";
// import { TextField, CircularProgress, Typography, Box, Divider, Paper } from "@mui/material";

// function Banks() {
//   const [banks, setBanks] = useState([]);  // Store banks data
//   const [loading, setLoading] = useState(true);  // Loading state
//   const [ifscSearch, setIfscSearch] = useState("");  // Search by IFSC code
//   const [ifscDetails, setIfscDetails] = useState(null); // Store details of IFSC search
//   const [error, setError] = useState(null);  // Error state for handling API errors

//   // Fetch bank data from API
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://bank-apis.justinclicks.com/API/V1/IFSC/MAHB0001012/");
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);  // Log data to verify the structure
//         setBanks([data]);  // Set the fetched data (wrapped in array)
//         setLoading(false);  // Set loading to false after data is loaded
//       } catch (error) {
//         console.error("Error fetching bank data:", error);
//         setError("Failed to fetch bank data. Please try again later.");
//         setLoading(false);  // Handle errors by stopping the loading state
//       }
//     };

//     fetchData();  // Call fetchData function
//   }, []);  // Empty dependency array ensures this runs once after the component mounts

//   // Handle search by IFSC code (case insensitive and trim spaces)
//   useEffect(() => {
//     if (ifscSearch.trim() !== "") {
//       const bankDetails = banks.find((bank) =>
//         bank.ifsc.toLowerCase().trim() === ifscSearch.toLowerCase().trim()
//       );
//       setIfscDetails(bankDetails);  // Store bank details if IFSC matches
//     } else {
//       setIfscDetails(null);  // Reset details if IFSC search is empty
//     }
//   }, [ifscSearch, banks]); // Re-run the search whenever `ifscSearch` or `banks` changes

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <div style={{ padding: "20px", backgroundColor: "#f4f6f9", minHeight: "100vh" }}>
//       <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: "bold", marginBottom: 2 }}>
//         Bank Information Lookup
//       </Typography>

//       {/* Error Handling for Fetch */}
//       {error && (
//         <Box sx={{ marginBottom: 2 }}>
//           <Typography variant="body1" color="error" align="center">
//             {error}
//           </Typography>
//         </Box>
//       )}

//       {/* Search by IFSC Code */}
//       <Box sx={{ marginBottom: 3, maxWidth: "600px", margin: "0 auto" }}>
//         <TextField
//           label="Enter IFSC Code"
//           variant="outlined"
//           fullWidth
//           onChange={(e) => setIfscSearch(e.target.value)}
//           value={ifscSearch}
//           sx={{ backgroundColor: "#fff", borderRadius: 2 }}
//         />
//       </Box>

//       {/* IFSC Code Search Results */}
//       {ifscSearch && ifscDetails ? (
//         <Box sx={{ padding: 3, backgroundColor: "#fff", borderRadius: 2, boxShadow: 3, maxWidth: "600px", margin: "0 auto" }}>
//           <Typography variant="h6" gutterBottom>
//             Bank Details for IFSC: {ifscSearch.toUpperCase()}
//           </Typography>
//           <Divider sx={{ marginY: 2 }} />
//           <Typography variant="body1">
//             <strong>Bank Name:</strong> {ifscDetails.bank_name}
//           </Typography>
//           <Typography variant="body1">
//             <strong>Branch:</strong> {ifscDetails.branch}
//           </Typography>
//           <Typography variant="body1">
//             <strong>Address:</strong> {ifscDetails.address}
//           </Typography>
//           <Typography variant="body1">
//             <strong>City:</strong> {ifscDetails.city}
//           </Typography>
//           <Typography variant="body1">
//             <strong>State:</strong> {ifscDetails.state}
//           </Typography>
//         </Box>
//       ) : (
//         ifscSearch && (
//           <Typography variant="body1" color="error" gutterBottom align="center" sx={{ marginTop: 3 }}>
//             No bank details found for IFSC: {ifscSearch.toUpperCase()}
//           </Typography>
//         )
//       )}
//     </div>
//   );
// }

// export default Banks;


// import React, { useState, useEffect } from "react";
// import { TextField, CircularProgress, Typography, Box, Divider } from "@mui/material";

// function Banks() {
//   const [banks, setBanks] = useState(null);  // Store bank data (single object or array)
//   const [loading, setLoading] = useState(true);  // Loading state
//   const [ifscSearch, setIfscSearch] = useState("");  // Search by IFSC code
//   const [ifscDetails, setIfscDetails] = useState(null); // Store details of IFSC search
//   const [error, setError] = useState(null);  // Error state for handling API errors

//   // Fetch bank data from API
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://bank-apis.justinclicks.com/API/V1/IFSC/MAHB0001012/");
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);  // Log data to verify the structure
//         setBanks(data);  // Set the fetched data (it could be a single object, not an array)
//         setLoading(false);  // Set loading to false after data is loaded
//       } catch (error) {
//         console.error("Error fetching bank data:", error);
//         setError("Failed to fetch bank data. Please try again later.");
//         setLoading(false);  // Handle errors by stopping the loading state
//       }
//     };

//     fetchData();  // Call fetchData function
//   }, []);  // Empty dependency array ensures this runs once after the component mounts

//   // Handle search by IFSC code (case insensitive and trim spaces)
//   useEffect(() => {
//     if (ifscSearch.trim() !== "") {
//       // Check if the bank data is available and match the IFSC code
//       if (banks && banks.ifsc.toLowerCase().trim() === ifscSearch.toLowerCase().trim()) {
//         setIfscDetails(banks);  // Set the bank details if IFSC matches
//       } else {
//         setIfscDetails(null);  // Reset details if no match found
//       }
//     } else {
//       setIfscDetails(null);  // Reset details if IFSC search is empty
//     }
//   }, [ifscSearch, banks]); // Re-run the search whenever `ifscSearch` or `banks` changes

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <div style={{ padding: "20px", backgroundColor: "#f4f6f9", minHeight: "100vh" }}>
//       <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: "bold", marginBottom: 2 }}>
//         Bank Information Lookup
//       </Typography>

//       {/* Error Handling for Fetch */}
//       {error && (
//         <Box sx={{ marginBottom: 2 }}>
//           <Typography variant="body1" color="error" align="center">
//             {error}
//           </Typography>
//         </Box>
//       )}

//       {/* Search by IFSC Code */}
//       <Box sx={{ marginBottom: 3, maxWidth: "600px", margin: "0 auto" }}>
//         <TextField
//           label="Enter IFSC Code"
//           variant="outlined"
//           fullWidth
//           onChange={(e) => setIfscSearch(e.target.value)}
//           value={ifscSearch}
//           sx={{ backgroundColor: "#fff", borderRadius: 2 }}
//         />
//       </Box>

//       {/* IFSC Code Search Results */}
//       {ifscSearch && ifscDetails ? (
//         <Box sx={{ padding: 3, backgroundColor: "#fff", borderRadius: 2, boxShadow: 3, maxWidth: "600px", margin: "0 auto" }}>
//           <Typography variant="h6" gutterBottom>
//             Bank Details for IFSC: {ifscSearch.toUpperCase()}
//           </Typography>
//           <Divider sx={{ marginY: 2 }} />
//           <Typography variant="body1">
//             <strong>Bank Name:</strong> {ifscDetails.bank_name}
//           </Typography>
//           <Typography variant="body1">
//             <strong>Branch:</strong> {ifscDetails.branch}
//           </Typography>
//           <Typography variant="body1">
//             <strong>Address:</strong> {ifscDetails.address}
//           </Typography>
//           <Typography variant="body1">
//             <strong>City:</strong> {ifscDetails.city}
//           </Typography>
//           <Typography variant="body1">
//             <strong>State:</strong> {ifscDetails.state}
//           </Typography>
//         </Box>
//       ) : (
//         ifscSearch && (
//           <Typography variant="body1" color="error" gutterBottom align="center" sx={{ marginTop: 3 }}>
//             No bank details found for IFSC: {ifscSearch.toUpperCase()}
//           </Typography>
//         )
//       )}
//     </div>
//   );
// }

// export default Banks;

// import React, { useState } from "react";
// // import "./Banks.css";

// const Banks = () => {
//   const [bankDetails, setBankDetails] = useState(null);
//   const [ifscCode, setIfscCode] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSearch = () => {
//     setLoading(true);
//     setError("");
//     if (!ifscCode.trim()) {
//       setError("Please enter a valid IFSC code.");
//       setLoading(false);
//       return;
//     }

//     fetch("https://bank-apis.justinclicks.com/API/V1/IFSC/${ifscCode.toUpperCase()}/")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Bank not found. Please check the IFSC code.");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setBankDetails(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   };

//   return (
//     <div className="banks-container">
//       <h1 className="banks-title">Search Bank by IFSC Code</h1>

//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Enter IFSC Code"
//           value={ifscCode}
//           onChange={(e) => setIfscCode(e.target.value)}
//           className="search-bar"
//         />
//         <button onClick={handleSearch} className="search-button">
//           Search
//         </button>
//       </div>

//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {bankDetails && !loading && (
//         <div className="bank-details">
//           <h2>{bankDetails.BANK}</h2>
//           <p><strong>Branch:</strong> {bankDetails.BRANCH}</p>
//           <p><strong>IFSC:</strong> {bankDetails.IFSC}</p>
//           <p><strong>City:</strong> {bankDetails.CITY}</p>
//           <p><strong>State:</strong> {bankDetails.STATE}</p>
//           <p><strong>District:</strong> {bankDetails.DISTRICT}</p>
//           <p><strong>Address:</strong> {bankDetails.ADDRESS}</p>
//           <p><strong>Contact:</strong> {bankDetails.CONTACT}</p>
//           <p><strong>IMPS:</strong> {bankDetails.IMPS ? "Available" : "Not Available"}</p>
//           <p><strong>RTGS:</strong> {bankDetails.RTGS ? "Available" : "Not Available"}</p>
//           <p><strong>NEFT:</strong> {bankDetails.NEFT ? "Available" : "Not Available"}</p>
//           <p><strong>UPI:</strong> {bankDetails.UPI ? "Available" : "Not Available"}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Banks;


// import React, { useEffect, useState } from 'react';
// import './bank.css'; // Import your CSS for styling

// const Banks = () => {
//   const [ifse, setIfse] = useState(null);
//   const [search, setSearch] = useState('');
//   const [query, setQuery] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (query) {
//       setLoading(true); // Set loading to true when query is triggered
//       setError(''); // Reset any previous error

//       fetch("https://bank-apis.justinclicks.com/API/V1/IFSC/${query}")
//         .then((response) => response.json())
//         .then((data) => {
//           if (data) {
//             setIfse(data);
//             setLoading(false);
//           } else {
//             setError('No data found for the provided IFSC code.');
//             setLoading(false);
//           }
//         })
//         .catch((error) => {
//           setError('Error fetching data');
//           setLoading(false);
//         });
//     }
//   }, [query]);

//   const formclick = (e) => {
//     e.preventDefault();
//     setQuery(search);
//   };

//   return (
//     <div className='mainbank'>
//       <form onSubmit={formclick} className="search-form">
//         <input
//           type="text"
//           className='banksearch'
//           value={search}
//           placeholder='Enter IFSC Code'
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <button type="submit" className="search-btn">Search</button>
//       </form>

//       {/* Displaying error or loading state */}
//       {loading && <div className="loading">Loading...</div>}
//       {error && <div className="error">{error}</div>}

//       {/* Displaying fetched data */}
//       <div className="info-container">
//         {ifse && !loading && !error && (
//           <div className="info">
//             <ul>
//               <li><strong>Bank Name:</strong> {ifse.bank_name || 'N/A'}</li>
//               <li><strong>Branch:</strong> {ifse.branch || 'N/A'}</li>
//               <li><strong>Address:</strong> {ifse.address || 'N/A'}</li>
//               <li><strong>City:</strong> {ifse.city || 'N/A'}</li>
//               <li><strong>State:</strong> {ifse.state || 'N/A'}</li>
//               <li><strong>IFSC Code:</strong> {ifse.ifsc || 'N/A'}</li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Banks;


// import React, { useEffect, useState } from 'react';
// import './bank.css'; // Import your CSS for styling

// const Banks = () => {
//   const [ifse, setIfse] = useState(null);
//   const [search, setSearch] = useState('');
//   const [query, setQuery] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (query) {
//       setLoading(true); // Set loading to true when query is triggered
//       setError(''); // Reset any previous error

//       // Correct API URL for querying IFSC details
//       fetch(`https://bank-apis.justinclicks.com/API/V1/IFSC/${query}`)
//         .then((response) => response.json())
//         .then((data) => {
//           if (data) {
//             setIfse(data); // Store the bank data
//             setLoading(false); // Stop loading after data is fetched
//           } else {
//             setError('No data found for the provided IFSC code.');
//             setLoading(false); // Stop loading if no data is found
//           }
//         })
//         .catch((error) => {
//           setError('Error fetching data');
//           setLoading(false); // Stop loading on error
//         });
//     }
//   }, [query]);

//   const formclick = (e) => {
//     e.preventDefault();
//     setQuery(search); // Trigger query when the form is submitted
//   };

//   return (
//     <div className='mainbank'>
//       <form onSubmit={formclick} className="search-form">
//         <input
//           type="text"
//           className='banksearch'
//           value={search}
//           placeholder='Enter IFSC Code'
//           onChange={(e) => setSearch(e.target.value)} // Handle input change
//         />
//         <button type="submit" className="search-btn">Search</button>
//       </form>

//       {/* Displaying error or loading state */}
//       {loading && <div className="loading">Loading...</div>}
//       {error && <div className="error">{error}</div>}

//       {/* Displaying fetched data */}
//       <div className="info-container">
//         {ifse && !loading && !error && (
//           <div className="info">
//             <ul>
//               <li><strong>Bank Name:</strong> {ifse.bank_name }</li>
//               <li><strong>Branch:</strong> {ifse.branch || 'N/A'}</li>
//               <li><strong>Address:</strong> {ifse.address || 'N/A'}</li>
//               <li><strong>City:</strong> {ifse.city || 'N/A'}</li>
//               <li><strong>State:</strong> {ifse.state || 'N/A'}</li>
//               <li><strong>IFSC Code:</strong> {ifse.ifsc || 'N/A'}</li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Banks;

// import React, { useEffect, useState } from 'react';
// import './bank.css'; // Import your CSS for styling

// const Banks = () => {
//   const [ifse, setIfse] = useState(null);
//   const [search, setSearch] = useState('');
//   const [query, setQuery] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       if (query) {
//         setLoading(true);
//         setError('');
//         setIfse(null); // Clear previous result

//         try {
//           const response = await fetch(`https://bank-apis.justinclicks.com/API/V1/IFSC/${query}`);
//           if (!response.ok) {
//             throw new Error('Failed to fetch data. Please check the IFSC code.');
//           }

//           const data = await response.json();
//           if (data && data.bank_name) {
//             setIfse(data);
//           } else {
//             throw new Error('No data found for the provided IFSC code.');
//           }
//         } catch (err) {
//           setError(err.message || 'Error fetching data');
//         } finally {
//           setLoading(false);
//         }
//       }
//     };

//     fetchData();
//   }, [query]);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (!search.trim()) {
//       setError('Please enter a valid IFSC code.');
//       return;
//     }
//     setQuery(search.trim()); // Trigger the fetch with sanitized input
//   };

//   return (
//     <div className='mainbank'>
//       <form onSubmit={handleSearch} className="search-form">
//         <input
//           type="text"
//           className='banksearch'
//           value={search}
//           placeholder='Enter IFSC Code'
//           onChange={(e) => setSearch(e.target.value)} // Update search input state
//         />
//         <button type="submit" className="search-btn">Search</button>
//       </form>

//       {/* Display error or loading state */}
//       {loading && <div className="loading">Loading...</div>}
//       {error && <div className="error">{error}</div>}

//       {/* Display fetched data */}
//       {ifse && !loading && !error && (
//         <div className="info-container">
//           <div className="info">
//             <ul>
//               <li><strong>Bank Name:</strong> {ifse.bank_name}</li>
//               <li><strong>Branch:</strong> {ifse.branch || 'N/A'}</li>
//               <li><strong>Address:</strong> {ifse.address || 'N/A'}</li>
//               <li><strong>City:</strong> {ifse.city || 'N/A'}</li>
//               <li><strong>State:</strong> {ifse.state || 'N/A'}</li>
//               <li><strong>IFSC Code:</strong> {ifse.ifsc || 'N/A'}</li>
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Banks;


// import React, { useEffect, useState } from 'react';
// import './bank.css'; // Include the CSS for styling

// const Banks = () => {
//   const [ifscData, setIfscData] = useState(null); // Store bank details
//   const [search, setSearch] = useState(''); // Input state
//   const [query, setQuery] = useState(''); // State for API query
//   const [loading, setLoading] = useState(false); // Loading state
//   const [error, setError] = useState(''); // Error state

//   // Fetch IFSC details when `query` changes
//   useEffect(() => {
//     const fetchIfscDetails = async () => {
//       if (!query) return; // Do nothing if query is empty

//       setLoading(true); // Start loading
//       setError(''); // Reset error state
//       setIfscData(null); // Clear previous data

//       try {
//         const response = await fetch(`https://bank-apis.justinclicks.com/API/V1/IFSC/${query}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch data. Please check the IFSC code.');
//         }

//         const data = await response.json();

//         if (data && data.bank_name) {
//           setIfscData(data); // Save the data in state
//         } else {
//           throw new Error('No data found for the provided IFSC code.');
//         }
//       } catch (err) {
//         setError(err.message || 'An unexpected error occurred.');
//       } finally {
//         setLoading(false); // Stop loading
//       }
//     };

//     fetchIfscDetails();
//   }, [query]);

//   // Handle form submission
//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (!search.trim()) {
//       setError('Please enter a valid IFSC code.');
//       return;
//     }
//     setQuery(search.trim().toUpperCase()); // Set the query in uppercase
//   };

//   return (
//     <div className="mainbank">
//       <h1 className="title">IFSC Code Finder</h1>
//       <form onSubmit={handleSearch} className="search-form">
//         <input
//           type="text"
//           className="banksearch"
//           value={search}
//           placeholder="Enter IFSC Code"
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <button type="submit" className="search-btn">Search</button>
//       </form>

//       {/* Display error, loading, or fetched data */}
//       {loading && <div className="loading">Loading...</div>}
//       {error && <div className="error">{error}</div>}

//       {ifscData && !loading && !error && (
//         <div className="info-container">
//           <h2>Bank Details</h2>
//           <ul>
//             <li><strong>Bank Name:</strong> {ifscData.bank_name}</li>
//             <li><strong>Branch:</strong> {ifscData.branch || 'N/A'}</li>
//             <li><strong>Address:</strong> {ifscData.address || 'N/A'}</li>
//             <li><strong>City:</strong> {ifscData.city || 'N/A'}</li>
//             <li><strong>State:</strong> {ifscData.state || 'N/A'}</li>
//             <li><strong>IFSC Code:</strong> {ifscData.ifsc || 'N/A'}</li>
//             <li><strong>MICR Code:</strong> {ifscData.micr || 'N/A'}</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Banks;

// import React, { useEffect, useState } from 'react';
// import './bank.css';

// const Banks = () => {
//   const [ifscData, setIfscData] = useState(null);
//   const [search, setSearch] = useState('');
//   const [query, setQuery] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchIfscDetails = async () => {
//       if (!query) return;

//       setLoading(true);
//       setError('');
//       setIfscData(null);

//       try {
//         const response = await fetch(`https://bank-apis.justinclicks.com/API/V1/IFSC/${setQuery}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch data. Please check the IFSC code.');
//         }

//         const data = await response.json();
//         console.log('API Response:', data); // Debugging
//         if (data && data.bank_name) {
//           setIfscData(data);
//         } else {
//           throw new Error('No data found for the provided IFSC code.');
//         }
//       } catch (err) {
//         setError(err.message || 'An unexpected error occurred.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchIfscDetails();
//   }, [query]);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;

//     if (!ifscRegex.test(search.trim().toUpperCase())) {
//       setError('Please enter a valid IFSC code.');
//       return;
//     }

//     setQuery(search.trim().toUpperCase());
//   };

//   return (
//     <div className="mainbank">
//       <h1 className="title">IFSC Code Finder</h1>
//       <form onSubmit={handleSearch} className="search-form">
//         <input
//           type="text"
//           className="banksearch"
//           value={search}
//           placeholder="Enter IFSC Code"
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <button type="submit" className="search-btn">Search</button>
//       </form>

//       {loading && <div className="loading">Loading...</div>}
//       {error && <div className="error">{error}</div>}

//       {ifscData && (
//         <div className="info-container">
//           <h2>Bank Details</h2>
//           <ul>
//             <li><strong>Bank Name:</strong> {ifscData.bank_name || 'Not Available'}</li>
//             <li><strong>Branch:</strong> {ifscData.branch || 'Not Available'}</li>
//             <li><strong>Address:</strong> {ifscData.address || 'Not Available'}</li>
//             <li><strong>City:</strong> {ifscData.city || 'Not Available'}</li>
//             <li><strong>State:</strong> {ifscData.state || 'Not Available'}</li>
//             <li><strong>IFSC Code:</strong> {ifscData.ifsc || 'Not Available'}</li>
//             <li><strong>MICR Code:</strong> {ifscData.micr || 'Not Available'}</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Banks;


import React, { useEffect, useState } from 'react';
import './BankAPIs.css';

const Banks = () => {
  const [ifse, setIfse] = useState(null); // Bank details (if fetched)
  const [search, setSearch] = useState(''); // IFSC search input
  const [query, setQuery] = useState(''); // Query state (for IFSC code search)
  const [states, setStates] = useState([]); // List of states
  const [districts, setDistricts] = useState([]); // List of districts for the selected state
  const [cities, setCities] = useState([]); // List of cities for the selected district
  const [centers, setCenters] = useState([]); // List of centers for the selected city
  const [branches, setBranches] = useState([]); // List of branches for the selected center
  const [selectedState, setSelectedState] = useState(''); // State selected from dropdown
  const [selectedDistrict, setSelectedDistrict] = useState(''); // District selected from dropdown
  const [selectedCity, setSelectedCity] = useState(''); // City selected from dropdown
  const [selectedCenter, setSelectedCenter] = useState(''); // Center selected from dropdown
  const [selectedBranch, setSelectedBranch] = useState(''); // Branch selected from dropdown
  const [branchDetails, setBranchDetails] = useState(null); // Store branch details
  const [errorMessage, setErrorMessage] = useState(''); // For error messages

  // Fetch states when the component mounts
  useEffect(() => {
    fetch('https://bank-apis.justinclicks.com/API/V1/STATE/')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setStates(data); // Assuming it's an array of states
        } else {
          setErrorMessage('Error: Could not load states');
        }
      })
      .catch((error) => {
        console.error('Error fetching states:', error);
        setErrorMessage('Error fetching states');
      });
  }, []);

  // Fetch district details when state is selected
  useEffect(() => {
    if (selectedState) {
      fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${selectedState}`)
        .then((response) => response.json())
        .then((data) => {
          setDistricts(data || []); // Set the districts or empty if no data
        })
        .catch((error) => {
          console.error('Error fetching districts:', error);
          setDistricts([]);
        });
    }
  }, [selectedState]);

  // Fetch cities details when district is selected
  useEffect(() => {
    if (selectedDistrict) {
      fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${selectedState}/${selectedDistrict}`)
        .then((response) => response.json())
        .then((data) => {
          setCities(data || []); // Set the cities or empty if no data
        })
        .catch((error) => {
          console.error('Error fetching cities:', error);
          setCities([]);
        });
    }
  }, [selectedDistrict, selectedState]);

  // Fetch centers details when city is selected
  useEffect(() => {
    if (selectedCity) {
      fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${selectedState}/${selectedDistrict}/${selectedCity}`)
        .then((response) => response.json())
        .then((data) => {
          setCenters(data || []); // Set the centers or empty if no data
        })
        .catch((error) => {
          console.error('Error fetching centers:', error);
          setCenters([]);
        });
    }
  }, [selectedCity, selectedDistrict, selectedState]);

  // Fetch branches details when center is selected
  useEffect(() => {
    if (selectedCenter) {
      fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${selectedState}/${selectedDistrict}/${selectedCity}/${selectedCenter}`)
        .then((response) => response.json())
        .then((data) => {
          setBranches(data || []); // Set the branches or empty if no data
        })
        .catch((error) => {
          console.error('Error fetching branches:', error);
          setBranches([]);
        });
    }
  }, [selectedCenter, selectedCity, selectedDistrict, selectedState]);

  // Fetch branch details when a branch is selected
  useEffect(() => {
    if (selectedBranch && selectedCenter && selectedCity && selectedDistrict && selectedState) {
      fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${selectedState}/${selectedDistrict}/${selectedCity}/${selectedCenter}/${selectedBranch}.json`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Branch Data:", data); // Log data to check if it's correct
          setBranchDetails(data); // Set branch details if returned
          setErrorMessage(''); // Clear any existing errors
        })
        .catch((error) => {
          console.error('Error fetching branch details:', error);
          setBranchDetails(null); // Reset branch details on error
          setErrorMessage('Error fetching branch details');
        });
    }
  }, [selectedBranch, selectedCenter, selectedCity, selectedDistrict, selectedState]); // Trigger when branch, center, city, district, or state changes

  // Fetch bank details based on IFSC code
  useEffect(() => {
    if (query) {
      fetch(`https://bank-apis.justinclicks.com/API/V1/IFSC/${query}`)
        .then((response) => response.json())
        .then((Data) => {
          setIfse(Data);
        })
        .catch((error) => {
          console.error('Error fetching IFSC data:', error);
          setIfse(null); // Reset if there's an error
        });
    }
  }, [query]);

  // Handle the search button click (for IFSC code)
  const handleSearchClick = (e) => {
    e.preventDefault(); // Prevents the default form behavior
    if (search.trim()) {
      setQuery(search); // Trigger the query fetch when the search button is clicked
    }
  };

  return (
    <div className='mainbank'>
      <div className="search-container">
        <h1>BankAPIs</h1>

        {/* State Dropdown */}
        <div className="state-dropdown">
          <label htmlFor="state">Select State:</label>
          <select
            id="state"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)} // Set selected state
          >
            <option value="">Select a State</option>
            {states.length > 0 ? (
              states.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))
            ) : (
              <option disabled>Loading States...</option>
            )}
          </select>
        </div>

        {/* District Dropdown */}
        {selectedState && (
          <div className="district-dropdown">
            <label htmlFor="district">Select District:</label>
            <select
              id="district"
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)} // Set selected district
            >
              <option value="">Select a District</option>
              {districts.length > 0 ? (
                districts.map((district, index) => (
                  <option key={index} value={district}>
                    {district}
                  </option>
                ))
              ) : (
                <option disabled>Loading Districts...</option>
              )}
            </select>
          </div>
        )}

        {/* City Dropdown */}
        {selectedDistrict && (
          <div className="city-dropdown">
            <label htmlFor="city">Select City:</label>
            <select
              id="city"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)} // Set selected city
            >
              <option value="">Select a City</option>
              {cities.length > 0 ? (
                cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))
              ) : (
                <option disabled>Loading Cities...</option>
              )}
            </select>
          </div>
        )}

        {/* Center Dropdown */}
        {selectedCity && (
          <div className="center-dropdown">
            <label htmlFor="center">Select Center:</label>
            <select
              id="center"
              value={selectedCenter}
              onChange={(e) => setSelectedCenter(e.target.value)} // Set selected center
            >
              <option value="">Select a Center</option>
              {centers.length > 0 ? (
                centers.map((center, index) => (
                  <option key={index} value={center}>
                    {center}
                  </option>
                ))
              ) : (
                <option disabled>Loading Centers...</option>
              )}
            </select>
          </div>
        )}

        {/* Branch Dropdown */}
        {selectedCenter && (
          <div className="branch-dropdown">
            <label htmlFor="branch">Select Branch:</label>
            <select
              id="branch"
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)} // Set selected branch
            >
              <option value="">Select a Branch</option>
              {branches.length > 0 ? (
                branches.map((branch, index) => (
                  <option key={index} value={branch}>
                    {branch}
                  </option>
                ))
              ) : (
                <option disabled>Loading Branches...</option>
              )}
            </select>
          </div>
        )}

        {/* IFSC Code Search */}
        <input
          type="text"
          className='searchbar'
          value={search}
          placeholder='Enter Your IFSC Code'
          onChange={(e) => setSearch(e.target.value)} // Update search input on change
        />
        <button className="searchbutton" onClick={handleSearchClick}>
          Search
        </button>
      </div>

      {/* Error Message */}
      {errorMessage && <div className="error">{errorMessage}</div>}

      {/* Display branch details */}
      <div className="div">
        {branchDetails ? (
          <div className="info">
            <h2>Branch Details</h2>
            <ul>
              {Object.entries(branchDetails).map(([key, value]) => (
                <div className="fetch" key={key}>
                  <li style={{ listStyleType: 'none' }}>
                    <strong>{key}:</strong> {value !== null ? value : 'N/A'}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        ) : (
          selectedBranch && <div className="loading">Loading Branch Details...</div>
        )}
      </div>

      {/* Display bank details or loading state for IFSC */}
      <div className="div">
        {ifse ? (
          <div className="info">
            <ul>
              {Object.entries(ifse).map(([key, value]) => (
                <div className="fetch" key={key}>
                  <li style={{ listStyleType: 'none' }}>
                    <strong>{key}:</strong> {value !== null ? value : 'N/A'}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        ) : (
          query && <div className="loading">Loading........</div>
        )}
      </div>
    </div>
  );
};

export default Banks;