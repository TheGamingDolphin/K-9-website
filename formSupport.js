async function sendContact(ev) {
  ev.preventDefault();

  const senderSubject = document.getElementById("subjectInput").value;
  const senderDescription = document.getElementById("descriptionInput").value;

  const webhookBody = {
    embeds: [
      {
        title: "Issue Reported Submitted",
        fields: [
          { name: "Username", value: senderSubject },
          { name: "Description", value: senderDescription },
        ],
      },
    ],
  };

  // Define the string
  var encodedStringAtoB =
    "aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTI5NjA2ODM4MDgwOTM2MzQ1Ni9sUDdLODJzbTlQazlSRDF6NU9JTDdGMlVqOEFGVjNxZWlIRUpMMW5Vd0dvalpTYjBoOVdxNFEteElWclJCVUJoNTRueQ==";

  // Decode the String
  var decodedStringAtoB = atob(encodedStringAtoB);

  const webhookUrlSupport = decodedStringAtoB;

  const response = await fetch(webhookUrlSupport, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(webhookBody),
  });

  if (response.ok) {
    alert("I have received your message!");
  } else {
    alert("There was an error! Try again later!");
  }
}
