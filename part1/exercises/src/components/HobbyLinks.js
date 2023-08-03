import React from 'react';

function HobbyLinks() {
  // Step 3: Define the variable hobbyLinks and assign URLs for your hobbies
  const hobbyLinks = [
"google.com",
    "URL_FOR_HOBBY_2_WEBSITE",
    // Add more URLs for other hobbies if you have them
  ];

  // Step 4: Return the links using JSX
  return (
    <div>
      <h2>Hobby Websites</h2>
      <ul>
        <li>
          <a target='_blank' href={hobbyLinks[0]}>Link to Hobby 1 Website</a>
        </li>
        <li>
          <a href={hobbyLinks[1]}>Link to Hobby 2 Website</a>
        </li>
        {/* Add more links for other hobbies if needed */}
      </ul>
    </div>
  );
}

export default HobbyLinks;
