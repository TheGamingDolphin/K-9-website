async function sendContact(ev) {
  ev.preventDefault();

  const senderSubject = document.getElementById("subjectInput").value;
  const senderDescription = document.getElementById("descriptionInput").value;

  const webhookBody = {
    embeds: [
      {
        title: "Contact Form Submitted",
        fields: [
          { name: "Username", value: senderSubject },
          { name: "Description", value: senderDescription },
        ],
      },
    ],
  };
  // Define the string
  var encodedStringAtoB =
    "aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTI5NjA2ODI1MjIwNzkzOTYzNi9fcGswcTc2YnlQOE4yN25jTnlfY2VZQjF3bTJVV3QyOEdPRWwtaU9pbHRzWnpFYWk1Q2NNNFNNT0N1ME5zSDdMcE9VTA==";

  // Decode the String
  var decodedStringAtoB = atob(encodedStringAtoB);

  const webhookUrlOwn = decodedStringAtoB;

  const response = await fetch(webhookUrlOwn, {
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
