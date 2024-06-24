import React, { useState } from "react";
import { Container, Input, Button, VStack, Text, Box, List, ListItem, Heading } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const mockSearchResults = [
  { id: 1, title: "Result 1", description: "This is the description for result 1." },
  { id: 2, title: "Result 2", description: "This is the description for result 2." },
  { id: 3, title: "Result 3", description: "This is the description for result 3." },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);

  const handleSearch = () => {
    const results = mockSearchResults.filter((result) => result.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(results);
    setSelectedResult(null);
  };

  const handleResultClick = (result) => {
    setSelectedResult(result);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">
          Search App
        </Heading>
        <Box display="flex" width="100%">
          <Input placeholder="Enter search term" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} flex="1" />
          <Button onClick={handleSearch} leftIcon={<FaSearch />} ml={2}>
            Search
          </Button>
        </Box>
        {searchResults.length > 0 && (
          <List spacing={3} width="100%">
            {searchResults.map((result) => (
              <ListItem key={result.id} onClick={() => handleResultClick(result)} cursor="pointer" padding="10px" border="1px solid #ccc" borderRadius="md">
                <Text fontSize="lg">{result.title}</Text>
              </ListItem>
            ))}
          </List>
        )}
        {selectedResult && (
          <Box mt={4} p={4} border="1px solid #ccc" borderRadius="md" width="100%">
            <Heading as="h2" size="md">
              {selectedResult.title}
            </Heading>
            <Text mt={2}>{selectedResult.description}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
