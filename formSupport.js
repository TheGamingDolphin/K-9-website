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

  const wht =
    "dVBBQjktek1zMlBZem4zcWpKRWVJbm1kVG1fQUNkcTNLQUQxWWtqWWlJVWhvS1dRdmUycHdtQjdHcG1GV19PY3hGTkw=";

  const whId = "MTMzMzk1MzQ2ODMwOTcwMDY5OQ==";

  const base = "aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3Mv";

  // Decode the Base64 webhook URL

  const URL = atob(base) + atob(whId) + "/" + atob(wht);

  const response = await fetch(URL, {
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
