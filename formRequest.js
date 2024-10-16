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
    "aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTI5NjA2ODM3NzI2NTMwNzcxOS9rdUROTV9TRlJPZnZvaWl1RVhxLVJsWVdfV1JUaWRyZ1k0ZzBVUGRqTDdTU1dWY0dlRmtPREQtNmZqUTB6NTBsNWJsTg==";

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
