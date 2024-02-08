import fetch from 'node-fetch';
let savedCookie = null; // Initialize outside to persist cookie value
async function testChatApi(userResponse) {
  const headers = {
    'Content-Type': 'application/json',
  };
  if (savedCookie) {
    headers.Cookie = savedCookie;
  }
  // First request
  const response = await fetch('/api/InputHandling', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      userResponse: userResponse
    }),
  });

  // Update the saved cookie with the new one from the response
  const newCookie = response.headers.get('Set-Cookie');
  if (newCookie) {
    savedCookie = newCookie;
  }

  const data = await response.json();
  console.log('Response from first API call:', data);
  console.log("Cookie: ", newCookie || "No new cookie set");


  // // Second request
  // const response2 = await fetch('http://localhost:3000/api/InputHandling', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Cookie': cookie,
  //   },
  //   body: JSON.stringify({
  //     userResponse: "i wasnt in school today" // Example of a second user response
  //   }),
  // });

  // const data2 = await response2.json();
  // console.log('Response from second API call:', data2);
}

async function runSequentialTests() {
  await testChatApi("Hey, my name is [user's name], I'm good."); // First user response
  await testChatApi("great"); // Second user response, after the first call completes
}

runSequentialTests();

