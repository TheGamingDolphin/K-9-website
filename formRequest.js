async function sendContact(ev) {
  ev.preventDefault();

  const senderSubject = document.getElementById("subjectInput").value;
  const senderDescription = document.getElementById("descriptionInput").value;

  const webhookBody = {
    embeds: [
      {
        title: "Feature Request Submitted",
        fields: [
          { name: "Username", value: senderSubject },
          { name: "Description", value: senderDescription },
        ],
      },
    ],
  };

  // Define the string
  var encodedStringAtoB =
    "aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTIwMjM4MzM4ODY5MTE0MDYyOC83dV9oc1BZY0NOUDEydURMMVRSZkZBd01UYmFMa1JQZ3U1Uy15MWZlRkw1RnJYM3k3U2tUUWowT0E0Y3ZjOGdVSVdXdA==";

  // Decode the String
  var decodedStringAtoB = atob(encodedStringAtoB);

  const webhookUrlRequest = decodedStringAtoB;

  const response = await fetch(webhookUrlRequest, {
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
